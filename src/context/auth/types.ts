import { User } from "@prisma/client";
import { ReactNode } from "react";

export type AuthContextProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export type AuthLoginResponse = {};

export type AuthSession = {
  user: User;
  token: string;
};
