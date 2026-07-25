import Resume from '../components/Resume';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const ResumePage = () => (
  <>
    <Head>
      <title>Experience | Jake Magri | Technical Product & Operations</title>
      <meta name="description" content="Technical Product & Operations leadership experience spanning enterprise AI systems, workflow governance, document intelligence, healthcare SaaS, release coordination, NL-to-SQL systems, RAG architecture, and cloud infrastructure." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Experience | Jake Magri" />
      <meta property="og:description" content="Enterprise-scale experience in technical product leadership, operations governance, AI automation, compliance-first architecture, healthcare systems, and revenue-generating infrastructure." />
    </Head>
    <Resume />
  </>
);

export default ResumePage;
