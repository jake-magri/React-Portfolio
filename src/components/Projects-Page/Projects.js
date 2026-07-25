import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import dynamic from 'next/dynamic';

const SlidingText = dynamic(() => import('../SlidingText'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const caseStudies = [
  {
    title: 'Healthcare Document Intelligence & Revenue Engine ($60K Win)',
    image: '/images/radiology_ocr_workflow.png',
    summary: 'Architected document-intelligence workflows that convert unstructured healthcare billing documents into structured demographic and charge-data extraction pipelines.',
    outcome: 'Designed and delivered an enterprise solution that generated $60K+ revenue, demonstrated compliance-first architecture (HIPAA/SOC 2 alignment), and created recurring document-processing revenue streams while maintaining 95%+ extraction accuracy.',
    stack: 'OCR, OpenAI APIs, AWS Lambda, compliance-first architecture, healthcare data governance',
    primaryLabel: 'Read Case Study',
  },
  {
    title: 'Enterprise Release Governance & SLA Delivery (15+ Teams)',
    image: '/images/enterprise_release_readiness.png',
    summary: 'Coordinated software release readiness across engineering teams using structured reporting, dependency tracking, and stakeholder communication governance.',
    outcome: 'Maintained 98% on-time SLA delivery across enterprise application teams, reduced release prep cycle time by 15%, and enforced operational accountability through dependency mapping and compliance tracking.',
    stack: 'Jira, ServiceNow, Confluence, GitLab, release governance frameworks',
  },
  {
    title: 'Enterprise Knowledge Retrieval &amp; Operational Support (20+ Yrs Data)',
    image: '/images/enterprise_knowledge_retrieval.png',
    summary: 'Built retrieval-augmented support systems over 20+ years of long-lived technical documentation to enable support, operations, and product teams to retrieve source-grounded answers faster.',
    outcome: 'Transformed legacy documentation into citation-grounded conversational support workflows, achieved 95% execution success rate, and reduced documentation retrieval overhead by moving to semantic search and RAG-driven architecture.',
    stack: 'RAG architecture, vector retrieval, OpenAI, documentation governance, semantic layer design',
  },
  {
    title: 'Natural-Language Reporting &amp; Legacy Data Governance',
    image: '/images/natural_language_reporting.png',
    summary: 'Mapped business terminology and reporting intent into natural-language reporting and retrieval workflows over 20+ years of RCM transactional data.',
    outcome: 'Built semantic reporting layer supporting HIPAA/SOC2-aligned environments, demonstrated NL-to-SQL translation at scale, and translated operational requirements into governance-compliant data architecture.',
    stack: 'NL-to-SQL concepts, SSAS, semantic layer design, RCM data governance, stakeholder translation',
  },
  {
    title: 'Monthly Client Document Collection &amp; Intake Automation',
    image: '/images/natural_language_reporting.png',
    summary: 'Designed bookkeeping workflow automation for reducing monthly client document chasing, missing-item reminders, and manual tracker updates.',
    outcome: 'Created the flagship finance-operations demo showcasing intake governance, upload tracking, automated reminders, weekly summaries, and close-readiness visibility as operational control systems.',
    stack: 'Power Automate, Zapier, Microsoft/Google Forms, SharePoint/Drive, AI-assisted follow-up',
    deployedUrl: '/bookkeeping-workflow-automation',
    primaryLabel: 'View Finance Automation Framework',
  },
  {
    title: 'AI Receptionist &amp; Workflow Routing Prototype',
    image: '/images/ai_receptionist_workflow.png',
    summary: 'Designed a small-business automation prototype for handling calls, appointment booking, and workflow routing through conversational AI.',
    outcome: 'Demonstrates how routine customer interactions can be captured, routed, and converted into structured business actions with compliance tracking and operational governance.',
    stack: 'Twilio, OpenAI, LangChain, Google Calendar API, WebSockets',
  },
];

export default function Projects() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="right"
          text={
            <>
              <p className={styles.eyebrow}>Enterprise systems &amp; architecture</p>
              <h1 className={styles.portfolioHeader}>Case Studies in Systemic Impact</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p className={styles.portfolioHeaderP}>
              Selected work across enterprise AI automation, workflow governance, document intelligence, data architecture, and high-velocity delivery. Focused on measurable business outcomes, compliance-first design, and systemic operational leverage.
            </p>
          }
        />
      </section>

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
                primaryLabel={item.primaryLabel || "View Live Project"}
                secondaryLabel={item.secondaryLabel || "View Repository"}
              />
            }
          />
        ))}
      </div>
    </main>
  );
}
