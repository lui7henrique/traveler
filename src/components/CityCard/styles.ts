import Image from "next/image";

import { styled } from "styles";

export const CityCard = styled("div", {
  width: "100%",

  background: "$shape",

  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "$subShape",

  borderRadius: "$xs",
  overflow: "hidden",
});

export const CityThumbnailWrapper = styled("figure", {
  width: "100%",
  aspectRatio: 16 / 9,
  position: "relative",

  "& > div": {
    position: "absolute",

    top: "$4",
    right: "$4",
  },
});

export const CityThumbnail = styled(Image, {
  objectFit: "cover",
});

export const CityInfos = styled("div", {
  padding: "$6",

  display: "flex",
  flexDirection: "column",
});

export const CityName = styled("h3", {
  color: "$title",
});

export const CityPlacesAmount = styled("sub", {
  color: "$subtext",
});
