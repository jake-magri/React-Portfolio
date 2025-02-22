import { blogData } from '../../data/blogData'; // Adjusted the import path
import BlogCard from './BlogCard';
import styles from './Blog.module.css'; // Assuming you're using CSS Modules for scoped styling
import SlidingText from '../SlidingText'; // Import the SlidingText component

export default function Blogs() {
  return (
    <div className='mt-12 mx-4 sm:mx-6 mb-8'>
      <SlidingText direction="top" text={<h1 className={`${styles.blogHeader} ${styles.slideIn}`}>Blogs</h1>} />
      <SlidingText direction="fade" text={<p className={`${styles.blogHeader__p} text-lg`}>
        A collection of my thoughts, insights, and explorations in technology and innovation.
      </p>} />
      
      {/* Blog cards container */}
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
