import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const links = [['/portfolio', 'Projects'], ['/resume', 'Experience'], ['/blogs', 'Notes'], ['/contact', 'Contact']];
export default function NavTabs() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const button = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const outside = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const escape = e => { if (e.key === 'Escape' && open) { setOpen(false); button.current?.focus(); } };
    document.addEventListener('pointerdown', outside); document.addEventListener('keydown', escape);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', escape); };
  }, [open]);
  return <nav className="site-nav" aria-label="Main navigation" ref={ref}><div className="site-nav-inner"><Link className="site-brand" href="/" onClick={() => setOpen(false)}>Jake Magri<span>Software Developer</span></Link><button ref={button} className="site-menu-button" type="button" aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button><ul id="site-menu" className={`site-menu ${open ? 'is-open' : ''}`}>{links.map(([href,label]) => { const active=router.pathname===href || (href==='/portfolio' && router.pathname.startsWith('/projects/')); return <li key={href}><Link href={href} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link></li>; })}</ul></div></nav>;
}
