import { createContext, useCallback, useContext, useState } from "react";
import { AuthContextProviderProps, AuthContextType } from "./types";
import { toast } from "react-toastify";
import { signIn as nextAuthSignIn } from "next-auth/react";

import { feedback } from "./feedback";
import { useRouter } from "next/router";
import { useAttempts } from "context/attempts";

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const { children } = props;

  const { push } = useRouter();
  const { incrementAttemptsAmount } = useAttempts();

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const response = await nextAuthSignIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (response) {
          const { message, title, icon, type } = feedback(response.status);

          toast(title, {
            data: message,
            icon: icon,
            type,
          });

          incrementAttemptsAmount();

          if (response.status === 201) {
            push("/dashboard");
          }
        }
      } catch {}
    },
    [push]
  );

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
