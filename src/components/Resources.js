import styles from './Resources.module.css';
import SlidingText from './SlidingText';

export default function Resources() {
  const frameworks = [
    {
      name: 'Discovery & Requirements Template',
      category: 'Product Analysis',
      description: 'A practical framework for turning stakeholder conversations into clear problem statements, requirements, and next steps.',
      actionText: 'View Template',
      link: '/case-studies',
    },
    {
      name: 'Workflow Mapping & Prioritization Framework',
      category: 'Process Improvement',
      description: 'A simple approach to documenting current workflows, identifying friction, and aligning on what should change first.',
      actionText: 'View Framework',
      link: '/case-studies',
    },
    {
      name: 'Cross-Functional Delivery Checklist',
      category: 'Operations',
      description: 'A lightweight checklist for coordinating handoffs, clarifying ownership, and keeping delivery moving across teams.',
      actionText: 'View Checklist',
      link: '/case-studies',
    },
    {
      name: 'Business Outcome Tracking Sheet',
      category: 'Operational Excellence',
      description: 'A concise structure for linking process changes to business outcomes, adoption, and follow-up work.',
      actionText: 'View Sheet',
      link: '/case-studies',
    },
  ];

  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="top"
          text={
            <>
              <p className={styles.eyebrow}>Analysis & Delivery Tools</p>
              <h1>Practical tools for analysis, workflow design, and delivery.</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p>
              Practical templates and frameworks for understanding problems, gathering requirements, mapping workflows, and improving how work gets done.
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