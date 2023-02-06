import Image from "next/image";
import { styled } from "styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const Content = styled("div", {
  variants: {
    style: {
      error: {
        borderColor: "$red",
        borderWidth: "2px",
      },
    },
  },

  height: "$40",
  padding: "0 $4",

  borderWidth: "2px",
  borderStyle: "dashed",
  borderColor: "$subShape",

  background: "$background",

  borderRadius: "$sm",
  transition: "all 0.2s ease-in-out",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",

  cursor: "pointer",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});

export const Label = styled("label", {
  variants: {
    error: {
      true: {
        color: "$red",
      },
    },
  },

  fontSize: "$sm",
  margin: "$1 0 ",

  display: "flex",
  alignItems: "center",
  color: "$subtext",

  fontWeight: "$regular",
});

export const Placeholder = styled("p", {
  color: "$orange",
});

export const Input = styled("input", {
  display: "none",
});

export const ImageWrapper = styled("figure", {
  position: "relative",
  overflow: "hidden",

  borderRadius: "$sm",
  width: "25%",

  aspectRatio: 16 / 9,
});

export const ImagePreview = styled(Image, {
  objectFit: "cover",
});
