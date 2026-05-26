import Blog from '../components/Blog-Page/Blog';
import Head from 'next/head';

export async function getStaticProps() {
  return {
    props: {},
  };
}

const BlogPage = () => (
  <>
    <Head>
      <title>Project Notes | Jake Magri</title>
      <meta name="description" content="Notes from software projects, product builds, AI prototypes, and technical learning." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Project Notes | Jake Magri" />
      <meta property="og:description" content="Software project notes, product builds, AI prototypes, and technical learning." />
    </Head>
    <Blog />
  </>
);

export default BlogPage;
