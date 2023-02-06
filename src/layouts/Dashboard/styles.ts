import { styled } from "styles";

export const Container = styled("div", {
  display: "flex",
  height: "100vh",
});

export const Content = styled("div", {
  width: "100%",
  height: "100vh",

  background: "$background",
});

export const ChildrenContainer = styled("div", {
  height: "calc(100vh - 5rem)",
  overflow: "auto",
});
