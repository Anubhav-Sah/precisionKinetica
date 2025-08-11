import React from 'react'

function TrustedBy() {
  const companies = [
    "BioPharma Inc.",
    "GenomicsLab",
    "MedAI Partners",
    "ProteinX",
  ];

  return (
    <section
      className="w-full py-16 px-4 bg-gray-200 border-b border-gray-300"
      id="trusted"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-14 text-center tracking-tight"
            style={{ color: "#0E3A8A" }}>
          <span className="bg-clip-text">
            Trusted By
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-36 h-12 relative group rounded-lg border shadow-md overflow-hidden flex items-center justify-center transition-all duration-300"
              style={{ backgroundColor: "#047857", borderColor: "#047857" }}
            >
              <span className="text-white font-semibold relative z-10">
                {company}
              </span>
              <span
                className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                style={{ backgroundColor: "rgba(4, 120, 87, 0.6)" }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;
