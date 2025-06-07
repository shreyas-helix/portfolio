import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>About</Link>
                </li>
                <li className="navbar-item">
                <Link to="/resume" className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
                </li>
                <li className="navbar-item">
                <Link to="/projects" className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
                </li>
                <li className="navbar-item">
                <Link to="/contact" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                </li>
            </ul>
        </nav>
    );  
};

export default Navbar;