import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css';
export default function ProjectCard({ title, category, image, summary, stack, slug }) {
  return <article className={styles.projectCard}>
    {image && <div className={styles.projectCard__imageContainer}><Image src={image} alt={`${title} project screenshot`} width={600} height={350} sizes="(max-width: 768px) 100vw, 360px" className={styles.projectCard__image} /></div>}
    <div className={styles.projectCard__content}><p className={styles.badge}>{category}</p><h2 className={styles.projectCard__title}>{title}</h2><p className={styles.projectCard__summary}>{summary}</p><p className={styles.projectCard__stack}><strong>Tools & focus:</strong> {stack}</p><div className={styles.projectCard__links}><Link href={`/projects/${slug}`} className={`${styles.projectCard__link} ${styles.projectCard__link_primary}`}>Read project summary →</Link></div></div>
  </article>;
}
