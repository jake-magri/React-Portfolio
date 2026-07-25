import { useState } from 'react';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

const contactReasons = [
  'Technical Product Manager / Product Ops role inquiry',
  'Enterprise Operations Leadership opportunity',
  'Strategic partnership or collaboration',
  'Technical advisory or governance framework design',
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
                <p className={styles.eyebrow}>Let's align on strategic direction</p>
                <h1>Connect about enterprise leadership and systemic impact.</h1>
              </>
            }
          />
          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I'm interested in conversations about Technical Product leadership, operational governance, enterprise AI architecture, and building systems that drive measurable business impact at scale.
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
              placeholder="Share details about your organization's challenge, strategic initiative, or role focus. (e.g., scaling AI product delivery, governing enterprise systems, managing release coordination across teams)"
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
