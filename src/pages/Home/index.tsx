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


export const Home = () => {

  const [address, setAddress] = useState<string | null>(null);
  const [periods, setPeriods] = useState(null);


  const onSearch = async () => {

    const res: any = await axios.get(`${process.env.API_ENDPOINT}/api/geocoding?address=${address}`, { proxy: false })
    const {x , y} = res.data.result.addressMatches[0].coordinates;
    console.log(x);    
    console.log(y);    

    const resEndpoint: any = await axios.get(`${process.env.API_ENDPOINT}/api/coordinates?latitude=${y}&longitude=${x}`, { proxy: false })
    
    const urlForecast = resEndpoint.data.properties.forecast;
    console.log(resEndpoint.data.properties.forecast)

    const resCoordinates: any = await axios.get(`${urlForecast}`, { proxy: false })
    const currPeriods = resCoordinates.data.properties.periods; 
    console.log(currPeriods);

    setPeriods(periods);
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
                  <Button variant="primary" onClick={() => onSearch()}>Display forecast</Button>
                </Col>
              </Row>
            </div>
            
            <div className='content__resultForecast'>
              <Row>
                <Col md={6} lg={9} xl={10}>
                  <Row>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                    <Col md={3} lg={4} xl={2}>
                      <CardForecast/>
                    </Col>
                  </Row>
                </Col>

                {/* Grid hack for 7 days */}
                <Col md={6} lg={3} xl={2}>
                  <CardForecast/>
                </Col>
              </Row>
 
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