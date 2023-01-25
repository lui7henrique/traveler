import { ReactNode } from "react";

export type AuthContextProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  token: string | null;
};

export type AuthLoginResponse = {
  token: string;
};
