import { PrismaClient } from '@prisma/client';
import { data } from '../../../categoryData';

const ArtData = async (req, res) => {
  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const categoryData = data.map(async (category) => {
      const { name, description, url, subCategories } = category;

      console.log(name, subCategories);
      //subCategories.map(async (subCategory) => {
      //  console.log(subCategory);
      //});
      //const allSubCategories = subCategories.map(async (subCategory) => {
      //      const subCategoryData =
      //});

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

      //const categories = await prisma.category.create({
      //  data: {
      //    name,
      //    description,
      //    url,
      //    subCategories: {
      //      createMany: {
      //        name: subCategories.sub_name,
      //        description: subCategories.sub_description,
      //        url: subCategories.sub_url,
      //        image: subCategories.sub_image,
      //        sub: {
      //          create: {
      //            name: subCategories.sub.name,
      //            description: subCategories.sub.description,
      //            url: subCategories.sub.url,
      //            image: subCategories.sub.image,
      //          },
      //        },
      //      },
      //    },
      //  },
      //});
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
