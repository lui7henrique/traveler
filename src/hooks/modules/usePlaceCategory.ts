import { Category } from "@prisma/client";
import { useCallback } from "react";
import { FiCalendar, FiCamera, FiCoffee } from "react-icons/fi";
import { IconType } from "react-icons/lib";

export const usePlaceCategory = () => {
  const getTitle = useCallback((category: Category) => {
    const titles: Record<Category, string> = {
      FOOD: "Comida e Bebida",
      TURISM: "Pontos Turísticos",
      EVENT: "Eventos Organizados",
    };

    return titles[category];
  }, []);

  const getIcon = useCallback((category: Category) => {
    const titles: Record<Category, IconType> = {
      FOOD: FiCoffee,
      TURISM: FiCamera,
      EVENT: FiCalendar,
    };

    return titles[category];
  }, []);

  return { getTitle, getIcon };
};
