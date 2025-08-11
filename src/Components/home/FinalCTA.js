import React from 'react'

function FinalCTA() {
  return (
    <section className="w-full py-[60px] px-4 text-center bg-[#F3F4F6]" id="contact">
      <h2 className="font-inter font-bold text-[32px] leading-[1.3] text-[#0E3A8A] mb-14 text-center">
        Contact Us
      </h2>

      <p className="font-roboto text-[20px] md:text-[24px] leading-[1.6] text-[#64748B] mb-10 max-w-2xl mx-auto">
        Get in touch to see how PrecisionKinetica can transform your R&amp;D with AI-powered protein prediction.
      </p>

      <a 
        href="mailto:contact@precisionkinetica.com" 
        className="inline-flex items-center px-10 py-4 rounded-[4px] bg-[#0E3A8A] hover:bg-[#0b2d6e] text-white font-inter font-medium text-[16px] leading-[1.6] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#334155]"
      >
        <span className="pr-2">Email Us</span>
        <svg 
          className="w-5 h-5 opacity-80 transition-transform group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </section>
  )
}

export default FinalCTA
