import { DashboardLimiter } from "layouts/Dashboard/components/Limiter";
import Image from "next/image";
import { styled } from "styles";

export const Container = styled(DashboardLimiter, {
  padding: "0 $4",
});

export const Controls = styled("div", {
  display: "flex",
  gap: "$6",
});

export const Banner = styled("figure", {
  height: "$120",
  width: "100%",

  position: "relative",
});

export const BannerImage = styled(Image, {
  objectFit: "cover",
});

export const Content = styled("main", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "$24",

  padding: "$20 0",
});

export const Aside = styled("aside", {
  width: "100%",
});

export const AsideTitle = styled("h1", {
  fontSize: "$6xl",
  marginBottom: "$6",
});

export const AsideDescription = styled("p", {
  color: "$title",
  fontWeight: "normal",
});

export const Cards = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$4",
});
