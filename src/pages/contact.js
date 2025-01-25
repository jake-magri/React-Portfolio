import Contact from '../components/Contact';
import Head from 'next/head';

// If you need to fetch data before the page is rendered, use getStaticProps
export async function getStaticProps() {
  // Fetch any required static data here, if needed
  // For now, we return an empty object since there's no dynamic data
  return {
    props: {}, // Can be used to pass data to the page
  };
}

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Me - Get in Touch</title>
      <meta name="description" content="Contact me for inquiries, project collaborations, or questions. I'm here to help!" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Contact Me - Get in Touch" />
      <meta property="og:description" content="Contact me for inquiries, project collaborations, or questions. I'm here to help!" />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
