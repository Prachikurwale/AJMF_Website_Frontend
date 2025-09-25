// src/pages/Campus.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

const Campus = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Our Home of Learning" subTitle="Campus & Facilities" alignment="center" />
      
      <div className="text-center mb-12">
        <p className="text-xl text-gray-700">
          Our state-of-the-art Skilling Institute in Lohegaon, Pune, provides a safe, nurturing, and modern environment designed for focused learning and community building.
        </p>
        <p className="text-2xl font-bold text-ajmf-saffron mt-4">
          Capacity: 150+ Girls Residential | 25,000 sq.ft. Space
        </p>
      </div>

      {/* Placeholder for Photo Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-md">
          Classrooms & Labs [Image]
        </div>
        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-md">
          Hostel/Residential Area [Image]
        </div>
        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 shadow-md">
          Green Campus & Common Area [Image]
        </div>
      </div>
    </div>
  );
};

export default Campus;