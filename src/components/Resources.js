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
      description: 'A practical reset system for turning scattered work into a short execution plan.\n\nIncludes prompts to:\n• identify the real priority\n• reduce mental noise\n• convert open loops into next actions\n• choose 1–3 moves for the day\n• restart execution without overplanning',
      gumroadUrl: 'https://magri0.gumroad.com/l/operator-starter-pack',
      price: '$9.99',
      comingSoon: false,
    },
    {
      name: 'Clarity & Momentum System',
      description: 'A weekly planning system for staying aligned without building an overcomplicated productivity process.\n\nIncludes:\n• weekly review and reset\n• priority ranking\n• constraint and friction mapping\n• next-action planning\n• simple reflection loops',
      gumroadUrl: 'https://magri0.gumroad.com/l/clarity-momentum-system',
      price: '$19.99',
      comingSoon: false,
    },
    {
      name: 'Creator Distillation Pack',
      description: 'A prompt system for turning raw ideas into clear posts, threads, and short-form insights.\n\nIncludes prompts for:\n• hooks and punchlines\n• longform to shortform\n• idea distillation\n• structured messaging\n• clear positioning without overexplaining',
      gumroadUrl: 'https://gumroad.com/your-product-url-creator',
      price: '$24.99',
      comingSoon: true,
    },
    {
      name: 'Reflection & Decision Kit',
      description: 'A lightweight framework for making sense of recurring patterns and turning them into cleaner decisions.\n\nIncludes prompts to:\n• identify repeated loops\n• separate signal from noise\n• clarify tradeoffs\n• convert reflection into action\n• reduce circular thinking',
      gumroadUrl: 'https://gumroad.com/your-product-url-mirror',
      price: '$29.99',
      comingSoon: true,
    },
    {
      name: 'Decision Mastery Framework',
      description: 'A decision-support prompt system for evaluating options, tradeoffs, and second-order consequences.\n\nIncludes prompts to:\n• compare options clearly\n• identify risks and constraints\n• test assumptions\n• separate emotion from evidence\n• convert uncertainty into a next move',
      gumroadUrl: 'https://gumroad.com/your-product-url-decision',
      price: '$34.99',
      comingSoon: true,
    },
    {
      name: 'Executive Operator Bundle',
      description: 'A complete prompt bundle for planning, prioritization, decision support, and content distillation.\n\nIncludes:\n• Operator Starter Pack\n• Clarity & Momentum System\n• Creator Distillation Pack\n• Reflection & Decision Kit\n• Decision Mastery Framework',
      gumroadUrl: 'https://gumroad.com/your-product-url-bundle',
      price: '$59.99',
      comingSoon: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 mt-12 sm:mx-6">
      <SlidingText
        direction="top"
        text={
          <>
            <h2 className={`${styles.tenorSans} text-[48px] font-normal text-center text-gray-800 mb-6`}>
              Prompt Systems for Operators, Builders, and Creators
            </h2>
          </>
        }
      />

      <SlidingText
        direction="top"
        text={
          <>
            <p className={`${styles.interTight} text-[18px] font-light text-center text-gray-600 mb-8`}>
              Practical prompt packs for planning, prioritizing, decision-making, and turning raw ideas into clear action.
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
                    {prompt.comingSoon ? 'Get Access (coming soon)' : 'Get Access'}
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
