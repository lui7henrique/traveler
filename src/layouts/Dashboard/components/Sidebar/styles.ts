import Image from "next/image";
import NextLink from "next/link";
import { BiPowerOff } from "react-icons/bi";
import { styled } from "styles";

export const SidebarContainer = styled("div", {
  display: "flex",

  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  height: "100vh",
  background: "$orange",

  width: "$20",
});

export const SidebarNav = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const Logo = styled(Image, {
  marginTop: "$4",
});

export const Button = styled("button", {
  marginBottom: "$4",

  background: "none",
  border: "none",

  cursor: "pointer",
});

export const Link = styled(NextLink, {});

export const Logout = styled(BiPowerOff, {});
