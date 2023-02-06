import { useCallback, useMemo, useState } from "react";

import { Step, Steps } from "components/Steps";

import { DashboardLayout } from "layouts/Dashboard";

import * as S from "./styles";
import { CityForm } from "./CityForm";
import { CityPlaceForm } from "./CityPlaceForm";

export const DashboardCityTemplate = () => {
  const [currentStepKey, setCurrentStepKey] = useState("city-form");

  const handleNextStep = useCallback(() => {
    if (currentStepKey === "city-form") {
      setCurrentStepKey("city-place-form");
    }
  }, [currentStepKey]);

  const STEPS: Step[] = useMemo(
    () => [
      {
        key: "city-form",
        label: "1",
        panel: <CityForm handleNextStep={handleNextStep} />,
      },
      {
        key: "city-place-form",
        label: "2",
        panel: <CityPlaceForm />,
      },
    ],
    [handleNextStep]
  );

  const currentStep = useMemo(
    () => STEPS.find((step) => step.key === currentStepKey),
    [STEPS, currentStepKey]
  );

  return (
    <DashboardLayout
      hasBackButton
      rightElement={
        <Steps
          steps={STEPS}
          currentStepKey={currentStepKey}
          setCurrentStepKey={setCurrentStepKey}
        />
      }
      subTitle="Adicionar um perfil"
    >
      <S.Container>{currentStep?.panel}</S.Container>
    </DashboardLayout>
  );
};
