import React from 'react';
import './BlogCard.css';
import { NavLink } from 'react-router-dom';

const BlogCard = ({ title, image, excerpt, readMoreUrl }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__image-container">
        <img
          src={image}
          alt={title}
          className="blog-card__image"
        />
      </div>

      <div className="blog-card__content">
        <h3 className="blog-card__title">{title}</h3>
        <p className="blog-card__excerpt">{excerpt}</p>

        <div className="blog-card__link-container">
        <NavLink
            to={readMoreUrl}
            className="blog-card__read-more"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
