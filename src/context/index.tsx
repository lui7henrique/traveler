import { ReactNode } from "react";
import { AuthContextProvider } from "./auth";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  return <AuthContextProvider>{props.children}</AuthContextProvider>;
};
