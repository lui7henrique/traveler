import { ReactNode, useMemo } from "react";
import { FiCalendar, FiCamera, FiCoffee } from "react-icons/fi";
import { IconType } from "react-icons/lib";
import * as S from "./styles";

type PlaceCardType = "turism" | "food" | "event";

type PlaceCardProps = {
  type: PlaceCardType;
  amount: number;
};

export const PlaceCard = (props: PlaceCardProps) => {
  const { type, amount } = props;

  const Icon = useMemo(() => {
    const iconByType: Record<PlaceCardType, IconType> = {
      turism: FiCamera,
      food: FiCoffee,
      event: FiCalendar,
    };

    return iconByType[type];
  }, [type]);

  const label = useMemo(() => {
    const iconByType: Record<PlaceCardType, ReactNode> = {
      turism: <>Pontos Turísticos</>,
      food: <>Comida e Bebida</>,
      event: <>Eventos Organizados</>,
    };

    return iconByType[type];
  }, [type]);

  return (
    <S.Container>
      <S.PlaceCardHeader>
        <Icon size={32} color=" #F25D27" />
      </S.PlaceCardHeader>

      <S.PlaceCardBody>
        <S.PlaceCardAmount>{amount}</S.PlaceCardAmount>
        <S.PlaceCardLabel>{label}</S.PlaceCardLabel>
      </S.PlaceCardBody>
    </S.Container>
  );
};
