import { withAuth } from "../../../utils/auth";

const handler = withAuth(
  async (req, res, user) => {
    if (user) {
      return res.status(200).json({ user });
    }
  },
  {
    methods: ["GET"],
  }
);

export default handler;
