import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#334155] text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-300">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-gray-300 hover:text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/platform" className="text-gray-300 hover:text-white">Platform</NavLink>
            </li>
            <li>
              <NavLink to="/pipeline" className="text-gray-300 hover:text-white">Pipeline</NavLink>
            </li>
            <li>
              <NavLink to="/partnership" className="text-gray-300 hover:text-white">Partnerships</NavLink>
            </li>
            <li>
              <NavLink to="/news-media" className="text-gray-300 hover:text-white">News & Media</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-300 hover:text-white">About</NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300">Email: info@precisionkinetica.com</p>
          <p className="text-gray-300">Phone: +91-123456789</p>
          <p className="text-gray-300">Location: California, USA</p>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Precision Kinetica. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
