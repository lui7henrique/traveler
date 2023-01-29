import { IncomingForm } from "formidable";
import { withAuth } from "../../../../utils/auth";
import fs from "fs";
import prisma from "../../../../lib/prisma/client";

export const config = {
  api: {
    bodyParser: false,
  },
};

const PUBLIC_PATH = "public/uploads/images";

const handler = withAuth(
  async (req, res) => {
    const {
      query: { id },
    } = req;

    if (!id) {
      return res.status(404).json({ message: "Missing id" });
    }

    const city = await prisma.city.findUnique({
      where: {
        id: id as string,
      },
    });

    if (!city) {
      return res.status(404).json({ message: "City not found" });
    }

    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);

        resolve({ fields, files });
      });
    });

    try {
      const file = (data as any).files.image;

      const path = file.filepath;

      fs.readFile(path, async (err, data) => {
        if (err) throw err;

        const filePath = `${PUBLIC_PATH}/cities/${city.name.toLowerCase()}.jpg`;
        const imagePath = `/${filePath}`;

        fs.writeFile(filePath, data, async () => {
          if (err) throw err;

          await prisma.city.update({
            where: {
              id: id as string,
            },
            data: {
              image: imagePath,
            },
          });
        });
      });

      res.status(200).json({ message: "Image sent successfully" });
    } catch {
      res.status(500).json({ message: "Internal server error" });
    }

    res.json({ message: "ok" });
  },
  {
    methods: ["POST"],
  }
);

export default handler;
