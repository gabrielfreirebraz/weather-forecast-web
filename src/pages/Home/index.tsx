/* eslint-disable @typescript-eslint/no-explicit-any */
// import { AppProvider } from '../../contexts/defaultContext';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { HomeContainer } from './styles';
import { WiCloud } from 'react-icons/wi';
import { CardForecast } from './components/CardForecast';
import { useEffect, useState } from 'react';

import imgFooter from '/nws.png'
import imgLogo from '../../assets/images/logo-upstart13.png'
import { GeocodingService } from '../../services/GeocodingService';
import { ForecastService } from '../../services/ForecastService';
import { ForecastsToDisplay } from './utils/ForecastsToDisplay';


export const Home = () => {

  const [address, setAddress] = useState<string | null>(null);
  const [periods, setPeriods] = useState<ParamsItemForecast[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {

    if (loading) {

      (async () => {
              
        const {x , y} = await GeocodingService(address); // get latitude and longitude
        const forecasts = await ForecastService(y,x); // get forecasts like periods
        const newForecasts: ParamsItemForecast[] = ForecastsToDisplay(forecasts);

        setPeriods(newForecasts);   
        setLoading(false);
      
      })(); 
    }
  }, [loading, address]);


  const onSubmit = () => {

    // rules and validations for before to submmit
    if (!address?.trim()) return;

    setLoading(true);
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
                  <Button disabled={loading} variant="primary" onClick={() => onSubmit()}>{loading ? 'Please wait...' : 'Display forecast (°F)'}</Button>
                </Col>
              </Row>
            </div>
            
            <div className='content__resultForecast'>
                {periods && periods.map((obj,idx,arr) => {
                    const nextObj = arr[idx+1] ?? null;
                    const params = [obj, nextObj];
                    
                    //console.log(obj.id%2 > 0);
                    return (
                      !!obj.isDaytime &&
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