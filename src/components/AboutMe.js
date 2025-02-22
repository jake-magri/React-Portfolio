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
        text={<h1 className={styles['about-header']}>Driving Operational Excellence Through Data & Collaboration</h1>}
      />
      <section className={styles['about-summary']}>
        <SlidingText
          direction="left"
          text={
            <p className={styles['about-p']}>
              Hi, I'm Jake, a Management Information Systems graduate from UNC Charlotte and a certified Developer.
              My academic background in systems analysis, supply chain management (including hands-on experience with Gantt charts), data analytics, and business applications development has given me a comprehensive perspective that blends time-tested methodologies with data-driven solutions.
            </p>
          }
        />
        <SlidingText
          direction="left"
          text={
            <p className={styles['about-p']}>
              At Ally Financial, I led cross-functional projects, developed performance dashboards, and implemented process improvements using tools like SQL, Jira, and ServiceNow.
              These experiences honed my ability to analyze operations, streamline processes, and support operational excellence.
            </p>
          }
        />
        <SlidingText
          direction="left"
          text={
            <p className={styles['about-p']}>
              I thrive on fostering collaboration across teams and translating technical details into actionable insights. Whether it's developing comprehensive process documentation or partnering with business stakeholders to pinpoint improvement opportunities, my goal is to drive standardization, efficiency, and continuous improvement, honoring proven practices while embracing forward-thinking solutions.
            </p>
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
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        }
      />
    </div>
  </div>
</div>
  );
}
