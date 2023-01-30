import * as S from "./styles";
import { RotateSpinner } from "react-spinners-kit";

export type ButtonProps = typeof S.Button.defaultProps & {
  children: JSX.Element | string;
  isLoading?: boolean;
};

export const Button = (props: ButtonProps) => {
  const { children, isLoading, ...buttonProps } = props;

  return (
    <S.Button {...buttonProps}>
      {isLoading ? <RotateSpinner size={20} color="#FFF" /> : children}
    </S.Button>
  );
};
