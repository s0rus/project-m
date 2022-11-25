import Head from 'next/head';
import type { NextPage } from 'next';
import App from '@/domain/App/App';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Murzyniarnia.com</title>
        <meta name='description' content='Strona do oglądania filmów' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <App />
    </>
  );
};

export default Home;
