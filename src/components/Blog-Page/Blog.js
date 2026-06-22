import { blogData } from '../../data/blogData';
import BlogCard from './BlogCard';
import styles from './Blog.module.css';
import SlidingText from '../SlidingText';

export default function Blogs() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="top"
          text={
            <>
              <p className={styles.eyebrow}>Project notes</p>
              <h1 className={styles.blogHeader}>Thinking in workflows</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p className={styles.blogHeaderP}>
              Notes on document intelligence, retrieval systems, natural-language reporting, and practical AI workflows that teams can actually trust.
            </p>
          }
        />
      </section>

      <section className={styles.blogGrid}>
        {blogData.map((blog) => (
          <BlogCard
            key={blog.slug}
            title={blog.title}
            image={blog.image}
            readMoreUrl={`/blogs/${blog.slug}`}
            excerpt={blog.excerpt}
          />
        ))}
      </section>
    </main>
  );
}
