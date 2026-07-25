import Link from 'next/link';
import SlidingText from './SlidingText';
import styles from './AboutMe.module.css';

const focusAreas = [
  {
    title: 'Enterprise AI & Workflow Governance',
    text: 'Architecting scalable document intelligence, retrieval systems, and automated workflows that reduce cycle time, enforce SLA compliance, and maintain regulatory alignment (HIPAA, SOC 2) without sacrificing engineering velocity.',
  },
  {
    title: 'Operational Scale & System Design',
    text: 'Designing governance frameworks for multi-team delivery, building release management systems, and creating operational metrics that move beyond outputs to P&L efficiency and accuracy baselines (95%+).',
  },
  {
    title: 'Compliance-First Architecture',
    text: 'Building enterprise systems that balance automation throughput with regulatory guardrails, audit trails, and operational transparency across healthcare, financial services, and mission-critical environments.',
  },
];

const proofPoints = ['$60K+ revenue-generating solutions', '98% SLA delivery at enterprise scale', 'HIPAA/SOC 2 compliance architecture', '20+ years of data governance'];

export default function AboutMe() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>Technical Product & Business Operations</p>
                <h1>Governing enterprise AI systems, automated workflows, and high-velocity delivery.</h1>
              </>
            }
          />

          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I architect enterprise systems and governance frameworks that enforce operational throughput, regulatory compliance, and measurable business impact. My work spans AI-driven automation, multi-team release coordination, and revenue-generating infrastructure.
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
            <span>System Governance Framework</span>
          </div>
          <div className={styles.workflowPreview}>
            <div>01. Audit bottlenecks &amp; throughput</div>
            <div>02. Design SLA &amp; compliance guardrails</div>
            <div>03. Build governance &amp; automation layers</div>
            <div>04. Enforce accountability &amp; metrics</div>
          </div>
          <p className={styles.cardNote}>
            The goal is measurable impact: SLA adherence, reduced cycle time (15–30%), execution accuracy (95%+), and business unit velocity.
          </p>
        </div>
      </section>

      <section className={styles.sectionBlock}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Operational Philosophy</p>
          <h2>System governance that scales enterprise velocity.</h2>
          <p>
            My work bridges business architecture, technical execution, and compliance strategy. I audit manual bottlenecks, design enforcement mechanisms, and architect systems that move beyond raw outputs to sustainable P&L efficiency, SLA adherence, and measurable business impact.
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
          <p className={styles.eyebrow}>Experience</p>
          <h2>Enterprise-scale AI, operations, and delivery governance.</h2>
        </div>
        <div className={styles.copyCard}>
          <p>
            I've architected enterprise document-intelligence systems that generated $60K+ revenue, governed multi-team release delivery at 98% SLA adherence, and built retrieval systems over 20+ years of mission-critical transactional data. My work navigates regulatory alignment (HIPAA, SOC 2, compliance frameworks) while maintaining engineering velocity and measurable business impact.
          </p>
          <p>
            I'm positioned for Technical Product Manager, Product Ops Lead, or Enterprise Operations Leader roles—where systemic impact, regulatory control, and structural leverage define success.
          </p>
        </div>
      </section>
    </main>
  );
}
