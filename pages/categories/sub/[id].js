import { PrismaClient } from '@prisma/client';

const SubCategory = (categories) => {
  const { subCategories } = categories;
  const { id, name, url, image, description } = subCategories;
  console.log(Array.isArray(subCategories));
  return (
    <>
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Mentors to practice {name} with you
            </h2>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {/*{subCategories.map((categoryItem) => {
              
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
                        <Link href={``}>
                          <a className="hover:underline">{name}</a>
                        </Link>
                      </p>
                      <Link href={``}>
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
                          <Link href={``}>
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
            })}*/}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();
  const { id } = context.query;

  const categories = await prisma.subcategory.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
      url: true,
      icon: true,
      image: true,
      description: true,
    },
  });
  return {
    props: {
      subCategories: JSON.parse(JSON.stringify(categories)),
    },
  };
}

export default SubCategory;
