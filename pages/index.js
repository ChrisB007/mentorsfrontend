import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';
import { getSession } from 'next-auth/react';

export default function Home({ session }) {
  return (
    <div className="">
      <Head>
        <title>Mentors Parlor</title>
        <meta
          name="description"
          content="Upskill or Learn new skills by practicing with mentors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50 pb-6">
        <Hero />
        <Category />
        <Features />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
