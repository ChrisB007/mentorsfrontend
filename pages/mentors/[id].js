import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Details = () => {
  return <div>Details</div>;
};

export default Details;

export async function getServerSideProps({ params }) {
  const subCategory = await prisma.subCategory.findOne({
    where: {
      id: String(params?.id),
    },
    include: {
      category: true,
    },
  });

  return {
    props: {
      subCategory,
    },
  };
}
