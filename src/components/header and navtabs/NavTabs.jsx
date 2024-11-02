import './NavTabs.css';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the navbar menu

  //

  // displays and hides the side navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle clicks outside the menu with useRef to directly access the dom - https://react.dev/reference/react/useRef
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the menu if the click is outside of it
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener on unmount
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
            onClick={toggleMenu} // attached toggle menu to navbar toggler button
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img className='nav-bar-button-icon' src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF"></img>
          </button>
        )}
      </div>
      <div
        className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
        ref={menuRef} // Attached the ref here
      >
        <button
          className="close-button"
          type="button"
          aria-label="Close navigation"
          onClick={toggleMenu} // toggle menu also is called on close button Click
        >
          ×
        </button>
        {/* Return Nav bar links with client side routing */}
        <ul className="nav flex-column">
          <li className="nav-item">
          <NavLink className='nav-link' to="/">About Me</NavLink>
          </li>
          <li className="nav-item ">
          <NavLink className='nav-link' to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className='nav-link' to="/resume">Resume</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className='nav-link' to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
