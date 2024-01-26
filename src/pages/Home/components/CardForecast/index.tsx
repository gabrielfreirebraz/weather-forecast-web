import { Card } from "react-bootstrap";
import { CardForecastContainer } from "./styles";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";


export const CardForecast = (props: ParamsItemForecast[]) => {

  const forecastDay = props[0];
  const forecastNight = props[1];

  
  return (
    // forecastDay && forecastNight && 
    <CardForecastContainer>

      <div className='card__forecast'>
        <div className='card__forecastTitle'>
          <h1>{forecastDay.name} {forecastDay.displayDate}</h1>
        </div>

        <div className='card__forecastItems'>
          {forecastDay && 
            <Card>
              <Card.Img variant="top" src={forecastDay.icon} />
              <Card.Body>
                <Card.Title><span>{forecastDay.temperature}°</span></Card.Title>
                <Card.Text>
                  {forecastDay.description}
                </Card.Text>
                <IoSunnySharp />
              </Card.Body>

            </Card>}

          {forecastNight && 
            <Card>
              <Card.Img variant="top" src={forecastNight?.icon} />
              <Card.Body>
                <Card.Title><span>{forecastNight?.temperature}°</span></Card.Title>
                <Card.Text>                  
                  {forecastNight?.description}
                </Card.Text>
                <IoMoonSharp />
              </Card.Body>

            </Card>}
        </div>
      </div>
    </CardForecastContainer>
  );
}