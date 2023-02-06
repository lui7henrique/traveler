import { RiMapPinLine } from "react-icons/ri";
import { useMemo } from "react";

import { Tooltip } from "components/Tooltip";

import { useAuth } from "context/auth";

import * as S from "./styles";
import { BiCommentDetail } from "react-icons/bi";
import { useRouter } from "next/router";

export const Sidebar = () => {
  const { signOut } = useAuth();
  const { asPath } = useRouter();

  const nav = useMemo(
    () => [
      {
        label: "Cidades",
        path: "/dashboard/city",
        icon: RiMapPinLine,
      },
      {
        label: "Comentários",
        path: "/dashboard/commments",
        icon: BiCommentDetail,
      },
    ],
    []
  );

  return (
    <S.SidebarContainer>
      <S.Logo src="/logo.svg" width={22} height={48} alt="logo" />

      <S.SidebarNav>
        {nav.map((item) => {
          const { path, label, icon: Icon } = item;

          const isActive = path === asPath;

          return (
            <Tooltip content={label} key={path}>
              <S.Link href={path}>
                <Icon size={28} color={isActive ? "#fff" : "#ffffff71"} />
              </S.Link>
            </Tooltip>
          );
        })}
      </S.SidebarNav>

      <Tooltip content="Sair da plataforma">
        <S.Button onClick={signOut}>
          <S.Logout size={32} color="#fff">
            logout
          </S.Logout>
        </S.Button>
      </Tooltip>
    </S.SidebarContainer>
  );
};
