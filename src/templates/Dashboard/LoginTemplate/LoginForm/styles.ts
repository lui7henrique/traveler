import { Button } from "components/Button";
import { FiAlertCircle } from "react-icons/fi";
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
  marginBottom: "$10",
});

export const FormFields = styled("div", {
  width: "100%",
});

export const FormButton = styled(Button, {
  marginTop: "$8",
});

export const FormFooter = styled("footer", {
  display: "flex",
  alignItems: "center",
  gap: "$6",

  marginTop: "$20",
});

export const FormFooterIcon = styled(FiAlertCircle);

export const FormFooterMessage = styled("sup", {
  color: "$text",
  lineHeight: "$base",
  fontSize: "$xs",
});
