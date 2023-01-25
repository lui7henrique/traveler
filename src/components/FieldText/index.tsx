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
  rightIcon?: JSX.Element;
} & HTMLProps<HTMLInputElement>;

const BaseFieldText: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldTextProps
> = (props, ref) => {
  const { label, error, rightIcon, containerProps, ...inputProps } = props;

  const [isTyping, setIsTyping] = useState(false);

  return (
    <S.Container style={error && "error"} {...containerProps}>
      <S.Label error={!!error} isTyping={isTyping}>
        {label}
        {error?.message && (
          <Tooltip content={error?.message}>
            <MdErrorOutline />
          </Tooltip>
        )}
      </S.Label>

      <S.Input
        onFocus={() => !isTyping && setIsTyping(true)}
        {...inputProps}
        onBlur={({ target: { value } }) =>
          !value.trim().length && setIsTyping(false)
        }
        autoComplete="off"
        ref={ref}
      />

      {rightIcon}
    </S.Container>
  );
};

export const FieldText = forwardRef(BaseFieldText);
