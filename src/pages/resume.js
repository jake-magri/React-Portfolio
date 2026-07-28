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
      <title>Experience | Jake Magri | Product Analyst & Business Systems</title>
      <meta name="description" content="Experience in product analysis, requirements gathering, stakeholder collaboration, workflow improvement, and practical business solutions across operations and delivery." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Experience | Jake Magri" />
      <meta property="og:description" content="Experience in business analysis, process improvement, requirements gathering, and cross-functional delivery for product and operations teams." />
    </Head>
    <Resume />
  </>
);

export default ResumePage;
