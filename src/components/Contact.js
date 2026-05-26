import { useState } from 'react';
import styles from './Contact.module.css';
import SlidingText from './SlidingText';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleMouseExit = (e) => {
    if (e.target.value.trim() === '') {
      alert(`${e.target.name} is required.`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      alert('Thanks — your message is ready to send once this form is connected to a backend or form provider.');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert('Please fill out all fields before submitting.');
    }
  };

  return (
    <div className={`${styles.contactContainer} mt-12 mx-4 sm:mx-6 mb-8`}>
      <SlidingText
        direction="left"
        text={<h1 className={styles.contactHeader}>Improve a workflow with practical AI.</h1>}
      />
      <SlidingText
        direction="left"
        text={
          <p className={`${styles.contactHeaderP} text-lg`}>
            I help teams scope and design AI systems for document processing, reporting, internal knowledge, and operational automation.
          </p>
        }
      />
      <SlidingText
        direction="left"
        text={
          <p className={styles.contactSubcopy}>
            Send the process, bottleneck, or business problem you want to improve. I’ll review it from a workflow, product, and systems perspective.
          </p>
        }
      />
      <div className={styles.contactFormContainer}>
        <SlidingText
          direction="right"
          text={
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.contactFormP1}>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  className={styles.contactFormInput}
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="Name"
                  autoComplete="given-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={handleMouseExit}
                />
              </div>
              <div className={styles.contactFormP2}>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  className={styles.contactFormInput}
                  placeholder="Email"
                  type="email"
                  id="email"
                  name="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={handleMouseExit}
                />
              </div>
              <div className={styles.contactFormP3}>
                <label htmlFor="message" className="sr-only">Project details</label>
                <textarea
                  className={styles.contactFormTextarea}
                  placeholder="What workflow, report, document process, or internal tool do you want to improve?"
                  id="message"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={handleMouseExit}
                />
              </div>
              <div className={styles.button}>
                <button type="submit">SEND PROJECT DETAILS</button>
              </div>
            </form>
          }
        />
      </div>
    </div>
  );
}
