import React from 'react';
import { Link } from 'react-router-dom';

// Import components from the new folder
import Hero from '../Components/home/Hero';
import TrustedBy from '../Components/home/TrustedBy';
import FeaturesGrid from '../Components/home/FeaturesGrid';
import PipelineIntro from '../Components/home/PipelineIntro';
import Testimonial from '../Components/home/Testimonial';
import FinalCTA from '../Components/home/FinalCTA';

// Remove all the component definitions from this file after moving them to their own files

const Home = () => (
  <div className="w-full min-h-screen flex flex-col bg-white">
    <Hero/>
    <TrustedBy/>
    <FeaturesGrid />
    <PipelineIntro />
    <Testimonial />
    <FinalCTA />
  </div>
);

export default Home;
