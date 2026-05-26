import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import dynamic from 'next/dynamic';

const SlidingText = dynamic(() => import('../SlidingText'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const caseStudies = [
  {
    title: 'Radiology Billing OCR Workflow',
    image: '/images/radiology_ocr_workflow.png',
    summary: 'Designed and demonstrated document-intelligence workflows that convert unstructured radiology billing documents into structured demographic and charge-data extraction pipelines.',
    outcome: 'Supported enterprise client workflows and contributed to a $60k enterprise solution sale.',
    stack: 'OCR, OpenAI APIs, AWS Lambda, healthcare workflow design, structured extraction',
  },
  {
    title: 'Enterprise Knowledge Retrieval System',
    image: '/images/enterprise_knowledge_retrieval.png',
    summary: 'Built retrieval-augmented support experiences over long-lived technical documentation so support, operations, and product teams could retrieve source-grounded answers faster.',
    outcome: 'Turned 25+ years of internal documentation into citation-grounded conversational support workflows.',
    stack: 'RAG, vector retrieval, OpenAI, documentation pipelines, citation grounding',
  },
  {
    title: 'Natural-Language Reporting Assistant',
    image: '/images/natural_language_reporting.png',
    summary: 'Mapped business terminology, reporting intent, and legacy healthcare data structures into natural-language reporting and retrieval workflows.',
    outcome: 'Supported reporting concepts over 20+ years of RCM transactional data within HIPAA/SOC2-aligned environments.',
    stack: 'NL-to-SQL concepts, SSAS, semantic layer design, RCM reporting, stakeholder translation',
  },
  {
    title: 'AI Receptionist Workflow Prototype',
    image: '/images/ai_receptionist_workflow.png',
    summary: 'Designed a small-business automation prototype for handling calls, appointment booking, and workflow routing through conversational AI.',
    outcome: 'Demonstrates how routine customer interactions can be captured, routed, and converted into structured business actions.',
    stack: 'Twilio, OpenAI, LangChain, Google Calendar API, WebSockets',
  },
  {
    title: 'Enterprise Release Readiness',
    image: '/images/enterprise_release_readiness.png',
    summary: 'Coordinated software release readiness across engineering teams using structured reporting, dependency tracking, and stakeholder communication workflows.',
    outcome: 'Supported 98% on-time release delivery across enterprise application teams.',
    stack: 'Jira, ServiceNow, Confluence, GitLab, AWS, release governance',
  },
  {
    title: 'Volt Underground Product Build',
    image: '/images/volt-underground.png',
    summary: 'Full-stack event commerce platform built as a product-oriented software project for local underground electronic music events.',
    outcome: 'Shows full-stack product execution, collaboration, and user-facing application delivery.',
    stack: 'React, Node.js, Apollo GraphQL, MongoDB',
    deployedUrl: 'https://volt-underground.onrender.com/',
    githubUrl: 'https://github.com/parsamh8/Volt-Underground',
  },
];

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="mt-12 mx-4 sm:mx-6 mb-8">
      <SlidingText
        direction="right"
        text={<h1 className={styles.portfolioHeader}>Case Studies</h1>}
      />
      <SlidingText
        direction="right"
        text={
          <p className={`${styles.portfolioHeaderP} text-lg`}>
            Selected work across AI workflow automation, healthcare operations, document intelligence, retrieval systems, and product delivery.
          </p>
        }
      />

      <div className={styles.caseStudyGrid}>
        {caseStudies.map((item) => (
          <SlidingText
            key={item.title}
            direction="left"
            text={
              <ProjectCard
                title={item.title}
                image={item.image}
                summary={item.summary}
                outcome={item.outcome}
                stack={item.stack}
                deployedUrl={item.deployedUrl}
                githubUrl={item.githubUrl}
                primaryLabel="View Live Project"
                secondaryLabel="View Repository"
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
