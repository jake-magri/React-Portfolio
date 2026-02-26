import { useEffect } from 'react';
import styles from './Resources.module.css';
import SlidingText from './SlidingText';

export default function Resources() {
  useEffect(() => {
    // Load Gumroad embed script
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
      description:
        'For when you feel scattered, overwhelmed, or mentally noisy.\n\nIncludes prompts to:\n• regain clarity in minutes\n• compress chaos into 1–3 priorities\n• reset your nervous system + state\n• stop overthinking loops\n• re-enter execution mode',
      gumroadUrl: 'https://gumroad.com/your-product-url-starter', // Replace
      price: '$9.99',
    },
    {
      name: 'Clarity & Momentum System',
      description:
        'Your weekly operating system for clarity and momentum.\n\nIncludes:\n• weekly reset + recalibration ritual\n• priority ranking + constraint design\n• friction + energy leak detection\n• next-best-action extractor\n• reflection loops that drive behavioral change',
      gumroadUrl: 'https://gumroad.com/your-product-url-clarity', // Replace
      price: '$19.99',
    },
    {
      name: 'Creator Distillation Pack',
      description:
        'Turn raw thoughts into sharp, resonant content.\n\nIncludes prompts for:\n• Threads / X punchlines & insight posts\n• poetic → structured distillation\n• longform → high-impact shortform\n• emotional truth → clarity-driven messaging\n• positioning depth without oversharing',
      gumroadUrl: 'https://gumroad.com/your-product-url-creator', // Replace
      price: '$24.99',
    },
    {
      name: 'Mirror + Distill Kit',
      description:
        'Deep introspection — without drifting into rumination.\n\nIncludes prompts to:\n• interpret emotional patterns clearly\n• identify recurring loops + attachments\n• extract lessons without self-judgment\n• stabilize perspective during transitions\n• translate experience into direction',
      gumroadUrl: 'https://gumroad.com/your-product-url-mirror', // Replace
      price: '$29.99',
    },
    {
      name: 'Decision Mastery Framework',
      description:
        'For high-stakes decisions where clarity matters.\n\nIncludes prompts to:\n• evaluate tradeoffs without distortion\n• run second- and third-order consequence analysis\n• separate intuition from fear\n• detect bias, projection, and emotional noise\n• convert uncertainty into clean judgment\n\nBuilt for founders, operators, and builders making real moves.',
      gumroadUrl: 'https://gumroad.com/your-product-url-decision', // Replace
      price: '$34.99',
    },
    {
      name: 'Executive Operator Bundle',
      description:
        'Everything above — built to reduce friction and increase alignment.\n\nIncludes:\n• Operator Starter Pack\n• Clarity & Momentum System\n• Creator Distillation Pack\n• Mirror + Distill Kit\n• Decision Mastery Framework\n\nPlus: lifetime updates as new templates drop.',
      gumroadUrl: 'https://gumroad.com/your-product-url-bundle', // Replace
      price: '$59.99',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 mt-12 sm:mx-6">
      {/* Prompts Section */}
      <SlidingText
        direction="top"
        text={
          <>
            <h2 className={`${styles.tenorSans} text-[48px] font-normal text-center text-gray-800 mb-6`}>
              Prompt Systems for Clarity & Execution
            </h2>
          </>
        }
      />

      <SlidingText
        direction="top"
        text={
          <>
            <p className={`${styles.interTight} text-[18px] font-light text-center text-gray-600 mb-8`}>
              These aren’t random “prompt bundles.” They’re reusable frameworks to remove friction,
              sharpen priorities, and move with consistency — without burning out.
            </p>
          </>
        }
      />

      <SlidingText
        direction="bottom"
        text={
          <div className="grid md:grid-cols-2 gap-8">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-rows-[1fr_auto]"
              >
                <div className="p-6 grid grid-rows-[auto_1fr]">
                  <div>
                    <h3 className={`${styles.resourceCard} text-gray-800`}>{prompt.name}</h3>
                    <p className="text-2xl font-bold text-blue-600 mt-2">{prompt.price}</p>
                  </div>

                  <p className="text-gray-600 mt-4 whitespace-pre-line">{prompt.description}</p>
                </div>

                <div className="p-6 flex justify-center">
                  <a
                    href={prompt.gumroadUrl}
                    className={styles.learnMore}
                    data-gumroad-single-product="true"
                  >
                    Get Access (coming soon)
                  </a>
                </div>
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
}