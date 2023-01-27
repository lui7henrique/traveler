import { withAuth } from "../../../../utils/auth";
import prisma from "../../../../lib/prisma/client";

const handler = withAuth(
  async (req, res) => {
    const {
      query: { id },
      method,
    } = req;

    if (method === "DELETE") {
      await prisma.city.delete({
        where: {
          id: id as string,
        },
      });

      return res.status(200).json({ message: "City deleted successfully." });
    }

    const {
      body: { name, description },
    } = req;

    if (method === "PUT") {
      if (!name)
        return res.status(406).json({ message: "Name field is missing" });

      if (!description)
        return res
          .status(406)
          .json({ message: "Description field is missing" });

      const city = await prisma.city.update({
        where: {
          id: id as string,
        },
        data: {
          name,
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
    methods: ["DELETE", "PUT", "PATCH"],
  }
);

export default handler;
