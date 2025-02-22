import { useState, useEffect, useRef } from 'react';
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
      alert("Form Submitted with valid input!");
      setName('');
      setEmail('');
      setMessage('');
    } else {
      alert("Please fill out all fields before submitting.");
    }
  };

  return (
    <div className={`${styles.contactContainer} mt-12 mx-4 sm:mx-6 mb-8`}>
      <SlidingText
        direction="left"
        text={<h1 className={styles.contactHeader}>Let's Build The Future!</h1>}
      />
      <SlidingText
        direction="left"
        text={<p className={`${styles.contactHeaderP} text-lg`}>
          Ready to bring your project to life? Let's create something amazing together.
        </p>}
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
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  className={styles.contactFormTextarea}
                  placeholder="Message"
                  id="message"
                  name="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={handleMouseExit}
                />
              </div>
              <div className={styles.button}>
                <button type="submit">SEND</button>
              </div>
            </form>
          }
        />
      </div>
    </div>
  );
}
