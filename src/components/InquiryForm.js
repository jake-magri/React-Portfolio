import { useState } from 'react';
import styles from './Contact.module.css';

const recipient = 'jake.magri2@gmail.com';

export default function InquiryForm({ consulting = false }) {
  const [draftText, setDraftText] = useState('');
  const [status, setStatus] = useState('');

  async function openDraft(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    for (const key of ['name', 'message']) {
      if (!fields.get(key).trim()) {
        const input = form.elements.namedItem(key);
        input.setCustomValidity('Please enter a value.');
        input.reportValidity();
        return;
      }
    }

    const subject = consulting ? 'Business software inquiry' : 'Career inquiry - jakemagri.dev';
    const body = `Hi Jake,\n\nName: ${fields.get('name').trim()}\nEmail: ${fields.get('email').trim()}\n\n${consulting ? 'Project' : 'Opportunity'}:\n${fields.get('message').trim()}`;
    switch (fields.get('destination')) {
      case 'gmail': {
        const query = new URLSearchParams({ view: 'cm', fs: '1', to: recipient, su: subject, body });
        window.open(`https://mail.google.com/mail/?${query}`, '_blank', 'noopener,noreferrer');
        break;
      }
      case 'app':
        window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        break;
      case 'copy': {
        const text = `To: ${recipient}\nSubject: ${subject}\n\n${body}`;
        try {
          await navigator.clipboard.writeText(text);
          setStatus('Draft copied.');
        } catch {
          setDraftText(text);
          setStatus('Select the draft below to copy it.');
        }
        break;
      }
    }
  }

  return (
    <form className={styles.contactForm} onSubmit={openDraft} onInput={(event) => {
      event.target.setCustomValidity('');
      setDraftText('');
      setStatus('');
    }}>
      <label htmlFor="name">Name</label>
      <input className={styles.contactFormInput} id="name" name="name" autoComplete="name" required />
      <label htmlFor="email">Email</label>
      <input className={styles.contactFormInput} id="email" name="email" type="email" autoComplete="email" required />
      <label htmlFor="message">{consulting ? 'Project details' : 'Opportunity or team details'}</label>
      <textarea className={styles.contactFormTextarea} id="message" name="message" required
        placeholder={consulting ? 'What are you doing today, and what would you like to improve?' : 'Tell me about the role, team, location, and work you’re building.'} />
      <label htmlFor="destination">Draft options</label>
      <select id="destination" name="destination" className={styles.contactFormInput}>
        <option value="gmail">Open in Gmail</option>
        <option value="app">Open in my email app</option>
        <option value="copy">Copy draft text</option>
      </select>
      <button className={styles.submitButton} type="submit">Prepare draft</button>
      <small className={styles.draftNote}>Review and send from your email account.</small>
      <span className={styles.draftNote} role="status">{status}</span>
      {draftText && <textarea aria-label="Draft to copy" className={styles.contactFormTextarea} readOnly value={draftText} onFocus={(event) => event.target.select()} />}
    </form>
  );
}
