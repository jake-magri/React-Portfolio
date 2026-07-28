import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Projects-Page/Projects.module.css';

const discoverySections = [
  {
    title: 'My Discovery Process',
    body: 'I start by listening closely to the people affected by the problem, looking for the real business need behind the request, and identifying where confusion, delay, or inconsistency is showing up.',
  },
  {
    title: 'Requirements Gathering',
    body: 'I translate stakeholder conversations into clear requirements, decision points, and success criteria so the work stays grounded in what matters most to the business.',
  },
  {
    title: 'Workflow Mapping',
    body: 'I map current-state workflows to see where handoffs, approvals, and follow-up steps create friction or risk, then surface opportunities to simplify the process.',
  },
  {
    title: 'Prioritization',
    body: 'I help teams focus on the changes that will create the most value first by balancing urgency, complexity, adoption risk, and business impact.',
  },
  {
    title: 'Delivery',
    body: 'I support implementation through clear requirements, practical tradeoff discussions, and ongoing coordination so the solution remains aligned with the original goal.',
  },
  {
    title: 'Business Outcomes',
    body: 'I keep the work connected to measurable outcomes such as faster processing, better visibility, reduced rework, and stronger cross-functional adoption.',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Head>
        <title>Case Studies | Jake Magri | Product Analysis</title>
        <meta
          name="description"
          content="A concise view of Jake Magri’s discovery process, requirements gathering, workflow mapping, prioritization, delivery, and business outcomes."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main className={styles.pageShell}>
        <section className={styles.heroBlock}>
          <p className={styles.eyebrow}>How I work</p>
          <h1 className={styles.portfolioHeader}>A practical approach to discovery and delivery</h1>
          <p className={styles.portfolioHeaderP}>
            My work is grounded in understanding the business problem clearly, aligning stakeholders, and shaping solutions that can actually be adopted.
          </p>
        </section>

        <section className={styles.caseStudyGrid}>
          {discoverySections.map((section) => (
            <article key={section.title} className={styles.caseStudyCard}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </section>

        <section className={styles.heroBlock} style={{ paddingTop: '1.5rem' }}>
          <Link href="/portfolio" className={styles.primaryCta}>
            View Project Examples
          </Link>
        </section>
      </main>
    </>
  );
}
