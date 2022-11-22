import { OpenStreetMapAddress } from '@/types/Location';
import { OpinionIndexes } from '@/types/Opinion';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface UseOpinionStore {
  newOpinionLocation?: OpenStreetMapAddress | null;
  newOpinionSummary?: string;
  newOpinionRates?: Record<OpinionIndexes, { rate: number; desc: string }>;
  setNewOpinionLocation(user: OpenStreetMapAddress | null): void;
  setNewOpinionSummary(desc: string): void;
  setNewOpinionRate(
    key: OpinionIndexes,
    rate: number | undefined,
    desc: string | undefined
  ): void;
  clearNewOpinion(): void;
}

export const useOpinionStore = create(
  persist<UseOpinionStore>(
    (set, get) => ({
      newOpinionLocation: undefined,
      newOpinionRates: undefined,
      newOpinionSummary: undefined,
      setNewOpinionSummary: (newOpinionSummary) => {
        set(() => ({
          newOpinionSummary,
        }));
      },
      setNewOpinionRate: (key, rate, desc) => {
        set(() => {
          let newOpinionRates = get().newOpinionRates;
          if (!newOpinionRates) {
            /* @ts-ignore */
            newOpinionRates = {};
          }
          /* @ts-ignore */
          newOpinionRates[key] = { rate, desc };
          return { newOpinionRates };
        });
      },
      setNewOpinionLocation: (newOpinionLocation) => {
        set(() => ({
          newOpinionLocation,
        }));
      },
      clearNewOpinion: () => {
        set(() => ({
          newOpinionLocation: undefined,
          newOpinionRates: undefined,
          newOpinionSummary: undefined,
        }));
      },
    }),
    {
      name: 'opinion',
    }
  )
);

export default useOpinionStore;
