import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/BookkeepingWorkflow.module.css';

const painPoints = [
  {
    title: 'Client document chasing',
    text: 'Monthly statements, receipts, invoices, payroll reports, and missing files get scattered across email, folders, texts, and spreadsheets.',
  },
  {
    title: 'Month-end admin drag',
    text: 'Bookkeepers lose time checking what is missing, reminding clients, updating trackers, and making sure each client is ready for close.',
  },
  {
    title: 'Manual visibility gaps',
    text: 'Owners and admins need a simple way to see who is ready, who is late, what is missing, and what needs attention next.',
  },
];

const systemSteps = [
  'Client request form',
  'Secure upload folder',
  'Missing-item tracker',
  'Reminder sequence',
  'Weekly admin summary',
  'Dashboard + handoff SOP',
];

const packages = [
  {
    name: 'Workflow Cleanup Audit',
    price: '$750',
    description: 'Map one recurring admin workflow, identify bottlenecks, and get a fixed-scope automation plan.',
  },
  {
    name: 'Starter Automation Build',
    price: 'from $3,000',
    description: 'One focused workflow such as client document collection, onboarding, reminders, or status tracking.',
    featured: true,
  },
  {
    name: 'Workflow System Build',
    price: '$5,000–$8,000',
    description: 'More complex systems with multiple reminders, dashboards, documentation, training, and support.',
  },
];

const tools = ['Power Automate', 'Zapier', 'Microsoft Forms', 'Google Forms', 'SharePoint', 'Google Drive', 'Excel', 'Sheets', 'Airtable', 'ChatGPT'];

export async function getStaticProps() {
  return { props: {} };
}

export default function BookkeepingWorkflowAutomation() {
  return (
    <>
      <Head>
        <title>Bookkeeping Workflow Automation | Jake Magri</title>
        <meta
          name="description"
          content="Workflow automation for bookkeeping and accounting firms. Reduce client document chasing, missing-item reminders, month-end admin, and manual tracker updates."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Bookkeeping Workflow Automation | Jake Magri" />
        <meta
          property="og:description"
          content="I help bookkeeping firms clean up repetitive admin workflows with forms, reminders, trackers, dashboards, AI-assisted drafts, and low-code automation."
        />
      </Head>

      <main className={styles.pageShell}>
        <section className={styles.heroSection}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Charlotte workflow automation for bookkeeping teams</p>
            <h1>Stop chasing clients for monthly documents.</h1>
            <p className={styles.heroText}>
              I help bookkeeping and accounting firms clean up repetitive admin work with simple systems for document collection, reminders, status tracking, and month-end workflow visibility.
            </p>

            <div className={styles.ctaRow}>
              <a
                className={styles.primaryCta}
                href="mailto:jake.magri2@gmail.com?subject=Workflow%20Cleanup%20Audit&body=Hi%20Jake%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20bookkeeping%20workflow%20automation%20audit.%0A%0AThe%20workflow%20we%20want%20to%20improve%20is%3A"
              >
                Book a Workflow Audit
              </a>
              <a className={styles.secondaryCta} href="#demo">
                View Example System
              </a>
            </div>

            <div className={styles.trustLine}>
              <span>AI workflow automation</span>
              <span>Document intelligence</span>
              <span>Finance operations</span>
            </div>
          </div>

          <div className={styles.heroCard} aria-label="Workflow system preview">
            <div className={styles.cardHeader}>
              <span className={styles.statusDot}></span>
              <span>Monthly Close Readiness</span>
            </div>
            <div className={styles.progressPanel}>
              <div>
                <p className={styles.metricLabel}>Clients ready</p>
                <strong>18 / 24</strong>
              </div>
              <div>
                <p className={styles.metricLabel}>Missing items</p>
                <strong>11</strong>
              </div>
            </div>
            <div className={styles.workflowPreview}>
              <div>Request sent</div>
              <div>Files uploaded</div>
              <div>Tracker updated</div>
              <div>Reminder queued</div>
            </div>
            <p className={styles.cardNote}>
              The goal is not another complicated app. It is a clear workflow your team can actually run every month.
            </p>
          </div>
        </section>

        <section className={styles.logoStrip}>
          <p>Built with practical tools small teams already understand:</p>
          <div>
            {tools.map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Where the time leaks happen</p>
            <h2>Bookkeeping firms do not need more manual follow-up.</h2>
            <p>
              They need repeatable admin systems that make client status, missing documents, reminders, and monthly close readiness easier to see.
            </p>
          </div>

          <div className={styles.painGrid}>
            {painPoints.map((point) => (
              <article key={point.title} className={styles.painCard}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.demoSection} id="demo">
          <div className={styles.demoCopy}>
            <p className={styles.eyebrow}>Flagship example</p>
            <h2>Monthly Client Document Collection System</h2>
            <p>
              A practical workflow for bookkeeping teams that need clients to submit required files on time without the owner manually chasing every missing item.
            </p>
            <ul className={styles.checkList}>
              <li>Structured client request form</li>
              <li>Organized upload folder</li>
              <li>Missing-document tracker</li>
              <li>Automated reminder sequence</li>
              <li>Weekly bookkeeper summary</li>
              <li>Simple dashboard and handoff documentation</li>
            </ul>
          </div>

          <div className={styles.systemCard}>
            {systemSteps.map((step, index) => (
              <div key={step} className={styles.systemStep}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.offerSection}>
          <div className={styles.sectionIntroCentered}>
            <p className={styles.eyebrow}>Simple package ladder</p>
            <h2>Start with one workflow. Expand only if it works.</h2>
          </div>

          <div className={styles.packageGrid}>
            {packages.map((item) => (
              <article key={item.name} className={`${styles.packageCard} ${item.featured ? styles.featuredPackage : ''}`}>
                {item.featured && <span className={styles.badge}>Most common first build</span>}
                <h3>{item.name}</h3>
                <strong>{item.price}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.fitSection}>
          <div>
            <p className={styles.eyebrow}>Best fit</p>
            <h2>Designed for growing bookkeeping and accounting firms.</h2>
          </div>
          <div className={styles.fitCard}>
            <p>
              Best for firms with recurring monthly clients, repeated document collection, admin follow-up, and a desire to scale without immediately hiring another admin.
            </p>
            <p>
              Not for replacing bookkeepers, giving tax advice, or automating accounting judgment. The focus is the admin workflow around the finance process.
            </p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <p className={styles.eyebrow}>Start small</p>
          <h2>Send me the workflow your team hates doing every month.</h2>
          <p>
            I’ll help determine whether it is a good fit for a workflow cleanup audit, a low-code automation build, or a simpler process fix.
          </p>
          <div className={styles.ctaRowCentered}>
            <a
              className={styles.primaryCta}
              href="mailto:jake.magri2@gmail.com?subject=Bookkeeping%20Workflow%20Automation&body=Hi%20Jake%2C%0A%0AThe%20workflow%20we%20want%20to%20improve%20is%3A%0A%0ATools%20we%20currently%20use%3A%0A%0AHow%20often%20it%20happens%3A"
            >
              Start the Conversation
            </a>
            <Link href="/portfolio" className={styles.secondaryCtaDark}>
              View Related Case Studies
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
