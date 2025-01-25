// pages/blogs/[slug].js
import { useRouter } from 'next/router';
import { blogData } from '../../data/blogData'; // Adjust the path as necessary
import Image from 'next/image';
import styles from './BlogPost.module.css'; // Assuming you are using CSS modules for styles

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  
  // Find the blog post based on the slug
  const blog = blogData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h1 className="text-xl font-bold">Blog not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <div className={styles.imageContainer}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={1200} // Adjust the width and height to match your design
          height={800}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div
        className="text-lg text-gray-700 leading-relaxed mt-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <div className="text-center mt-6">
        <a
          href={blog.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xl font-semibold"
        >
          Check out related product
        </a>
      </div>
    </div>
  );
}
