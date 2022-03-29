import { PrismaClient } from '@prisma/client';
import { data } from '../categoryData';

const prisma = new PrismaClient();

const allCategoryData = data.map(async (category) => {
  const { name, description, url, subCategories } = category;
  const {
    subName = name,
    subDescription = description,
    subUrl = url,
    image,
  } = subCategories;

  const categories = await prisma.category.create({
    data: {
      name,
      description,
      url,
      subCategories: {
        createMany: {
          data: [
            {
              name: subName,
              description: subDescription,
              url: subUrl,
              image,
            },
          ],
        },
      },
    },
  });
});
