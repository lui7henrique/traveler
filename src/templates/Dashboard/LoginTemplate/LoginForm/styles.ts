import { Button } from "components/Button";
import { LoginButton } from "components/LoginButton";
import Link from "next/link";
import { styled } from "styles";

export const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  width: "100%",
  height: "100%",
});

export const FormTitle = styled("h1", {
  fontSize: "$5xl",
});

export const FormDescription = styled("p", {
  marginBottom: "$6",
});

export const FormFields = styled("div", {
  width: "100%",

  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const FormButton = styled(LoginButton, {
  marginTop: "$8",
});

export const FormFooter = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  marginTop: "$2",
});

export const FormRecoveryPassword = styled(Link, {
  fontSize: "$sm",
  color: "$subtext",
});
