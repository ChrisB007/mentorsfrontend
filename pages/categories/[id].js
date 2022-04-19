import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Category = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const { name, subcategories } = categories;

  useEffect(() => {
    if (!subcategories) {
      setLoading(true);
    }
  }, []);

  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              {`Find a mentor in ${name}`}
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {loading ? (
              <ClipLoader
                className="flex justify-center items-center"
                color={'#555555'}
                loading={loading}
                size={50}
              />
            ) : (
              subcategories.map((categoryItem) => {
                const { id, name, description, image, url } = categoryItem;
                return (
                  <div
                    key={id}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={image}
                        alt={name}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">
                          <Link href={`/categories/sub/${id}`}>
                            <a className="hover:underline">{name}</a>
                          </Link>
                        </p>
                        <Link href={`/categories/sub/${id}`}>
                          <a className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">
                              {name}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {description}
                            </p>
                          </a>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            <Link href={`/categories/sub/${id}`}>
                              <a className="hover:underline cursor-pointer">
                                Visit category
                              </a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const { id } = context.query;
  const categories = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
    include: {
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
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}

export default Category;
