import Link from 'next/link';
import SlidingText from './SlidingText';
import styles from './AboutMe.module.css';

const focusAreas = [
  {
    title: 'Business Analysis & Product Discovery',
    text: 'Partnering with business, product, operations, and engineering teams to uncover the real problem, define goals, and shape practical solutions.',
  },
  {
    title: 'Business Systems & Workflow Improvement',
    text: 'Mapping current-state workflows, clarifying handoffs, and strengthening processes so work moves with less friction and more consistency.',
  },
  {
    title: 'AI-enabled Business Solutions',
    text: 'Evaluating where automation and AI can support decision-making, customer experience, and day-to-day operations without overcomplicating the process.',
  },
  {
    title: 'Requirements & User Stories',
    text: 'Turning stakeholder conversations into clear requirements, acceptance criteria, and user stories that support delivery and adoption.',
  },
  {
    title: 'Process Optimization',
    text: 'Improving operating rhythms, responsibilities, and controls so teams can execute with more clarity and less rework.',
  },
  {
    title: 'Operational Excellence',
    text: 'Connecting analysis, delivery, and adoption so changes are practical, measurable, and sustainable.',
  },
];

const proofPoints = ['Stakeholder interviews & requirements gathering', 'Workflow analysis & process improvement', 'Cross-functional collaboration', 'Business outcomes & adoption'];

export default function AboutMe() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>Product Analysis • Business Systems • Workflow Improvement</p>
                <h1>Helping organizations turn complex business problems into practical systems, better processes, and measurable outcomes.</h1>
              </>
            }
          />

          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I partner with business, product, operations, and engineering teams to understand the problem, gather requirements, improve workflows, and deliver solutions that create real business value.
              </p>
            }
          />

          <div className={styles.ctaRow}>
            <Link href="/portfolio" className={styles.primaryCta}>
              View Case Studies
            </Link>
            <Link href="/contact" className={styles.secondaryCta}>
              Connect / Strategy
            </Link>
          </div>

          <div className={styles.trustLine}>
            {proofPoints.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <span className={styles.statusDot}></span>
            <span>Discovery & Delivery Framework</span>
          </div>
          <div className={styles.workflowPreview}>
            <div>01. Understand the business problem</div>
            <div>02. Gather requirements & stakeholder input</div>
            <div>03. Map the workflow & define priorities</div>
            <div>04. Deliver a practical solution</div>
          </div>
          <p className={styles.cardNote}>
            The focus is clear: better decisions, stronger adoption, and measurable operational improvement.
          </p>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Operational Philosophy</p>
          <h2>Business-focused analysis that connects people, process, and systems.</h2>
          <p>
            I work at the intersection of business needs, operational design, and practical delivery. Through stakeholder interviews, requirements gathering, workflow analysis, and process improvement, I help teams turn ambiguity into clear next steps and measurable outcomes.
          </p>
        </div>

        <div className={styles.focusGrid}>
          {focusAreas.map((area) => (
            <article key={area.title} className={styles.focusCard}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
