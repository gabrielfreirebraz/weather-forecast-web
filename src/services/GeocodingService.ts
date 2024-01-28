/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const GeocodingService = async (address: string | null) => {
  const geocoding: any = await axios.get(
    `${process.env.API_ENDPOINT}/api/geocoding`,
    {
      params: { address },
      proxy: false,
    }
  );
  return geocoding.data.result.addressMatches[0].coordinates;
};
