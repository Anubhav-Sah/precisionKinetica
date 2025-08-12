import React from 'react'

function TrustedBy() {
  const companies = [
    "BioPharma Inc.",
    "GenomicsLab",
    "MedAI Partners",
    "ProteinX",
<<<<<<< HEAD
  ]
=======
  ];
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4

  return (
    <section
      className="w-full py-16 px-4 "
      style={{
        // backgroundColor: 'var(--color-bg-primary)',
        // borderColor: 'var(--color-border)',
      }}
      id="trusted"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
<<<<<<< HEAD
        <h2
          className="text-4xl font-extrabold mb-14 text-center tracking-tight"
          style={{ color: 'var(--color-text-accent)' }}
        >
          Trusted By
=======
        <h2 className="text-4xl font-bold mb-14 text-center tracking-tight"
            style={{ color: "#0E3A8A" }}>
          <span className="bg-clip-text">
            Trusted By
          </span>
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-36 h-12 relative group rounded-lg border shadow-md overflow-hidden flex items-center justify-center transition-all duration-300"
<<<<<<< HEAD
              style={{
                borderColor: 'var(--color-bg-accent)',
                backgroundColor: 'var(--color-bg-accent)',
              }}
=======
              style={{ backgroundColor: "#047857", borderColor: "#047857" }}
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            >
              <span
                className="font-semibold relative z-10"
                style={{ color: 'var(--color-bg-primary)' }}
              >
                {company}
              </span>
              <span
                className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
<<<<<<< HEAD
                style={{ backgroundColor: 'var(--color-bg-accent-hover)' }}
              />
=======
                style={{ backgroundColor: "rgba(4, 120, 87, 0.6)" }}
              ></span>
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
