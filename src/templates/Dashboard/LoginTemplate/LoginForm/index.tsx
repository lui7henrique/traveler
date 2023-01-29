import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { useAuth } from "context/auth";

import { FieldText } from "components/FieldText";
import { FieldPassword } from "components/FieldPassword";

import { LoginFormData, loginSchema } from "./schema";
import * as S from "./styles";
import { FieldCheckBox } from "components/FieldCheckBox";

export const LoginForm = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      const { email, password } = data;

      signIn(email, password);
    },
    [signIn]
  );

  const [email, password] = [watch("email"), watch("password")];

  const hasFormFields = useMemo(
    () => [email, password].every((f) => f),
    [email, password]
  );

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.FormTitle>Fazer login</S.FormTitle>
      <S.FormDescription>
        Acesse a plataforma sendo sócio ou moderador 😃
      </S.FormDescription>

      <S.FormFields>
        <FieldText
          {...register("email")}
          error={errors.email}
          type="email"
          label="E-mail"
        />

        <FieldPassword
          {...register("password")}
          label="Senha"
          error={errors.password}
        />
      </S.FormFields>

      <S.FormFooter>
        <FieldCheckBox
          control={control}
          options={[{ label: "Lembrar-me", name: "rememberMe" }]}
        />

        <S.FormRecoveryPassword href="/dashboard/login/reset-password">
          Esqueci minha senha
        </S.FormRecoveryPassword>
      </S.FormFooter>

      <S.FormButton type="submit" disabled={!hasFormFields}>
        Acessar
      </S.FormButton>
    </S.Form>
  );
};
