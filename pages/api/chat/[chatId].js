import prisma from "../../../helpers/prisma";

export default async function handler(req, res) {
  const { chatId } = req.query;
  console.log(`api: ${chatId}`)

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

  }
}
