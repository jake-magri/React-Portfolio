import { useRouter } from 'next/router';
import BlogPost from '../../components/Blog-Page/BlogPost';

const BlogPostPage = () => {
  const { slug } = useRouter().query;  // `slug` will be dynamic in the URL

  if (!slug) {
    return <div>Loading...</div>;  // Optional loading state
  }

  return <BlogPost slug={slug} />;
};

export default BlogPostPage;
