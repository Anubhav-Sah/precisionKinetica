import React from 'react';
import { Link } from 'react-router-dom';

export default function PipelineIntro() {
  return (
    <section className="w-full py-16 px-2 sm:px-4 bg-gray-200  flex flex-col items-center text-center" id="pipeline">
      
      <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-800 tracking-tight">
        <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          Our Pipeline: Transforming Possibilities into Therapies
        </span>
      </h2>
      {/* <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-blue-700 font-medium max-w-2xl mx-auto">
        Discover how we unlock new frontiers in drug discovery
      </p> */}

      <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch w-full max-w-6xl mx-auto mb-8">
        {/* HER2 Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">HER2</h3>
          <p className="text-gray-700 text-lg mb-4">
            1000x selectivity and brain penetrance to unlock the therapeutic potential of the target for metastatic disease.
          </p>
          {/* <a href="/pipeline#her2" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg">
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> */}
        </div>

        {/* CDK2/4 Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4m0 0V7m0 4l-4-4" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">CDK2/4</h3>
          <p className="text-gray-700 text-lg mb-4">
            First-in-class CDK2/4 profile to address cyclin D and cyclin E driven cancers while avoiding off-target dose-limiting toxicities.
          </p>
          {/* <a href="/pipeline#cdk2" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg">
            Read More
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a> */}
        </div>

        {/* Novel Targets Card */}
        <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
          <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-10 h-10 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Novel Target Classes</h3>
          <p className="text-gray-700 text-lg mb-4">
            Programs focusing on cryptic pockets, allostery, and protein-protein interactions, spanning multiple therapeutic areas.
          </p>
        </div>
      </div>
      
      <Link
            to="/pipeline"
            className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
          >
            See Full Pipeline
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
      {/* <a href="/pipeline" className="inline-flex items-center px-6 sm:px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="pr-2">See Full Pipeline</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a> */}
    </section>
  );
}
