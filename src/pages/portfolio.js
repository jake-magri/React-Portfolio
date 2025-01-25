import Projects from '../components/Projects-Page/Projects';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const PortfolioPage = () => (
  <>
    <Head>
      <title>My Portfolio - Showcase of My Work</title>
      <meta name="description" content="Check out my portfolio to see the projects and applications I have worked on." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="My Portfolio - Showcase of My Work" />
      <meta property="og:description" content="Check out my portfolio to see the projects and applications I have worked on." />
    </Head>
    <Projects />
  </>
);

export default PortfolioPage;
