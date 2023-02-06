import { styled } from "styles";

export const Container = styled("div", {
  background: "$shape",

  borderWidth: "1px",
  borderColor: "$subShape",
  borderStyle: "solid",

  borderRadius: "$md",
});

export const PlaceCardHeader = styled("div", {
  padding: "$6 $20 $6 $6",

  borderBottomWidth: "1px",
  borderBottomColor: "$subShape",
  borderBottomStyle: "solid",
});

export const PlaceCardBody = styled("div", {
  padding: "$6",
});

export const PlaceCardAmount = styled("h3", {
  fontSize: "$4xl",

  marginBottom: "$4",
});

export const PlaceCardLabel = styled("p", {
  fontSize: "$sm",
  lineHeight: "$short",
  fontWeight: "$regular",
});
