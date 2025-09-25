// src/components/reusable/ImpactStats.jsx

import React from 'react';

// Data structure for the key performance indicators (KPIs)
const stats = [
  { value: '150+', label: 'Residential Capacity (Girls)' },
  { value: '25,000', label: 'Sq.Ft. Campus Space' },
  { value: '12+', label: 'Programs & Courses' },
  { value: '90%', label: 'Job Placement Rate' },
];

const ImpactStats = () => {
  return (
    <section className="bg-ajmf-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-bold text-ajmf-blue mb-12">
          Our Impact in Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              // Card styling with shadow, rounded corners, and a saffron bottom border for visual weight
              className="p-6 bg-white rounded-xl shadow-md border-b-4 border-ajmf-saffron transition-transform hover:scale-105 duration-300"
            >
              {/* The large statistical number/value */}
              <p className="text-5xl font-extrabold text-ajmf-red mb-2">
                {stat.value}
              </p>
              {/* The label/description */}
              <p className="text-lg text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;