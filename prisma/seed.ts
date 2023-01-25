import { PrismaClient } from "@prisma/client";
import { hash } from "../src/utils/password/hash";
const prisma = new PrismaClient();

async function main() {
  const henrique = await prisma.user.create({
    data: {
      name: "user",
      email: "user@email.com",
      password: hash("password123"),
    },
  });
  const admin = await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@gmail.com",
      password: hash("top-secret"),
      isAdmin: true,
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
