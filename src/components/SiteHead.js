import Head from 'next/head';
import { useRouter } from 'next/router';
export default function SiteHead({ title = 'Jake Magri | Software Developer', description = 'Charlotte software developer working with C#/.NET, SQL, APIs, Python, and web technologies. Experience in implementation, testing, and enterprise delivery.' }) {
  const { asPath } = useRouter();
  const path = asPath.split(/[?#]/)[0];
  const canonical = `https://jakemagri.dev${path === '/' ? '/' : `${path.replace(/\/$/, '')}/`}`;
  return <Head><title>{title}</title><meta name="description" content={description} key="description" /><link rel="canonical" href={canonical} key="canonical" /><meta property="og:title" content={title} key="og:title" /><meta property="og:description" content={description} key="og:description" /><meta property="og:url" content={canonical} key="og:url" /><meta property="og:type" content="website" key="og:type" /><meta property="og:image" content="https://jakemagri.dev/images/6.png" key="og:image" /><meta name="twitter:card" content="summary" key="twitter:card" /></Head>;
}
