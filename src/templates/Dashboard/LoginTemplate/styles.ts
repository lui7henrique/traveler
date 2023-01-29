import NextImage from "next/image";

import { styled } from "styles";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",

  "@md": {
    gridTemplateColumns: "1fr",
  },
});

export const ImageWrapper = styled("figure", {
  width: "100%",
  position: "relative",

  "@md": {
    width: "auto",
    height: "50vh",
  },
});

export const Image = styled(NextImage, {
  objectFit: "cover",
});

export const Content = styled("main", {
  width: "100%",

  maxWidth: "416px",
  margin: "0 auto",

  padding: "$8",

  "@md": {
    width: "auto",
  },
});
