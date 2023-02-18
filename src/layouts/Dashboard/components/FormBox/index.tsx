import { ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";

import * as S from "./styles";

type Section = {
  title: string;
  fields: ReactNode;
};

type FormBoxProps = {
  step?: string;
  title: string;
  button: ReactNode;
  sections: Section[];
} & typeof S.FormBoxContainer.defaultProps;

export const FormBox = (props: FormBoxProps) => {
  const { step, title, button, sections, ...containerProps } = props;

  return (
    <S.FormBoxContainer {...containerProps}>
      <S.FormBoxHeader>
        <S.FormBoxHeaderStep>{step}</S.FormBoxHeaderStep>
        <S.FormBoxHeaderTitle>{title}</S.FormBoxHeaderTitle>
      </S.FormBoxHeader>

      <S.FormBoxBody>
        {sections.map((section) => {
          const { fields, title } = section;

          return (
            <>
              <S.FormBoxBodyTitle>{title}</S.FormBoxBodyTitle>
              <S.Divider />

              <S.FormBoxFields>{fields}</S.FormBoxFields>

              <S.FormBoxFooter>
                <S.FormBoxWarning>
                  <MdErrorOutline size={24} color="#a0acb2" />
                  <S.FormBoxWarningLabel>
                    Preencha todos os dados com cuidado.
                  </S.FormBoxWarningLabel>
                </S.FormBoxWarning>

                <S.FormBoxButtons>{button}</S.FormBoxButtons>
              </S.FormBoxFooter>
            </>
          );
        })}
      </S.FormBoxBody>
    </S.FormBoxContainer>
  );
};
