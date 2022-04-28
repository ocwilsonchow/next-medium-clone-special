import prisma from "../../../helpers/prisma";


export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const createdRoom = await prisma.chat.create({
        data: req.body,
      });
      res.status(200).json(createdRoom);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    try {
      const foundChats = await prisma.chat.findMany({
        include: {
          users: true,
        },
      });
      res.status(200).json(foundChats);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
