import { styled } from "styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
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

    variant: {
      primary: {
        background: "$background",

        "& > input": {
          background: "$background",
        },
      },
      secondary: {
        background: "$shape",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },

  height: "$12",
  padding: "0 $4",

  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$subShape",

  borderRadius: "$sm",
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
  color: "$text",

  "&:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 30px white inset !important",
  },

  "&::-ms-reveal": {
    display: "none",
  },

  "&::-ms-clear": {
    display: "none",
  },

  "&::placeholder": {
    color: "$subtext",
    fontWeight: "$regular",
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
  color: "$subtext",

  fontWeight: "$regular",
});
