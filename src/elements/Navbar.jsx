import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import lexisLogo from '../assets/lexis-logo.jpg';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <img id='img1' src={lexisLogo} style={{height:'60px', borderRadius:'50%'}} alt="Lexis Club Logo" />
      <div className="navbar-brand">
        <Link to="/" onClick={closeMenu}>The Lexis Club</Link>
      </div>
      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>   
      <ul className={`navbar-nav ${isActive ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/events" onClick={closeMenu} className={location.pathname === '/events' ? 'active' : ''}>Events</Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" onClick={closeMenu} className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
        </li>
        <li className="nav-item">
          <Link to="/mymuse" onClick={closeMenu} className={location.pathname === '/mymuse' ? 'active' : ''}>My Muse</Link>
        </li>
        <li className="nav-item">
          <Link to="/podcast" onClick={closeMenu} className={location.pathname === '/podcast' ? 'active' : ''}>Podcast</Link>
        </li>
        <li className="nav-item">
          <Link to="/achievements" onClick={closeMenu} className={location.pathname === '/achievements' ? 'active' : ''}>Achievements</Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
