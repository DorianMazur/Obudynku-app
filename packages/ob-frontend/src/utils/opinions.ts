import { OpinionIndexes } from "@/types/Opinion";
import { OpinionEntity } from "ob-backend";

export const avgRateForOpinions = (opinions: Array<OpinionEntity>) => {
  const radarChart: Record<OpinionIndexes, number | string> = opinions.reduce(
    (prev, curr) => {
      prev.acustic += curr.acustic;
      prev.construction += curr.construction;
      prev.localization += curr.localization;
      prev.safety += curr.safety;
      return prev;
    },
    {
      acustic: 0,
      localization: 0,
      safety: 0,
      construction: 0
    }
  );
  Object.keys(radarChart).forEach(key => {
    const _key = key as OpinionIndexes;
    radarChart[_key] = ((radarChart[_key] as number) / opinions.length).toFixed(
      1
    );
  });
  return radarChart;
};

export const avgRateForOpinion = (
  rates: Record<OpinionIndexes, number | string>
) => {
  const pickedKeys = {
    acustic: rates.acustic,
    localization: rates.localization,
    safety: rates.safety,
    construction: rates.construction
  };
  return (
    Object.keys(pickedKeys).reduce((prev, key) => {
      const _key = key as keyof typeof rates;
      return Number(rates[_key]) + Number(prev);
    }, 0) / 4
  ).toFixed(1);
};

export const colorByAvg = (avg: number | string) => {
  if (Number(avg) >= 8) {
    return "#00D066";
  }
  if (Number(avg) >= 4.5) {
    return "#FFBD00";
  }
  return "#FF4E00";
};

export const labelByAvg = (avg: number | string) => {
  if (Number(avg) >= 8) {
    return "Świetny";
  }
  if (Number(avg) >= 4.5) {
    return "Dobry";
  }
  return "Przeciętny";
};
