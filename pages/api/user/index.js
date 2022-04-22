import prisma from "../../../helpers/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {

  } else {
    try {
      const foundUsers = await prisma.user.findMany();
      res.status(200).json(foundUsers);
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
