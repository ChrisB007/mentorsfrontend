import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Art = ({ data }) => {
  return <div>Art</div>;
};

export async function getServerSideProps(context) {
  if (req.method === 'GET') {
    try {
      // Get all subCategories
      const subCategories = await prisma.subCategory.findMany();
      return {
        props: {
          subCategories,
        },
      };
    } catch (error) {
      console.error(error);
    }
  }

  return {
    props: {
      subCategories: [],
    },
  };
}

export default Art;
