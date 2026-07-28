import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import dynamic from 'next/dynamic';

const SlidingText = dynamic(() => import('../SlidingText'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const caseStudies = [
  {
    title: 'AI Reporting Assistant',
    image: '/images/natural_language_reporting.png',
    summary: 'Worked with stakeholders to turn recurring reporting requests into a clearer, more repeatable workflow for getting the right information faster.',
    outcome: 'Reduced back-and-forth, improved reporting clarity, and created a stronger path from question to answer for business teams.',
    stack: 'Requirements gathering, workflow mapping, reporting operations, stakeholder alignment',
    deployedUrl: '/case-studies',
    primaryLabel: 'View Discovery Approach',
  },
  {
    title: 'Healthcare OCR',
    image: '/images/radiology_ocr_workflow.png',
    summary: 'Helped define the business problem, constraints, and success criteria for a document intake workflow that needed more reliable handling of healthcare paperwork.',
    outcome: 'Clarified what mattered most to the business, shaped the process around real operational needs, and improved consistency in a high-friction workflow.',
    stack: 'Business analysis, process discovery, operational constraints, cross-functional collaboration',
  },
  {
    title: 'Enterprise Knowledge Assistant',
    image: '/images/enterprise_knowledge_retrieval.png',
    summary: 'Explored how teams access institutional knowledge and translated that into a more useful support experience for day-to-day operations.',
    outcome: 'Improved access to information, reduced friction in support workflows, and made knowledge retrieval more dependable for teams working under time pressure.',
    stack: 'Workflow analysis, knowledge management, stakeholder needs, process improvement',
  },
  {
    title: 'Release Coordination',
    image: '/images/enterprise_release_readiness.png',
    summary: 'Supported delivery planning by connecting stakeholders, tracking dependencies, and making release readiness more visible across functions.',
    outcome: 'Improved coordination, reduced avoidable confusion, and created a clearer operating rhythm for high-stakes delivery work.',
    stack: 'Cross-functional coordination, prioritization, dependency clarity, delivery readiness',
  },
  {
    title: 'Client Intake Automation',
    image: '/images/natural_language_reporting.png',
    summary: 'Designed a process for collecting client information and follow-up steps with less manual chasing and clearer visibility into pending items.',
    outcome: 'Created a more structured intake workflow that improved follow-through, reduced admin friction, and made monthly operations easier to manage.',
    stack: 'Process design, workflow automation, operational visibility, business process improvement',
    deployedUrl: '/bookkeeping-workflow-automation',
    primaryLabel: 'View Workflow Example',
  },
  {
    title: 'AI Receptionist',
    image: '/images/ai_receptionist_workflow.png',
    summary: 'Explored how routine customer interactions could be captured, organized, and routed into a practical operational process.',
    outcome: 'Showed how conversational automation could support business flow while preserving clarity around ownership, follow-up, and customer experience.',
    stack: 'Discovery, requirements, process mapping, customer workflow design',
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
              <p className={styles.eyebrow}>Business systems &amp; product analysis</p>
              <h1 className={styles.portfolioHeader}>Case studies in business improvement</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p className={styles.portfolioHeaderP}>
              Selected work focused on understanding business problems, clarifying requirements, improving workflows, and shaping solutions that are practical to adopt.
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
                primaryLabel={item.primaryLabel || 'View Case Study'}
                secondaryLabel={item.secondaryLabel || 'View Repository'}
              />
            }
          />
        ))}
      </div>
    </main>
  );
}
