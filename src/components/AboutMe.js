 import Link from 'next/link';
import styles from './AboutMe.module.css';
const focusAreas = [
  { title: 'Business applications', text: 'C#/.NET and SQL for business applications, with Azure as my current cloud focus.' },
  { title: 'Integrations & automation', text: 'APIs, cloud data workflows, and document processing that connect systems and reduce manual work.' },
  { title: 'Testing & delivery', text: 'Experience with test automation, release coordination, technical documentation, and cross-team communication.' },
];
export default function AboutMe() {
  return <main className={styles.pageShell}>
    <section className={styles.heroSection}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Jake Magri · Software Developer · Charlotte, NC</p>
        <h1>Useful software.<br />Clear business purpose.</h1>
        <p className={styles.heroText}>I develop business applications with C#/.NET, SQL, and cloud services. My experience includes reporting solutions, API integrations, AWS data workflows, and enterprise release coordination. I’m Microsoft Azure Fundamentals certified and developing my Azure infrastructure knowledge.</p>
        <div className={styles.ctaRow}><Link href="/portfolio" className={styles.primaryCta}>Explore my work</Link><Link href="/resume" className={styles.secondaryCta}>Experience & résumé</Link></div>
        <div className={styles.trustLine}>{['C# / .NET', 'SQL', 'Azure', 'AWS', 'Python', 'JavaScript / TypeScript'].map(s => <span key={s}>{s}</span>)}</div>
      </div>
      <aside className={styles.heroCard} aria-label="What I bring to a team">
        <div className={styles.cardHeader}><span className={styles.statusDot} aria-hidden="true" /><span>From requirement to working software</span></div>
        <div className={styles.workflowPreview}><div>01. Clarify the user’s task</div><div>02. Implement a focused change</div><div>03. Test and document the behavior</div><div>04. Review, learn, and improve</div></div>
        <p className={styles.cardNote}>I value clear requirements, thoughtful code review, and teammates who share context. I enjoy talking with users and making technical work understandable.</p>
      </aside>
    </section>
    <section className={styles.sectionBlock}>
      <div className={styles.sectionIntro}><p className={styles.eyebrow}>My technical foundation</p><h2>Building with business context.</h2><p>A degree in Management Information Systems, a Full-Stack Development Certificate from UNC Charlotte, and Azure Fundamentals and Scrum Product Owner certifications complement my experience in healthcare technology, financial services, and enterprise testing.</p></div>
      <div className={styles.focusGrid}>{focusAreas.map(a => <article key={a.title} className={styles.focusCard}><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
    </section>
    <section className={styles.splitSection}><div><p className={styles.eyebrow}>My next chapter</p><h2>Contributing and growing with a team.</h2></div><div className={styles.copyCard}><p>I’m interested in software development, technical analyst, and application implementation roles. My core stack is C#/.NET, SQL, and Azure, supported by professional AWS experience, Python automation, and JavaScript/TypeScript development. I enjoy connecting business requirements with reliable technical solutions.</p><p>Outside of software, I enjoy music, fitness, and working outdoors.</p><Link href="/contact" className={styles.secondaryCta}>Let’s talk about your team</Link></div></section>
  </main>;
}
