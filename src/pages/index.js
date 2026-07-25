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
      <title>Jake Magri | Technical Product &amp; Operations Leader | Enterprise AI Systems</title>
      <meta
        name="description"
        content="Technical Product &amp; Business Operations Leader specializing in enterprise AI automation, workflow governance, compliance-first architecture, and high-velocity delivery. Expertise in document intelligence, release coordination, and revenue-generating infrastructure."
      />
      <meta name="google-site-verification" content="iLv9k0dPIQu_OGNySDAki1qfSN1UeKCKdAzWmzOTlcE" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Jake Magri | Technical Product &amp; Operations Leader" />
      <meta
        property="og:description"
        content="Architecting enterprise AI systems, workflow governance, and high-velocity delivery pipelines. Expertise in document intelligence, SLA-driven operations, compliance architecture, and revenue-generating infrastructure."
      />
    </Head>
    <AboutMe />
  </>
);

export default HomePage;
