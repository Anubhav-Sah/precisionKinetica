import React from "react";
import { Link } from "react-router-dom";

function Testimonial() {
  const newsItems = [
    {
      title: "Revolution Medicines and Iambic Announce Technology and Research Collaboration",
      description: "Using Iambic’s AI Discovery Tools to Pursue New Drug Candidates",
      date: "July 9, 2025",
      iconPath: "M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z",
    },
    {
      title: "Iambic Completes Dose Escalation in Ongoing Phase 1/1B Study",
      description: "Lead Program IAM1363, a Small Molecule Inhibitor of Wild-Type and Oncogenic HER2 Mutant Proteins",
      date: "June 4, 2025",
      iconPath: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
    },
    {
      title: "Iambic Named to CNBC’s 2025 Disruptor 50 List",
      date: "June 10, 2025",
      iconPath: "M3 10h11M9 21V3m12 7h-4m0 0l-2 3m2-3l2 3",
    },
  ];

  return (
    <section
      className="w-full py-16 px-4 "
      style={{
        // backgroundColor: 'var(--color-bg-primary)',
        // borderColor: 'var(--color-border)',
      }}
      id="news"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2
          className="text-4xl font-extrabold mb-14 text-center tracking-tight"
          style={{ color: 'var(--color-text-accent)' }}
        >
          News & Media
        </h2>

        <div className="w-full flex flex-col gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--color-bg-primary)',
                border: `1px solid var(--color-border)`,
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg group-hover:scale-110 transition-transform"
                style={{ background: 'var(--color-bg-accent)' }}
              >
                <svg
                  className="w-8 h-8"
                  style={{ color: 'var(--color-bg-primary)' }}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                </svg>
              </div>

              <div className="flex-1 text-left">
                <h3
                  className="font-semibold text-lg mb-1"
                  style={{ color: 'var(--color-text-accent)' }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p
                    className="text-base mb-1"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {item.description}
                  </p>
                )}
                <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.75rem' }}>
                  {item.date}
                </span>
              </div>

              <Link
                to="/news-media"
                className="group mt-10 inline-flex items-center px-6 py-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus:ring-4"
                style={{
                  backgroundColor: 'var(--color-bg-accent)',
                  color: 'var(--color-bg-primary)',
                }}
              >
                <span className="text-white text-base font-semibold">Read More</span>
                <svg
                  className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform ml-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All News */}
        <Link
          to="/news-media"
          className="group mt-10 inline-flex items-center px-8 py-3 rounded-full"
          style={{ backgroundColor: "#0E3A8A" }}
        >
          <span className="pr-2 text-white text-lg font-semibold">View All News</span>
          <svg
            className="w-5 h-5 opacity-80 group-hover:translate-x-1 transition-transform text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default Testimonial
