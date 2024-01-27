/* eslint-disable @typescript-eslint/no-explicit-any */
// import { AppProvider } from '../../contexts/defaultContext';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { HomeContainer } from './styles';
import { WiCloud } from 'react-icons/wi';
import { CardForecast } from './components/CardForecast';
import { useState } from 'react';

import imgFooter from '/nws.png'
import imgLogo from '../../assets/images/logo-upstart13.png'
import axios from 'axios';
import dayjs from 'dayjs';


export const Home = () => {

  const [address, setAddress] = useState<string | null>(null);
  const [periods, setPeriods] = useState<ParamsItemForecast[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);



  const onSearch = async () => {
    if (!address?.trim()) return;

    setLoading(true);

    const res: any = await axios.get(`${process.env.API_ENDPOINT}/api/geocoding?address=${address}`, { proxy: false })
    const {x , y} = res.data.result.addressMatches[0].coordinates;
    console.log(x);    
    console.log(y);    

    const resEndpoint: any = await axios.get(`${process.env.API_ENDPOINT}/api/coordinates?latitude=${y}&longitude=${x}`, { proxy: false })
    
    const urlForecast = resEndpoint.data.properties.forecast;
    console.log(resEndpoint.data.properties.forecast)

    const resCoordinates: any = await axios.get(`${urlForecast}`, { proxy: false })
    const currPeriods = resCoordinates.data.properties.periods; 


    const arrs: ParamsItemForecast[] = [];

    const arrMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 0; i < currPeriods.length; i++) {
  
      const obj = currPeriods[i];
      console.log(obj)
      const dt = (obj.startTime.split('T')[0]);
      const day = dayjs(dt).get('date');
      const month = dayjs(dt).get('month');
      // const year = dayjs(dt).get('year');

      const displayDate = day+'-'+arrMonths[month];

      const curr: ParamsItemForecast = {
        id: obj.number,
        displayDate,
        temperature: obj.temperature,
        icon: obj.icon,
        description: obj.shortForecast,
        unit: obj.temperatureUnit,
        name: obj.name,
        isDaytime: obj.isDaytime
      }

      arrs.push(curr)
    }
    // currPeriods[0].temperature;
    // currPeriods[0].temperatureUnit;
    // currPeriods[0].startTime;
    // currPeriods[0].shortForecast;
    // currPeriods[0].isDaytime;
    // currPeriods[0].icon;
    // currPeriods[0].name; // ex: tonight
    // currPeriods[0].detailedForecast; // optional

    setPeriods(arrs);
    setLoading(false);
  }

  return (

    <HomeContainer>
      <div className='animate__animated animate__fadeIn'>
      <Row>
        <div id="header">
          <a href="https://upstart13.com" target="_blank">
            <img src={imgLogo} alt="Upstart 13 logo" className='header__logo' />
          </a>
          <h1>Weather forecast<br/><span>Upstart 13</span></h1>
        </div>
        
      </Row>
      <Row>

        <Col xs={{span: 10, offset: 1}}>
          <div id="content">
            
            <h1>
              <WiCloud />Forecast over next 7 days
            </h1>
            

              {/* <Form.Label htmlFor="inputAddress">Address</Form.Label> */}
            <div className='content__formAddress'>
              <Row>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    placeholder="Enter the address - example: 456 Park Avenue, New York, NY 10022"
                    id="inputAddress"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Col>
                <Col md={3}>
                  <Button variant="primary" onClick={() => onSearch()}>{loading ? 'Please wait...' : 'Display forecast (°F)'}</Button>
                </Col>
              </Row>
            </div>
            
            <div className='content__resultForecast'>
                {periods && periods.map((obj,idx,arr) => {
                    const nextObj = arr[idx+1] ?? null;
                    const params = [obj, nextObj];

                    console.log(obj.id%2 > 0);
                    return (
                      obj.id%2 > 0 && !!obj.isDaytime &&
                        <CardForecast {...params} key={obj.id} />
                    );
                })}
            </div>
          </div>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="footer">
            <a href="https://www.weather.gov/documentation/services-web-api#/" target="_blank"><img src={imgFooter} /></a>
            {/* <p>The National Weather Service (NWS) API access to critical forecasts, alerts, and observations, along with other weather data.</p> */}
          </div>
        </Col>
      </Row>
      </div>
    </HomeContainer>
    

  );
}