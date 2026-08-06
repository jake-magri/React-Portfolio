import Image from 'next/image';
import styles from './ExteriorServices.module.css';

const serviceCards = [
  {
    title: 'Lawn Mowing & Edging',
    description:
      'Regular mowing, edging, and basic cleanup to keep the property looking maintained.',
  },
  {
    title: 'Pressure Washing',
    description:
      'Driveways, walkways, patios, exterior surfaces, and other appropriate hard-surface cleaning.',
  },
  {
    title: 'Gutter Cleaning',
    description:
      'Removal of leaves and debris to help keep gutters flowing properly.',
  },
  {
    title: 'Leaf & Yard Cleanup',
    description:
      'Seasonal leaf removal, debris cleanup, and general exterior property cleanup.',
  },
];

const galleryPairs = [
  {
    title: 'Lawn cleanup',
    items: [
      {
        src: '/images/exterior-services/IMG_9912.jpg',
        alt: 'Before lawn cleanup photo showing overgrown grass near the front of the property',
        caption: 'Before',
        width: 3024,
        height: 4032,
      },
      {
        src: '/images/exterior-services/Lawn_Front_Right_After_2.jpg',
        alt: 'After lawn cleanup photo showing the trimmed front-right side of the yard',
        caption: 'After',
        width: 3024,
        height: 4032,
      },
    ],
  },
  {
    title: 'Concrete cleaning',
    items: [
      {
        src: '/images/exterior-services/IMG_9741.jpg',
        alt: 'Before pressure washing photo showing dirty concrete',
        caption: 'Before',
        width: 3024,
        height: 4032,
      },
      {
        src: '/images/exterior-services/IMG_9742.jpg',
        alt: 'After pressure washing photo showing clean concrete',
        caption: 'After',
        width: 3024,
        height: 4032,
      },
    ],
  },
  {
    title: 'Wood cleaning',
    items: [
      {
        src: '/images/exterior-services/IMG_9745.jpg',
        alt: 'Before wood cleaning photo showing green buildup on a wood post',
        caption: 'Before',
        width: 3024,
        height: 4032,
      },
      {
        src: '/images/exterior-services/IMG_9746.jpg',
        alt: 'After wood cleaning photo showing the cleaned wood post',
        caption: 'After',
        width: 3024,
        height: 4032,
      },
    ],
  },
];

const workflowSteps = [
  {
    number: '1',
    title: 'Send me the job',
    description:
      'Call or text a photo and short description of what you need done.',
  },
  {
    number: '2',
    title: 'Get a quote',
    description: 'I’ll review the job and give you a straightforward quote.',
  },
  {
    number: '3',
    title: 'Get it handled',
    description:
      'We schedule the work and I take care of the exterior cleanup.',
  },
];

const serviceAreas = [
  'Charlotte, NC',
  'South Charlotte',
  'Steele Creek',
  'Palisades',
  'Nearby surrounding areas',
];

const renderComparison = (item) => (
  <article key={item.title} className={styles.galleryPair}>
    <h3 className={styles.galleryPairTitle}>{item.title}</h3>
    <div className={styles.galleryPairGrid}>
      {item.items.map((entry) => (
        <figure key={entry.src} className={styles.galleryCard}>
          <div className={styles.galleryLabel}>{entry.caption}</div>
          <Image
            src={entry.src}
            alt={entry.alt}
            width={entry.width}
            height={entry.height}
            sizes="(min-width: 768px) 320px, 50vw"
            className={styles.galleryImage}
          />
        </figure>
      ))}
    </div>
  </article>
);

export default function ExteriorServices() {
  return (
    <main className={styles.pageShell}>
      <header className={styles.localHeader}>
        <a href="#hero-heading" className={styles.localBrand} aria-label="Magri Exterior Services home">
          <span className={styles.localBrandMark}>Magri Exterior Services</span>
          <span className={styles.localBrandMeta}>South Charlotte</span>
        </a>
        <a className={styles.localHeaderCta} href="sms:7044218832" aria-label="Text Magri Exterior Services for a quote">
          Text for Quote
        </a>
      </header>

      <section className={styles.heroSection} aria-labelledby="hero-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>MAGRI EXTERIOR SERVICES • SOUTH CHARLOTTE</p>
          <h1 id="hero-heading">Your property, cleaned up.</h1>
          <p className={styles.heroText}>
            Lawn mowing &amp; edging, pressure washing, gutter cleaning and exterior cleanup in South Charlotte.
          </p>
          <div className={styles.heroActions}>
            <a
              className={styles.primaryButton}
              href="sms:7044218832"
              aria-label="Text Magri Exterior Services for a free quote"
            >
              Text for a Free Quote
            </a>
            <a
              className={styles.secondaryButton}
              href="tel:7044218832"
              aria-label="Call Magri Exterior Services"
            >
              Call 704-421-8832
            </a>
          </div>
          <p className={styles.heroSupport}>Send a photo of what you need done.</p>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImageFrame}>
            <Image
              src="/images/exterior-services/EC0E0496-8002-4125-9DB3-5B54385A5D80.PNG"
              alt="Placeholder for exterior services before and after photo"
              width={1200}
              height={900}
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <header className={styles.sectionHeader}>
          <h2 id="services-heading">Services</h2>
        </header>
        <div className={styles.servicesGrid}>
          {serviceCards.map((service) => (
            <article key={service.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.gallerySection} aria-labelledby="gallery-heading">
        <header className={styles.sectionHeader}>
          <h2 id="gallery-heading">Recent work</h2>
          <p className={styles.sectionIntro}>
            Real before &amp; afters from exterior projects around Charlotte.
          </p>
        </header>
        <div className={styles.galleryGrid}>
          {galleryPairs.map(renderComparison)}
        </div>
      </section>

      <section className={styles.howWorksSection} aria-labelledby="how-it-works-heading">
        <header className={styles.sectionHeader}>
          <h2 id="how-it-works-heading">How it works</h2>
        </header>
        <div className={styles.stepGrid}>
          {workflowSteps.map((step) => (
            <article key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.areaSection} aria-labelledby="service-area-heading">
        <header className={styles.sectionHeader}>
          <h2 id="service-area-heading">Serving South Charlotte</h2>
        </header>
        <p className={styles.sectionIntro}>
          Based in the Charlotte area and focused primarily on South Charlotte and nearby neighborhoods.
        </p>
        <ul className={styles.areaList}>
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>

      <section className={styles.finalCtaSection} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaContent}>
          <div>
            <h2 id="final-cta-heading">Need something outside cleaned up?</h2>
            <p className={styles.finalCtaText}>
              Send me a photo of what you need done and I&apos;ll let you know what I can do.
            </p>
          </div>
          <div className={styles.finalCtaActions}>
            <a
              className={styles.finalCtaButton}
              href="sms:7044218832"
              aria-label="Text Magri Exterior Services for a free quote"
            >
              Text for a Free Quote
            </a>
            <a
              className={styles.finalCtaButtonSecondary}
              href="tel:7044218832"
              aria-label="Call Magri Exterior Services"
            >
              Call 704-421-8832
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.localFooter}>
        <div className={styles.localFooterBrand}>Magri Exterior Services</div>
        <div className={styles.localFooterRight}>
          <div className={styles.localFooterMeta}>South Charlotte, NC • 704-421-8832</div>
          <div className={styles.localFooterSocial} aria-label="Magri Exterior Services social links">
            <a
              href="https://www.facebook.com/profile.php?id=61592680299659&mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/super_clean_77"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className={styles.localFooterSubtle}>
            Part of <a href="/">JakeMagri.dev</a>
          </div>
        </div>
      </footer>

      <nav className={styles.mobileContactBar} aria-label="Exterior services contact bar">
        <a href="sms:7044218832" className={styles.mobileContactButton} aria-label="Text Magri Exterior Services for a free quote">
          Text Quote
        </a>
        <a href="tel:7044218832" className={styles.mobileContactButtonSecondary} aria-label="Call Magri Exterior Services">
          Call
        </a>
      </nav>
    </main>
  );
}
