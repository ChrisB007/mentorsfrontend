import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';
import prisma from '../lib/prisma';

export default function Home({ categories }) {
  return (
    <>
      <div className="">
        <Head>
          <title>MentorsParlor</title>
          <meta
            name="description"
            content="Up-skill or Learn new skills by practicing in real-time with experienced mentors using the 7–3–2–1 method "
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon-16x16.png"
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon-32x32.png"
            sizes="32x32"
          />
        </Head>
        <div className="">
          <main className="bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50 pb-6">
            <Hero />
            {/*Lists of categories*/}
            <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-3 max-w-7xl m-auto pb-3 mt-3">
              {categories.map((category) => {
                return (
                  <div key={category.id} className="">
                    <Category
                      key={category.id}
                      id={category.id}
                      name={category.name}
                      url={`/categories/${category.id}`}
                      icon={category.icon}
                      subCategories={category.subcategories}
                    />
                  </div>
                );
              })}
            </div>
            <Features />
          </main>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      icon: true,
      url: true,
      subcategories: {
        select: {
          id: true,
          name: true,
          url: true,
          icon: true,
        },
        select: {
          sub: {
            select: {
              id: true,
              name: true,
              url: true,
              description: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { categories },
  };
}
