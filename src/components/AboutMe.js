import Link from 'next/link';
import SlidingText from './SlidingText';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles['about-cards']}>
        <div className={styles['about-text-card']}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>
                  AI Solutions Consultant • Workflow Automation • Product & Systems Design
                </p>
                <h1 className={styles['about-header']}>
                  Practical AI systems for document-heavy, workflow-heavy teams.
                </h1>
              </>
            }
          />

          <section className={styles['about-summary']}>
            <p className={styles['about-p']}>
              I help healthcare and operations teams turn manual processes into AI-enabled workflows that are easier to run, easier to explain, and easier to improve.
            </p>

            <p className={styles['about-p']}>
              My work sits between business requirements, product design, and technical delivery. I focus on the parts that usually make AI projects succeed or fail: workflow discovery, data and document flow, stakeholder alignment, solution design, and implementation handoff.
            </p>

            <p className={styles['about-p']}>
              Recent work includes OCR pipelines for radiology billing, RAG systems over decades of internal documentation, conversational reporting concepts over healthcare data, and AI-assisted workflow automation inside revenue cycle operations.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/portfolio" className={styles.primaryCta}>
                View Case Studies
              </Link>
              <Link href="/contact" className={styles.secondaryCta}>
                Discuss a Workflow
              </Link>
            </div>

            <h3 className={styles['specialization-header']}>Core Services</h3>

            <ul className={styles['specialization-list']}>
              <li><strong>AI Workflow Automation</strong> — identify manual steps, design the target workflow, and define the path to implementation.</li>
              <li><strong>Document Intelligence</strong> — turn PDFs, forms, notes, and billing documents into structured data workflows.</li>
              <li><strong>Knowledge & Reporting Systems</strong> — make internal documentation and business data easier to search, retrieve, and act on.</li>
              <li><strong>Product & Systems Design</strong> — translate operational pain into requirements, demos, acceptance criteria, and delivery plans.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
