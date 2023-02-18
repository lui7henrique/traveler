import { Category } from "@prisma/client";
import { usePlaceCategory } from "hooks/modules/usePlaceCategory";
import { useEffect, useMemo, useState } from "react";
import { FiCheck } from "react-icons/fi";

import * as S from "./styles";

const DEFAULT_CATEGORIES: Array<Category> = ["FOOD", "TURISM", "EVENT"];

type FieldPlaceCategoryCheckboxProps = {
  onChange: (category: Category) => void;
};

export const FieldPlaceCategoryCheckbox = (
  props: FieldPlaceCategoryCheckboxProps
) => {
  const { onChange } = props;

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const { getTitle, getIcon } = usePlaceCategory();

  useEffect(() => {
    if (selectedCategory) {
      onChange(selectedCategory);
    }
  }, [onChange, selectedCategory]);

  return (
    <S.Container>
      <S.Label>Selecione uma categoria</S.Label>
      <S.Content>
        {DEFAULT_CATEGORIES.map((category) => {
          const [title, Icon] = [getTitle(category), getIcon(category)];

          const firstLine = title.split(" ")[0];
          const secondLine = title.split(" ")[1];
          const thirdLine = title.split(" ")[2];

          const isSelected = selectedCategory === category;

          return (
            <S.Category
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              <S.CategoryHeader>
                <Icon size={40} color="#F25D27" />
                <S.CategoryCheckbox checked={isSelected}>
                  <FiCheck color="white" />
                </S.CategoryCheckbox>
              </S.CategoryHeader>

              <S.CategoryBody>
                <S.CategoryTitle>
                  {firstLine}
                  <br />
                  {thirdLine ? `${secondLine} ${thirdLine}` : secondLine}
                </S.CategoryTitle>
              </S.CategoryBody>
            </S.Category>
          );
        })}
      </S.Content>
    </S.Container>
  );
};
