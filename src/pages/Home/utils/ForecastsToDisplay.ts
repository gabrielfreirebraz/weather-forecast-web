/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from "dayjs";

/**
 * It's a new module for sanitize data from ForecastService()
 *
 * @param forecasts
 * @returns
 */
export const ForecastsToDisplay = (forecasts: any): ParamsItemForecast[] => {
  const newForecats: ParamsItemForecast[] = forecasts.map(
    (obj: any): ParamsItemForecast => {
      console.log(obj);
      const dt = obj.startTime.split("T")[0];
      const day = dayjs(dt).get("date");
      const month = dayjs(dt).get("month");
      // const year = dayjs(dt).get('year');

      const displayDate = day + "-" + getShortMonth(month);

      return {
        id: obj.number,
        displayDate,
        temperature: obj.temperature,
        icon: obj.icon,
        description: obj.shortForecast,
        unit: obj.temperatureUnit,
        name: obj.name,
        isDaytime: obj.isDaytime,
      };
    }
  );

  return newForecats;
};

function getShortMonth(iMonth: number): string {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][iMonth];
}
