import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma/client";

import { withAuth } from "../../../utils/auth";

const handler = withAuth(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      const { body } = req;
      const { name, description } = body;

      if (!name)
        return res.status(406).json({ message: "Name field is missing" });

      if (!description)
        return res
          .status(406)
          .json({ message: "Description field is missing" });

      try {
        const city = await prisma.city.create({
          data: {
            name,
            description,
          },
        });

        return res.json({ ...city });
      } catch (e) {
        return res.json({ e });
      }
    }

    if (req.method === "GET") {
      const cities = await prisma.city.findMany();

      return res.status(200).json(cities);
    }
  },

  {
    methods: ["POST", "GET"],
  }
);

export default handler;
