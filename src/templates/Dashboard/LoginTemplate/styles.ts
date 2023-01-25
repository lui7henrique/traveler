import NextImage from "next/image";

import { Button } from "components/Button";

import { styled } from "styles";
import { FiAlertCircle } from "react-icons/fi";

export const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  height: "100vh",
});

export const ImageWrapper = styled("figure", {
  width: "100%",
  position: "relative",
});

export const Image = styled(NextImage, {
  objectFit: "cover",
});

export const Content = styled("main", {
  width: "100%",

  maxWidth: "416px",
  margin: "0 auto",
});
