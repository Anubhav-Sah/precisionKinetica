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
        fixed top-4 left-4 right-4 bg-white/30 shadow-md rounded-full
        flex items-center justify-between
        px-6 py-3
        w-[calc(100%-2rem)]
        max-w-[1000px]
        mx-auto
      `}
    >
      {/* Left: Logo */}
      <div>
        <NavLink
          to="/"
          className="text-lg font-bold tracking-wide text-gray-800 hover:text-black transition"
        >
          PRECISION KINETICA
        </NavLink>
      </div>

      {/* Center: Main links */}
      <div className="flex gap-4 text-sm font-medium">
        <NavLink
          to="/platform"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          Platform
        </NavLink>
        <NavLink
          to="/pipeline"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          Pipeline
        </NavLink>
        <NavLink
          to="/partnership"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          Partnership
        </NavLink>
        <NavLink
          to="/news-media"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          News & Research
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'text-black underline'
              : 'text-gray-700 hover:text-black transition'
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
