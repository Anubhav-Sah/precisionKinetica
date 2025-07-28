import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-400">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink><br />
            <NavLink to="/platform" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Platform</NavLink><br />
            <NavLink to="/pipeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Pipeline</NavLink><br />
            <NavLink to="/partnership" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Partnerships</NavLink><br />
            <NavLink to="/news-media" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>News & Media</NavLink><br />
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink><br />
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400">Email: info@precisionkinetica.com</p>
          <p className="text-gray-400">Phone: +91-123456789</p>
          <p className="text-gray-400">Location: California, USA</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} precision kinetica. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
