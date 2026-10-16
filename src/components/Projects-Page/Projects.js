import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import { projects } from '../../data/projects';
export default function Projects() {
  return <main className={styles.pageShell}><section className={styles.heroBlock}><p className={styles.eyebrow}>Selected work</p><h1 className={styles.portfolioHeader}>Software with a practical purpose.</h1><p className={styles.portfolioHeaderP}>Business applications, integrations, testing, and delivery. Each summary identifies the context, my contribution, and the limits of what it demonstrates.</p></section><div className={styles.caseStudyGrid}>{projects.map(p => <ProjectCard key={p.slug} {...p} />)}</div></main>;
}
