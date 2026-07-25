import styles from './Resources.module.css';
import SlidingText from './SlidingText';

export default function Resources() {
  const frameworks = [
    {
      name: 'Enterprise AI PRD & Acceptance Criteria Matrix',
      category: 'Product Management',
      description: 'A standardized Product Requirement Document (PRD) template designed for AI/LLM integrations, covering confidence threshold routing, fallback behavior, and HIPAA audit trails.',
      actionText: 'View Spec',
      link: '/portfolio',
    },
    {
      name: 'Cross-Functional Release Readiness Framework',
      category: 'Operations & Governance',
      description: 'A 15+ team delivery checklist modeled after enterprise release governance, covering dependency tracking, ServiceNow change management, and operational risk mitigation.',
      actionText: 'View Framework',
      link: '/portfolio',
    },
    {
      name: 'NL-to-SQL Semantic Layer Architecture Spec',
      category: 'Data Governance',
      description: 'System design specification for bridging natural language questions with governed relational databases without allowing unconstrained query execution.',
      actionText: 'View Architecture',
      link: '/portfolio',
    },
    {
      name: 'Document Intelligence Evaluation & QA Protocol',
      category: 'Systems Quality',
      description: 'Evaluation matrix and error-handling taxonomy for measuring OCR and layout extraction accuracy across complex medical and financial documentation.',
      actionText: 'View Protocol',
      link: '/portfolio',
    },
  ];

  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="top"
          text={
            <>
              <p className={styles.eyebrow}>Governance & Frameworks</p>
              <h1>Operating specs for enterprise systems and product delivery.</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p>
              Open-source operational blueprints, product requirements templates, and governance frameworks for scaling compliant AI and software workflows.
            </p>
          }
        />
      </section>

      <section className={styles.resourceGrid}>
        {frameworks.map((item) => (
          <article key={item.name} className={styles.resourceCard}>
            <div>
              <span className={styles.categoryBadge}>{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
            <a href={item.link} className={styles.learnMore}>
              {item.actionText} →
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}