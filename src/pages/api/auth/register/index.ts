import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";

import prismaClient from "../../../../lib/prisma/client";
import { isValidEmail } from "../../../../utils/email/valid";
import { hash } from "../../../../utils/password/hash";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
  prisma: PrismaClient = prismaClient
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { body } = req;
  const { name, email, password } = body;

  const [hasName, hasEmail, hasPassword] = [!!name, !!email, !!password];
  const hasParams = hasName && hasEmail && hasPassword;

  if (!hasParams) {
    return res
      .status(406)
      .json({ message: "Payload must be have name, e-mail and password." });
  }

  const isEmailValid = isValidEmail(email);

  if (!isEmailValid) {
    return res
      .status(406)
      .json({ message: "Email must be a valid email (with @ and .domain)" });
  }

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hash(password),
      },
    });

    return res.status(201).json({ message: "User created succesfully" });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === "P2002") {
        return res.status(403).json({ message: "E-mail already exists." });
      }
    }

    return res.status(500).json({ message: "Internal server error :(" });
  }
}
