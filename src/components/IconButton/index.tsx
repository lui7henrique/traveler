import { Button, ButtonProps } from "components/Button";
import { IconType } from "react-icons/lib";

import { VariantColor } from "components/Button/styles";

import { colors } from "styles/tokens";
import { styled } from "styles";

export const IconButtonContainer = styled(Button, {
  aspectRatio: 1 / 1,
  padding: "$3 !important",
});

type IconButtonProps = Omit<ButtonProps, "children"> & {
  icon: IconType;
};

export const IconButton = (props: IconButtonProps) => {
  const { icon: Icon, ...buttonProps } = props;

  const iconColor: Record<VariantColor, string> = {
    orange: "#fff",
    green: "#fff",
    gray: colors.subtext,
  };

  const iconColorByColorProp =
    iconColor[(buttonProps.color as VariantColor) || "gray"];

  return (
    <IconButtonContainer {...buttonProps}>
      <Icon color={iconColorByColorProp} size={32} />
    </IconButtonContainer>
  );
};
