import React from "react";

function PartnershipHero() {
  return (
    <section className="w-full pt-36 pb-24 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">Partner with Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Collaborate with us to revolutionize biotechnology, life sciences, and digital health. Together, we can make breakthroughs happen.
        </p>
      </div>
    </section>
  );
}

function PartnershipBenefits() {
  const benefits = [
    {
      title: "Research Collaboration",
      desc: "Team up on cutting-edge biological and AI research initiatives.",
    },
    {
      title: "Shared Resources",
      desc: "Access our lab infrastructure, datasets, and tech platforms.",
    },
    {
      title: "Talent Access",
      desc: "Hire, collaborate with, or mentor our highly skilled student community.",
    },
  ];

  return (
    <section className="w-full py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Why Partner With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg text-center transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{b.title}</h3>
              <p className="text-blue-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipCTA() {
  return (
    <section className="w-full py-24 bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Let’s Build Together</h2>
        <p className="text-blue-800 mb-8 text-lg">
          We’re looking for forward-thinking partners who share our vision. Whether you're a startup, lab, or enterprise — let's talk.
        </p>
        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
          Contact Our Team
        </button>
      </div>
    </section>
  );
}

export default function PartnershipPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <PartnershipHero />
      <PartnershipBenefits />
      <PartnershipCTA />
    </div>
  );
}