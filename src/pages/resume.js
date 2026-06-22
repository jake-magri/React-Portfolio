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
      <title>Experience | Jake Magri</title>
      <meta name="description" content="Experience in AI workflow automation, finance operations, healthcare SaaS, document intelligence, NL-to-SQL, RAG, AWS workflows, and enterprise delivery." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Experience | Jake Magri" />
      <meta property="og:description" content="AI workflow automation, finance operations, healthcare billing workflows, and enterprise software delivery experience." />
    </Head>
    <Resume />
  </>
);

export default ResumePage;
