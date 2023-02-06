import { FieldText, FieldTextProps } from "components/FieldText";
import { forwardRef, useState, ForwardRefRenderFunction } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { styled } from "styles";

type FieldPasswordProps = FieldTextProps;

export const IconBox = styled("div", {
  display: "flex",
  cursor: "pointer",
  padding: "$1",
});

export const BaseFieldPassword: ForwardRefRenderFunction<
  HTMLInputElement,
  FieldPasswordProps
> = (fieldTextProps: FieldPasswordProps, ref) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const [icon, type] = [
    isShowPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />,
    isShowPassword ? "text" : "password",
  ];

  return (
    <>
      <FieldText
        rightIcon={
          <IconBox onClick={() => setIsShowPassword((prevState) => !prevState)}>
            {icon}
          </IconBox>
        }
        type={type}
        {...fieldTextProps}
        ref={ref}
      />
    </>
  );
};

export const FieldPassword = forwardRef(BaseFieldPassword);
