import React from "react";

function NewsHero() {
  return (
    <section className="w-full pt-36 pb-20 bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">In The News</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore how our work is making headlines in science, tech, and innovation media worldwide.
        </p>
      </div>
    </section>
  );
}

function NewsGrid() {
  const news = [
    {
      title: "Startup Spotlight: AI + BioTech = The Future",
      source: "TechCrunch",
      date: "July 2025",
      link: "#",
    },
    {
      title: "Disrupting Diagnostics with Data & DNA",
      source: "Nature News",
      date: "June 2025",
      link: "#",
    },
    {
      title: "Next-Gen Health: Platform Built for Precision",
      source: "Forbes India",
      date: "May 2025",
      link: "#",
    },
    {
      title: "From Lab to Life: Bridging Bio & AI",
      source: "MIT Tech Review",
      date: "April 2025",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Latest Mentions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-sm text-blue-600">{item.source} • {item.date}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaCTA() {
  return (
    <section className="w-full py-24 bg-blue-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Press Inquiries & Media Kits</h2>
        <p className="text-blue-800 mb-8 text-lg">
          Reach out to our communications team for interviews, stories, or assets.
        </p>
        <button className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition">
          Contact Press Office
        </button>
      </div>
    </section>
  );
}

export default function NewsMediaPage() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <NewsHero />
      <NewsGrid />
      <MediaCTA />
    </div>
  );
}