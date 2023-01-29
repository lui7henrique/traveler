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
    },
  },
  defaultVariants: {
    style: "primary",
  },

  display: "flex",
  flexDirection: "column",
});

export const Content = styled("div", {
  variants: {
    style: {
      error: {
        borderColor: "$red",
        borderWidth: "2px",
        color: "$subtext",
      },
    },
  },

  height: "$12",
  padding: "0 $4",

  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$subShape",

  borderRadius: "$xs",
  transition: "all 0.2s ease-in-out",

  display: "flex",
  alignItems: "center",
});

export const Input = styled("input", {
  outline: "none",
  border: "none",

  zIndex: 1,

  width: "100%",
  height: "100%",
  background: "$shape",

  "&:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 30px white inset !important",
  },

  "input::-ms-reveal": {
    display: "none",
  },

  "input::-ms-clear": {
    display: "none",
  },
});

export const Label = styled("label", {
  variants: {
    error: {
      true: {
        color: "$red",
      },
    },
  },

  fontSize: "$sm",
  margin: "$1 0 ",

  display: "flex",
  alignItems: "center",
});
