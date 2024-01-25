// import { AppProvider } from '../../contexts/defaultContext';
import { HomeContainer } from "./styles";

import imgLogo from '../../assets/images/logo-upstart13.png'


export const Home = () => {

  return (

    <HomeContainer>
      <div>

      <a href="https://react.dev" target="_blank">
        <img src={imgLogo} className="logo react" alt="React logo" />
      </a>
      </div>
      <h1>Upstart 13</h1>

      <div className="card">

      </div>
      <p className="read-the-docs">

      </p>

    </HomeContainer>
    

  );
}