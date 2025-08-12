import React from 'react'
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import moleculeAnimation from "../../animations/Analytical Ability Icon.json";
import innovationAnimation from "../../animations/Bulb.json";
import executionAnimation from "../../animations/time animation.json";
<<<<<<< HEAD
// border-b
function FeaturesGrid() {
  return (
    <section
      className="w-full py-24 px-4 "
      style={{
        // backgroundColor: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
      id="innovation"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-14 text-center tracking-tight">
          <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-blue-700 bg-clip-text text-transparent">
            Optimized medicines for optimized profiles
          </span>
=======

function FeaturesGrid() {
  return (
    <section className="w-full py-[60px] px-4 bg-[#F3F4F6] border-b border-[#E2E8F0]" id="innovation">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-inter font-bold text-[32px] leading-[1.3] text-[#0E3A8A] mb-14 text-center ">
          Optimized medicines for optimized profiles
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
        </h2>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          
          {/* Innovation Card */}
<<<<<<< HEAD
          <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <Lottie animationData={innovationAnimation} loop={true} />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-blue-700">Innovation</h3>
            <p className="text-gray-700 text-lg mb-6">
=======
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={innovationAnimation} loop={true} />
            </div>          
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Innovation</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
              Accurate and data-efficient physics-based AI technologies that span from early-stage discovery to the clinic.
            </p>
            <Link
              to="/PlatformPage"
<<<<<<< HEAD
              className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
=======
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            </Link>
          </div>

          {/* Automation Card */}
<<<<<<< HEAD
          <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <Lottie animationData={moleculeAnimation} loop={true} />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-blue-700">Automation</h3>
            <p className="text-gray-700 text-lg mb-6">
=======
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={moleculeAnimation} loop={true} />
            </div>
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Automation</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
              AI-driven, high-throughput experimentation to go from new molecular designs to new biological data each week.
            </p>
            <Link
              to="/platform#automation"
<<<<<<< HEAD
              className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
=======
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            </Link>
          </div>

          {/* Execution Card */}
<<<<<<< HEAD
          <div className="flex-1 max-w-sm mx-auto bg-white rounded-3xl shadow-2xl border border-blue-100 flex flex-col items-center text-center p-8 transition-transform duration-300 hover:scale-105 hover:shadow-blue-200 group">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-lg group-hover:scale-110 transition-transform">
              <Lottie animationData={executionAnimation} loop={true} />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-blue-700">Execution</h3>
            <p className="text-gray-700 text-lg mb-6">
=======
          <div className="flex-1 max-w-sm mx-auto bg-[#FFFFFF] rounded-[8px] shadow-md border border-[#E2E8F0] flex flex-col items-center text-center p-6 transition-transform duration-300 hover:scale-105">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-[#F3F4F6]">
              <Lottie animationData={executionAnimation} loop={true} />
            </div>
            <h3 className="font-inter font-medium text-[24px] leading-[1.4] text-[#0E3A8A] mb-2">Execution</h3>
            <p className="font-roboto text-[16px] leading-[1.6] text-[#64748B] mb-6">
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
              A proprietary pipeline of differentiated clinical candidates delivered at a pace years faster than the industry standard.
            </p>
            <Link
              to="/pipeline"
<<<<<<< HEAD
              className="inline-flex items-center px-6 py-2 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 text-base shadow group-hover:shadow-lg"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
=======
              className="bg-[#0E3A8A] text-white font-inter font-medium text-[16px] leading-[1.6] px-6 py-3 rounded-[4px] transition-colors duration-200 hover:bg-[#0b2d6e]"
            >
              Read More
>>>>>>> ac90755a2ca468f8d5eec44e7a5af6c0cdd18ee4
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
