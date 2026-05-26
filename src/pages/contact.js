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
      <title>Contact | Jake Magri</title>
      <meta
        name="description"
        content="Contact Jake Magri to discuss AI workflow automation, document intelligence, reporting systems, internal knowledge tools, and product systems design."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Contact | Jake Magri" />
      <meta
        property="og:description"
        content="Discuss a workflow, reporting process, document problem, or AI system you want to improve."
      />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
