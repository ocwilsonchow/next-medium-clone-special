import prisma from "../../../helpers/prisma"

export default async function handler(req, res) {
  const { chatId } = req.query;

  if (req.method === "POST") {
    // Process a POST request
  } else {
    // Handle any other HTTP method
    try {
      const foundChats = await prisma.chat.findMany();
      res.status(200).json(foundChats);
    } catch (error) {
      console.log(error);
    }
  }
}
