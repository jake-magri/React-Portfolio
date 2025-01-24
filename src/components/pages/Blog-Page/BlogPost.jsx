import React from 'react';
import { useParams } from 'react-router-dom';
import { blogData } from '../../../data/blogData.js';

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogData.find(b => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-12">
        <h1 className="text-xl font-bold">Blog not found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      <div
        className="text-lg text-gray-700 leading-relaxed mt-6"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <div className="text-center mt-6">
        <a
          href={blog.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xl font-semibold"
        >
          Check out related product
        </a>
      </div>
    </div>
  );
}
