import { styled } from "styles";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2",
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

export const Content = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$4",
});

export const Category = styled("div", {
  background: "$background",

  width: "100%",

  borderRadius: "$sm",

  borderWidth: "1px",
  borderColor: "$subShape",
  borderStyle: "solid",

  cursor: "pointer",
});

export const CategoryHeader = styled("div", {
  padding: "$6",

  borderBottomWidth: "1px",
  borderBottomColor: "$subShape",
  borderBottomStyle: "solid",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const CategoryBody = styled("div", {
  padding: "$6",
});

export const CategoryTitle = styled("h3", {
  fontSize: "$lg",
  color: "$title",
  lineHeight: "$base",

  userSelect: "none",
});

export const CategoryCheckbox = styled("div", {
  variants: {
    checked: {
      true: {
        background: "$green",
        borderColor: "transparent",

        "& > svg": {
          transform: "translateY(0%)",
        },
      },
    },
  },

  background: "#fff",

  borderWidth: "1px",
  borderColor: "$subShape",
  borderStyle: "solid",

  width: "$6",
  height: "$6",

  borderRadius: "$md",

  cursor: "pointer",
  transition: "all 0.1s ease-in-out",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& > svg": {
    transition: "all 0.2s ease-in-out",
    transform: "translateY(-100%)",
  },
});
