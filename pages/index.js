import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';
import axios from 'axios';

export default function Home({ data }) {
  const { categories } = data;
  const catInfo = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
      url: category.url,
      icon: category.icon,
      subCategories: category.subCategories,
    };
  });

  return (
    <>
      <div className="">
        <Head>
          <title>Mentors Parlor</title>
          <meta
            name="description"
            content="Up-skill or Learn new skills by practicing in real-time with experienced mentors using the 7–3–2–1 method "
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <main className="bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50 pb-6">
            <Hero />
            <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 px-3 max-w-7xl m-auto pb-3 mt-3">
              {catInfo.map((category) => {
                return (
                  <div key={category.id} className="">
                    <Category
                      key={category.id}
                      id={category.id}
                      name={category.name}
                      url={category.url}
                      icon={category.icon}
                      subCategories={category.subCategories}
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
  const categoryUrl = `https://www.mentorsparlor.com/api/categories`;
  const { data } = await axios.get(categoryUrl);
  return {
    props: { data },
  };
}
