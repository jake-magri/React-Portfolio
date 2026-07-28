import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Resume.module.css';
import SlidingText from './SlidingText';

const ResumeIframe = () => {
  return (
    <iframe
      src="/documents/jake-magri-resume.pdf"
      width="100%"
      height="800px"
      title="Jake Magri Resume"
      style={{ border: 'none' }}
    >
      Your browser does not support iframes.
      <a
        href="/documents/jake-magri-resume.pdf"
        download="Jake-Magri.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the Resume
      </a>
    </iframe>
  );
};

const LazyResumeIframe = dynamic(() => Promise.resolve(ResumeIframe), {
  ssr: false,
  loading: () => <p className={styles.loadingText}>Loading Resume...</p>,
});

const skillGroups = [
  {
    title: 'Business analysis & discovery',
    skills: ['Stakeholder interviews', 'Requirements gathering', 'Process mapping', 'User stories', 'Prioritization'],
  },
  {
    title: 'Workflow & operations',
    skills: ['Workflow analysis', 'Operational improvement', 'Documentation', 'Cross-functional coordination', 'Reporting clarity'],
  },
  {
    title: 'Delivery & enablement',
    skills: ['Process design', 'Automation evaluation', 'Risk & tradeoff analysis', 'Business outcome tracking', 'Change adoption'],
  },
];

export default function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="left"
          text={
            <>
              <p className={styles.eyebrow}>Product Analysis & Business Systems</p>
              <h1 className={styles.resumeHeader}>Business analysis, workflow improvement, and practical delivery.</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p className={styles.resumeHeaderText}>
              My experience sits at the intersection of stakeholder collaboration, requirements gathering, workflow design, and operational improvement. I’ve worked across reporting, intake processes, knowledge systems, and automation initiatives that support better business decisions and smoother day-to-day execution.
            </p>
          }
        />

        <div className={styles.ctaRow}>
          <a
            className={styles.primaryCta}
            href="/documents/jake-magri-resume.pdf"
            download="Jake-Magri.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <a className={styles.secondaryCta} href="#resume-preview">
            View Resume Preview
          </a>
        </div>
      </section>

      <section className={styles.skillGrid}>
        {skillGroups.map((group) => (
          <article key={group.title} className={styles.stackCategory}>
            <h3>{group.title}</h3>
            <div className={styles.skillPillContainer}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skillPill}>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {isClient && (
        <section className={styles.resumeIframeContainer} id="resume-preview">
          <SlidingText direction="bottom" text={<LazyResumeIframe />} />
        </section>
      )}
    </main>
  );
}
