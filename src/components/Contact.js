import { useState } from 'react';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

const contactReasons = [
  'Bookkeeping workflow cleanup audit',
  'Finance automation demo request',
  'Corporate AI enablement role',
  'General workflow automation conversation',
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

    const subject = encodeURIComponent('Workflow automation inquiry');
    const body = encodeURIComponent(`Hi Jake,\n\nName: ${name}\nEmail: ${email}\n\nWorkflow / project details:\n${message}`);
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
                <p className={styles.eyebrow}>Start with one workflow</p>
                <h1>Send the process your team hates doing manually.</h1>
              </>
            }
          />
          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I’ll help determine whether it is a fit for a workflow cleanup audit, low-code automation build, AI-assisted system, or a simpler process fix.
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

            <label htmlFor="message">Workflow details</label>
            <textarea
              className={styles.contactFormTextarea}
              placeholder="What workflow, monthly task, document process, report, or admin bottleneck do you want to improve?"
              id="message"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className={styles.submitButton} type="submit">Send Project Details</button>
          </form>
        </div>
      </section>
    </main>
  );
}
