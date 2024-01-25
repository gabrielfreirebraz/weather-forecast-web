// import { AppProvider } from '../../contexts/defaultContext';
import { Col, Row } from 'react-bootstrap';
import { HomeContainer } from "./styles";

import imgLogo from '../../assets/images/logo-upstart13.png'


export const Home = () => {

  return (

    <HomeContainer>
      <Row>
        <div id="header">
          <a href="https://upstart13.com" target="_blank">
            <img src={imgLogo} alt="Upstart 13 logo" className='header__logo' />
          </a>
          <h1>Weather forecast - Upstart 13</h1>
        </div>
        
      </Row>
      <Row>

        <Col md={{span: 8, offset: 2}}>
          <div id="main">

            
            
            <h1>Upstart 13</h1>

            <div className="card">

            </div>
            <p className="read-the-docs">

            </p>
          </div>
        </Col>
      </Row>
    </HomeContainer>
    

  );
}