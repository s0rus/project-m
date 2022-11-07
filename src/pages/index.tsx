import Head from 'next/head';
import type { NextPage } from 'next';
import App from '@/domain/App/App';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projekt M</title>
        <meta name='description' content='Projekt M sussy' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <App />
    </>
  );
};

export default Home;
