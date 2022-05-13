import prisma from '../../../lib/prisma';

const Index = async (req, res) => {
  try {
    if (req.method === 'GET') {
      const categories = await prisma.category.findMany({
        include: {
          subcategories: {
            include: {
              sub: true,
            },
          },
        },
      });
      res.status(200).json({ categories });
    } else if (req.method === 'POST') {
      const { name, description, url, icon } = req.body;

      const categories = await prisma.category.createMany({
        data: [{ name, url, description, icon }],
      });
      res.status(200).json({ categories });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  } finally {
    prisma.$disconnect();
  }
};
export default Index;
