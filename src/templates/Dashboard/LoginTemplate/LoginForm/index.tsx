import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FieldText } from "components/FieldText";
import { FieldPassword } from "components/FieldPassword";

import { LoginFormData, loginSchema } from "./schema";
import * as S from "./styles";

import { useAuth } from "context/auth";

export const LoginForm = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
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
          label="E-mail"
          type="email"
        />

        <FieldPassword
          {...register("password")}
          label="Senha"
          error={errors.password}
        />
      </S.FormFields>

      <S.FormButton type="submit" disabled={!hasFormFields}>
        Acessar plataforma
      </S.FormButton>
    </S.Form>
  );
};
