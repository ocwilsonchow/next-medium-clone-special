import prisma from "../../../../helpers/prisma";

export default async function handler(req, res) {
    try {
      const onlineUsers = await prisma.user.findMany({
       where: {
         isOnline: true
       }
      });

      res.status(201).json(onlineUsers);
    } catch (error) {
      res.status(501);
    }

}
