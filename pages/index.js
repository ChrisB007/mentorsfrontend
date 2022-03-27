import Head from 'next/head';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Category from '../components/Categories';

export default function Home() {
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
            <Category />
            <Features />
          </main>
        </div>
      </div>
    </>
  );
}
