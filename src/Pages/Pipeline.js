import React from "react";

function PipelineHero() {
  return (
    <section className="w-full pt-36 pb-24 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Pipeline</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Discover how our innovative research is shaping the future of biotechnology, AI in health, and digital diagnostics.
        </p>
      </div>
    </section>
  );
}

function PipelineStages() {
  const stages = [
    {
      title: "Discovery",
      desc: "Fundamental biological and computational research aimed at uncovering new insights and targets.",
    },
    {
      title: "Development",
      desc: "Building real-world solutions using synthetic biology, data science, and software platforms.",
    },
    {
      title: "Validation",
      desc: "Clinical and lab validation with industry experts and domain specialists.",
    },
    {
      title: "Deployment",
      desc: "Real-world rollout through partnerships, open platforms, and integrations with health systems.",
    },
  ];

  return (
    <section className="w-full py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How We Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((s, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{s.title}</h3>
              <p className="text-blue-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineCTA() {
  return (
    <section className="w-full py-24 bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Let’s Move Science Forward</h2>
        <p className="text-blue-800 mb-8 text-lg">
          Join us in building the next generation of bio-AI tools and technologies. Our pipeline is open to collaboration.
        </p>
        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
          Partner With Us
        </button>
      </div>
    </section>
  );
}

export default function PipelinePage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <PipelineHero />
      <PipelineStages />
      <PipelineCTA />
    </div>
  );
}