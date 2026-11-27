import SiteHead from '../components/SiteHead';
import styles from '../components/Projects-Page/Projects.module.css';

// Only add an entry after its sandbox or demonstration has been completed,
// tested, and approved for public sharing. Keep planned work out of this list.
// Each entry needs: id, title, description, demoUrl.
const publishedOfferings = [];

export default function ConsultingPage() {
  return (
    <>
      <SiteHead
        title="Independent Software Consulting | Jake Magri"
        description="Independent business software consulting in Charlotte, NC. Discuss practical improvements to existing business operations."
      />
      <main className={styles.pageShell}>
        <header className={styles.heroBlock}>
          <p className={styles.eyebrow}>Independent software consulting · Charlotte, NC</p>
          <h1 className={styles.portfolioHeader}>Practical software for everyday business.</h1>
          <p className={styles.portfolioHeaderP}>
            I focus on practical improvements to existing business operations,
            starting with a specific problem and a clearly defined outcome.
          </p>
        </header>

        <section className={styles.detailShell} aria-labelledby="offerings-heading">
          <div className={styles.detailSection}>
            <h2 id="offerings-heading">Services &amp; demonstrations</h2>
            {publishedOfferings.length > 0 ? (
              <p>Explore working demonstrations of the solutions I offer.</p>
            ) : (
              <p className={styles.detailNote}>
                Demonstrations will be added as they are completed.
              </p>
            )}
          </div>
          {publishedOfferings.length > 0 && (
            <div className={styles.caseStudyGrid}>
              {publishedOfferings.map(({ id, title, description, demoUrl }) => (
                <article key={id} className={styles.caseStudyCard}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={demoUrl} className={styles.primaryCta}>View demonstration</a>
                </article>
              ))}
            </div>
          )}
          <div className={styles.detailSection}>
            <h2>Have a business problem in mind?</h2>
            <p>
              Tell me about the work your team is trying to improve. We can discuss
              whether a small, focused project would be a good fit.
            </p>
            <a className={styles.primaryCta} href="mailto:jake.magri2@gmail.com?subject=Business%20software%20inquiry">
              Discuss a project
            </a>{' '}
            <a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=jake.magri2%40gmail.com&amp;su=Business%20software%20inquiry" target="_blank" rel="noopener noreferrer">
              Open in Gmail
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
