import Link from 'next/link';
import SlidingText from './SlidingText';
import styles from './AboutMe.module.css';

const focusAreas = [
  {
    title: 'Finance workflow automation',
    text: 'Client document collection, intake, reminders, month-end trackers, reporting visibility, and admin workflows for bookkeeping and finance-adjacent teams.',
  },
  {
    title: 'Applied AI systems',
    text: 'Document intelligence, RAG knowledge systems, natural-language reporting, prompt workflows, and AI-assisted operational tools.',
  },
  {
    title: 'Technical enablement',
    text: 'Practical solution design across low-code tools, SQL, APIs, AWS workflows, and lightweight scripting when the workflow actually needs it.',
  },
];

const proofPoints = ['OCR / document intelligence', 'NL-to-SQL reporting', 'RAG knowledge systems', 'Financial-services delivery'];

export default function AboutMe() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>AI workflow automation for finance and operations teams</p>
                <h1>Clean up repetitive admin work with practical automation.</h1>
              </>
            }
          />

          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I help teams turn messy workflows, documents, reporting needs, and internal knowledge into simple systems that reduce manual work and make operations easier to run.
              </p>
            }
          />

          <div className={styles.ctaRow}>
            <Link href="/bookkeeping-workflow-automation" className={styles.primaryCta}>
              View Finance Automation
            </Link>
            <Link href="/portfolio" className={styles.secondaryCta}>
              View Case Studies
            </Link>
          </div>

          <div className={styles.trustLine}>
            {proofPoints.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>
            <span className={styles.statusDot}></span>
            <span>Workflow Operating Model</span>
          </div>
          <div className={styles.workflowPreview}>
            <div>01. Map the bottleneck</div>
            <div>02. Choose low-code first</div>
            <div>03. Add AI only where useful</div>
            <div>04. Hand off a repeatable system</div>
          </div>
          <p className={styles.cardNote}>
            The goal is not more software. The goal is less chasing, fewer handoffs, clearer status, and cleaner operational visibility.
          </p>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>What I do</p>
          <h2>Automation work that stays close to business value.</h2>
          <p>
            My work sits between finance operations, workflow discovery, technical implementation, and AI enablement. I use low-code tools first, then APIs, SQL, and lightweight code only when the workflow calls for it.
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

      <section className={styles.splitSection}>
        <div>
          <p className={styles.eyebrow}>Background</p>
          <h2>Finance-adjacent, healthcare-tested, automation-focused.</h2>
        </div>
        <div className={styles.copyCard}>
          <p>
            Recent work includes document-intelligence workflows for healthcare operations, retrieval systems over long-lived technical knowledge, natural-language reporting concepts, AWS document-processing workflows, and enterprise release coordination in financial services.
          </p>
          <p>
            That combination is now pointed at a clear value center: helping bookkeeping, finance, and operations teams make recurring admin work easier to run.
          </p>
        </div>
      </section>
    </main>
  );
}
