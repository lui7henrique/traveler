import { City } from "@prisma/client";
import { CityControlButtons } from "components/CityControlButtons";
import { CityButtons } from "components/CityControlButtons/styles";
import { useCity } from "hooks/modules/useCity";
import Link from "next/link";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

import * as S from "./styles";

type CityCardProps = {
  city: City;
};

export const CityCard = (props: CityCardProps) => {
  const {
    city: { name, id, image, slug },
  } = props;

  const thumbnail = image ?? "/uploads/images/cities/fallback.jpg";

  return (
    <S.CityCard key={id}>
      <S.CityThumbnailWrapper>
        <S.CityThumbnail src={thumbnail} fill alt={name} />
        <CityControlButtons city={props.city} />
      </S.CityThumbnailWrapper>

      <S.CityInfos>
        <S.CityName>{name}</S.CityName>
        <S.CityPlacesAmount>13 locais</S.CityPlacesAmount>
      </S.CityInfos>
    </S.CityCard>
  );
};
