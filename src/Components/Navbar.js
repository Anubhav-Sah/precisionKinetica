import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Left: Logo */}
      <div className="navbar-left">
        <NavLink to="/" className="nav-logo">Precision Kinetica</NavLink>
      </div>

      {/* Center: Main links */}
      <div className="navbar-center">
        <NavLink to="/platform" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Platform</NavLink>
        <NavLink to="/pipeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Pipeline</NavLink>
        <NavLink to="/partnership" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Partnerships</NavLink>
        <NavLink to="/news-media" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>News & Media</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
      </div>

      {/* Right: Contact */}
      <div className="navbar-right">
        <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `inline-block px-6 py-3 rounded-md text-lg font-medium transition ${
                      isActive
                        ? 'bg-blue-700 text-white'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`
                  }
                >
                  Contact Us
                </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
