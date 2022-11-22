import axios from 'axios';
import { OpenStreetMapAddress } from '@/types/Location';
import { CITIES } from '@/const/city';

interface GetLocationProps {
  lat: string | number;
  lon: string | number;
}

export const getLocation = async ({ lon, lat }: GetLocationProps) => {
  const { data } = await axios.get<OpenStreetMapAddress>(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
  );
  const cities = Object.keys(CITIES);
  if (!cities.includes(data.address.county)) return null;
  return data.address.house_number ? data : null;
};
