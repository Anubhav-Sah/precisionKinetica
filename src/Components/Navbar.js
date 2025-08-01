import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFloating(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        z-50
        transition-all duration-300
        backdrop-blur-md
        ${floating
          ? 'fixed top-6 left-4 right-4 bg-blue-800/80 shadow-lg rounded-full border border-blue-900'
          : 'absolute top-6 left-4 right-4 bg-blue-800/80 border-none rounded-full shadow-none'
        }
        flex items-center justify-between
        px-12 py-5
        w-[calc(100%-2rem)]
        max-w-[1800px]
        mx-auto
      `}
    >
      {/* Left: Logo */}
      <div>
        <NavLink
          to="/"
          className="text-xl font-bold tracking-wide text-white hover:text-blue-200 transition"
        >
          PRECISION KINETICA
        </NavLink>
      </div>

      {/* Center: Main links */}
      <div className="flex gap-6">
        <NavLink
          to="/platform"
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-white underline'
              : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Platform
        </NavLink>
        <NavLink
          to="/pipeline"
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-white underline'
              : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Pipeline
        </NavLink>
        <NavLink
          to="/partnership"
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-white underline'
              : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Partnerships
        </NavLink>
        <NavLink
          to="/news-media"
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-white underline'
              : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          News & Media
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'font-medium text-white underline'
              : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          About
        </NavLink>
      </div>

      {/* Right: Contact */}
      <div>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `inline-block px-6 py-2 rounded-full text-lg font-medium transition ${
              isActive
                ? 'bg-white text-blue-800'
                : 'bg-blue-700 text-white hover:bg-white hover:text-blue-800'
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