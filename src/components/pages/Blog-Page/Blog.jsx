import { blogData } from '../../../data/blogData'; // Import the blog data
import BlogCard from "./BlogCard";
import './Blog.css';

export default function Blogs() {
  return (
    <div>
      <h1 className="blog-header">Blogs</h1>
      <p className="blog-header__p text-lg">
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
