import { styled } from "styles";

export const CityButtons = styled("div", {
  display: "flex",
  gap: "$1",

  zIndex: 5,
});

export const CityButton = styled("button", {
  variants: {
    side: {
      left: {
        borderRadius: "10px 0px 0px 10px;",
      },
      right: {
        borderRadius: "0px 10px 10px 0px",
      },
    },
    transparent: {
      true: {
        background: "transparent",
        borderWidth: "1px",
      },
      false: {
        background: "bottonface",
      },
    },
  },

  width: "$10",
  height: "$10",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderColor: "$subShape",
  borderWidth: "2px",
  borderStyle: "solid",

  cursor: "pointer",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
