import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (

    <section className="relative w-screen h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-gray-800 text-white">
      {/* 🔹 Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/media/home_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 🔹 Optional Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gray-50/80 z-0" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-gray-800 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Charting new paths<br className="hidden md:block" /> to superior medicines
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium max-w-2xl mx-auto">
          AI-driven discovery, automation, and execution for next-generation therapeutics.
        </p>
        <Link
          to="/pipeline"
          className="inline-flex items-center px-10 py-4 rounded-full bg-white hover:bg-gray-200 text-gray-800 text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          <span className="pr-2">Explore Our Platform</span>
          <svg
            className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero
