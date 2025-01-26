// components/NavTabs.js
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

const NavTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const isMobile = useMediaQuery('(max-width: 767px)'); // Mobile breakpoint

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar custom-dark-green">
      <div className="nav-container">
        <span className="navbar-brand">Jake Magri</span>
        {isMobile && !isMenuOpen && (
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <img
              className="nav-bar-button-icon"
              src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF"
              alt="Toggle Menu"
            />
          </button>
        )}
      
      <div
        className={`${isMobile ? 'navbar-collapse' : 'navbar-extend'} ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
        ref={menuRef}
      >
        {isMobile && (
          <button
            className="close-button"
            type="button"
            aria-label="Close navigation"
            onClick={toggleMenu}
          >
            ×
          </button>
        )}
        <ul className="nav">
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
              href="/"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/resume' ? 'active' : ''}`}
              href="/resume"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/portfolio' ? 'active' : ''}`}
              href="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/blogs' ? 'active' : ''}`}
              href="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/resources' ? 'active' : ''}`}
              href="/resources"
            >
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default NavTabs;
