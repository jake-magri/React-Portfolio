import Image from 'next/image'; // Import for optimized image loading
import styles from './ProjectCard.module.css'; // Import the CSS module

// Define ProjectCard component
const ProjectCard = ({
  title = "Project Name",
  image = "/api/placeholder/400/300",
  deployedUrl = "#",
  githubUrl = "#"
}) => {
  // Returns JSX with props in the containers
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400} // Set width to match the intended size
          height={300} // Set height to match the intended size
          className={styles.projectCard__image}
        />
      </div>

      <div className={styles.projectCard__content}>
        <h3 className={styles.projectCard__title}>{title}</h3>

        <div className={styles.projectCard__links}>
          <a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectCard__link} ${styles.projectCard__link_primary}`}
          >
            View Deployed Application
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.projectCard__link} ${styles.projectCard__link_secondary}`}
          >
            View GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
