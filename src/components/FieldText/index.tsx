import { Tooltip } from "components/Tooltip";
import {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  HTMLProps,
} from "react";
import { MdErrorOutline } from "react-icons/md";
import { FieldError } from "react-hook-form";

import * as S from "./styles";

export type FieldTextProps = {
  label: string;
  error?: FieldError;
  containerProps?: typeof S.Container.defaultProps;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
} & HTMLProps<HTMLInputElement>;

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const { label, error, rightIcon, leftIcon, containerProps, ...inputProps } =
    props;

  return (
    <S.Container {...containerProps}>
      <S.Label error={!!error}>
        {label}

        {error?.message && (
          <Tooltip content={error?.message}>
            <MdErrorOutline size={16} />
          </Tooltip>
        )}
      </S.Label>

      <S.Content style={error && "error"}>
        {leftIcon}
        <S.Input {...inputProps} autoComplete="off" ref={ref} />
        {rightIcon}
      </S.Content>
    </S.Container>
  );
};

export const FieldText = forwardRef(BaseFieldText);
