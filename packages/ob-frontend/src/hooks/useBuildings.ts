import { useQuery } from "react-query";
import axios from "axios";
import { env } from "@/utils";
import { GetBuilding, SearchBuildings } from "ob-backend";

interface GetBuildingProps {
  id: string;
}

export const getBuilding = async ({ id }: GetBuildingProps) => {
  const { data } = await axios.get<Awaited<GetBuilding>>(
    `${env("NEXT_PUBLIC_API_URL")}/building/${id}`
  );
  return data;
};

export function useBuilding(props: GetBuildingProps) {
  return useQuery("building", () => getBuilding(props));
}

export const searchBuildings = async (
  page: number,
  city?: string,
  address?: string
) => {
  const searchParams = new URLSearchParams({ page: page.toString() });
  city && searchParams.append("city", city);
  address && searchParams.append("address", address);
  const { data } = await axios.get<Awaited<SearchBuildings>>(
    `${env("NEXT_PUBLIC_API_URL")}/building/search?${searchParams.toString()}`
  );
  return data;
};

export function useSearchBuildings(
  page: number,
  city?: string,
  address?: string
) {
  return useQuery("buildings", () => searchBuildings(page, city, address));
}
