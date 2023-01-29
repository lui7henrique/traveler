import {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode,
  useCallback,
} from "react";
import { v4 } from "uuid";
import { Control, Controller } from "react-hook-form";

import * as S from "./styles";

type CheckboxOption = {
  name: string;
  label: string | ReactNode;
  value?: boolean;
};

type FieldCheckBoxProps = {
  label?: string;
  control?: Control<any>;
  options: Array<CheckboxOption>;
};

type CheckboxProps = {
  isChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & CheckboxOption;

export const BaseCheckbox: ForwardRefRenderFunction<
  HTMLInputElement,
  CheckboxProps
> = (props: CheckboxProps, ref) => {
  const { label, name, isChecked, onChange } = props;

  return (
    <S.CheckboxContainer>
      <S.Checkbox
        name={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        ref={ref}
      />

      <S.CheckboxContent checked={isChecked}>
        <S.CheckboxIcon size={16} show={isChecked} color="#fff" />
      </S.CheckboxContent>
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export const Checkbox = forwardRef(BaseCheckbox);

export const FieldCheckBox = (props: FieldCheckBoxProps) => {
  const { label, options, control } = props;

  const renderControllerCheckbox = useCallback(
    (option: CheckboxOption) => {
      const { name } = option;

      return (
        <Controller
          key={v4()}
          name={name}
          control={control}
          defaultValue={false}
          render={({ field: { onChange, value, ref } }) => {
            return (
              <Checkbox
                ref={ref}
                isChecked={value}
                onChange={onChange}
                {...option}
              />
            );
          }}
        />
      );
    },
    [control]
  );

  return (
    <>
      {label && label}

      {options.map((option) => {
        const render = control ? (
          renderControllerCheckbox(option)
        ) : (
          <Checkbox {...option} />
        );

        return render;
      })}
    </>
  );
};
