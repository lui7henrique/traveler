import { City } from "@prisma/client";
import { useCity } from "hooks/modules/useCity";
import { useRouter } from "next/router";
import { BiPencil } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import * as S from "./styles";

type CityControlButtonsProps = {
  city: City;
};

export const CityControlButtons = (props: CityControlButtonsProps) => {
  const {
    city: { id, slug },
  } = props;

  const { push, asPath } = useRouter();
  const { handleDeleteCity } = useCity();

  const isProfilePage = asPath.includes("profile");

  const url = isProfilePage
    ? `/dashboard/city/${slug}`
    : `/dashboard/city-profile/${slug}`;

  const tranparent = isProfilePage;

  return (
    <S.CityButtons>
      <S.CityButton
        side="left"
        onClick={() => push(url)}
        transparent={tranparent}
      >
        <BiPencil size={20} color="#617480" />
      </S.CityButton>

      <S.CityButton
        side="right"
        onClick={() => handleDeleteCity(id)}
        transparent={tranparent}
      >
        <FiTrash size={20} color="#617480" />
      </S.CityButton>
    </S.CityButtons>
  );
};
