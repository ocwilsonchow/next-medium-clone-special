import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

// Get all user
export async function apiGetAllUsers(req, res) {
  console.log(prisma)
  try {
    const result = await prisma.user.findMany();
    res.json(result);
  } catch (error) {
    res.json(error)
  }
}
