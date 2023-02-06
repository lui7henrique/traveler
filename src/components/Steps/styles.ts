import { styled } from "styles";

export const StepsContainer = styled("div", {
  display: "flex",
  gap: "$3",
});

export const Step = styled("span", {
  variants: {
    active: {
      true: {
        color: "$text",
        fontWeight: "bold",
      },
    },
  },

  fontSize: "$xs",
  color: "$subtext",

  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    color: "$text",
  },
});
