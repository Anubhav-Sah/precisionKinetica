import React from 'react'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import moleculeAnimation from "../../animations/Analytical Ability Icon.json";
import innovationAnimation from "../../animations/Bulb.json";
import executionAnimation from "../../animations/time animation.json";

function FeaturesGrid() {
  return (
    <section className="w-full py-[60px] px-4 bg-[#F3F4F6] border-b border-[#E2E8F0]" id="innovation">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-inter font-bold text-[32px] leading-[1.3] text-[#0E3A8A] mb-14 text-center ">
          Optimized medicines for optimized profiles
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          
          {/* Innovation Card */}
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={innovationAnimation} loop={true} />
            </div>          
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Innovation</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
              Accurate and data-efficient physics-based AI technologies that span from early-stage discovery to the clinic.
            </p>
            <Link
              to="/PlatformPage"
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
            </Link>
          </div>

          {/* Automation Card */}
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={moleculeAnimation} loop={true} />
            </div>
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Automation</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
              AI-driven, high-throughput experimentation to go from new molecular designs to new biological data each week.
            </p>
            <Link
              to="/platform#automation"
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
            </Link>
          </div>

          {/* Execution Card */}
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={executionAnimation} loop={true} />
            </div>
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Execution</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
              A proprietary pipeline of differentiated clinical candidates delivered at a pace years faster than the industry standard.
            </p>
            <Link
              to="/pipeline"
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
