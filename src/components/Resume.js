import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Resume.module.css';
import SlidingText from './SlidingText';

// Define the iframe component separately
const ResumeIframe = () => {
  return (
    <iframe
      src="/documents/jake-magri-resume.pdf" // Keep the same PDF path
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

// Lazy load the ResumeIframe component
const LazyResumeIframe = dynamic(() => Promise.resolve(ResumeIframe), {
  ssr: false, // Disable SSR for iframe content
  loading: () => <p>Loading Resume...</p>, // Optional loading state
});

export default function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this effect runs only on the client side
    setIsClient(true);
  }, []);

  return (
    <div className={`${styles['resume-main-container']} mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6`}>
      {/* Resume Header */}
      <SlidingText
        direction="left"
        text={<h1 className={styles['resume-header']}>Resume</h1>}
      />

      <div className={styles['skills-link']}>
        {/* Resume description */}
        <SlidingText
          direction="left"
          text={
            <p className={`${styles['resume-header-text']} text-lg`}>
              Skilled in systems analysis, process optimization, and data analytics. Experienced in using advanced SQL, Python-based analytics, and Gantt chart-driven project management to drive operational efficiency and standardization. Adept at cross-functional collaboration, developing dynamic dashboards, and implementing technology-driven solutions to enhance branch operations and support continuous process improvements.
            </p>
          }
        />

        {/* Resume Download Button */}
        <SlidingText
          direction="left"
          text={
            <a
              className={styles['resume-link']}
              href="/documents/jake-magri-resume.pdf"
              download="Jake-Magri.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles['resume-button']}>
                Download Resume PDF
              </button>
            </a>
          }
        />
      </div>

      {/* Conditionally render iframe content only on the client */}
      {isClient && (
        <SlidingText
          direction="bottom"
          text={<LazyResumeIframe />}
        />
      )}
    </div>
  );
}
