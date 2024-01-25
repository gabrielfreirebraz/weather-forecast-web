// import { AppProvider } from '../../contexts/defaultContext';
import { Col, Form, Row } from 'react-bootstrap';
import { HomeContainer } from './styles';
import imgFooter from '/nws.png'
import { WiCloud } from 'react-icons/wi';

import imgLogo from '../../assets/images/logo-upstart13.png'


export const Home = () => {

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

        <Col md={{span: 10, offset: 1}}>
          <div id="content">
            
            <h1>
              <WiCloud />&nbsp;Forecast over next 7 days
            </h1>
            

            <div className="">
              {/* <Form.Label htmlFor="inputAddress">Address</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter the address - example: 456 Park Avenue, New York, NY 10022"
                id="inputAddress"
              />
            

            </div>
            
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="footer">
            <a href="https://www.weather.gov/documentation/services-web-api#/" target="_blank"><img src={imgFooter} /></a>
            <p>The National Weather Service (NWS) API access to critical forecasts, alerts, and observations, along with other weather data.</p>
          </div>
        </Col>
      </Row>
      </div>
    </HomeContainer>
    

  );
}