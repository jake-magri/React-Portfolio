import Image from 'next/image';
import styles from './ProjectCard.module.css';

const ProjectCard = ({
  title = 'Case Study',
  image = '/api/placeholder/400/300',
  summary = '',
  outcome = '',
  stack = '',
  deployedUrl = '#',
  githubUrl = '#',
  primaryLabel = 'View Project',
  secondaryLabel = 'View Repository',
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className={styles.projectCard__image}
        />
      </div>

      <div className={styles.projectCard__content}>
        <h3 className={styles.projectCard__title}>{title}</h3>
        {summary && <p className={styles.projectCard__summary}>{summary}</p>}
        {outcome && <p className={styles.projectCard__outcome}><strong>Outcome:</strong> {outcome}</p>}
        {stack && <p className={styles.projectCard__stack}><strong>Stack:</strong> {stack}</p>}

        <div className={styles.projectCard__links}>
          {deployedUrl && deployedUrl !== '#' && (
            <a
              href={deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard__link} ${styles.projectCard__link_primary}`}
            >
              {primaryLabel}
            </a>
          )}

          {githubUrl && githubUrl !== '#' && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.projectCard__link} ${styles.projectCard__link_secondary}`}
            >
              {secondaryLabel}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
