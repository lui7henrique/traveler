import { faker } from "@faker-js/faker";
import slugify from "slugify";
import { PrismaClient } from "@prisma/client";
import { hash } from "../src/utils/password/hash";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "user",
      email: "user@email.com",
      password: hash("password123"),
      isAdmin: false,
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
