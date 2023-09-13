import { useAuthStore } from "@/store/useAuthStore";
import { useUserStore } from "@/store/useUserStore";
import { env } from "@/utils";
import axios from "axios";
import { useEffect, useState } from "react";

export interface LoginProps {
  email: string;
  password: string;
}

export const logIn = async (props: LoginProps) => {
  const response = await axios.post<{ token: string; email: string }>(
    `${env("NEXT_PUBLIC_API_URL")}/auth/login`,
    props
  );
  return response.data;
};

export interface VerifyEmailCodeProps {
  code: string;
  email: string;
}

export interface RequestEmailCodeProps {
  email: string;
}

export const requestEmailCode = async (props: RequestEmailCodeProps) => {
  const response = await axios.post<void>(
    `${env("NEXT_PUBLIC_API_URL")}/auth/register/email`,
    props
  );
  return props;
};

export interface VerifyEmailCodeProps {
  code: string;
  email: string;
}

export const verifyEmailCode = async (props: VerifyEmailCodeProps) => {
  const response = await axios.post<{ token: string }>(
    `${env("NEXT_PUBLIC_API_URL")}/auth/register/email/verify`,
    props
  );
  return response.data;
};

export interface SetPasswordProps {
  password: string;
}

export const setPassword =
  (token?: string) => async (props: SetPasswordProps) => {
    const response = await axios.post<{ token: string; email: string }>(
      `${env("NEXT_PUBLIC_API_URL")}/auth/register/finish`,
      props,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  };

export const useUser = () => {
  const { user, setUser } = useUserStore();
  const {
    registerToken,
    setRegisterToken,
    setRegistrationEmail,
    registrationEmail
  } = useAuthStore();

  const [hasHydrated, setHasHydrated] = useState<boolean>(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  return {
    setPassword: setPassword(registerToken),
    verifyEmailCode,
    requestEmailCode,
    logIn,
    setUser,
    user: hasHydrated ? user : undefined,
    registerToken,
    setRegisterToken,
    registrationEmail,
    setRegistrationEmail
  };
};
