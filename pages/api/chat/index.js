import prisma from "../../../helpers/prisma"

export default async function handler(req, res) {
  const { chatId } = req.query;

  if (req.method === "POST") {
    // Process a POST request
  } else {
    try {
      const foundChats = await prisma.chat.findMany({
        include: {
          message: true
        }
      });
      res.status(200).json(foundChats);
    } catch (error) {
      console.log(error);
    }
  }
}
