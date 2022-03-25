import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';
import { getSession } from 'next-auth/react';
import Dashboard from './dashboard';

export default function Home({ session }) {
  console.log(session);
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
  return <Dashboard />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
