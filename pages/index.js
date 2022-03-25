import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';
import { getSession } from 'next-auth/react';
import Mentors from '../components/mentors';

export default function Home({ session }) {
  console.log('SESS', session);
  if (!session) {
    return (
      <div className="">
        <Head>
          <title>Mentors Parlor</title>
          <meta
            name="description"
            content="Up-skill or Learn new skills by practicing with mentors"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="">
          <main className="bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50 pb-6">
            <Hero />
            <Category />
            <Features />
          </main>
        </div>
      </div>
    );
  }

  console.log('LOOOOO', session);
  return <Mentors />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log('SESS00', session);
  return {
    props: {
      session,
    },
  };
}
