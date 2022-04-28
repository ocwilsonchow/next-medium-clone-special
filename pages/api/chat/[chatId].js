import { getSession } from "next-auth/react";
import prisma from "../../../helpers/prisma";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { chatId } = req.query;

  if (req.method === "POST") {
    try {
      const createMessage = await prisma.message.create({
        data: req.body,
      });
      res.status(200).json(createMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      const foundChats = await prisma.chat.findUnique({
        where: {
          id: chatId,
        },
        include: {
          messages: {
            take: 100,
            include: {
              sender: true,
              likedUsers: {
                where: {
                  userId: session?.user?.id
                }
              },
              _count: {
                select: {
                  likedUsers: true
                }
              }
            },
          },
          users: true,
        },
      });
      res.status(200).json(foundChats);
    } catch (error) {
      console.log(error);
    }
  }
}
