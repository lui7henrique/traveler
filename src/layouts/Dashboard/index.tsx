import { ReactNode } from "react";
import { Header, HeaderProps } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import * as S from "./styles";

type DashboardLayoutProps = {
  children: ReactNode;
} & HeaderProps;

export const DashboardLayout = (props: DashboardLayoutProps) => {
  const { children, ...headerProps } = props;

  return (
    <S.Container>
      <Sidebar />

      <S.Content>
        <Header {...headerProps} />

        <S.ChildrenContainer>{children}</S.ChildrenContainer>
      </S.Content>
    </S.Container>
  );
};
