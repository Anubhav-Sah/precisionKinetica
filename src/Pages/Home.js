import React from 'react';
// Hero Section
const Hero = () => (
  <section className="relative w-full flex flex-col items-center justify-center min-h-[60vh] py-32 px-4 text-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
    {/* Subtle animated background placeholder */}
    <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
      <PlaceholderImg className="w-full max-w-screen-2xl h-[22rem] md:h-[28rem] opacity-30 blur-sm" text="1920x800 MD Animation GIF" />
    </div>
    <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight drop-shadow-sm tracking-tight">
        Welcome to <span className="text-blue-700">Precision Kinetica</span>
      </h1>
      <p className="text-base md:text-xl mb-10 max-w-2xl mx-auto text-gray-600 font-medium">
        Accelerate your drug discovery with AI-powered kinetic and thermodynamic profiling. Upload your PDB file and let our advanced platform deliver actionable insights—fast, reliable, and designed for confident decision-making.
      </p>
      <a href="#platform" className="group relative inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold shadow-xl transition-all duration-200 mb-4 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="pr-2">Platform</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  </section>
);

// TrustedBy Section
const TrustedBy = () => (
  <section className="w-full py-16 px-4 bg-white" id="trusted">
    <div className="max-w-5xl mx-auto flex flex-col items-center">
      <span className="uppercase text-xs tracking-widest text-gray-400 mb-8 font-semibold letter-spacing-wide">Trusted by</span>
      <div className="flex flex-wrap justify-center gap-12">
        {/* Replace with real logos */}
        <PlaceholderImg className="w-36 h-12 grayscale hover:grayscale-0 transition duration-200" text="BioPharma Inc." />
        <PlaceholderImg className="w-36 h-12 grayscale hover:grayscale-0 transition duration-200" text="GenomicsLab" />
        <PlaceholderImg className="w-36 h-12 grayscale hover:grayscale-0 transition duration-200" text="MedAI Partners" />
        <PlaceholderImg className="w-36 h-12 grayscale hover:grayscale-0 transition duration-200" text="ProteinX" />
        <PlaceholderImg className="w-36 h-12 grayscale hover:grayscale-0 transition duration-200" text="HealthNext" />
      </div>
    </div>
  </section>
);

// FeaturesGrid Section
const FeaturesGrid = () => (
  <section className="w-full py-24 px-4 bg-white" id="solutions">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-14 text-center text-gray-900 tracking-tight">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-10 flex flex-col items-center text-center border border-blue-100 hover:shadow-2xl transition-all duration-200"
          >
            {f.icon}
            <h3 className="font-semibold text-xl mb-2 text-blue-700">{f.title}</h3>
            <p className="text-gray-600 text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonial Section
const Testimonial = () => (
  <section className="w-full py-24 px-4 bg-gradient-to-br from-blue-50 to-white" id="customers">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
      <PlaceholderImg className="w-20 h-20 rounded-full mb-8 border-4 border-blue-100 shadow-lg" text="Photo" />
      <blockquote className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 italic leading-relaxed">
        “PrecisionKinetica’s AI platform enabled us to identify novel protein targets in weeks instead of months. Their insights have been invaluable to our drug discovery pipeline.”
      </blockquote>
      <span className="text-lg font-semibold text-blue-700">Dr. Alex Smith, Director of Research, BioPharma Inc.</span>
    </div>
  </section>
);

// FinalCTA Section
const FinalCTA = () => (
  <section className="w-full py-24 px-4 text-center bg-white" id="cta">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-900 tracking-tight">Ready to accelerate your drug discovery?</h2>
    <p className="text-lg mb-12 text-gray-600 max-w-2xl mx-auto">Contact us to see how PrecisionKinetica can transform your R&D with AI-powered protein prediction.</p>
    <div className="flex flex-col md:flex-row gap-6 justify-center">
      <button className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-lg font-semibold shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <span className="pr-2">Talk to Us</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </button>
      <button className="px-8 py-3 rounded-full bg-white border-2 border-blue-700 text-blue-700 text-lg font-semibold shadow hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200">
        See Demo
      </button>
    </div>
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

const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full bg-white/90 backdrop-blur shadow z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Logo />
        <div className="hidden md:flex items-center gap-8">
          <a href="#platform" className="font-medium text-gray-700 hover:text-blue-700 transition">Platform</a>
          <a href="#solutions" className="font-medium text-gray-700 hover:text-blue-700 transition">Solutions</a>
          <a href="#customers" className="font-medium text-gray-700 hover:text-blue-700 transition">Partners</a>
          <a href="#company" className="font-medium text-gray-700 hover:text-blue-700 transition">Company</a>
        </div>
        <button className="ml-8 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow transition">
          Talk to Us
        </button>
      </div>
    </nav>
  );
}
// ...existing code...

// Placeholder logo and icons
// Placeholder logo and icons

// Pipeline Section
const PipelineIntro = () => (
  <section className="relative w-full py-28 px-4 bg-gradient-to-tr from-blue-100 via-white to-blue-200 overflow-hidden flex flex-col md:flex-row items-center gap-10 border-b border-blue-100 shadow-lg rounded-3xl my-8 transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:bg-gradient-to-b before:from-white before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-white after:to-transparent after:z-10" id="pipeline">
    <div className="flex-1 flex justify-center md:order-2">
      <PlaceholderImg className="w-full max-w-xl h-64 md:h-80 rounded-2xl shadow-lg border-2 border-blue-200" text="5-Panel Step Animation GIF" />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-800 leading-tight drop-shadow tracking-tight">Pipeline</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium max-w-2xl">
        Our workflow unfolds as a continuous story: structure prep, milestone tessellation, enhanced-sampling for robust initialization, and parallel MD/BD simulations. Milestoning theory then assembles transition statistics into mean first-passage times and free-energy profiles.
      </p>
      <a href="/pipeline" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white text-lg font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200">
        <span className="pr-2">Explore Pipeline</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  </section>
);


// Research & Publications Section
const ResearchIntro = () => (
  <section className="relative w-full py-28 px-4 bg-gradient-to-br from-white via-blue-100 to-blue-200 overflow-hidden flex flex-col md:flex-row-reverse items-center gap-10 border-b border-blue-100 shadow-lg rounded-3xl my-8 transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:bg-gradient-to-b before:from-white before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-white after:to-transparent after:z-10" id="research">
    <div className="flex-1 flex justify-center md:order-1">
      <PlaceholderImg className="w-full max-w-lg h-60 md:h-72 rounded-2xl shadow-lg border-2 border-blue-100" text="Paper Cover Image Grid" />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 leading-tight drop-shadow tracking-tight">Research & Publications</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium max-w-2xl">
        Precision Kinetica builds on a decade of milestoning innovation. Explore our open-source code, published methods, and simulation datasets on GitHub and Zenodo. Join the conversation and advance the science with us.
      </p>
      <a href="/research" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-600 hover:to-blue-400 text-white text-lg font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200">
        <span className="pr-2">See Publications</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  </section>
);


// News & Media Section
const NewsIntro = () => (
  <section className="relative w-full py-28 px-4 bg-gradient-to-tl from-blue-50 via-white to-blue-200 overflow-hidden flex flex-col md:flex-row items-center gap-10 border-b border-blue-100 shadow-lg rounded-3xl my-8 transition-all duration-300 before:absolute before:top-0 before:left-0 before:w-full before:h-10 before:bg-gradient-to-b before:from-white before:to-transparent before:z-10 after:absolute after:bottom-0 after:left-0 after:w-full after:h-10 after:bg-gradient-to-t after:from-white after:to-transparent after:z-10" id="news">
    <div className="flex-1 flex justify-center md:order-2">
      <PlaceholderImg className="w-full max-w-md h-40 md:h-56 rounded-2xl shadow-lg border-2 border-blue-200" text="Scrolling Headlines Ticker GIF" />
    </div>
    <div className="flex-1 flex flex-col items-center justify-center z-10 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-700 leading-tight drop-shadow tracking-tight">News & Media</h2>
      <p className="text-lg md:text-xl mb-8 text-gray-700 font-medium max-w-2xl">
        From our seed round to conference presentations and press features, stay tuned for the latest on residence-time strategies, force-field advances, and case-study breakthroughs—coming soon.
      </p>
      <a href="/news" className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-lg font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-200">
        <span className="pr-2">See News</span>
        <svg className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
  </section>
);


const features = [
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="AI" />,
    title: 'AI Protein Prediction',
    desc: 'State-of-the-art models identify the most promising protein targets for your therapeutic area.',
  },
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="Data" />,
    title: 'Multi-Omics Integration',
    desc: 'Combine genomics, proteomics, and clinical data for comprehensive discovery.',
  },
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="Speed" />,
    title: 'Accelerated Screening',
    desc: 'Reduce time-to-candidate with automated, high-throughput analysis.',
  },
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="Insights" />,
    title: 'Actionable Insights',
    desc: 'Visualize and interpret results with interactive dashboards and reports.',
  },
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="Secure" />,
    title: 'Secure & Compliant',
    desc: 'Enterprise-grade security and compliance for sensitive biomedical data.',
  },
  {
    icon: <PlaceholderImg className="w-12 h-12 mb-3" text="API" />,
    title: 'Seamless Integration',
    desc: 'APIs and data export for easy integration with your R&D workflows.',
  },
];

const Home = () => (
  <div className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <Navbar />
    <Hero />
    <TrustedBy />
    <PipelineIntro />
    <ResearchIntro />
    <NewsIntro />
    <FeaturesGrid />
    <Testimonial />
  <FinalCTA />
  </div>
);

export default Home;
