import { City } from "@prisma/client";
import { Button } from "components/Button";
import { CityControlButtons } from "components/CityControlButtons";
import { PlaceCard } from "components/PlaceCard";
import { DashboardLayout } from "layouts/Dashboard";
import { useRouter } from "next/router";

import * as S from "./styles";

export type DashboardCityProfileTemplateProps = {
  city: City;
};

export const DashboardCityProfileTemplate = (
  props: DashboardCityProfileTemplateProps
) => {
  const { city } = props;
  const { image, name, slug, description } = city;

  const { push } = useRouter();

  return (
    <DashboardLayout
      hasBackButton
      rightElement={
        <S.Controls>
          <CityControlButtons city={city} />
          <Button onClick={() => push(`/dashboard/city/${slug}/place/new`)}>
            + Adicionar um local
          </Button>
        </S.Controls>
      }
    >
      <S.Banner>
        {image && <S.BannerImage src={image} alt={name} fill quality={100} />}
      </S.Banner>

      <S.Container>
        <S.Content>
          <S.Aside>
            <S.AsideTitle>{name}</S.AsideTitle>
            <S.AsideDescription>{description}</S.AsideDescription>
          </S.Aside>

          <S.Cards>
            <PlaceCard amount={3} type="turism" />
            <PlaceCard amount={3} type="food" />
            <PlaceCard amount={3} type="event" />
          </S.Cards>
        </S.Content>
      </S.Container>
    </DashboardLayout>
  );
};
