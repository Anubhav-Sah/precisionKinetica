import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function Navbar() {
  const [floating, setFloating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const insightsTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setFloating(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInsightsEnter = () => {
    clearTimeout(insightsTimeout.current);
    setInsightsOpen(true);
  };

  const handleInsightsLeave = () => {
    insightsTimeout.current = setTimeout(() => {
      setInsightsOpen(false);
    }, 300);
  };

  const navLinks = [
    { path: "/platform", label: "Platform" },
    { path: "/pipeline", label: "Pipeline" },
    { path: "/partnership", label: "Partnership" },
    { path: "/about", label: "About" },
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
        <NavLink to="/" data-testid="link-home">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">PK</span>
            </div>
            <span className="font-heading font-semibold text-xl text-slate-800">
              PRECISION KINETICA
            </span>
          </motion.div>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-sm font-medium items-center relative flex-1 justify-center">
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

        {/* Insights Dropdown */}
        <div
          className="relative"
          onMouseEnter={handleInsightsEnter}
          onMouseLeave={handleInsightsLeave}
        >
          <button className="text-gray-700 hover:text-black transition">
            Insights ▾
          </button>
          {insightsOpen && (
            <div
              className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg py-2"
              onMouseEnter={handleInsightsEnter}
              onMouseLeave={handleInsightsLeave}
            >
              <NavLink
                to="/news"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                News
              </NavLink>
              <NavLink
                to="/research"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Research
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Contact Button (Desktop) */}
      <div className="hidden md:block">
        <NavLink
          to="/contact"
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-teal-600 hover:to-blue-700 transition font-medium"
        >
          Contact
        </NavLink>
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

          {/* Mobile Insights */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-medium text-gray-800">Insights</span>
            <NavLink
              to="/news"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black transition"
            >
              News
            </NavLink>
            <NavLink
              to="/research"
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-black transition"
            >
              Research
            </NavLink>
          </div>

          {/* Contact Button Mobile */}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-teal-600 hover:to-blue-700 transition font-medium"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
