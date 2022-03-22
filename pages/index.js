import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mentors Parlor</title>
        <meta name="description" content="Mentors Parlor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>
    </div>
  );
}
