import { NextApiRequest, NextApiResponse } from "next";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

import prisma from "../../lib/prisma/client";
import { decode } from "../../utils/token";

import { User } from "@prisma/client";

type Methods = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

type Fn = (
  req: NextApiRequest,
  res: NextApiResponse,
  user: User | null
) => Promise<void> | void;

type Config = {
  methods: Methods[];
};

export const withAuth = (fn: Fn, config?: Config) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const {
      headers: { authorization },
      method,
    } = req;

    if (!config?.methods.includes(method as Methods)) {
      return res.status(405).json({ message: "Method not allowed" });
    }

    if (authorization) {
      const [_, token] = authorization?.split(" ");

      if (!token) {
        res.status(401).json({ message: "Token must be provided." });
      }

      if (token) {
        try {
          const { id } = decode(token);

          const user = await prisma.user.findUnique({
            where: {
              id,
            },
          });

          if (user) {
            return fn(req, res, user);
          }
        } catch (error) {
          if (error instanceof TokenExpiredError) {
            const { message } = error;

            return res.status(401).json({ message: message });
          }

          if (error instanceof JsonWebTokenError) {
            const { message } = error;

            return res.status(401).json({ message: message });
          }
        }
      }
    }

    return res.status(401).json({ message: "Token must be provided." });
  };
};
