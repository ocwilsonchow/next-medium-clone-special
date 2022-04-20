import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
}
