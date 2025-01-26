import dynamic from 'next/dynamic';
import { useState, useEffect, useRef } from 'react';
import styles from './AboutMe.module.css';

// Dynamically import the Image component to enable lazy loading
const LazyImage = dynamic(() => import('next/image'), { ssr: false });

const SlidingText = ({ direction = 'left', text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Lowered threshold for better detection
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`
        ${styles['sliding-text']} 
        ${isVisible ? styles[`animate-slide-${direction}`] : ''}
      `}
    >
      {text}
    </div>
  );
};

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles['about-cards']}>
        {/* About section */}
        <div className={styles['about-text-card']}>
          <SlidingText
            direction="left"
            text={<h1 className={styles['about-header']}>Crafting Next Generation Digital Experiences</h1>}
          />
          <section className={styles['about-summary']}>
            <SlidingText
              direction="left"
              text={
                <p className={styles['about-p']}>
                  Hi there! I'm Jake, a certified Full Stack Developer from UNC Charlotte with a background in Management Information Systems. I specialize in creating dynamic web and desktop applications that blend functionality with striking design.
                </p>
              }
            />
            <SlidingText
              direction="left"
              text={
                <p className={styles['about-p']}>
                  With expertise in TypeScript, Node.js, PostgreSQL, and GraphQL, I'm passionate about building scalable, high-performing solutions. My experience also includes release coordination, streamlining deployments, and enhancing efficiency across tools like ServiceNow, Jira, and GitLab CI/CD pipelines.
                </p>
              }
            />
            <SlidingText
              direction="left"
              text={
                <p className={styles['about-p']}>
                  I'm excited to collaborate on impactful projects and bring technical and strategic value to forward-thinking teams. Let's build something outstanding together!
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
