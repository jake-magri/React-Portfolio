import Blog from '../components/Blog-Page/Blog';
import Head from 'next/head';

export async function getStaticProps() {
  // If there is dynamic data to fetch, you can do that here.
  return {
    props: {},
  };
}

const BlogPage = () => (
  <>
    <Head>
      <title>My Blog - Insights and Articles</title>
      <meta name="description" content="Read insightful articles and blogs on various topics. Stay updated with new posts." />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="My Blog - Insights and Articles" />
      <meta property="og:description" content="Read insightful articles and blogs on various topics. Stay updated with new posts." />
    </Head>
    <Blog />
  </>
);

export default BlogPage;
