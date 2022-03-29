import { PrismaClient } from '@prisma/client';

const Index = async (req, res) => {
  const prisma = new PrismaClient();
  try {
    const categories = await prisma.category.findMany({
      include: {
        subCategories: true,
      },
    });
    return res.status(200).json({ categories });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  } finally {
    prisma.$disconnect();
  }
};
export default Index;
