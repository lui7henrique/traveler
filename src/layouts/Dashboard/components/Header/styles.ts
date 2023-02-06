import { IconButton } from "components/IconButton";
import { styled } from "styles";
import { DashboardLimiter } from "../Limiter";

export const HeaderContainer = styled("header", {
  width: "100%",

  background: "#fff",

  borderBottomColor: "$subShape",
  borderBottomWidth: "1px",
  borderBottomStyle: "solid",

  height: "$20",
});

export const HeaderLeftSide = styled("div", {});

export const HeaderMiddle = styled("div", {});

export const HeaderRightSide = styled("div", {});

export const HeaderContent = styled(DashboardLimiter, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "60%",
});

export const HeaderTitle = styled("h1", {
  color: "$title",
  fontSize: "$2xl",
});

export const HeaderSubtitle = styled("h2", {
  fontWeight: "500",
  fontSize: "$md",
  color: "$subtext",
});

export const HeaderBackButton = styled(IconButton);
