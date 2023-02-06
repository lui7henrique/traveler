import slugify from "slugify";
import fs from "fs";

import { withAuth } from "../../../../utils/auth";
import prisma from "../../../../lib/prisma/client";

const handler = withAuth(
  async (req, res) => {
    const {
      query: { id },
      method,
    } = req;

    if (!id) {
      return res.status(422).json({ message: "Cadê o ID? ¯_(ツ)_/¯" });
    }

    const city = await prisma.city.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!city) {
      return res.status(404).json({ message: "Cidade não encontrada." });
    }

    if (method === "GET") {
      return res.status(200).json({ ...city });
    }

    if (method === "DELETE") {
      fs.unlink(`public/uploads/images/${city.slug}.jpg`, (err) => {
        if (err) throw err;

        return res.status(500).json({
          message: "Não foi possível excluir a cidade.",
        });
      });

      await prisma.city.delete({
        where: {
          id: id as string,
        },
      });

      return res.status(200).json({ message: "Cidade excluída com sucesso." });
    }

    const {
      body: { name, description },
    } = req;

    if (method === "PUT") {
      if (!name)
        return res.status(406).json({ message: "Campo nome é obrigatório." });

      if (!description)
        return res
          .status(406)
          .json({ message: "Campo descrição é obrigatório." });

      const city = await prisma.city.update({
        where: {
          id: id as string,
        },
        data: {
          name,
          slug: slugify(name, {
            lower: true,
          }),
          description,
        },
      });

      return res.status(200).json(city);
    }

    if (method === "PATCH") {
      if (name && description) {
        const city = await prisma.city.update({
          where: {
            id: id as string,
          },
          data: {
            name,
            slug: slugify(name, {
              lower: true,
            }),
            description,
          },
        });

        return res.status(200).json(city);
      }

      if (name) {
        const city = await prisma.city.update({
          where: {
            id: id as string,
          },
          data: {
            name,
          },
        });

        return res.status(200).json(city);
      }

      if (description) {
        const city = await prisma.city.update({
          where: {
            id: id as string,
          },
          data: {
            description,
          },
        });

        return res.status(200).json(city);
      }
    }
  },
  {
    methods: ["DELETE", "PUT", "PATCH", "GET"],
  }
);

export default handler;
