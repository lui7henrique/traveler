import { MdCheck } from "react-icons/md";
import { styled } from "styles";

export const CheckboxContainer = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: "$2",

  cursor: "pointer",
});

export const Checkbox = styled("input", {
  transform: "scale(1.2)",

  "accent-color": "#51B853",

  position: "absolute",
  opacity: 0,
  height: 0,
  width: 0,
});

export const CheckboxContent = styled("div", {
  variants: {
    checked: {
      true: {
        background: "$green",

        "&:hover": {
          background: "$green",
        },
      },
    },
  },

  width: "$5",
  height: "$5",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "$xs",
  cursor: "pointer",

  background: "$subShape",
  transition: "all 0.2s ease-in-out",

  overflow: "hidden",

  "&:hover": {
    background: "$subtext",
  },
});

export const CheckboxIcon = styled(MdCheck, {
  variants: {
    show: {
      true: {
        transform: "translateY(0%)",
      },
    },
  },

  transition: "all 0.21s ease-in-out",

  transform: "translateY(-100%)",
});

export const CheckboxLabel = styled("span", {
  color: "$subtext",
  fontSize: "$sm",

  userSelect: "none",
});
