import { Card } from "react-bootstrap";
import { CardForecastContainer } from "./styles";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";


export const CardForecast = () => {

  return (
    <CardForecastContainer>

      <div className='card__forecast'>
        <div className='card__forecastTitle'>
          <h1>Thu 1st</h1>
        </div>

        <div className='card__forecastItems'>
          <Card>
            <Card.Img variant="top" src="https://api.weather.gov/icons/land/day/few?size=medium" />
            <Card.Body>
              <Card.Title><span>38°</span></Card.Title>
              <Card.Text>
                
                {/* <p>Sunny</p> */}
                <label>Sunny, with a high near 57.</label>
                
                <IoSunnySharp />
                
              </Card.Text>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src="https://api.weather.gov/icons/land/night/few?size=medium" />
            <Card.Body>
              <Card.Title><span>38°</span></Card.Title>
              <Card.Text>
                
                {/* <p>Sunny</p> */}
                <label>Sunny, with a high near 57.</label>
                
                <IoMoonSharp />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </CardForecastContainer>
  );
}