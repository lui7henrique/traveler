import { styled } from "styles";

export type VariantColor = "orange" | "green" | "gray";

export const Button = styled("button", {
  variants: {
    color: {
      orange: {
        background: "$orange",
      },
      green: {
        background: "$green",
      },
      blue: {
        background: "$blue",
      },
      gray: {
        background: "transparent",

        borderColor: "$subShape",
        borderWidth: "1px",
        borderStyle: "solid",
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

  borderRadius: "$md",
  cursor: "pointer",

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.9)",
  },
});
