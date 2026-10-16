import styles from './BlogCard.module.css'; // Assuming you are using CSS modules
import Link from 'next/link';

const BlogCard = ({ title, excerpt, readMoreUrl }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogCard__content}>
        <h3 className={styles.blogCard__title}>{title}</h3>
        <p className={styles.blogCard__excerpt}>{excerpt}</p>
        <div className={styles.blogCard__linkContainer}>
          <Link href={readMoreUrl} className={styles.blogCard__readMore}>Read note →</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
