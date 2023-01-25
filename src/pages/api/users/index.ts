import type { NextApiRequest, NextApiResponse } from "next";

import { User } from "@prisma/client";
import prisma from "../../../lib/prisma/client";

type ResponseData = {
  data?: User[];
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({ data: users });
  } catch (err) {
    return res
      .status(500)
      .json({ data: [], message: "Internal server error :(" });
  }
}
