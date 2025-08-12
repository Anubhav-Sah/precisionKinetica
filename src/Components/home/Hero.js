import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
<<<<<<< HEAD
    <section
      className="relative w-screen h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden"
      style={{
        // backgroundColor: 'var(--color-bg-primary)',
        color: 'var(--color-text-primary)',
      }}
    >
      {/* Optional Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'var(--color-bg-overlay, transparent)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
=======
    <section className="relative w-screen h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      {/* Background GIF/Video */}
      {/* Replace with actual source */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/media/home_background.mp4" type="video/mp4" />
      </video> */}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-white">
        <h1 className="font-inter font-extrabold text-[56px] leading-[1.2] mb-6">
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
          Charting new paths<br className="hidden md:block" /> to superior medicines
        </h1>
        <p className="font-roboto text-[16px] md:text-[20px] leading-[1.6] mb-10 max-w-2xl mx-auto">
          AI-driven discovery, automation, and execution for next-generation therapeutics.
        </p>
        <Link
          to="/pipeline"
<<<<<<< HEAD
          className="inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4"
          style={{
            backgroundColor: 'var(--color-bg-accent)',
            color: 'var(--color-bg-primary)',
          }}
        >
          <span className="pr-2">Explore Our Platform</span>
          <svg
            className="w-5 h-5 opacity-80 transition-transform"
=======
          className="bg-[#0E3A8A] hover:bg-[#0b2d6e] text-white font-inter font-medium text-[16px] leading-[1.6] px-10 py-4 rounded-[4px] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#334155] inline-flex items-center"
        >
          <span className="pr-2">Explore Our Platform</span>
          <svg
            className="w-5 h-5 opacity-80 transition-transform group-hover:translate-x-1"
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default Hero
