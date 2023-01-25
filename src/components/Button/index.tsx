import { styled } from "styles";

export const StyledButton = styled("button", {
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
      true: { opacity: 0.7, cursor: "not-allowed" },
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

type ButtonProps = typeof StyledButton.defaultProps & {
  children: JSX.Element | string;
};

export const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;

  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};
