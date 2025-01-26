import { useState, useEffect } from 'react';
import styles from './Resume.module.css';

export default function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure this effect runs only on the client side
    setIsClient(true);
  }, []);

  return (
    <div className={`${styles['resume-main-container']} mt-8 sm:mt-12 md:mt-16 lg:mt-20 mx-4 sm:mx-6`}>
      <h1 className={styles['resume-header']}>Resume</h1>

      <div className={styles['skills-link']}>
        <p className={`${styles['resume-header-text']} text-lg`}>
          Skilled in building dynamic web applications using React, Node.js, Express.js, TypeScript, and Java, with experience in AWS, PostgreSQL, MongoDB, and creating responsive, mobile-first user interfaces.
        </p>

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
      </div>

      {/* Conditionally render iframe content only on the client */}
      {isClient && (
        <iframe
          src="/documents/jake-magri-resume.pdf"
          width="100%"
          height="800px"
          title="Jake Magri Resume"
          className={styles['resume-iframe']}
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
      )}
    </div>
  );
}
