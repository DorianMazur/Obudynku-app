import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect } from "react";

export type AuthenticatedRouteProps = {
  redirectTo: string;
  children: React.ReactElement;
};

export const AuthenticatedRoute = ({
  children,
  redirectTo
}: AuthenticatedRouteProps) => {
  const { user, hasHydrated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (hasHydrated && !user) {
      router.replace("/signin?redirect=" + redirectTo);
    }
  }, [user, hasHydrated]);

  return children;
};
