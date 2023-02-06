import { Button } from "components/Button";
import { useQuery } from "hooks/useQuery";
import { DashboardLayout } from "layouts/Dashboard";
import { GetCities } from "types/city";

import * as S from "./styles";

import { CityCard } from "components/CityCard";
import { useRouter } from "next/router";
import { useCity } from "hooks/modules/useCity";

export const DashboardCitiesTemplate = () => {
  const { queryKey } = useCity();
  const { data } = useQuery<GetCities>(queryKey, "/city");

  const { push } = useRouter();

  return (
    <DashboardLayout
      title="Cidades"
      rightElement={
        <Button color="green" onClick={() => push("/dashboard/city/new")}>
          Adicionar
        </Button>
      }
    >
      <S.Container>
        <S.Content>
          <S.CitiesList>
            {data?.map((city) => (
              <CityCard city={city} key={city.id} />
            ))}
          </S.CitiesList>
        </S.Content>
      </S.Container>
    </DashboardLayout>
  );
};
