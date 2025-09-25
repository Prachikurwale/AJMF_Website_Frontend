// src/pages/Collaboration.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

const Collaboration = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Our Strategic Collaborations" subTitle="Partnerships for Greater Impact" alignment="center" />
      
      <p className="text-xl text-gray-600 text-center mb-12">
        AJMF believes in the power of partnership. We work with leading educational bodies, NGOs, and corporations to amplify our reach and effectiveness.
      </p>

      {/* Placeholder for Partnership Cards/Logos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-ajmf-blue">NavGurukul</h3>
          <p className="text-gray-500 mt-2">Residential Program Partner</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-ajmf-blue">DY Patil Medical College</h3>
          <p className="text-gray-500 mt-2">Event & Community Partner</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-ajmf-blue">Corporate Sponsors</h3>
          <p className="text-gray-500 mt-2">Skill Development Funding</p>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;