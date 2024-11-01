import './NavTabs.css';
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the navbar menu

<<<<<<< HEAD
=======
  // displays and hides the side navbar
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
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

<<<<<<< HEAD
    // Cleanup event listener on unmount
=======
    // Remove event listener on unmount
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
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
<<<<<<< HEAD
            onClick={toggleMenu}
=======
            onClick={toggleMenu} // attached toggle menu to navbar toggler button
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img className='nav-bar-button-icon' src="https://img.icons8.com/?size=100&id=120374&format=png&color=FFFFFF"></img>
          </button>
        )}
      </div>
      <div
        className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}
        id="navbarNav"
<<<<<<< HEAD
        ref={menuRef} // Attach the ref here
=======
        ref={menuRef} // Attached the ref here
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
      >
        <button
          className="close-button"
          type="button"
          aria-label="Close navigation"
<<<<<<< HEAD
          onClick={toggleMenu}
        >
          ×
        </button>
=======
          onClick={toggleMenu} // toggle menu also is called on close button Click
        >
          ×
        </button>
        {/* Return Nav bar links with client side routing */}
>>>>>>> 47d3a97f057c3c56a34bf98beea8dc0cacb5dbae
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
