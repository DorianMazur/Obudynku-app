import { OpinionIndexes } from "@/types/Opinion";

export const RATES_KEYS: {
  value: OpinionIndexes;
  name: string;
  placeholder: string;
}[] = [
  {
    value: "localization",
    name: "Lokalizacja",
    placeholder:
      "Jak szybko można dojechać do centrum? Czy w pobliżu są tereny zielone? Jaki jest dostęp do infrastruktury?"
  },
  {
    value: "safety",
    name: "Bezpieczeństwo",
    placeholder: "Jak bezpiecznie jest w tej okolicy? Czy występują włamania?"
  },
  {
    value: "acustic",
    name: "Akustyka",
    placeholder:
      "Czy do mieszkania dochodzą dźwięki z zewnątrz oraz innych mieszkań?"
  },
  {
    value: "construction",
    name: "Budownictwo",
    placeholder:
      "Jakich materiałów użyto? Czy pojawiają się zacieki na ścianach lub grzyb? Czy dach przecieka? Czy są problemy z instalacją gazową/elektryczną?"
  }
];
