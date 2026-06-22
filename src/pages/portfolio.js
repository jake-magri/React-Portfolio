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
      <title>Case Studies | Jake Magri</title>
      <meta
        name="description"
        content="Case studies in bookkeeping workflow automation, AI workflow systems, document intelligence, retrieval systems, reporting assistants, and enterprise delivery."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Case Studies | Jake Magri" />
      <meta
        property="og:description"
        content="Selected systems across finance workflow automation, document intelligence, retrieval, reporting, healthcare operations, and enterprise delivery."
      />
    </Head>
    <Projects />
  </>
);

export default PortfolioPage;
