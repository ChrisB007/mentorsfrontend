import prisma from '../../../lib/prisma';

const AllCategories = async (req, res) => {
  try {
    const categories = await prisma.category.findMany({});
    res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'something went wrong', error });
  } finally {
    await prisma.$disconnect();
  }
};

export default AllCategories;
