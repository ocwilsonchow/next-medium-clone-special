import prisma from "../../../helpers/prisma"

export default async function handler(req, res) {
  const { chatId } = req.query;
  console.log(req.body)

  if (req.method === "POST") {
    try {
      const createdRoom = await prisma.chat.create({
        data: req.body
      });
      res.status(200).json(createdRoom);
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const foundChats = await prisma.chat.findMany({
        include: {
          messages: {
            include: {
              sender: true
            }
          },
          users: true
        }
      });
      res.status(200).json(foundChats);
    } catch (error) {
      console.log(error);
    }
  }
}
