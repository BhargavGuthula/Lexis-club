// src/components/Navbar.jsx
import React ,{useState}from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling
import lexisLogo from '../assets/lexis-logo.jpg';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={`navbar ${isActive ? 'active' : ''}`}>
      <img id='img1' src={lexisLogo}  style={{height:'60px', borderRadius:'50%'}} />
      <div className="navbar-brand">
        <a href="/">The Lexis Club</a>
      </div>
      <button className="navbar-toggle" onClick={handleToggle}>
        ☰
      </button>   
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#home">Events</a>
        </li>
        <li className="nav-item">
          <a href="#about">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#services">My Muse</a>
        </li>
         <li className="nav-item">
          <a href="#services">Podcast</a>
        </li>
        <li className="nav-item">
          <a href="#services">Achievements</a>
        </li>

      </ul>
    </nav>
  );
};


export default Navbar;
