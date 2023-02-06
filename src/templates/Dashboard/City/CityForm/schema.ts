import { z } from "zod";

export const citySchema = z.object({
  name: z.string().min(1, { message: "Nome é um campo obrigatório." }).max(32, {
    message: "Máximo de 32 caracteres",
  }),

  description: z
    .string()
    .min(1, { message: "Descrição é um campo obrigatório." })
    .max(520, {
      message: "Máximo de 520 caracteres",
    }),

  image: z.any(),
});

export type CityFormData = z.infer<typeof citySchema>;
