/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const ForecastService = async (latitude: number, longitude: number) => {
  const coordinates = await axios.get(
    `${process.env.API_ENDPOINT}/api/coordinates`,
    {
      params: {
        latitude,
        longitude,
      },
      proxy: false,
    }
  );

  const urlForecast = coordinates.data.properties.forecast;
  const forecast: any = await axios.get(`${urlForecast}`, { proxy: false });

  return forecast.data.properties.periods;
};
