import { forwardRef, ForwardRefRenderFunction, HTMLProps } from "react";

import { Tooltip } from "components/Tooltip";

import { MdErrorOutline } from "react-icons/md";
import { FieldError } from "react-hook-form";

import * as S from "./styles";

export type FieldTextAreaProps = {
  label: string;
  error?: FieldError;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
} & HTMLProps<HTMLTextAreaElement>;

const BaseFieldTextArea: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  FieldTextAreaProps
> = (props, ref) => {
  const { label, error, rightIcon, leftIcon, ...textAreaProps } = props;

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

      <S.TextArea {...textAreaProps} ref={ref} style={error && "error"} />
    </S.Container>
  );
};

export const FieldTextArea = forwardRef(BaseFieldTextArea);
