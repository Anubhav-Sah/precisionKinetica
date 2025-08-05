import React from 'react';
import { Link } from 'react-router-dom';

function Testimonial() {
  return (
    <section className="w-full py-16 px-4 bg-gray-200 border-b border-gray-300" id="news">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-800 tracking-tight">
        <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          News & Media
        </span>
      </h2>

        <div className="w-full flex flex-col gap-8">
          {/* Card 1 */}
          <div className="group bg-white border border-blue-100 rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-lg text-blue-700 mb-1">
                Revolution Medicines and Iambic Announce Technology and Research Collaboration
              </h3>
              <p className="text-gray-700 text-base mb-1">
                Using Iambic’s AI Discovery Tools to Pursue New Drug Candidates
              </p>
              <span className="text-xs text-gray-400">July 9, 2025</span>
            </div>
            <Link
              to="/news-media"
              className="group mt-10 inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Read More
              <svg
                className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-blue-100 rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m12 7h-4m0 0l-2 3m2-3l2 3" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-lg text-blue-700 mb-1">
                Iambic Named to CNBC’s 2025 Disruptor 50 List
              </h3>
              <span className="text-xs text-gray-400">June 10, 2025</span>
            </div>
            <Link
              to="/news-media"
              className="group mt-10 inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Read More
              <svg
                className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-blue-100 rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-200">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <h3 className="font-semibold text-lg text-blue-700 mb-1">
                Iambic Completes Dose Escalation in Ongoing Phase 1/1B Study
              </h3>
              <p className="text-gray-700 text-base mb-1">
                Lead Program IAM1363, a Small Molecule Inhibitor of Wild-Type and Oncogenic HER2 Mutant Proteins
              </p>
              <span className="text-xs text-gray-400">June 4, 2025</span>
            </div>
            <Link
              to="/news-media"
              className="group mt-10 inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-base font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Read More
              <svg
                className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

          </div>

        </div>

        <Link
          to="/news-media"
          className="group mt-10 inline-flex items-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span className="pr-2">View All News</span>
          <svg
            className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform"
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
  );
}

export default Testimonial;
