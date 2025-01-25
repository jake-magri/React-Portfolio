// components/Blog.js
import { blogData } from '../../data/blogData'; // Adjusted the import path
import BlogCard from './BlogCard';
import styles from './Blog.module.css'; // Assuming you're using CSS Modules for scoped styling

export default function Blogs() {
  return (
    <div className='mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6 mb-8'>
      <h1 className={styles.blogHeader}>Blogs</h1>
      <p className={`${styles.blogHeader__p} text-lg`}>
        A collection of my thoughts, insights, and explorations in technology and innovation.
      </p>
      {/* Blog cards container */}
      <div className="container">
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
      </div>
    </div>
  );
}
