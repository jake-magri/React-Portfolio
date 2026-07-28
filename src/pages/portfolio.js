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
      <title>Case Studies | Jake Magri | Product Analysis &amp; Business Systems</title>
      <meta
        name="description"
        content="Case studies focused on requirements gathering, workflow improvement, stakeholder collaboration, and practical business solutions."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Case Studies | Jake Magri" />
      <meta
        property="og:description"
        content="Selected work in product analysis, workflow design, process improvement, and AI-enabled business solutions."
      />
    </Head>
    <Projects />
  </>
);

export default PortfolioPage;
