import InquiryForm from './InquiryForm';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

const contactReasons = ['Software development', 'Technical analyst', 'Application implementation', 'Business applications & integrations', 'Charlotte · Hybrid · Remote'];

export default function Contact() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>Let’s talk about your team</p>
                <h1>Build useful software together.</h1>
              </>
            }
          />
          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I’m exploring software development, technical analyst, and application implementation opportunities. I’m especially interested in teams with shared context, thoughtful reviews, and clear ownership of work.
              </p>
            }
          />
          <p><a href="mailto:jake.magri2@gmail.com">jake.magri2@gmail.com</a></p><div className={styles.trustLine}>
            {contactReasons.map((reason) => <span key={reason}>{reason}</span>)}
          </div>
        </div>

        <div className={styles.contactCard}>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
