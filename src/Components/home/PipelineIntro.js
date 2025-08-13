import React from 'react';
import { Link } from 'react-router-dom';
import her2video from '../../videos/5TDN_spin-structure.mp4';
import cdk24video from '../../videos/3QQH_spin-structure.mp4';
import novelvideo from '../../videos/1JKG_spin-structure.mp4';

export default function PipelineIntro() {
  const pipelineCards = [
    {
      title: "HER2",
      description:
        "1000x selectivity and brain penetrance to unlock the therapeutic potential of the target for metastatic disease.",
      video: her2video,
    },
    {
      title: "CDK2/4",
      description:
        "First-in-class CDK2/4 profile to address cyclin D and cyclin E driven cancers while avoiding off-target dose-limiting toxicities.",
      video: cdk24video,
    },
    {
      title: "Novel Target Classes",
      description:
        "Programs focusing on cryptic pockets, allostery, and protein-protein interactions, spanning multiple therapeutic areas.",
      video: novelvideo,
    },
  ];
// bg-gray-200
  return (
    <section
      className="w-full py-16 px-4 sm:px-6 bg-[#F3F4F6] flex flex-col items-center text-center"
      id="pipeline"
    >
      <h2 className="font-inter text-[44px] font-bold mb-14 text-center text-[#0E3A8A] tracking-tight leading-tight">
        Our Pipeline: Transforming Possibilities into Therapies
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center w-full max-w-6xl mx-auto mb-8">
        {pipelineCards.map((card, index) => (
          <div
            key={index}
            className="flex-1 max-w-sm mx-auto bg-white rounded-[16px] shadow-lg border border-[#D1D5DB] flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#BFDBFE] to-[#60A5FA] shadow-md overflow-hidden">
              <video
                src={card.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-inter font-bold text-[20px] text-[#0E3A8A] mb-2">
              {card.title}
            </h3>
            <p className="font-roboto text-[16px] text-[#4B5563] leading-[1.6]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/pipeline"
        className="inline-flex items-center px-6 py-3 rounded-[4px] bg-[#0E3A8A] hover:bg-[#0b2d6e] text-white font-inter font-medium text-[16px] leading-[1.6] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#93C5FD]"
      >
        See Full Pipeline
        <svg
          className="w-4 h-4 ml-2"
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
    </section>
  );
}
