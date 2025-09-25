// src/components/specific/PartnerHighlight.jsx

import React from 'react';

const PartnerHighlight = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap items-center bg-ajmf-light rounded-xl shadow-2xl overflow-hidden animate-slide-in">
          
          {/* Left Side: Partnership Visual */}
          <div className="w-full md:w-1/2 p-10 bg-ajmf-blue flex flex-col justify-center items-center text-center text-white">
            <div className="text-6xl mb-4">🤝</div>
            <h3 className="text-3xl font-bold tracking-tight mb-2">
              Proudly Partnered
            </h3>
            <p className="text-lg text-gray-300">
              The NavGurukul Residential Program
            </p>
            
            {/* Placeholder for the NavGurukul Logo */}
            <div className="mt-6 w-40 h-10 bg-white rounded-lg flex items-center justify-center text-sm font-semibold text-gray-800">
                [NavGurukul Logo Here]
            </div>
          </div>
          
          {/* Right Side: Mission Text and CTA */}
          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-extrabold text-ajmf-red mb-4">
              A Home for Learning and Dignity
            </h2>
            <p className="text-gray-700 mb-6">
              This collaboration provides fully residential, zero-fee software programming and life skills training. We are jointly dedicated to fostering an ecosystem where every girl can achieve financial independence through technology.
            </p>
            <p className="text-gray-700 font-semibold mb-6">
              Our shared vision impacts over 150 residential students annually at our Lohegaon campus.
            </p>
            
            <a
              href="/collaboration"
              className="inline-block px-8 py-3 bg-cta-inquire text-white font-bold rounded-lg shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
            >
              Explore the Program Details &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHighlight;