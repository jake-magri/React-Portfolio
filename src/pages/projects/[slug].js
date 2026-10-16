import Link from 'next/link';
import { projects } from '../../data/projects';
import SiteHead from '../../components/SiteHead';
import styles from '../../components/Projects-Page/Projects.module.css';
export function getStaticPaths() { return { paths: projects.map(p => ({ params: { slug: p.slug } })), fallback: false }; }
export function getStaticProps({ params }) { const project = projects.find(p => p.slug === params.slug); return project ? { props: { project } } : { notFound: true }; }
export default function ProjectPage({ project: p }) {
  return <><SiteHead title={`${p.title} | Jake Magri`} description={p.summary} /><main className={styles.pageShell}><article className={styles.detailShell}><Link href="/portfolio">← All projects</Link><header className={styles.heroBlock}><p className={styles.eyebrow}>{p.category}</p><h1 className={styles.portfolioHeader}>{p.title}</h1><p className={styles.portfolioHeaderP}>{p.summary}</p></header><section className={styles.detailSection}><h2>The problem</h2><p>{p.problem}</p></section><section className={styles.detailSection}><h2>My contribution</h2><ul>{p.contribution.map(c => <li key={c}>{c}</li>)}</ul><p><strong>Tools & focus:</strong> {p.stack}</p></section><section className={styles.detailSection}><h2>Validation & considerations</h2><p>{p.validation}</p></section><aside className={styles.detailNote}>{p.boundary}</aside><Link href="/contact" className={styles.primaryCta}>Discuss my experience</Link></article></main></>;
}
