import { DashboardLimiter } from "layouts/Dashboard/components/Limiter";

import { styled } from "styles";

export const Container = styled(DashboardLimiter, {});

export const Content = styled("main", {
  height: "100%",
});

export const CitiesList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "$6",
});
