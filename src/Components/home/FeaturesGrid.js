import React from 'react'
import { Link } from 'react-router-dom';


function FeaturesGrid() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-b from-blue-50 via-white to-blue-100 border-b border-blue-100" id="innovation">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-800 tracking-tight">
        <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          Optimized medicines for optimized profiles
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
        {/* Innovation Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Innovation</h3>
          <p className="text-gray-700 text-lg mb-6">
            Accurate and data-efficient physics-based AI technologies that span from early-stage discovery to the clinic.
          </p>
          <Link
            to="/PlatformPage"
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        {/* Automation Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4m8 8a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Automation</h3>
          <p className="text-gray-700 text-lg mb-6">
            AI-driven, high-throughput experimentation to go from new molecular designs to new biological data each week.
          </p>
          <Link
            to="/platform#automation"
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        {/* Execution Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Execution</h3>
          <p className="text-gray-700 text-lg mb-6">
            A proprietary pipeline of differentiated clinical candidates delivered at a pace years faster than the industry standard.
          </p>
          <Link
            to="/pipeline"
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
          >
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FeaturesGrid
