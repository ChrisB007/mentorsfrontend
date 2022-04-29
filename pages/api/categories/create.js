import { PrismaClient } from '@prisma/client';
import { data } from '../../../categoryData';

const ArtData = async (req, res) => {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const categoryData = data.map(async (category) => {
      const { name, description, url, subCategories } = category;

      const categories = await prisma.category.create({
        data: {
          name: 'This is a name',
          description: 'This is a description',
          url: 'This is a url',
          subCategories: {
            createMany: {
              data: [
                {
                  sub_name: 'This name one',
                  sub_description: 'This is a description',
                },
                {
                  sub_name: 'This is a name two',
                  sub_description: 'This is another description',
                },
              ],
            },
          },
        },
      });
    });

    res.status(201).json({ message: 'Art Data Created' });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: 'something went wrong', error });
  } finally {
    await prisma.$disconnect();
  }
};

export default ArtData;
