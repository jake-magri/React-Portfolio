// components/NavTabs.js
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // Import Link from Next.js for client-side navigation
import { useRouter } from 'next/router'; // Import useRouter from Next.js

const NavTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter(); // Get the current route

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
    <nav className="navbar navbar-light bg-light custom-dark-green">
      <div className="d-flex justify-content-between w-100">
        <span className="navbar-brand">Jake Magri</span>
        {!isMenuOpen && (
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <img className='nav-bar-button-icon' src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF" alt="Toggle Menu" />
          </button>
        )}
      </div>
      <div
        className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
        ref={menuRef}
      >
        <button
          className="close-button"
          type="button"
          aria-label="Close navigation"
          onClick={toggleMenu}
        >
          ×
        </button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} href="/">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/resume' ? 'active' : ''}`} href="/resume">Experience</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/portfolio' ? 'active' : ''}`} href="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/blogs' ? 'active' : ''}`} href="/blogs">Blogs</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/resources' ? 'active' : ''}`} href="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${router.pathname === '/contact' ? 'active' : ''}`} href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavTabs;
