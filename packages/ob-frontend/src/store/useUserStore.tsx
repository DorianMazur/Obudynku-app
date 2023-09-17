import create from "zustand";
import { persist } from "zustand/middleware";

interface User {
  token: string;
  email: string;
}

export interface UseUserStore {
  user?: User;
  setUser(user: User | undefined): void;
}

export const useUserStore = create(
  persist<UseUserStore>(
    (set, get) => ({
      user: undefined,
      setUser: user => {
        set(() => ({
          user
        }));
      }
    }),
    {
      name: "user"
    }
  )
);

export default useUserStore;
