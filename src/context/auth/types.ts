import { ReactNode } from "react";

export type AuthContextProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
};

export type AuthLoginResponse = {};
