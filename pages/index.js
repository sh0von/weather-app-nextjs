// pages/index.js
import Head from 'next/head';
import Weather from '../components/Weather';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Weather app using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Weather />
      </main>
    </div>
  );
};

export default Home;
