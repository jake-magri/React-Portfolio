import Resources from '../components/Resources';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const ResourcesPage = () => (
  <>
    <Head>
      <title>Resources | Jake Magri</title>
      <meta name="description" content="Prompt systems and practical tools for operators, builders, creators, and decision-makers." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Resources | Jake Magri" />
      <meta property="og:description" content="Prompt systems for planning, prioritization, decision-making, and execution." />
    </Head>
    <Resources />
  </>
);

export default ResourcesPage;
