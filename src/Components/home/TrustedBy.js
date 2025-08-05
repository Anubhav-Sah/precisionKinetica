import React from 'react'

function TrustedBy() {
  return (
    <section className="w-full py-16 px-4 bg-blue-100 border-b border-blue-200" id="trusted">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-800 tracking-tight">
        <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
          Trusted By
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        <div className="w-36 h-12 relative group rounded-lg border border-blue-700 shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 bg-blue-700">
          <span className="text-white font-semibold relative z-10">BioPharma Inc.</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div>
        <div className="w-36 h-12 relative group rounded-lg border border-blue-700 shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 bg-blue-700">
          <span className="text-white font-semibold relative z-10">GenomicsLab</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div>
        <div className="w-36 h-12 relative group rounded-lg border border-blue-700 shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 bg-blue-700">
          <span className="text-white font-semibold relative z-10">MedAI Partners</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div>
        <div className="w-36 h-12 relative group rounded-lg border border-blue-700 shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 bg-blue-700">
          <span className="text-white font-semibold relative z-10">ProteinX</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div>
        {/* <div className="inline-flex items-center px-10 py-4 rounded-full bg-white hover:bg-blue-100 text-blue-800 text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <span className="text-white font-semibold relative z-10">HealthNext</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div> */}
      </div>
      {/* <div className="flex items-center gap-2 mt-2">
        <svg className="w-5 h-5 text-blue-700 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3a1 1 0 01.993.883L11 4v8.586l3.293-3.293a1 1 0 011.497 1.32l-.083.094-5 5a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 12.586V4a1 1 0 011-1z" />
        </svg>
        <span className="text-blue-700 font-medium text-sm">Leading biopharma & AI companies</span>
      </div> */}
    </div>
  </section>
  )
}

export default TrustedBy
