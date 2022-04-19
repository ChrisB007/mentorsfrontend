import { PrismaClient } from '@prisma/client';
import Image from 'next/image';

const SubCategory = ({ categories, id }) => {
  const catId = Number(id);

  return (
    <>
      <div className="bg-slate-50">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <ul className="flex justify-center items-center">
              {categories.map((category) => {
                const { Program } = category;
                return (
                  <>
                    {Program.map((mentor) => {
                      const { subcategoryId } = mentor;

                      return (
                        <>
                          {subcategoryId === catId && (
                            <>
                              <div
                                key={mentor.id}
                                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                              >
                                <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
                                  <div className="space-y-12">
                                    <ul>
                                      <li key={category.id} className="">
                                        <div className="flex flex-col justify-center items-center">
                                          <Image
                                            className="w-40 h-40 rounded"
                                            src={category.image}
                                            alt={category.name}
                                            width={200}
                                            height={200}
                                          />
                                          <div className="flex flex-col justify-center items-center">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900 text-left m-3">
                                              {`${category.name}`}
                                            </h3>
                                            <div className="bg-white mentor-box">
                                              <p className="text-left">
                                                {mentor.name}
                                              </p>
                                              <p className="text-left whitespace-normal truncate ...">
                                                {mentor.description}
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
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
              })}
            </ul>
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
      Role: 'MENTOR',
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
