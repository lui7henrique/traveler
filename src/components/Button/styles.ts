import { styled } from "styles";

export const Button = styled("button", {
  variants: {
    color: {
      orange: {
        background: "$orange",
      },
      green: {
        background: "$green",
      },
    },
    disabled: {
      true: { opacity: 0.7, cursor: "not-allowed", pointerEvents: "none" },
      false: {},
    },
  },

  defaultVariants: {
    color: "orange",
  },

  color: "$shape",
  fontSize: "$md",
  fontWeight: "$medium",

  width: "100%",
  height: "$12",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  outline: "none",
  padding: "$4",

  borderRadius: "$xs",
  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
