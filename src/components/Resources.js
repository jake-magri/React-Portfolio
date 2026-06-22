import { useEffect } from 'react';
import styles from './Resources.module.css';
import SlidingText from './SlidingText';

export default function Resources() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const prompts = [
    {
      name: 'Operator Starter Pack',
      description: 'A practical reset system for turning scattered work into a short execution plan. Includes prompts to identify the real priority, reduce mental noise, convert open loops into next actions, and restart execution without overplanning.',
      gumroadUrl: 'https://magri0.gumroad.com/l/operator-starter-pack',
      price: '$9.99',
      comingSoon: false,
    },
    {
      name: 'Clarity & Momentum System',
      description: 'A weekly planning system for staying aligned without building an overcomplicated productivity process. Includes review, prioritization, constraint mapping, next-action planning, and reflection loops.',
      gumroadUrl: 'https://magri0.gumroad.com/l/clarity-momentum-system',
      price: '$19.99',
      comingSoon: false,
    },
    {
      name: 'Creator Distillation Pack',
      description: 'A prompt system for turning raw ideas into clear posts, threads, and short-form insights. Includes hooks, longform-to-shortform conversion, idea distillation, and structured messaging.',
      gumroadUrl: 'https://gumroad.com/your-product-url-creator',
      price: '$24.99',
      comingSoon: true,
    },
    {
      name: 'Reflection & Decision Kit',
      description: 'A lightweight framework for making sense of recurring patterns and turning them into cleaner decisions through signal separation, tradeoff clarity, and action planning.',
      gumroadUrl: 'https://gumroad.com/your-product-url-mirror',
      price: '$29.99',
      comingSoon: true,
    },
    {
      name: 'Decision Mastery Framework',
      description: 'A decision-support prompt system for evaluating options, tradeoffs, risks, assumptions, and second-order consequences before choosing the next move.',
      gumroadUrl: 'https://gumroad.com/your-product-url-decision',
      price: '$34.99',
      comingSoon: true,
    },
    {
      name: 'Executive Operator Bundle',
      description: 'A complete prompt bundle for planning, prioritization, decision support, content distillation, and execution clarity.',
      gumroadUrl: 'https://gumroad.com/your-product-url-bundle',
      price: '$59.99',
      comingSoon: true,
    },
  ];

  return (
    <main className={styles.pageShell}>
      <section className={styles.heroBlock}>
        <SlidingText
          direction="top"
          text={
            <>
              <p className={styles.eyebrow}>Resources</p>
              <h1>Prompt systems for operators, builders, and creators.</h1>
            </>
          }
        />
        <SlidingText
          direction="fade"
          text={
            <p>
              Practical prompt packs for planning, prioritizing, decision-making, and turning scattered thoughts into cleaner action.
            </p>
          }
        />
      </section>

      <section className={styles.resourceGrid}>
        {prompts.map((prompt) => (
          <article key={prompt.name} className={styles.resourceCard}>
            <div>
              <span className={styles.price}>{prompt.price}</span>
              <h3>{prompt.name}</h3>
              <p>{prompt.description}</p>
            </div>
            <a
              href={prompt.gumroadUrl}
              className={styles.learnMore}
              data-gumroad-single-product="true"
            >
              {prompt.comingSoon ? 'Coming Soon' : 'Get Access'}
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
