import { useRouter } from "next/router";
import { AxiosError } from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "services/api";
import {
  AuthContextProviderProps,
  AuthContextType,
  AuthLoginResponse,
} from "./types";

const AUTH_KEY = "@traveler-token";

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = (props: AuthContextProviderProps) => {
  const { children } = props;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const { push } = useRouter();

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        const {
          data: { token },
        } = await api.post<AuthLoginResponse>("/auth/login", {
          email,
          password,
        });

        if (token) {
          setToken(token);
          setIsAuthenticated(true);

          push("/dashboard/me");

          api.defaults.headers["Authorization"] = `Bearer ${token}`;
          localStorage.setItem(AUTH_KEY, token);
        }
      } catch (e) {
        if (e instanceof AxiosError) {
          const { message } = e?.response?.data;

          alert(message);
        }
      }
    },
    [push]
  );

  useEffect(() => {
    const storageToken = localStorage.getItem(AUTH_KEY);

    if (storageToken) {
      api.defaults.headers["Authorization"] = `Bearer ${token}`;
      setToken(storageToken);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  return value;
};
