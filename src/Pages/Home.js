import React from 'react';

// Hero Section

const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-blue-800 text-white">
      {/* 🔹 Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      >
        <source src="/media/home_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 🔹 Optional Dark Overlay for readability */}
      <div className="absolute inset-0 bg-blue-800/80 z-0" />

      {/* 🔹 Main Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
          Charting new paths<br className="hidden md:block" /> to superior medicines
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium max-w-2xl mx-auto">
          AI-driven discovery, automation, and execution for next-generation therapeutics.
        </p>
        <a
          href="#pipeline"
          className="inline-flex items-center px-10 py-4 rounded-full bg-white hover:bg-blue-100 text-blue-800 text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <span className="pr-2">Explore Our Platform</span>
          <svg
            className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
};





// TrustedBy Section
const TrustedBy = () => (
  <section className="w-full py-16 px-4 bg-blue-100 border-b border-blue-200" id="trusted">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <span className="uppercase text-xs tracking-widest text-blue-800 mb-8 font-bold letter-spacing-wider">
        Trusted by
      </span>
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
        <div className="w-36 h-12 relative group rounded-lg border border-blue-700 shadow-md overflow-hidden flex items-center justify-center transition-all duration-300 bg-blue-700">
          <span className="text-white font-semibold relative z-10">HealthNext</span>
          <span className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md group-hover:bg-blue-400/60 bg-transparent"></span>
        </div>
      </div>
      {/* <div className="flex items-center gap-2 mt-2">
        <svg className="w-5 h-5 text-blue-700 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3a1 1 0 01.993.883L11 4v8.586l3.293-3.293a1 1 0 011.497 1.32l-.083.094-5 5a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.497l.094.083L9 12.586V4a1 1 0 011-1z" />
        </svg>
        <span className="text-blue-700 font-medium text-sm">Leading biopharma & AI companies</span>
      </div> */}
    </div>
  </section>
);

// FeaturesGrid Section (Innovation, Automation, Execution)
const FeaturesGrid = () => (
  <section className="w-full py-24 px-4 bg-white border-b border-blue-100" id="innovation">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold mb-14 text-center text-blue-800 tracking-tight">Optimized medicines for optimized profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <PlaceholderImg className="w-20 h-20 mb-6" text="Innovation" />
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Innovation</h3>
          <p className="text-gray-700 text-lg mb-4">Accurate and data-efficient physics-based AI technologies that span from early-stage discovery to the clinic.</p>
          <a href="/PlatformPage" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base">Read More</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <PlaceholderImg className="w-20 h-20 mb-6" text="Automation" />
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Automation</h3>
          <p className="text-gray-700 text-lg mb-4">AI-driven, high-throughput experimentation to go from new molecular designs to new biological data each week.</p>
          <a href="/platform#automation" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base">Read More</a>
        </div>
        <div className="flex flex-col items-center text-center">
          <PlaceholderImg className="w-20 h-20 mb-6" text="Execution" />
          <h3 className="font-bold text-2xl mb-2 text-blue-700">Execution</h3>
          <p className="text-gray-700 text-lg mb-4">A proprietary pipeline of differentiated clinical candidates delivered at a pace years faster than the industry standard.</p>
          <a href="/pipeline" className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base">Read More</a>
        </div>
      </div>
    </div>
  </section>
);

// Testimonial Section (News & Media)
const Testimonial = () => (
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
      <a href="/news" className="mt-10 inline-flex items-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="pr-2">View All News</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  </section>
);

// FinalCTA Section (Contact)
const FinalCTA = () => (
  <section className="w-full py-20 px-4 text-center bg-white" id="contact">
    <h2 className="text-4xl font-extrabold mb-6 text-blue-800 tracking-tight">Contact Us</h2>
    <p className="text-lg mb-10 text-gray-700 max-w-2xl mx-auto">Get in touch to see how PrecisionKinetica can transform your R&D with AI-powered protein prediction.</p>
    <a href="mailto:contact@precisionkinetica.com" className="inline-flex items-center px-10 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span className="pr-2">Email Us</span>
      <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </a>
  </section>
);
// Placeholder logo and icons
const Logo = () => (
  <span className="font-extrabold text-2xl tracking-tight text-blue-700">PrecisionKinetica</span>
);

const PlaceholderImg = ({ className = '', text = 'Image' }) => (
  <div className={`bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center rounded-lg border border-blue-200 ${className}`}>
    <span className="text-blue-400 font-semibold">{text}</span>
  </div>
);

const Navbar = () => (
  <nav className="sticky top-0 w-full bg-white/90 backdrop-blur border-b border-blue-100 z-20">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <Logo />
      <div className="hidden md:flex items-center gap-8">
        <a href="#innovation" className="font-medium text-gray-700 hover:text-blue-700 transition">Innovation</a>
        <a href="#pipeline" className="font-medium text-gray-700 hover:text-blue-700 transition">Pipeline</a>
        <a href="#news" className="font-medium text-gray-700 hover:text-blue-700 transition">News</a>
        <a href="#contact" className="font-medium text-gray-700 hover:text-blue-700 transition">Contact</a>
      </div>
      <a href="#contact" className="ml-8 px-5 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition">
        Get in Touch
      </a>
    </div>
  </nav>
);
// ...existing code...

// Placeholder logo and icons
// Placeholder logo and icons

// Pipeline Section
const PipelineIntro = () => (
  <section className="w-full py-24 px-4 bg-blue-50 border-b border-blue-100 flex flex-col items-center text-center" id="pipeline">
    <h2 className="text-4xl font-extrabold mb-6 text-blue-800 tracking-tight">Platform-driven pipeline of first-in-class and best-in-class programs</h2>
    <p className="text-xl md:text-2xl mb-10 text-gray-700 font-medium max-w-2xl mx-auto">
      Unlocking the untapped potential of known targets and transforming seemingly undruggable targets into opportunities for breakthrough treatments.
    </p>
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl mx-auto mb-8">
      <div className="flex-1 bg-white border border-blue-100 rounded-lg p-6 flex flex-col items-center">
        <PlaceholderImg className="w-16 h-16 mb-4" text="HER2" />
        <h3 className="font-semibold text-lg text-blue-700 mb-1">HER2</h3>
        <p className="text-gray-700 text-base mb-1">1000x selectivity and brain penetrance to unlock the therapeutic potential of the target for metastatic disease.</p>
        <a href="/pipeline#her2" className="text-blue-700 hover:underline text-sm font-medium mt-2">Read More</a>
      </div>
      <div className="flex-1 bg-white border border-blue-100 rounded-lg p-6 flex flex-col items-center">
        <PlaceholderImg className="w-16 h-16 mb-4" text="CDK2/4" />
        <h3 className="font-semibold text-lg text-blue-700 mb-1">CDK2/4</h3>
        <p className="text-gray-700 text-base mb-1">First-in-class CDK2/4 profile to address cyclin D and cyclin E driven cancers while avoiding off-target dose-limiting toxicities.</p>
        <a href="/pipeline#cdk2" className="text-blue-700 hover:underline text-sm font-medium mt-2">Read More</a>
      </div>
      <div className="flex-1 bg-white border border-blue-100 rounded-lg p-6 flex flex-col items-center">
        <PlaceholderImg className="w-16 h-16 mb-4" text="Novel Targets" />
        <h3 className="font-semibold text-lg text-blue-700 mb-1">Novel Target Classes</h3>
        <p className="text-gray-700 text-base mb-1">Programs focusing on cryptic pockets, allostery, and protein-protein interactions, spanning multiple therapeutic areas.</p>
      </div>
    </div>
    <a href="/pipeline" className="inline-flex items-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span className="pr-2">See Full Pipeline</span>
      <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </a>
  </section>
);





const Home = () => (
  <div className="w-full min-h-screen flex flex-col bg-white">
    <Hero />
    <TrustedBy />
    <FeaturesGrid />
    <PipelineIntro />
    <Testimonial />
    <FinalCTA />
    
  </div>
);

export default Home;
