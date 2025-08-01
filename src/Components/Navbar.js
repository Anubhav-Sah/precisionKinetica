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
          ? 'fixed top-6 left-4 right-4 bg-white/30 shadow-lg rounded-full border border-transparent opacity-100 animate-navbar-fade-in'
          : 'absolute top-6 left-4 right-4 bg-blue-800/80 border-none rounded-full shadow-none opacity-95 animate-navbar-fade-out'
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
          className={`text-xl font-bold tracking-wide transition ${
            floating
              ? 'text-blue-800 hover:text-blue-900'
              : 'text-white hover:text-blue-200'
          }`}
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
              ? floating
                ? 'font-medium text-blue-800 underline'
                : 'font-medium text-white underline'
              : floating
                ? 'font-medium text-blue-700 hover:text-blue-900 transition'
                : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Platform
        </NavLink>
        <NavLink
          to="/pipeline"
          className={({ isActive }) =>
            isActive
              ? floating
                ? 'font-medium text-blue-800 underline'
                : 'font-medium text-white underline'
              : floating
                ? 'font-medium text-blue-700 hover:text-blue-900 transition'
                : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Pipeline
        </NavLink>
        <NavLink
          to="/partnership"
          className={({ isActive }) =>
            isActive
              ? floating
                ? 'font-medium text-blue-800 underline'
                : 'font-medium text-white underline'
              : floating
                ? 'font-medium text-blue-700 hover:text-blue-900 transition'
                : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          Partnerships
        </NavLink>
        <NavLink
          to="/news-media"
          className={({ isActive }) =>
            isActive
              ? floating
                ? 'font-medium text-blue-800 underline'
                : 'font-medium text-white underline'
              : floating
                ? 'font-medium text-blue-700 hover:text-blue-900 transition'
                : 'font-medium text-blue-100 hover:text-white transition'
          }
        >
          News & Media
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? floating
                ? 'font-medium text-blue-800 underline'
                : 'font-medium text-white underline'
              : floating
                ? 'font-medium text-blue-700 hover:text-blue-900 transition'
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
                ? floating
                  ? 'bg-blue-800 text-white'
                  : 'bg-white text-blue-800'
                : floating
                  ? 'bg-blue-700 text-white hover:bg-blue-800'
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

// Tailwind CSS: Add these to your global CSS (e.g., App.css or index.css)
/*
@layer utilities {
  @keyframes navbar-fade-in {
    from { opacity: 0; transform: translateY(-16px);}
    to { opacity: 1; transform: translateY(0);}
  }
  @keyframes navbar-fade-out {
    from { opacity: 1; transform: translateY(0);}
    to { opacity: 0.95; transform: translateY(-8px);}
  }
  .animate-navbar-fade-in {
    animation: navbar-fade-in 0.4s ease;
  }
  .animate-navbar-fade-out {
    animation: navbar-fade-out 0.4s ease;
  }
}
*/

export default Navbar;