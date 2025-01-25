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
      <title>My Resume - Professional Background</title>
      <meta name="description" content="View my resume to learn about my experience, education, and skills." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="My Resume - Professional Background" />
      <meta property="og:description" content="View my resume to learn about my experience, education, and skills." />
    </Head>
    <Resume />
  </>
);

export default ResumePage;
