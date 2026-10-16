import styles from './BlogPost.module.css';
import Link from 'next/link';

export default function BlogPost({ post }) {
  const { title, content } = post;

  return (
    <main className={styles.pageShell}>
      <article className={styles.postShell}>
        <Link href="/blogs" className={styles.backLink}>← Back to notes</Link>
        <h1>{title}</h1>
        <p>Engineering design note · General considerations, not a production benchmark.</p>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  );
}
