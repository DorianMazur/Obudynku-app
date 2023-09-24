import create from "zustand";

export interface UseAuthStore {
  registrationEmail?: string;
  setRegistrationEmail(email: string | undefined): void;
  registerToken?: string;
  setRegisterToken(registerToken: string | undefined): void;
}

export const useAuthStore = create<UseAuthStore>(set => ({
  registrationEmail: undefined,
  registerToken: undefined,
  setRegistrationEmail: registrationEmail => {
    set(() => ({
      registrationEmail
    }));
  },
  setRegisterToken: registerToken => {
    set(() => ({
      registerToken
    }));
  }
}));
