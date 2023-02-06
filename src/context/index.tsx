import { useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { api } from "services/api";
import { AttemptsContextProvider } from "./attempts";
import { AuthContextProvider } from "./auth";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  const session = useSession();

  useEffect(() => {
    if ((session.data as any)?.token) {
      const { token } = session.data;

      api.defaults.headers["Authorization"] = `Bearer ${token}`;
    }
  }, [session]);

  return (
    <AttemptsContextProvider>
      <AuthContextProvider>{props.children}</AuthContextProvider>
    </AttemptsContextProvider>
  );
};
