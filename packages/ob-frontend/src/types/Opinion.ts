import { Building } from "./Building";

export interface Opinion {
  id: string;
  flat_number: number;
  construction: number;
  localization: number;
  internet: number;
  safety: number;
  acustic: number;
  opinions: Record<OpinionIndexes, string>;
  status: "APPROVED" | "PENDING";
  building: Omit<Building, "opinions">;
  advice?: string;
}

export type OpinionIndexes =
  | "acustic"
  | "localization"
  | "safety"
  | "internet"
  | "construction";

export interface OpinionRequest {
  flat_number?: string;
  lat: number;
  lon: number;
  address: string;
  city: string;
  rates: Record<OpinionIndexes, number>;
  opinions: Record<OpinionIndexes, string>;
  advice?: string;
  year?: string;
}

export interface OpinionStatistic {
  city: string;
  acustic: number;
  localization: number;
  safety: number;
  internet: number;
  construction: number;
  count: number;
}
