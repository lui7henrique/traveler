import { ReactNode } from "react";
import { AttemptsContextProvider } from "./attempts";
import { AuthContextProvider } from "./auth";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  return (
    <AttemptsContextProvider>
      <AuthContextProvider>{props.children}</AuthContextProvider>
    </AttemptsContextProvider>
  );
};
