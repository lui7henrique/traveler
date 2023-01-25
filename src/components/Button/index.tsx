import * as S from "./styles";

type ButtonProps = typeof S.Button.defaultProps & {
  children: JSX.Element | string;
};

export const Button = (props: ButtonProps) => {
  const { children, ...buttonProps } = props;

  return <S.Button {...buttonProps}>{children}</S.Button>;
};
