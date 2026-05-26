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
        content="Case studies in AI workflow automation, document intelligence, retrieval systems, reporting assistants, and product delivery."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Case Studies | Jake Magri" />
      <meta
        property="og:description"
        content="Selected AI systems, workflow automation, healthcare operations, and product delivery work."
      />
    </Head>
    <Projects />
  </>
);

export default PortfolioPage;
