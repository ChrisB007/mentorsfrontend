import { PrismaClient } from '@prisma/client';

const Delete = async (req, res) => {
  const prisma = new PrismaClient();

  try {
    const category = await prisma.category.delete({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json({ category });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  } finally {
    prisma.$disconnect();
  }
};

export default Delete;
