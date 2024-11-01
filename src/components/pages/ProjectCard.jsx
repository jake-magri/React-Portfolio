import React from 'react';
import './ProjectCard.css';

<<<<<<< HEAD
=======
// define project card component
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
const ProjectCard = ({
  title = "Project Name",
  image = "/api/placeholder/400/300",
  deployedUrl = "#",
  githubUrl = "#"
}) => {
<<<<<<< HEAD
=======
  // returns JSX with props in the containers
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
  return (
    <div className="project-card">
      <div className="project-card__image-container">
        <img
          src={image}
          alt={title}
          className="project-card__image"
        />
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__links">
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--primary"
          >
            View Deployed Application
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link project-card__link--secondary"
          >
            View GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
