import { useState } from 'react';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

const contactReasons = ['Associate software development', 'Application implementation', 'Business applications & integrations', 'Charlotte · Hybrid · Remote'];

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

    const subject = encodeURIComponent('Career inquiry - jakemagri.dev');
    const body = encodeURIComponent(`Hi Jake,\n\nName: ${name}\nEmail: ${email}\n\nOpportunity:\n${message}`);
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
                <p className={styles.eyebrow}>Let’s talk about your team</p>
                <h1>Build useful software together.</h1>
              </>
            }
          />
          <SlidingText
            direction="fade"
            text={
              <p className={styles.heroText}>
                I’m exploring software development and application implementation opportunities. I’m especially interested in teams with shared context, thoughtful reviews, and clear ownership of work.
              </p>
            }
          />
          <p><a href="mailto:jake.magri2@gmail.com">jake.magri2@gmail.com</a></p><div className={styles.trustLine}>
            {contactReasons.map((reason) => <span key={reason}>{reason}</span>)}
          </div>
        </div>

        <div className={styles.contactCard}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              className={styles.contactFormInput}
              placeholder="Your name"
              required
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
              required
              type="email"
              id="email"
              name="Email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message">Opportunity or team details</label>
            <textarea
              className={styles.contactFormTextarea}
              placeholder="Tell me about the role, team, location, and work you’re building."
              required
              id="message"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className={styles.submitButton} type="submit">Open email draft</button><p>This opens your email app with a draft. Nothing is sent until you send it there. You can also email me directly above.</p>
          </form>
        </div>
      </section>
    </main>
  );
}
