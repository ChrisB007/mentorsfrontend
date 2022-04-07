import { PrismaClient } from '@prisma/client';

const Music = ({ categories }) => {
  const subCategories = categories[2].subcategories;
  return (
    <>
      <h1 className="flex justify-center items-center m-auto mt-10">
        Find a mentor in Music
      </h1>
      <div className="flex flex-wrap w-3/4 justify-center items-center m-auto mt-10">
        {subCategories.map((categoryItem) => {
          return (
            <div key={categoryItem.id} className="mt-3 mx-3 m-auto max-w-6xl">
              <div className="flex justify-center items-center w-80 h-36 border m-auto">
                <p>{categoryItem.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Music;

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      subcategories: {
        select: {
          id: true,
          name: true,
          description: true,
        },
      },
    },
  });
  return {
    props: { categories },
  };
}
