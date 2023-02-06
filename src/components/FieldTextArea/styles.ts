import { styled } from "styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$1",
});

export const TextArea = styled("textarea", {
  variants: {
    style: {
      error: {
        borderColor: "$red",
        borderWidth: "2px",
        color: "$subtext",
      },
    },
  },

  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "$subShape",
  background: "$background",
  color: "$text",

  height: "$40",
  padding: "$3 $4",

  borderRadius: "$sm",

  outline: "none",

  "&:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 30px white inset !important",
  },

  resize: "none",

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
