import { useState } from 'react';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

const contactReasons = [
  'Product Analyst / Business Systems Analyst inquiry',
  'Product Operations or process improvement conversation',
  'Requirements gathering or workflow design discussion',
  'Cross-functional delivery or stakeholder alignment opportunity',
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert('Please fill out all fields before sending.');
      return;
    }

    const subject = encodeURIComponent('Strategic inquiry - jakemagri.dev');
    const body = encodeURIComponent(`Hi Jake,\n\nName: ${name}\nEmail: ${email}\n\nOpportunity / Strategic Discussion:\n${message}`);
    window.location.href = `mailto:jake.magri2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className={styles.pageShell}>
      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <SlidingText
            direction="left"
            text={
              <>
                <p className={styles.eyebrow}>Let's align on business needs</p>
                <h1>Connect about business analysis, workflow improvement, and practical delivery.</h1>
              </>
            }
          />
          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I'm interested in conversations about product analysis, requirements gathering, stakeholder alignment, workflow design, and practical business solutions.
              </p>
            }
          />
          <div className={styles.trustLine}>
            {contactReasons.map((reason) => <span key={reason}>{reason}</span>)}
          </div>
        </div>

        <div className={styles.contactCard}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.contactFormInput}
              placeholder="Your name"
              type="text"
              id="name"
              name="Name"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              className={styles.contactFormInput}
              placeholder="you@example.com"
              type="email"
              id="email"
              name="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">What are we discussing?</label>
            <textarea
              className={styles.contactFormTextarea}
              placeholder="Share details about your team's challenge, process gap, or operational goal. (e.g., improving intake, clarifying requirements, coordinating delivery across functions)"
              id="message"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className={styles.submitButton} type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
