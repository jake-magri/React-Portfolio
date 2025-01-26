// src/components/Blog-Page/BlogPost.js
import Image from 'next/image';
import styles from './BlogPost.module.css'; // Assuming you are using CSS modules for styles
import Link from 'next/link';

export default function BlogPost({ post }) {
  // Destructure the post data for easier access
  const { title, image, content, affiliateLink } = post;

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto px-4 space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>

      {/* Image container */}
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={1200} // Adjust the width and height to match your design
          height={800}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Blog content */}
      <div
        className="text-lg text-gray-700 leading-relaxed mt-6"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>

      {/* Affiliate link */}
      {affiliateLink && (
        <div className="text-center mt-6">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-xl font-semibold"
          >
            Check out related product
          </a>
        </div>
      )}

      {/* Back Button */}
      <div className="flex flex-col justify-center">
        <Link href="/blogs" className="flex justify-center">
          <button className={styles['back-button']}>Back</button>
        </Link>
      </div>
    </div>
  );
}
