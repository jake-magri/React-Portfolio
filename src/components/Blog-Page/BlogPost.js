import Image from 'next/image';
import styles from './BlogPost.module.css';
import Link from 'next/link';

export default function BlogPost({ post }) {
  const { title, image, content } = post;

  return (
    <main className={styles.pageShell}>
      <article className={styles.postShell}>
        <Link href="/blogs" className={styles.backLink}>← Back to notes</Link>
        <h1>{title}</h1>
        <div className={styles.imageContainer}>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className={styles.postImage}
          />
        </div>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
