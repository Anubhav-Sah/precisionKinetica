import React from 'react'

function FinalCTA() {
  return (
    <section className="w-full py-20 px-4 text-center bg-white" id="contact">
    <h2 className="text-4xl font-extrabold mb-6 text-blue-800 tracking-tight">Contact Us</h2>
    <p className="text-lg mb-10 text-gray-700 max-w-2xl mx-auto">Get in touch to see how PrecisionKinetica can transform your R&D with AI-powered protein prediction.</p>
    <a href="mailto:contact@precisionkinetica.com" className="inline-flex items-center px-10 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span className="pr-2">Email Us</span>
      <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </a>
  </section>
  )
}

export default FinalCTA
