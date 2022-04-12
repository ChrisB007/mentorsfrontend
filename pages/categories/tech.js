import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const Tech = ({ categories }) => {
  const subCategories = categories[3].subcategories;

  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Find a mentor in Tech
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {subCategories.map((categoryItem) => (
              <div
                key={categoryItem.id}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover"
                    src={categoryItem.image}
                    alt=""
                  />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <Link href={categoryItem.url}>
                      <p className="text-sm font-medium text-indigo-600">
                        <a className="hover:underline">{categoryItem.name}</a>
                      </p>
                    </Link>
                    <Link href={categoryItem.url}>
                      <a className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {categoryItem.name}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {categoryItem.description}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <Link href={categoryItem.url}>
                        <p className="text-sm font-medium text-gray-900">
                          <a className="hover:underline cursor-pointer">
                            Visit category
                          </a>
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;

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
