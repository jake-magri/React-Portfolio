import './NavTabs.css';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function NavTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the navbar menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="d-flex justify-content-between w-100">
        <span className="navbar-brand">Jake Magri</span>
        {!isMenuOpen && (
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
      </div>
      <div
        className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
        ref={menuRef} // Attach the ref here
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
          <Link className='nav-link' to="/">About Me</Link>
          </li>
          <li className="nav-item ">
          <Link className='nav-link' to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to="/resume">Resume</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
