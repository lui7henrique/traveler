import { withAuth } from "utils/auth";

const handler = withAuth(async (req, res, user) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (user) {
    return res.status(200).json({ user });
  }
});

export default handler;
