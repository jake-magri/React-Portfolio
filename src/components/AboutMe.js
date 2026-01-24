import dynamic from 'next/dynamic';
import SlidingText from './SlidingText';
import styles from './AboutMe.module.css';

// Dynamically import the Image component to enable lazy loading
const LazyImage = dynamic(() => import('next/image'), { ssr: false });

export default function AboutMe() {
  return (
    <div className={styles.container}>
  <div className={styles['about-cards']}>
    {/* About section */}
    <div className={styles['about-text-card']}>
      <SlidingText
        direction="left"
        text={<h1 className={styles['about-header']}>Architecting Agentic Systems & AI Strategy for the Enterprise</h1>}
      />
      <section className={styles['about-summary']}>
        <SlidingText
          direction="left"
          text={
            <p className={styles['about-p']}>
              Hi, I'm Jake. I'm a Software Engineer and AI Specialist focused on bridging the gap between complex business logic and production-grade Agentic systems.
            </p>
          }
        />
        <SlidingText
          direction="left"
          text={
            <p className={styles['about-p']}>
              Currently, I report to the CEO and Chief Software Engineer at ImagineSoftware, where I lead AI strategy for a multi-eight-figure ARR medical billing platform. My work is centered on building "High-Depth" AI: systems that don't just chat, but perform—automating end-to-end RCM workflows, extracting structured data from unstructured medical documents, and pioneering hallucination-resistant RAG architectures.
            </p>
          }
        />
        <SlidingText
          direction="left"
          text={
            <div className={styles['about-specialization']}>
              <p className={styles['about-p']}>
                My background is a blend of high-stakes discipline and technical execution. From serving as a Combat Medic in the Army National Guard to orchestrating mission-critical software releases at Ally Financial, I've learned that the most successful technology solutions are those that prioritize reliability, data integrity, and measurable commercial impact.
              </p>
      
              <h3 className={styles['specialization-header']}>I specialize in:</h3>
      
              <ul className={styles['specialization-list']}>
                <li>
                  <strong>Agentic Workflows:</strong> Orchestrating LLMs to automate complex, multi-step business processes.
                </li>
                <li>
                  <strong>Semantic Data Layers:</strong> Building NL-to-SQL interfaces and Knowledge Graphs for legacy enterprise data.
                </li>
                <li>
                  <strong>Production RAG:</strong> Engineering ETL pipelines with verified citation mapping for "Source of Truth" reliability.
                </li>
              </ul>
            </div>
          }
        />
      </section>
    </div>

    {/* Image with two divs for future picture frame styling */}
    <div className={styles['outer-image-card']}>
      <SlidingText
        direction="bottom"
        text={
          <div className={styles['inner-image-box']}>
            <LazyImage
              className={styles['about-image']}
              src="/images/6.png"
              alt="A professional headshot of Jake Magri"
              width={300}
              height={500}
              priority
            />
          </div>
        }
      />
    </div>
  </div>
</div>
  );
}
