import { Button } from "components/Button";

import { FormBox } from "layouts/Dashboard/components/FormBox";

export const CityPlaceForm = () => {
  return (
    <FormBox
      step="02"
      title="Adicione um local"
      subtitle="Dados do local"
      button={
        <Button color="blue" type="submit">
          Próximo
        </Button>
      }
    >
      <h1>oi</h1>
    </FormBox>
  );
};
