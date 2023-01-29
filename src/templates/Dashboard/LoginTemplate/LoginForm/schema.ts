import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("E-mail é um campo obrigatório."),
  password: z.string().min(6, "Senha é um campo obrigatório."),
  rememberMe: z.boolean(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
