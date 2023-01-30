import { createContext, useCallback, useContext, useState } from "react";
import { AttempsContextType, AttemptsContextProviderProps } from "./types";

export const ATTEMPTS_KEY = "@traveler-login-attemps";

const AttemptsContext = createContext({} as AttempsContextType);

export const AttemptsContextProvider = (
  props: AttemptsContextProviderProps
) => {
  const [attemptsAmount, setAttemptsAmount] = useState(0);

  const incrementAttemptsAmount = useCallback(() => {
    const currentAttemptsAmount = localStorage.getItem(ATTEMPTS_KEY);
    const newAttemptsAmount = currentAttemptsAmount
      ? Number(currentAttemptsAmount) + 1
      : 1;

    setAttemptsAmount(newAttemptsAmount);
    localStorage.setItem(ATTEMPTS_KEY, String(newAttemptsAmount));
  }, []);

  const resetAttemptsAmount = useCallback(() => {
    localStorage.setItem(ATTEMPTS_KEY, String(0));
  }, []);

  return (
    <AttemptsContext.Provider
      value={{ attemptsAmount, incrementAttemptsAmount, resetAttemptsAmount }}
    >
      {props.children}
    </AttemptsContext.Provider>
  );
};

export const useAttempts = () => {
  const value = useContext(AttemptsContext);

  return value;
};
