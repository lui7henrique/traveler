import Image from "next/image";
import Link from "next/link";

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

export const CityButtons = styled("div", {
  display: "flex",
  gap: "$1",

  position: "absolute",

  top: "$4",
  right: "$4",

  zIndex: 5,
});

export const CityButton = styled("button", {
  variants: {
    side: {
      left: {
        borderRadius: "10px 0px 0px 10px;",
      },
      right: {
        borderRadius: "0px 10px 10px 0px",
      },
    },
  },

  width: "$10",
  height: "$10",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderColor: "$subShape",
  borderWidth: "2px",
  borderStyle: "solid",

  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
