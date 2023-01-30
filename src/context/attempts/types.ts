import { ReactNode } from "react";

export type AttemptsContextProviderProps = {
  children: ReactNode;
};

export type AttempsContextType = {
  attemptsAmount: number;
  incrementAttemptsAmount: () => void;
  resetAttemptsAmount: () => void;
};
