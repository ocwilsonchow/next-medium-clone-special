import prisma from "../../../../../helpers/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { messageId } = req.query;
  const session = await getSession({ req });

  if (req.method === "POST") {
    try {
      const likedMessage = await prisma.userLikedMessage.create({
        data: {
          user: {
            connect: {
              id: session.user.id,
            },
          },
          message: {
            connect: {
              id: messageId,
            },
          },
        },
      });
      res.status(200).json(likedMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (req.method === "PUT") {
    console.log("PUT");
    try {
      const deletedMessage = await prisma.userLikedMessage.delete({
        where: {
          user: {
            id: session.user.id,
          },
          message: {
            id: messageId,
          },
        },
      });
      res.status(200).json(deletedMessage);
    } catch (error) {
      console.log(error);
    }
  }
}
