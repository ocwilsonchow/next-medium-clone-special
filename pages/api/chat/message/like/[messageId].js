import prisma from "../../../../helpers/prisma";

export default async function handler(req, res) {
  const { messageId } = req.query;

  if (req.method === "CREATE") {
    try {
      const updatedMessage = await prisma.userLikedMessage.create({
        data: {
          user: {
            connect: {
              id: "Current User ID",
            },
          },
          message: {
            connect: {
              id: "Message ID",
            },
          },
        },
      });
      res.status(200).json(updatedMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "PUT") {
    console.log("PUT");
    try {
      const deletedMessage = await prisma.userLikedMessage.delete({
        where: {
          id: messageId,
        },
      });
      res.status(200).json(deletedMessage);
    } catch (error) {
      console.log(error);
    }
  }
}
