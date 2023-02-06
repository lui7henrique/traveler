import { forwardRef, ForwardRefRenderFunction, HTMLProps } from "react";

import { Tooltip } from "components/Tooltip";

import { MdErrorOutline } from "react-icons/md";
import { FieldError } from "react-hook-form";

import * as S from "./styles";

export type FieldTextProps = {
  label: string;
  error?: FieldError;
  contentProps?: typeof S.Content.defaultProps;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
} & HTMLProps<HTMLInputElement>;

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const { label, error, rightIcon, leftIcon, contentProps, ...inputProps } =
    props;

  return (
    <S.Container>
      <S.Label error={!!error}>
        {label}

        {error?.message && (
          <Tooltip content={error?.message}>
            <MdErrorOutline size={16} />
          </Tooltip>
        )}
      </S.Label>

      <S.Content {...contentProps} style={error && "error"}>
        {leftIcon}
        <S.Input {...inputProps} ref={ref} />
        {rightIcon}
      </S.Content>
    </S.Container>
  );
};

export const FieldText = forwardRef(BaseFieldText);
