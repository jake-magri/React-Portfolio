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
      <title>Jake Magri | AI Workflow Automation for Finance Operations</title>
      <meta
        name="description"
        content="AI workflow automation and enablement for finance, bookkeeping, healthcare operations, document intelligence, reporting, and internal knowledge systems."
      />
      <meta name="google-site-verification" content="iLv9k0dPIQu_OGNySDAki1qfSN1UeKCKdAzWmzOTlcE" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Jake Magri | AI Workflow Automation" />
      <meta
        property="og:description"
        content="Practical workflow automation for finance operations, bookkeeping admin, document collection, AI enablement, and reporting visibility."
      />
    </Head>
    <AboutMe />
  </>
);

export default HomePage;
