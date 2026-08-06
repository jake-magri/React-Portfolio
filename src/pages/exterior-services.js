import Head from 'next/head';
import ExteriorServices from '../components/ExteriorServices';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const ExteriorServicesPage = () => (
  <>
    <Head>
      <title>Magri Exterior Services | Lawn Care & Pressure Washing | Charlotte NC</title>
      <meta
        name="description"
        content="Local exterior home services in South Charlotte, NC including lawn mowing and edging, pressure washing, gutter cleaning, leaf cleanup, and exterior cleanup. Call or text 704-421-8832 for a free quote."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://jakemagri.dev/exterior-services" />
      <link rel="icon" href="/images/exterior-services/EC0E0496-8002-4125-9DB3-5B54385A5D80.png" />
      <meta property="og:title" content="Magri Exterior Services | Lawn Care & Pressure Washing | Charlotte NC" />
      <meta
        property="og:description"
        content="Local exterior home services in South Charlotte, NC including lawn mowing and edging, pressure washing, gutter cleaning, leaf cleanup, and exterior cleanup. Call or text 704-421-8832 for a free quote."
      />
      <meta property="og:type" content="website" />
    </Head>
    <ExteriorServices />
  </>
);

export default ExteriorServicesPage;
