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
        content="Contact Jake Magri to discuss bookkeeping workflow automation, finance operations, AI enablement, document collection systems, and practical workflow cleanup."
      />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Contact | Jake Magri" />
      <meta
        property="og:description"
        content="Send the workflow, monthly process, document collection problem, or finance operations bottleneck you want to improve."
      />
    </Head>
    <Contact />
  </>
);

export default ContactPage;
