// src/pages/NotFound.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const NotFound = () => {
  return (
    <section className="h-screen molecular-bg flex items-center justify-center relative overflow-hidden bg-white">
      {/* Floating molecular circles */}
      <motion.div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-teal-200 rounded-full opacity-20"
          animate={floatingAnimation.animate}
        />
        <motion.div
          className="absolute top-32 right-20 w-12 h-12 bg-blue-200 rounded-full opacity-20"
          animate={floatingAnimation.animate}
          transition={{ ...floatingAnimation.animate.transition, delay: -2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-20"
          animate={floatingAnimation.animate}
          transition={{ ...floatingAnimation.animate.transition, delay: -4 }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-14 h-14 bg-emerald-200 rounded-full opacity-20"
          animate={floatingAnimation.animate}
          transition={{ ...floatingAnimation.animate.transition, delay: -1 }}
        />
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 text-center px-4">
        {/* SVG Icon */}
        <div className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40">
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle cx="32" cy="32" r="30" stroke="#ec2c2cff" strokeWidth="4" fill="#CCFBF1" />
            <path d="M22 32h20M32 22v20" stroke="#ec2c2cff" strokeWidth="4" strokeLinecap="round" />
            <circle cx="32" cy="32" r="6" fill="#ec2c2cff" />
          </svg>
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-xl mx-auto">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-blue-700 transform transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Go Home →
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
