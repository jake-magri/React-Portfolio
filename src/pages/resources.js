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
      <title>Resources - Helpful Tools and Guides</title>
      <meta name="description" content="Explore a collection of helpful resources, guides, and tools for developers." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Resources - Helpful Tools and Guides" />
      <meta property="og:description" content="Explore a collection of helpful resources, guides, and tools for developers." />
    </Head>
    <Resources />
  </>
);

export default ResourcesPage;
