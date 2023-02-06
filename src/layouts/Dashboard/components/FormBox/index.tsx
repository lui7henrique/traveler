import { ReactNode } from "react";
import { MdErrorOutline } from "react-icons/md";

import * as S from "./styles";

type FormBoxProps = {
  step?: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  button: ReactNode;
};

export const FormBox = (props: FormBoxProps) => {
  const { step, title, subtitle, button, children } = props;

  return (
    <S.FormBoxContainer>
      <S.FormBoxHeader>
        <S.FormBoxHeaderStep>{step}</S.FormBoxHeaderStep>
        <S.FormBoxHeaderTitle>{title}</S.FormBoxHeaderTitle>
      </S.FormBoxHeader>

      <S.FormBoxBody>
        <S.FormBoxBodyTitle>{subtitle}</S.FormBoxBodyTitle>
        <S.Divider />

        <S.FormBoxFields>{children}</S.FormBoxFields>

        <S.FormBoxFooter>
          <S.FormBoxWarning>
            <MdErrorOutline size={24} color="#a0acb2" />
            <S.FormBoxWarningLabel>
              Preencha todos os dados com cuidado.
            </S.FormBoxWarningLabel>
          </S.FormBoxWarning>

          <S.FormBoxButtons>{button}</S.FormBoxButtons>
        </S.FormBoxFooter>
      </S.FormBoxBody>
    </S.FormBoxContainer>
  );
};
