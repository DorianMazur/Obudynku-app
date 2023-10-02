import axios from "axios";
import { OpenStreetMapAddress } from "@/types/Location";

export const fetchAddress = async (address: string) => {
  const response = await axios.get<Array<OpenStreetMapAddress>>(
    `https://nominatim.openstreetmap.org/search?q=${address}&format=json&polygon=1&addressdetails=1`
  );
  return response.data.slice(0, 5);
};
