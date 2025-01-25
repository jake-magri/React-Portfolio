import Image from 'next/image';
import styles from './AboutMe.module.css'; // Update your CSS to use module-based styling

export default function AboutMe() {
  return (
    <div className="container mt-23">
      <div className="row about-cards">
        {/* About section */}
        <div className="col about-text-card">
          <h1 className={styles['about-header']}>Crafting Next Generation Digital Experiences</h1>
          <section className={`${styles['about-summary']} text-lg`}>
            <p className={styles['about-p']}>
              Hi there! I'm Jake, a certified Full Stack Developer from UNC Charlotte with a background in Management Information Systems. I specialize in creating dynamic web and desktop applications that blend functionality with striking design.
            </p>
            <p className={styles['about-p']}>
              With expertise in TypeScript, Node.js, PostgreSQL, and GraphQL, I'm passionate about building scalable, high-performing solutions. My experience also includes release coordination, streamlining deployments, and enhancing efficiency across tools like ServiceNow, Jira, and GitLab CI/CD pipelines.
            </p>
            <p className={styles['about-p']}>
              I'm excited to collaborate on impactful projects and bring technical and strategic value to forward-thinking teams. Let's build something outstanding together!
            </p>
          </section>
        </div>
        {/* Image with two divs for future picture frame styling */}
        <div className="col outer-image-card">
          <div className={styles["inner-image-box"]}>
            <Image
              className={styles['about-image']}
              src="/images/6.png" // Update to a public folder path
              alt="A professional headshot of Jake Magri"
              width={500} // Add width based on your image's resolution
              height={500} // Add height based on your image's resolution
            />
          </div>
        </div>
      </div>
    </div>
  );
}
