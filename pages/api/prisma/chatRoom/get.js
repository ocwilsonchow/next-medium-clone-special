import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const chatrooms = await prisma.chatRoom.findMany();

  res.status(200).json(chatrooms);
}
