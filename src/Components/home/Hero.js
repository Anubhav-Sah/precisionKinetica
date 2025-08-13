import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
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
          Charting new paths<br className="hidden md:block" /> to superior medicines
        </h1>
        <p className="font-roboto text-[16px] md:text-[20px] leading-[1.6] mb-10 max-w-2xl mx-auto">
          AI-driven discovery, automation, and execution for next-generation therapeutics.
        </p>
        <Link
          to="/pipeline"
          className="inline-flex items-center px-10 py-4 rounded-full text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4"
          style={{
            backgroundColor: 'var(--color-bg-accent)',
            color: 'var(--color-bg-primary)',
          }}
        >
          <span className="pr-2">Explore Our Platform</span>
          <svg
            className="w-5 h-5 opacity-80 transition-transform"
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
