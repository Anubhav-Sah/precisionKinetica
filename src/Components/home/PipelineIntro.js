import React from 'react'
import PlaceholderImg from './Placeholder';

export default function PipelineIntro() {
  return (
    <section className="w-full py-16 px-2 sm:px-4 bg-blue-50 border-b border-blue-100 flex flex-col items-center text-center" id="pipeline">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6 text-blue-800 tracking-tight">
        Platform-driven pipeline of first-in-class and best-in-class programs
      </h2>
      <p className="text-base sm:text-xl md:text-2xl mb-8 sm:mb-10 text-gray-700 font-medium max-w-2xl mx-auto">
        Unlocking the untapped potential of known targets and transforming seemingly undruggable targets into opportunities for breakthrough treatments.
      </p>
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 w-full max-w-4xl mx-auto mb-8">
        <div className="flex-1 bg-white border border-blue-100 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <PlaceholderImg className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4" text="HER2" />
          <h3 className="font-semibold text-base sm:text-lg text-blue-700 mb-1">HER2</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            1000x selectivity and brain penetrance to unlock the therapeutic potential of the target for metastatic disease.
          </p>
          {/* <a href="/pipeline#her2" className="text-blue-700 hover:underline text-xs sm:text-sm font-medium mt-2">Read More</a> */}
        </div>
        <div className="flex-1 bg-white border border-blue-100 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <PlaceholderImg className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4" text="CDK2/4" />
          <h3 className="font-semibold text-base sm:text-lg text-blue-700 mb-1">CDK2/4</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            First-in-class CDK2/4 profile to address cyclin D and cyclin E driven cancers while avoiding off-target dose-limiting toxicities.
          </p>
          {/* <a href="/pipeline#cdk2" className="text-blue-700 hover:underline text-xs sm:text-sm font-medium mt-2">Read More</a> */}
        </div>
        <div className="flex-1 bg-white border border-blue-100 rounded-xl p-4 sm:p-6 flex flex-col items-center">
          <PlaceholderImg className="w-14 h-14 sm:w-16 sm:h-16 mb-3 sm:mb-4" text="Novel Targets" />
          <h3 className="font-semibold text-base sm:text-lg text-blue-700 mb-1">Novel Target Classes</h3>
          <p className="text-gray-700 text-sm sm:text-base mb-1">
            Programs focusing on cryptic pockets, allostery, and protein-protein interactions, spanning multiple therapeutic areas.
          </p>
        </div>
      </div>
      <a href="/pipeline" className="inline-flex items-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="pr-2">See Full Pipeline</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </section>
  )
}
