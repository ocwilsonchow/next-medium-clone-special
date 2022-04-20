import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const chatrooms = await prisma.chatMessage.create({
    data: {
      message: "testing",
      userId: "",
    }
  });

  res.status(200).json(chatrooms);
}
