import Image from 'next/image';
import styles from './BlogCard.module.css'; // Assuming you are using CSS modules
import Link from 'next/link';

const BlogCard = ({ title, image, excerpt, readMoreUrl }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCard__imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          width={400} // You can adjust the width and height based on your design
          height={300}
          className={styles.blogCard__image}
          loading="lazy" // Ensures image is lazy-loaded
        />
      </div>

      <div className={styles.blogCard__content}>
        <h3 className={styles.blogCard__title}>{title}</h3>
        <p className={styles.blogCard__excerpt}>{excerpt}</p>
        <div className={styles.blogCard__linkContainer}>
          <button className={styles.blogCard__readMore}>
            <Link href={readMoreUrl} className='text-white'>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
