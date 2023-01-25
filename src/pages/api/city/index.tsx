import { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "utils/auth";

const handler = withAuth(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  return res.json({ message: "bunda" });
});

export default handler;
