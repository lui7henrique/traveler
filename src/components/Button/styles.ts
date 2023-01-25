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
  fontSize: "$lg",
  fontWeight: "$medium",

  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  border: "none",
  outline: "none",
  padding: "$6",

  borderRadius: "$md",
  cursor: "pointer",
});
