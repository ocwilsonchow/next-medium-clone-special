import prisma from "../../../../helpers/prisma";

export default async function handler(req, res) {
  const { messageId } = req.query;

  if (req.method === "PUT") {

    try {
      const updatedMessage = await prisma.message.update({
        data: req.body,
      });
      res.status(200).json(updatedMessage);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === "DELETE") {
    console.log("DELETE")
    try {
      const deletedMessage = await prisma.message.delete({
        where: {
          id: messageId,
        }
      });
      res.status(200).json(deletedMessage);
    } catch (error) {
      console.log(error);
    }
  }
}
