import AboutMe from '../components/AboutMe';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const HomePage = () => (
  <>
    <Head>
      <title>Jake Magri | Product Analyst | Business Systems | Product Operations</title>
      <meta
        name="description"
        content="Product Analyst and business systems professional focused on requirements gathering, stakeholder collaboration, workflow improvement, and AI-enabled business solutions."
      />
      <meta name="google-site-verification" content="iLv9k0dPIQu_OGNySDAki1qfSN1UeKCKdAzWmzOTlcE" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Jake Magri | Product Analyst | Business Systems" />
      <meta
        property="og:description"
        content="Business analysis, requirements gathering, workflow improvement, and practical solutions for product and operations teams."
      />
    </Head>
    <AboutMe />
  </>
);

export default HomePage;
