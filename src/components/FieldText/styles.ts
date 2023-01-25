import { styled } from "styles";

export const Container = styled("div", {
  variants: {
    style: {
      primary: {
        color: "$subtext",
      },
      secondary: {
        background: "$subShape",
        color: "$title",
      },
      error: {
        borderColor: "$red",
        color: "$subtext",
      },
    },
  },
  defaultVariants: {
    style: "primary",
  },

  display: "flex",
  alignItems: "center",

  padding: "0 $6",
  height: "$16",
  background: "$shape",

  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$subShape",

  borderRadius: "$md",

  position: "relative",

  transition: "all 0.2s ease-in-out",
});

export const Input = styled("input", {
  width: "100%",

  border: "none",
  outline: "none",

  transform: "translateY(30%)",
  zIndex: 1,
});

export const Label = styled("label", {
  variants: {
    isTyping: {
      true: { transform: "translateY(-70%)", fontSize: "$xs" },
      false: { transform: "translateY(-0%)" },
    },
    error: {
      true: {
        color: "$red",
      },
    },
  },

  display: "flex",
  transition: "all 0.2s ease-in-out",
  position: "absolute",
  alignItems: "center",
  left: "$6",

  zIndex: 2,
});
