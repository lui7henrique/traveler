import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FieldText } from "components/FieldText";
import { FieldPassword } from "components/FieldPassword";
import { FieldCheckBox } from "components/FieldCheckBox";

import { LoginFormData, loginSchema } from "./schema";

import * as S from "./styles";

import { useAuth } from "context/auth";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const { signIn } = useAuth();

  const onSubmit = useCallback(
    async (data: LoginFormData) => {
      await signIn(data.email, data.password);
    },
    [signIn]
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
          contentProps={{
            variant: "secondary",
          }}
        />

        <FieldPassword
          {...register("password")}
          label="Senha"
          error={errors.password}
          contentProps={{
            variant: "secondary",
          }}
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

      <S.FormButton type="submit" isLoading={isSubmitting} />
    </S.Form>
  );
};
