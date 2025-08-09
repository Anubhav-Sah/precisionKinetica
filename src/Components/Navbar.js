import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setFloating(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/platform", label: "Platform" },
    { path: "/pipeline", label: "Pipeline" },
    { path: "/partnership", label: "Partnership" },
    { path: "/news-media", label: "News & Research" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`
        z-50 transition-all duration-300 backdrop-blur-md
        fixed top-4 left-4 right-4 bg-white/30 shadow-md rounded-full
        flex items-center justify-between px-6 py-3
        w-[calc(100%-2rem)] max-w-[1000px] mx-auto
      `}
    >
      {/* Logo */}
      <div>
        <NavLink
          to="/"
          className="text-lg font-bold tracking-wide text-gray-800 hover:text-black transition"
        >
          PRECISION KINETICA
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-sm font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-black underline"
                : "text-gray-700 hover:text-black transition"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-800 hover:text-black transition"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            absolute top-[64px] left-0 right-0
            bg-white/90 backdrop-blur-md rounded-b-xl shadow-md
            flex flex-col items-center gap-4 py-6 md:hidden
          "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black underline"
                  : "text-gray-700 hover:text-black transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
