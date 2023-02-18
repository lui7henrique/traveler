import { useMemo, useState } from "react";

import { Step, Steps } from "components/Steps";
import { DashboardLimiter } from "layouts/Dashboard/components/Limiter";

import { DashboardLayout } from "layouts/Dashboard";
import { CityForm } from "./CityForm";

export const DashboardCityTemplate = () => {
  const [currentStepKey, setCurrentStepKey] = useState("city-form");

  const STEPS: Step[] = useMemo(
    () => [
      {
        key: "city-form",
        label: "1",
        panel: <CityForm />,
      },
    ],
    []
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
      <DashboardLimiter>{currentStep?.panel}</DashboardLimiter>
    </DashboardLayout>
  );
};
