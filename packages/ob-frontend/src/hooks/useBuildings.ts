import { useQuery } from "react-query";
import axios from "axios";
import { Building } from "@/types/Building";
import { env } from "@/utils";

interface GetBuildingProps {
  id: string;
}

export const getBuilding = async ({ id }: GetBuildingProps) => {
  const { data } = await axios.get<Building>(
    `${env("NEXT_PUBLIC_API_URL")}/building/${id}`
  );
  return data;
};

export function useBuilding(props: GetBuildingProps) {
  return useQuery("building", () => getBuilding(props));
}

interface GetBuildingsProps {
  city?: string;
}

export const getBuildings = async ({ city }: GetBuildingsProps) => {
  const { data } = await axios.post<Array<Building>>(
    `${env("NEXT_PUBLIC_API_URL")}/building/search`,
    { city }
  );
  return data;
};

export function useBuildings(props: GetBuildingsProps) {
  return useQuery("buildings", () => getBuildings(props));
}
