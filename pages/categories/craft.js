import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const Craft = ({ categories }) => {
  const subCategories = categories[1].subcategories;
  return (
    <>
      <h1 className="flex justify-center items-center m-auto mt-10">
        Find a mentor in Craft
      </h1>
      <div className="flex flex-wrap w-3/4 justify-center items-center m-auto mt-10">
        {subCategories.map((categoryItem) => {
          return (
            <Link href={categoryItem.url}>
              <a>
                <div
                  key={categoryItem.id}
                  className="mt-3 mx-3 m-auto max-w-6xl "
                >
                  <div
                    className="cat-boxes flex justify-center items-center w-80 h-44 border m-auto rounded "
                    style={{
                      backgroundImage: `url(${categoryItem.image})`,
                      backgroundSize: 'cover',
                    }}
                  >
                    <p className="cat-text text-2xl text-gray-200">{`${categoryItem.name}`}</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Craft;

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
          url: true,
          image: true,
        },
      },
    },
  });
  return {
    props: { categories },
  };
}
