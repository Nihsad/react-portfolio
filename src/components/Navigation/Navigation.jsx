import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navigation">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navigation-links-flex ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>About Me</Link></li>
        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
