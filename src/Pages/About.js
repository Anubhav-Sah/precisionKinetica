import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder image component
const PlaceholderImg = ({ className = '', text = 'Image' }) => (
  <div className={`bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center rounded-xl border border-blue-200 shadow ${className}`}>
    <span className="text-blue-500 font-semibold text-lg">{text}</span>
  </div>
);

// Hero Section
const AboutHero = () => (
  <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white pt-40">
    <div className="absolute inset-0 bg-blue-950/80 z-0" />
    <div className="relative z-10">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">Who We Are</h1>
      <p className="text-2xl md:text-3xl font-medium drop-shadow max-w-3xl mx-auto">
        Driving science-forward innovation with automation, accuracy, and integrity.
      </p>
    </div>
  </section>
);

// Team Section
const TeamSection = () => (
  <section className="w-full py-24 px-4 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-lg transition">
            <PlaceholderImg className="w-full h-48 mb-4" text={`Team Member ${i}`} />
            <h3 className="text-xl font-semibold text-blue-800 mb-1">Member Name {i}</h3>
            <p className="text-gray-600 text-sm">Co-Founder & Chief Scientist</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Our Values Section
const OurValues = () => (
  <section className="w-full py-20 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
        {[
          { title: "Scientific Integrity", desc: "We hold ourselves to the highest standards of accuracy and rigor." },
          { title: "Transparency", desc: "Our workflows are reproducible, explainable, and trusted." },
          { title: "User-First Innovation", desc: "We design with real researchers in mind—intuitive and effective." },
        ].map(v => (
          <div key={v.title} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{v.title}</h3>
            <p className="text-gray-700 text-base">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Story Section
const StorySection = () => (
  <section className="w-full py-24 px-4 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">Our Story</h2>
      <div className="text-lg text-gray-700 space-y-6 max-w-3xl mx-auto">
        <p>PrecisionKinetica was founded with one mission: to empower drug discovery with automated, physics-based computation.</p>
        <p>What began as a research collaboration evolved into a platform that brings accurate kinetic profiles to every lab—from academic groups to industry leaders.</p>
        <p>Today, we're building the future of molecular simulations—faster, smarter, and more accessible.</p>
      </div>
    </div>
  </section>
);

// CTA Section
const AboutCTA = () => (
  <section className="w-full py-20 px-4 text-center bg-blue-50">
    <h2 className="text-3xl font-extrabold mb-6 text-blue-900 tracking-tight">Want to collaborate with us?</h2>
    <p className="text-xl mb-8 text-gray-700 max-w-xl mx-auto">
      Reach out to discuss partnerships, projects, or just to learn more about our work.
    </p>
    <Link to="/contact" className="inline-flex items-center px-12 py-5 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span className="pr-2">Contact Us</span>
      <svg className="w-6 h-6 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </Link>
  </section>
);

// Full About Page Component
export default function AboutUsPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <AboutHero />
      <TeamSection />
      <OurValues />
      <StorySection />
      <AboutCTA />
    </div>
  );
}
