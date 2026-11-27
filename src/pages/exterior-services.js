import Head from 'next/head';
import fs from 'node:fs';
import path from 'node:path';
import ExteriorServices from '../components/ExteriorServices';

const title = 'Magri Exterior Services | Mobile Fleet Washing | Charlotte NC';
const description = 'On-site commercial fleet washing in Charlotte, NC. Request a quote for service vans, commercial vehicles, recurring wash programs and commercial exterior cleaning. Call or text 704-421-8832.';
const photoCatalog = [
  { id: 'fleet-wash', file: 'fleet-wash.jpg', alt: 'On-site washing of a white commercial cargo van', caption: 'Commercial fleet washing experience — branding removed', width: 1200, height: 900 },
  { id: 'front-scrub', file: 'front-scrub.jpg', alt: 'Hand scrubbing a commercial van windshield', caption: 'Hands-on windshield cleaning', width: 900, height: 1200 },
  { id: 'rear-scrub', file: 'rear-scrub.jpg', alt: 'Worker brushing rear cargo doors', caption: 'Exterior brush cleaning — branding removed', width: 900, height: 1200 },
  { id: 'site-cleanup', file: 'site-cleanup.jpg', alt: 'Wet vacuum beside a commercial vehicle and curb', caption: 'Wash-site cleanup — branding removed', width: 900, height: 1200 },
];

export function getStaticProps() {
  const photos = photoCatalog.filter(photo => fs.existsSync(path.join(process.cwd(), 'public', 'images', 'exterior-services', 'fleet', photo.file))).map(photo => ({
    ...photo, src: '/images/exterior-services/fleet/' + photo.file,
  }));
  return { props: { photos } };
}

export default function ExteriorServicesPage({ photos }) {
  const hero = photos.find(photo => photo.id === 'fleet-wash') || photos[0];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta key="description" name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://jakemagri.dev/exterior-services/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jakemagri.dev/exterior-services/" />
        {hero && <meta property="og:image" content={'https://jakemagri.dev' + hero.src} />}
      </Head>
      <ExteriorServices photos={photos} />
    </>
  );
}
