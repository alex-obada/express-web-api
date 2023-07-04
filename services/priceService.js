import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getByProductId(productId) {
  return prisma.price.findMany({
    where: { productId: parseInt(productId) },
  });
}

export default { getByProductId };
