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
      <meta name="description" content="Experience in AI solutions, workflow automation, healthcare SaaS, RCM systems, document intelligence, RAG, and product systems design." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Experience | Jake Magri" />
      <meta property="og:description" content="AI solutions, workflow automation, healthcare operations, and technical delivery experience." />
    </Head>
    <Resume />
  </>
);

export default ResumePage;
