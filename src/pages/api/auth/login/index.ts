import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../../lib/prisma/client";
import { isValidEmail } from "../../../../utils/email/valid";
import { hash } from "../../../../utils/password/hash";
import { encode } from "../../../../utils/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { body } = req;

  const { email, password } = body;

  const [hasEmail, hasPassword] = [!!email, !!password];
  const hasParams = hasEmail && hasPassword;

  if (!hasParams) {
    return res
      .status(406)
      .json({ message: "Payload must be have e-mail and password." });
  }

  const isEmailValid = isValidEmail(email);

  if (!isEmailValid) {
    return res
      .status(406)
      .json({ message: "Email must be a valid email (with @ and .domain)" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      const { password: passwordHash } = user;
      const isMatchPasswords = passwordHash === hash(password);

      if (isMatchPasswords) {
        const token = encode(user);
        return res.status(200).json({ token });
      }
    }

    return res.status(401).json({ message: "Invalid email or password." });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error :(" });
  }
}
