import prisma from "../../../../helpers/prisma";

export default async function handler(req, res) {
  const { userId } = req.query;
  console.log("PUT");

  if (req.method === "PUT") {
    try {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: req.body,
      });
      res.status(200).json(user)
    } catch (error) {
      console.log(error);
    }
  }
}
