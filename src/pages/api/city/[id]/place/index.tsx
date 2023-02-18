import { z, ZodError } from "zod";

import { withAuth } from "../../../../../utils/auth";
import prisma from "../../../../../lib/prisma/client";
import slugify from "slugify";

const placeSchema = z.object({
  name: z
    .string({
      required_error: "Nome é um campo obrigatório.",
    })
    .min(1, "Nome é um campo obrigatório."),

  description: z
    .string({ required_error: "Descrição é um campo obrigatório." })
    .min(1, { message: "Descrição é um campo obrigatório." })
    .max(520, { message: "Máximo de 520 caracteres." }),

  category: z.enum(["TURISM", "EVENT", "FOOD"], {
    required_error: "Categoria é um campo obrigatório.",
  }),

  postalCode: z
    .string({
      required_error: "CEP é um campo obrigatório",
    })
    .min(1, { message: "CEP é um campo obrigatório" })
    .max(8, "Máximo de 8 caracteres."),

  address: z
    .string({
      required_error: "Rua é um campo obrigatório",
    })
    .min(1, { message: "Rua é um campo obrigatório" }),

  neighbourhood: z
    .string({
      required_error: "Bairro é um campo obrigatório",
    })
    .min(1, { message: "Rua é um campo obrigatório" }),

  number: z
    .string({
      required_error: "Bairro é um campo obrigatório",
    })
    .min(1, { message: "Bairro é um campo obrigatório" }),
});

const handler = withAuth(
  async (req, res) => {
    const {
      body,
      query: { id },
    } = req;

    try {
      const schema = placeSchema.parse(body);

      const city = await prisma.place.create({
        data: {
          cityId: String(id),
          description: schema.description,
          name: schema.name,
          address: schema.address,
          neighbourhood: schema.neighbourhood,
          number: schema.number,
          postalCode: schema.postalCode,
          category: schema.category,
          slug: slugify(schema.name, { lower: true }),
        },
      });

      return res.status(201).json(city);
    } catch (error) {
      if (error instanceof ZodError) {
        const { issues } = error;
        return res.status(500).json(issues);
      }

      return res.status(500).json(error);
    }
  },
  {
    methods: ["POST"],
  }
);

export default handler;
