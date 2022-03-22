import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Mentors Parlor</title>
        <meta name="description" content="Mentors Parlor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50">
        <Hero />
      </main>
    </div>
  );
}
