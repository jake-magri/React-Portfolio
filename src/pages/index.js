import AboutMe from '../components/AboutMe';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const HomePage = () => (
  <>
    <Head>
      <title>About Me - Learn More About Me</title>
      <meta name="description" content="Welcome to my personal website. Learn more about my journey, skills, and achievements." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="About Me - Learn More About Me" />
      <meta property="og:description" content="Welcome to my personal website. Learn more about my journey, skills, and achievements." />
    </Head>
    <AboutMe />
  </>
);

export default HomePage;
