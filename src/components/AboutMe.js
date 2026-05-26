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
                  Practical AI systems that reduce manual work and make operations easier to run.
                </h1>
              </>
            }
          />

          <section className={styles['about-summary']}>

            <p className={styles['about-p']}>
              I help teams find friction inside operational workflows and turn those bottlenecks into practical automation, reporting, and AI-enabled systems.
            </p>

            <p className={styles['about-p']}>
              My work sits between business requirements, product thinking, and technical delivery — translating operational pain into workflows, prototypes, requirements, and implementation plans teams can actually adopt.
            </p>

            <p className={styles['about-p']}>
              Recent work includes document-intelligence workflows for healthcare operations, retrieval systems over long-lived technical knowledge, natural-language reporting concepts, and AI-assisted operational automation.
            </p>

            <div className={styles.ctaRow}>
              <Link href="/portfolio" className={styles.primaryCta}>
                View Case Studies
              </Link>

              <Link href="/contact" className={styles.secondaryCta}>
                Discuss a Workflow
              </Link>
            </div>

            <h3 className={styles['specialization-header']}>
              Services
            </h3>

            <ul className={styles['specialization-list']}>
              <li>
                <strong>Workflow Review</strong>
                Map how work currently moves across people, tools, documents, and handoffs.
              </li>

              <li>
                <strong>Automation Opportunity Assessment</strong>
                Identify where AI, dashboards, integrations, or process changes can reduce manual work.
              </li>

              <li>
                <strong>AI Prototype / Pilot</strong>
                Build a focused proof of concept for document workflows, reporting assistants, internal tools, or customer-facing automation.
              </li>

              <li>
                <strong>Reporting &amp; Knowledge Systems</strong>
                Improve how teams search documentation, retrieve answers, and access business information.
              </li>
            </ul>

          </section>

        </div>
      </div>
    </div>
  );
}