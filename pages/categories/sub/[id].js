import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState, useEffect } from 'react';

const SubCategory = ({ categories, id }) => {
  const [loading, setLoading] = useState(false);
  const catId = Number(id);

  useEffect(() => {
    if (!categories) {
      setLoading(true);
    }
  }, []);

  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center"></div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {loading ? (
              <ClipLoader
                className="flex justify-center items-center"
                color={'#555555'}
                loading={loading}
                size={50}
              />
            ) : (
              categories.map((category) => {
                const { Program } = category;
                return (
                  <>
                    {Program.map((program) => {
                      const { subcategoryId, description, name } = program;

                      return (
                        <>
                          {subcategoryId === catId && (
                            <>
                              <div
                                key={program.id}
                                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                              >
                                <div className="flex-shrink-0">
                                  <Image
                                    className="h-40 w-full object-contain"
                                    src={category.image}
                                    alt={category.name}
                                    layout="responsive"
                                    width={200}
                                    height={100}
                                  />
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                  <div className="flex-1">
                                    <Link href={`/profile/${category.id}`}>
                                      <a className="block mt-2">
                                        <div className="flex flex-col justify-center items-center">
                                          <p className="text-sm font-medium text-slate-600">
                                            {category.name}
                                          </p>
                                          <p className="mt-3 text-base text-gray-500">
                                            {name}
                                          </p>
                                          <p className="mt-3 text-base text-gray-500">
                                            {description}
                                          </p>
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
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

  const categories = await prisma.user.findMany({
    where: {
      Role: 'Mentor',
    },
    select: {
      id: true,
      name: true,
      image: true,
      Program: {
        select: {
          id: true,
          name: true,
          description: true,
          subcategoryId: true,
        },
      },
    },
  });

  return {
    props: {
      error: !id && `No category found for id: ${id}`,
      categories,
      id,
    },
  };
}

export default SubCategory;
