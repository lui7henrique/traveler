import { City } from "@prisma/client";
import { useCity } from "hooks/modules/city";
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

  const { handleDeleteCity } = useCity();

  const thumbnail = image ?? "/uploads/images/cities/fallback.jpg";

  return (
    <S.CityCard key={id}>
      <S.CityThumbnailWrapper>
        <S.CityButtons>
          <S.CityButton side="left">
            <BiPencil size={20} color="#617480" />
          </S.CityButton>

          <S.CityButton side="right" onClick={() => handleDeleteCity(id)}>
            <FiTrash size={20} color="#617480" />
          </S.CityButton>
        </S.CityButtons>

        <S.CityThumbnail src={thumbnail} fill alt={name} />
      </S.CityThumbnailWrapper>

      <S.CityInfos>
        <S.CityName>{name}</S.CityName>
        <S.CityPlacesAmount>13 locais</S.CityPlacesAmount>
      </S.CityInfos>
    </S.CityCard>
  );
};
