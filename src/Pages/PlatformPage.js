import React from 'react'
import { Link } from "react-router-dom";

// Professional placeholder image/gif component
const PlaceholderImg = ({ className = '', text = 'Image' }) => (
  <div className={`bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center rounded-xl border border-blue-200 shadow ${className}`}>
    <span className="text-blue-500 font-semibold text-lg">{text}</span>
  </div>
);

// Hero Section
const PlatformHero = () => (
  <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white pt-40">
    <div className="absolute inset-0 bg-blue-950/80 z-0" />
    <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-6xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-lg">
        Automated Kinetics, Unlocked
      </h1>
      <p className="text-2xl md:text-3xl mb-10 font-medium max-w-3xl mx-auto drop-shadow">
        Upload a PDB file. Get kinetic and thermodynamic profiles in hours.<br />
        <span className="text-blue-200 font-bold">kon, koff, ΔG</span>—all computed by our end-to-end, physics-based platform.
      </p>
      <PlaceholderImg className="w-full max-w-4xl h-64 mb-8" text="Pipeline Flow Animation (1200×600 px)" />
      
    </div>
  </section>
);

// Platform Features Section (distinct visual style)
const PlatformFeatures = () => (
  <section className="w-full py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="max-w-7xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl font-extrabold mb-16 text-blue-900 text-center">Why PrecisionKinetica?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col items-start bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
          <h3 className="font-bold text-2xl mb-4 text-blue-800">End-to-End Automation</h3>
          <p className="text-gray-700 text-lg mb-6">
            From structure upload to kinetic profiles, every step is automated. No manual parameterization, no scripting, no guesswork.
          </p>
          <PlaceholderImg className="w-full h-40 mb-2" text="Automated Workflow GIF" />
        </div>
        <div className="flex flex-col items-start bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition">
          <h3 className="font-bold text-2xl mb-4 text-blue-800">Physics-Based Accuracy</h3>
          <p className="text-gray-700 text-lg mb-6">
            QM-trained force fields, Voronoi-milestoning, and parallel MD/BD simulations deliver rigorous, reproducible results for kon, koff, and ΔG.
          </p>
          <PlaceholderImg className="w-full h-40 mb-2" text="Accuracy Chart GIF" />
        </div>
      </div>
    </div>
  </section>
);

// How It Works Section (horizontal stepper, unique style)
const HowItWorks = () => (
  <section className="w-full py-24 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-blue-900 text-center">How It Works</h2>
      <div className="flex flex-col md:flex-row gap-12 w-full justify-center items-center">
        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow hover:shadow-lg transition w-full md:w-1/3">
          <PlaceholderImg className="w-14 h-14 mb-3" text="Upload" />
          <h3 className="font-bold text-lg mb-2 text-blue-800">Upload Structure</h3>
          <p className="text-gray-700 text-base">
            Start with a single PDB file—no manual prep required.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow hover:shadow-lg transition w-full md:w-1/3">
          <PlaceholderImg className="w-14 h-14 mb-3" text="Automated Pipeline" />
          <h3 className="font-bold text-lg mb-2 text-blue-800">Automated Pipeline</h3>
          <p className="text-gray-700 text-base">
            Espaloma force field, Voronoi-milestoning, and parallel MD/BD simulations run in the cloud.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white rounded-xl p-8 shadow hover:shadow-lg transition w-full md:w-1/3">
          <PlaceholderImg className="w-14 h-14 mb-3" text="Results" />
          <h3 className="font-bold text-lg mb-2 text-blue-800">Kinetic & Thermodynamic Profiles</h3>
          <p className="text-gray-700 text-base">
            Receive kon, koff, and ΔG, plus free-energy landscapes and residence times.
          </p>
        </div>
      </div>
      <PlaceholderImg className="w-full max-w-2xl h-40 mt-12" text="Step Animation" />
    </div>
  </section>
);

// CTA Section
const PlatformCTA = () => (
  <section className="w-full py-20 px-4 text-center bg-white">
    <h2 className="text-3xl font-extrabold mb-6 text-blue-900 tracking-tight">Ready to accelerate your drug discovery?</h2>
    <p className="text-xl mb-8 text-gray-700 max-w-xl mx-auto">
      Contact us to see how PrecisionKinetica can deliver kinetic and thermodynamic insights for your lead series.
    </p>
    <a href="/contact" className="inline-flex items-center px-12 py-5 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold shadow-lg transition focus:outline-none focus:ring-4 focus:ring-blue-300">
      <span className="pr-2">Get in Touch</span>
      <svg className="w-6 h-6 opacity-80 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
    </a>
  </section>
);


// Cloud & Dev Tool Integrations
const logos = [
  { name: "AWS", src: "/logos/aws.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "GCP", src: "/logos/gcp.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Okta", src: "/logos/okta.svg" },
  { name: "Terraform", src: "/logos/terraform.svg" },
];

const Integrations = () => (
  <section className="w-full py-14 px-4 bg-white">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-xl font-extrabold mb-8 text-blue-900 text-center">Cloud & Dev Tool Integrations</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 justify-items-center items-center">
        {logos.map(logo => (
          <div
            key={logo.name}
            className="w-20 h-20 flex items-center justify-center transition filter grayscale hover:grayscale-0 hover:scale-105"
          >
            {/* Replace with <img src={logo.src} ... /> for real logos */}
            <PlaceholderImg className="w-16 h-16" text={logo.name} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Feature Highlights
const features = [
  {
    title: "Declarative Policy-as-Code",
    desc: "Manage access control with versioned, auditable code. Integrate with CI/CD for automated enforcement.",
    img: <PlaceholderImg className="w-full h-40 rounded-xl" text="Code Example" />,
    reverse: false,
  },
  {
    title: "Real-Time Drift Detection",
    desc: "Continuously monitor cloud resources for configuration drift and policy violations.",
    img: <PlaceholderImg className="w-full h-40 rounded-xl" text="Drift Monitor" />,
    reverse: true,
  },
  {
    title: "Unified Audit & Compliance",
    desc: "Centralized logging and reporting for compliance and security teams.",
    img: <PlaceholderImg className="w-full h-40 rounded-xl" text="Audit Logs" />,
    reverse: false,
  },
];

const FeatureHighlights = () => (
  <section className="w-full py-20 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto flex flex-col gap-16">
      {features.map((f, i) => (
        <div
          key={f.title}
          className={`flex flex-col md:flex-row ${f.reverse ? 'md:flex-row-reverse' : ''} items-center gap-10`}
        >
          <div className="flex-1">{f.img}</div>
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">{f.title}</h3>
            <p className="text-gray-700 text-lg">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// Video Section
const PlatformVideo = () => (
  <section className="w-full flex justify-center items-center py-24 bg-white">
    <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl shadow-lg flex items-center justify-center overflow-hidden">
      {/* Replace src with your actual video file */}
      <video
        controls
        poster=""
        className="w-full h-full object-cover bg-black"
      >
        <source src="/media/platform_demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
);



// Publications Section
const Publications = () => (
  <section className="w-full py-24 px-4 bg-blue-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-blue-900 mb-12 text-center">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Link
            to="/news-and-media"
            key={i}
            className="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition p-6 hover:bg-blue-50"
          >
            <PlaceholderImg className="w-full h-40 mb-4" text={`Article ${i}`} />
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Sample Article Title {i}</h3>
            <p className="text-gray-600 text-base">
              Brief description of the article. It should be a teaser for the full story.
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);


export default function PlatformPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <PlatformHero />
      <PlatformFeatures />
      <HowItWorks />
      <PlatformVideo />
      <Publications />
    </div>
  )
}