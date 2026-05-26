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
      <title>Jake Magri | AI Solutions Consultant</title>
      <meta
        name="description"
        content="AI solutions consultant helping healthcare and operations teams design practical systems for workflow automation, document intelligence, reporting, and internal knowledge."
      />
      <meta name="google-site-verification" content="iLv9k0dPIQu_OGNySDAki1qfSN1UeKCKdAzWmzOTlcE" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Jake Magri | AI Solutions Consultant" />
      <meta
        property="og:description"
        content="Workflow automation, document intelligence, reporting systems, and practical AI solution design for healthcare and operations teams."
      />
    </Head>
    <AboutMe />
  </>
);

export default HomePage;
