// pages/blogs/[slug].js
import Head from 'next/head';
import BlogPost from '../../components/Blog-Page/BlogPost';
import { blogData } from '../../data/blogData';

// This function generates paths for all blog posts (slug-based)
export async function getStaticPaths() {
  // Generate paths for each post using the slug
  const paths = blogData.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// This function fetches data for a specific blog post at build time
export async function getStaticProps({ params }) {
  const { slug } = params;

  // Find the post matching the slug from the blogData
  const post = blogData.find((post) => post.slug === slug);

  // If post not found, return a 404 response
  if (!post) {
    return { notFound: true };
  }

  // Return the post as a prop
  return { props: { post } };
}

const BlogPostPage = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>; // Optional loading state (not likely needed with static generation)
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        {/* Add other meta tags as needed */}
      </Head>
      <BlogPost post={post} /> {/* Pass the post data to BlogPost component */}
    </>
  );
};

export default BlogPostPage;
