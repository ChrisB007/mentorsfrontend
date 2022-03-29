import prisma from '../../lib/prisma';

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
