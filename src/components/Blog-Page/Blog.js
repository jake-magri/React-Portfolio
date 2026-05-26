import { blogData } from '../../data/blogData';
import BlogCard from './BlogCard';
import styles from './Blog.module.css';
import SlidingText from '../SlidingText';

export default function Blogs() {
  return (
    <div className='mt-12 mx-4 sm:mx-6 mb-8'>
      <SlidingText direction="top" text={<h1 className={`${styles.blogHeader} ${styles.slideIn}`}>Project Notes</h1>} />
      <SlidingText direction="fade" text={<p className={`${styles.blogHeader__p} text-lg`}>
        Notes on practical AI systems, document intelligence, retrieval workflows, and natural-language reporting design.
      </p>} />

      <div className="container">
        <SlidingText direction="zoom" text={
          <div className="row gx-4">
            {blogData.map((blog) => (
              <div className="col-sm" key={blog.slug}>
                <BlogCard
                  title={blog.title}
                  image={blog.image}
                  readMoreUrl={`/blogs/${blog.slug}`}
                  excerpt={blog.excerpt}
                />
              </div>
            ))}
          </div>
        }/>
      </div>
    </div>
  );
}
