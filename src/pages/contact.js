import Contact from '../components/Contact';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const ContactPage = () => (
  <>
    <Head>
      <title>Contact | Jake Magri | Product Analysis</title>
      <meta
        name="description"
        content="Contact Jake Magri to discuss product analysis, requirements gathering, workflow improvement, stakeholder collaboration, and practical business solutions."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Contact | Jake Magri" />
      <meta
        property="og:description"
        content="Share a stakeholder challenge, process gap, or operational goal that would benefit from business analysis and workflow improvement."
      />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
