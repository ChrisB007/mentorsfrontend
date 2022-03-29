import { PrismaClient } from '@prisma/client';
import { data } from '../../../categoryData';

const ArtData = async (req, res) => {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const categoryData = data.map(async (category) => {
      const { name, description, url, subCategories } = category;

      const categories = await prisma.category.create({
        data: {
          name,
          description,
          url,
          subCategories: {
            create: {
              name: subCategories.sub_name,
              description: subCategories.sub_description,
              url: subCategories.sub_url,
              image: subCategories.sub_image,
              sub: {
                create: {
                  name: subCategories.sub.name,
                  description: subCategories.sub.description,
                  url: subCategories.sub.url,
                  image: subCategories.sub.image,
                },
              },
            },
          },
        },
      });
    });

    res.status(201).json({ 'category: ': 'gat' });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.json({ error: 'something went wrong', error });
  } finally {
    await prisma.$disconnect();
  }
};

export default ArtData;
