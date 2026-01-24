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
    <div className={`${styles['resume-main-container']} mt-12 mx-4 sm:mx-6`}>
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
            <div className={styles['resume-content']}>
              <p className={`${styles['resume-header-text']} text-lg mb-6`}>
                <strong>Full-Stack Capability. AI-Driven Results.</strong> I don't just build "wrappers." I architect full-lifecycle solutions. Whether it’s migrating from managed APIs to custom LLM orchestration for better token efficiency or engineering high-scale data pipelines in AWS, I focus on the technical maturity required for SOC2 and HIPAA-compliant environments.
              </p>

            <div className={styles['tech-stack-grid']}>
              {/* AI & Machine Learning */}
              <div className={styles['stack-category']}>
                <h3 className="font-bold text-blue-400 mb-3 text-center">AI & LLM Orchestration</h3>
                <div className={styles['skill-pill-container']}>
                  {['RAG', 'Agentic Workflows', 'OpenAI API', 'Vector Databases', 'Knowledge Graphs', 'NLP', 'Semantic Modeling', 'Prompt Engineering'].map((skill) => (
                    <span key={skill} className={styles['skill-pill']}>{skill}</span>
                  ))}
                </div>
              </div>
              
              {/* Systems & Architecture */}
              <div className={styles['stack-category']}>
                <h3 className="font-bold text-blue-400 mb-3 text-center">Systems & Architecture</h3>
                <div className={styles['skill-pill-container']}>
                  {['Solution Architecture', 'Systems Design', 'API Development', 'Microservices', 'ETL Pipelines', 'Data Warehousing'].map((skill) => (
                    <span key={skill} className={styles['skill-pill']}>{skill}</span>
                  ))}
                </div>
              </div>
                
              {/* Engineering & Cloud */}
              <div className={styles['stack-category']}>
                <h3 className="font-bold text-blue-400 mb-3 text-center">Engineering & Cloud</h3>
                <div className={styles['skill-pill-container']}>
                  {['Python', 'C#', '.NET Framework', 'MVVM', 'ASP.NET', 'AWS (Lambda/S3/EC2)', 'SQL Server', 'React/Next.js'].map((skill) => (
                    <span key={skill} className={styles['skill-pill']}>{skill}</span>
                  ))}
                </div>
              </div>
           </div>
          </div>
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
        <div className={styles['resume-iframe-container']}>
          <SlidingText direction="bottom" text={<LazyResumeIframe />} />
        </div>
      )}
    </div>
  );
}
