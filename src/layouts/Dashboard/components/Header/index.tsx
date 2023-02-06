import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MdChevronLeft } from "react-icons/md";
import * as S from "./styles";

export type HeaderProps = {
  title?: string;
  hasBackButton?: boolean;

  subTitle?: string;
  rightElement?: ReactNode;
};

export const Header = (props: HeaderProps) => {
  const { title, hasBackButton, subTitle, rightElement } = props;

  const { back } = useRouter();

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.HeaderLeftSide>
          {hasBackButton && (
            <S.HeaderBackButton
              color="gray"
              icon={MdChevronLeft}
              onClick={back}
            />
          )}
          {title && <S.HeaderTitle>{title}</S.HeaderTitle>}
        </S.HeaderLeftSide>

        <S.HeaderMiddle>
          {subTitle && <S.HeaderSubtitle>{subTitle}</S.HeaderSubtitle>}
        </S.HeaderMiddle>

        <S.HeaderRightSide>{rightElement && rightElement}</S.HeaderRightSide>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};
