import Image from 'next/image';
import styles from './ExteriorServices.module.css';

const serviceCards = [
  { title: 'Mobile fleet washing', description: 'On-site exterior washing for service vans, delivery vehicles and commercial trucks. Larger vehicles and equipment are evaluated by scope and site conditions.' },
  { title: 'Recurring wash programs', description: 'Plan regular visits around vehicle availability, fleet size and operating hours rather than sending vehicles away for cleaning.' },
  { title: 'Commercial exterior cleaning', description: 'Ask about targeted cleaning of suitable commercial surfaces and equipment as part of your site maintenance needs.' },
];

const workflowSteps = [
  { number: '1', title: 'Review your fleet', description: 'Tell us your location, vehicle types, approximate unit count, preferred frequency and available wash area.' },
  { number: '2', title: 'Agree on a service plan', description: 'Confirm scope, pricing, site access, water supply and an appropriate wastewater management approach before scheduling.' },
  { number: '3', title: 'Wash, document and repeat', description: 'Coordinate the visit and agree on how completed units, exceptions and future visits will be communicated.' },
];

const serviceAreas = ['Charlotte, NC', 'Steele Creek', 'Pineville', 'Southwest Charlotte', 'Nearby industrial corridors'];

const audiences = ['Field service & construction fleets', 'Delivery & distribution operators', 'Equipment rental & material handling', 'Fleet maintenance & contracting partners'];

export default function ExteriorServices({ photos = [] }) {
  const hero = photos.find(photo => photo.id === 'fleet-wash') || photos[0];
  const gallery = photos.filter(photo => photo.id !== hero?.id);
  return (
    <main className={styles.pageShell}>
      <header className={styles.localHeader}>
        <a href="#hero-heading" className={styles.localBrand} aria-label="Magri Exterior Services home">
          <span className={styles.localBrandMark}>Magri Exterior Services</span>
          <span className={styles.localBrandMeta}>Commercial fleet washing</span>
        </a>
        <a className={styles.localHeaderCta} href="sms:7044218832">Text for Quote</a>
      </header>

      <section className={`${styles.heroSection} ${!hero ? styles.textOnlyHero : ''}`} aria-labelledby="hero-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>MOBILE FLEET WASHING · CHARLOTTE, NC</p>
          <h1 id="hero-heading">Clean fleets. Less disruption.</h1>
          <p className={styles.heroText}>On-site commercial vehicle washing designed around your fleet, your facility and your operating schedule.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="sms:7044218832">Request a Fleet Quote</a>
            <a className={styles.secondaryButton} href="tel:7044218832">Call 704-421-8832</a>
          </div>
          <p className={styles.heroSupport}>One-time washes, recurring service and vendor partnership inquiries welcome.</p>
        </div>
        {hero && (
          <div className={styles.heroVisual}>
            <figure className={styles.fleetHeroFrame}>
              <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes="(min-width: 768px) 420px, 100vw" className={styles.fleetHeroImage} priority />
              <figcaption className={styles.fleetCaption}>{hero.caption}</figcaption>
            </figure>
          </div>
        )}
      </section>

      <section className={styles.servicesSection} aria-labelledby="services-heading">
        <header className={styles.sectionHeader}><h2 id="services-heading">Commercial services</h2></header>
        <div className={styles.servicesGrid}>
          {serviceCards.map(service => (
            <article key={service.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.areaSection} aria-labelledby="customers-heading">
        <header className={styles.sectionHeader}><h2 id="customers-heading">Who we work with</h2></header>
        <p className={styles.sectionIntro}>For businesses that operate vehicles or equipment from a yard, depot or commercial facility.</p>
        <ul className={styles.areaList}>{audiences.map(audience => <li key={audience}>{audience}</li>)}</ul>
      </section>

      <section className={styles.areaSection} aria-labelledby="visibility-heading">
        <header className={styles.sectionHeader}><h2 id="visibility-heading">More than a clean vehicle</h2></header>
        <p className={styles.sectionIntro}>A reliable wash program should be easy to coordinate and easy to account for. Drawing on prior commercial fleet-washing experience and a background in management information systems, Magri Exterior Services focuses on practical service organization, clear communication and accountability.</p>
        <div className={styles.servicesGrid}>
          {[
            ['Operational convenience', 'Coordinate service windows around vehicles already parked at your facility.'],
            ['Service visibility', 'Agree on vehicle identification, completed work, exceptions and visit summaries with your fleet contact.'],
            ['Site responsibility', 'Review access, water availability and wastewater handling requirements before work begins.'],
          ].map(([title, description]) => (
            <article key={title} className={styles.serviceCard}><h3 className={styles.serviceTitle}>{title}</h3><p className={styles.serviceDescription}>{description}</p></article>
          ))}
        </div>
      </section>

      {gallery.length > 0 && (
        <section className={styles.gallerySection} aria-labelledby="gallery-heading">
          <header className={styles.sectionHeader}>
            <h2 id="gallery-heading">Fleet washing in practice</h2>
            <p className={styles.sectionIntro}>Illustrations of hands-on fleet washing experience. Some images have been edited to remove customer branding; they are not a customer endorsement or a claim of a Magri service contract.</p>
          </header>
          <div className={styles.fleetGallery}>
            {gallery.map(photo => (
              <figure key={photo.id} className={styles.fleetPhoto}>
                <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 768px) 33vw, 100vw" className={styles.fleetPhotoImage} />
                <figcaption className={styles.fleetCaption}>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className={styles.howWorksSection} aria-labelledby="how-it-works-heading">
        <header className={styles.sectionHeader}><h2 id="how-it-works-heading">How it works</h2></header>
        <div className={styles.stepGrid}>{workflowSteps.map(step => (
          <article key={step.number} className={styles.stepCard}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div><h3 className={styles.stepTitle}>{step.title}</h3><p className={styles.stepDescription}>{step.description}</p></div>
          </article>
        ))}</div>
      </section>

      <section className={styles.areaSection} aria-labelledby="service-area-heading">
        <header className={styles.sectionHeader}><h2 id="service-area-heading">Serving the Charlotte area</h2></header>
        <p className={styles.sectionIntro}>Based in South Charlotte. Contact us to discuss your site and service requirements.</p>
        <ul className={styles.areaList}>{serviceAreas.map(area => <li key={area}>{area}</li>)}</ul>
      </section>

      <section className={styles.finalCtaSection} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaContent}>
          <div>
            <h2 id="final-cta-heading">Request a fleet washing quote</h2>
            <p className={styles.finalCtaText}>Send your location, vehicle types, approximate fleet size and preferred wash frequency. We can discuss a trial wash, recurring service or a supplemental vendor arrangement.</p>
          </div>
          <div className={styles.finalCtaActions}>
            <a className={styles.finalCtaButton} href="sms:7044218832">Text for a Quote</a>
            <a className={styles.finalCtaButtonSecondary} href="tel:7044218832">Call 704-421-8832</a>
          </div>
        </div>
      </section>

      <footer className={styles.localFooter}>
        <div className={styles.localFooterBrand}>Magri Exterior Services</div>
        <div className={styles.localFooterRight}>
          <div className={styles.localFooterMeta}>Charlotte, NC · 704-421-8832</div>
          <div className={styles.localFooterLinks}>
            <a className={styles.localFooterReviewButton} href="https://g.page/r/CbrBCnWqGdD5EAE/review" target="_blank" rel="noopener noreferrer">Leave a Google Review</a>
            <div className={styles.localFooterSocial} aria-label="Magri Exterior Services social links">
              <a href="https://www.facebook.com/profile.php?id=61592680299659&amp;mibextid=wwXIfr&amp;mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/super_clean_77" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className={styles.localFooterSubtle}>Part of <a href="/">JakeMagri.dev</a></div>
        </div>
      </footer>
      <nav className={styles.mobileContactBar} aria-label="Exterior services contact bar">
        <a href="sms:7044218832" className={styles.mobileContactButton}>Text Quote</a>
        <a href="tel:7044218832" className={styles.mobileContactButtonSecondary}>Call</a>
      </nav>
    </main>
  );
}
