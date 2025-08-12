import React from 'react'

function TrustedBy() {
  const companies = [
    "BioPharma Inc.",
    "GenomicsLab",
    "MedAI Partners",
    "ProteinX",
  ]

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
        <h2
          className="text-4xl font-extrabold mb-14 text-center tracking-tight"
          style={{ color: 'var(--color-text-accent)' }}
        >
          Trusted By
        </h2>
        <div className="flex flex-wrap justify-center gap-12 mb-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="w-36 h-12 relative group rounded-lg border shadow-md overflow-hidden flex items-center justify-center transition-all duration-300"
              style={{
                borderColor: 'var(--color-bg-accent)',
                backgroundColor: 'var(--color-bg-accent)',
              }}
            >
              <span
                className="font-semibold relative z-10"
                style={{ color: 'var(--color-bg-primary)' }}
              >
                {company}
              </span>
              <span
                className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110 group-hover:blur-md"
                style={{ backgroundColor: 'var(--color-bg-accent-hover)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
