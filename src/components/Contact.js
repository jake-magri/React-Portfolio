import { useState } from 'react';
import styles from './Contact.module.css'; // Import the CSS module

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
    <div className={styles.contactContainer}>
      <h1 className={styles.contactHeader}>Let's Build The Future!</h1>
      <p className={`${styles.contactHeaderP} text-lg`}>
        Ready to bring your project to life? Let's create something amazing together.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.contactFormP1}>
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
          <input
            className={styles.contactFormInput}
            placeholder="Email"
            type="email"
            id="mail"
            name="Email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleMouseExit}
          />
        </div>
        <div className={styles.contactFormP3}>
          <textarea
            className={styles.contactFormTextarea}
            placeholder="Message"
            id="msg"
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
    </div>
  );
}
