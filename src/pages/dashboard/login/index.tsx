import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { FieldPassword } from "components/FieldPassword";
import { Button } from "components/Button";
import { FieldText } from "components/FieldText";

export default function Login() {
  const loginSchema = z.object({
    email: z.string().email("E-mail é um campo obrigatório."),
    password: z.string().min(6, "Senha é um campo obrigatório."),
  });

  type LoginFormData = z.infer<typeof loginSchema>;

  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = loginForm;

  const [emailError, setEmailError] = useState<null | string>(null);

  const onSubmit = useCallback(async (data: LoginFormData) => {
    const { email, password } = data;
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F5F8FA",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "416px" }}>
        <FieldText
          {...register("email")}
          error={errors.email}
          label="E-mail"
          // type="email"
        />

        <p>{emailError}</p>

        <FieldPassword
          {...register("password")}
          label="Senha"
          error={errors.password}
        />

        <Button type="submit">Acessar plataforma</Button>
      </form>
    </div>
  );
}
