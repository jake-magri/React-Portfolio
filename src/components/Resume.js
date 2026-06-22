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
    title: 'Finance workflow automation',
    skills: ['Bookkeeping Workflows', 'Document Collection', 'Month-End Admin', 'Client Follow-Up', 'Reporting Visibility', 'Workflow Cleanup'],
  },
  {
    title: 'Applied AI systems',
    skills: ['OCR', 'Document Intelligence', 'RAG', 'Vector Retrieval', 'NL-to-SQL', 'AI Evaluation', 'Prompt Workflows'],
  },
  {
    title: 'Implementation tools',
    skills: ['Power Automate', 'Zapier', 'SQL', 'AWS Lambda', 'S3', 'REST APIs', 'Python', 'C#/.NET'],
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
              <p className={styles.eyebrow}>Experience and technical credibility</p>
              <h1 className={styles.resumeHeader}>AI workflow automation, finance operations, and enterprise delivery.</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p className={styles.resumeHeaderText}>
              My background combines applied AI systems, healthcare billing workflows, financial-services technology delivery, document intelligence, reporting, and practical workflow implementation.
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
            Download Resume PDF
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
