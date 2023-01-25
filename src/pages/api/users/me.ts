import type { NextApiRequest, NextApiResponse } from "next";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { User } from "@prisma/client";

import prisma from "../../../lib/prisma/client";
import { decode } from "../../../utils/token";

type ResponseData = {
  user?: User;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    headers: { authorization },
  } = req;

  const hasToken = authorization && authorization !== "Bearer";

  if (!hasToken) {
    return res
      .status(401)
      .json({ message: "Authorization header token must be provided." });
  }

  try {
    const [_, token] = authorization.split(" ");

    const { id } = decode(token);

    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (user) {
      return res.status(200).json({ user });
    }

    return res.status(404).json({ message: "User not found." });
  } catch (err) {
    if (err instanceof TokenExpiredError) {
      const { message } = err;

      return res.status(401).json({ message: message });
    }

    if (err instanceof JsonWebTokenError) {
      const { message } = err;

      return res.status(401).json({ message: message });
    }

    return res.status(500).json({ message: "Internal server error :(" });
  }
}
