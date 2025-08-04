import React from 'react'
import PlaceholderImg from './Placeholder';

function Testimonial() {
  return (
    <section className="w-full py-24 px-4 bg-blue-50" id="news">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-extrabold mb-10 text-blue-800 tracking-tight">News & Media</h2>
          <div className="w-full flex flex-col gap-8">
            <div className="bg-white border border-blue-100 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
              <PlaceholderImg className="w-16 h-16 mb-4 md:mb-0" text="News" />
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg text-blue-700 mb-1">Revolution Medicines and Iambic Announce Technology and Research Collaboration</h3>
                <p className="text-gray-700 text-base mb-1">Using Iambic’s AI Discovery Tools to Pursue New Drug Candidates</p>
                <span className="text-xs text-gray-400">July 9, 2025</span>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
              <PlaceholderImg className="w-16 h-16 mb-4 md:mb-0" text="News" />
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg text-blue-700 mb-1">Iambic Named to CNBC’s 2025 Disruptor 50 List</h3>
                <span className="text-xs text-gray-400">June 10, 2025</span>
              </div>
            </div>
            <div className="bg-white border border-blue-100 rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
              <PlaceholderImg className="w-16 h-16 mb-4 md:mb-0" text="News" />
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg text-blue-700 mb-1">Iambic Completes Dose Escalation in Ongoing Phase 1/1B Study</h3>
                <p className="text-gray-700 text-base mb-1">Lead Program IAM1363, a Small Molecule Inhibitor of Wild-Type and Oncogenic HER2 Mutant Proteins</p>
                <span className="text-xs text-gray-400">June 4, 2025</span>
              </div>
            </div>
          </div>
          <a href="/news-media" className="mt-10 inline-flex items-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <span className="pr-2">View All News</span>
            <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
  )
}

export default Testimonial
