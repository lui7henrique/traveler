import { styled } from "styles";

export const FormBoxContainer = styled("form", {
  width: "100%",

  background: "$shape",
  borderRadius: "$sm",

  borderWidth: "1px",
  borderColor: "$subShape",
  borderStyle: "solid",

  maxWidth: "800px",
  margin: "0 auto",

  overflow: "hidden",
});

export const FormBoxHeader = styled("div", {
  padding: "$10 $16",

  display: "flex",
  alignItems: "center",
  gap: "$10",

  background:
    "linear-gradient(90deg, #F5FFF5 0%, rgba(220, 245, 221, 0) 62.99%);",

  borderBottomWidth: "1px",
  borderBottomColor: "$subShape",
  borderBottomStyle: "solid",
});

export const FormBoxHeaderStep = styled("div", {
  background: "$green",
  padding: "$4",

  color: "$shape",

  borderRadius: "$md",

  fontFamily: "$barlow",
  fontWeight: "$semibold",
});

export const FormBoxHeaderTitle = styled("h1", {
  color: "$green",

  fontFamily: "$barlow",
  fontWeight: "$semibold",
});

export const FormBoxBody = styled("div", {
  padding: "$12 $16",
});

export const FormBoxBodyTitle = styled("h2", {
  fontFamily: "$barlow",
  fontWeight: "$semibold",
  fontSize: "$xl",

  marginBottom: "$4",
});

export const Divider = styled("div", {
  width: "100%",

  borderBottomWidth: "1px",
  borderBottomColor: "$subShape",
  borderBottomStyle: "solid",
});

export const FormBoxFields = styled("div", {
  display: "flex",
  flexDirection: "column",

  padding: "$4 0",
  gap: "$6",
});

export const FormBoxFooter = styled("footer", {
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  marginTop: "$8",
});

export const FormBoxWarning = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$2",
});

export const FormBoxButtons = styled("div", {});

export const FormBoxWarningLabel = styled("span", {
  fontSize: "$sm",
  color: "$subtext",
  fontWeight: "$regular",
});