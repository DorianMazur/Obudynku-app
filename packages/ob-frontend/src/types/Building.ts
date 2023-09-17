import { Opinion } from "./Opinion";

export interface Building {
  id: string;
  address: string;
  city: string;
  lat: number;
  lon: number;
  opinions: Omit<Opinion, "building">[];
  hasImage?: boolean;
}
