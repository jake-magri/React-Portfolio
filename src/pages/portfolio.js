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
      <title>Case Studies | Jake Magri | Enterprise AI &amp; Operations</title>
      <meta
        name="description"
        content="Enterprise case studies in AI automation, document intelligence, workflow governance, release coordination, revenue-generating infrastructure, and compliance-first system architecture."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Enterprise Case Studies | Jake Magri" />
      <meta
        property="og:description"
        content="Selected systems and case studies: $60K revenue-generating document intelligence, 98% SLA enterprise delivery, 20+ years of data governance, and enterprise AI architecture."
      />
    </Head>
    <Projects />
  </>
);

export default PortfolioPage;
