import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We are building innovative solutions in biotechnology. Explore our platform, pipeline, and partnerships.
        </p>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `inline-block px-6 py-3 rounded-md text-lg font-medium transition ${
              isActive
                ? 'bg-blue-700 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`
          }
        >
          Learn More
        </NavLink>
      </div>
    </div>
    
  );
};

export default Home;
