import { ReactNode } from "react";

import * as S from "./styles";

export type Step = {
  label: string;
  panel: ReactNode;
  key: string;
};

type StepsProps = {
  steps: Step[];
  currentStepKey: string;
  setCurrentStepKey: (key: string) => void;
};

export const Steps = (props: StepsProps) => {
  const { steps, currentStepKey, setCurrentStepKey } = props;

  return (
    <S.StepsContainer>
      {steps.map((step) => {
        const { label, key } = step;
        const isActive = key === currentStepKey;

        return (
          <S.Step
            key={key}
            active={isActive}
            onClick={() => setCurrentStepKey(key)}
          >
            {label}
          </S.Step>
        );
      })}
    </S.StepsContainer>
  );
};
