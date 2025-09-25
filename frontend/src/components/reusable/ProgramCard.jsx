// src/components/reusable/ProgramCard.jsx

import React from 'react';

const ProgramCard = ({ title, description, icon, link }) => {
  return (
    // Card styling with hover animation and shadow for engagement
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border-t-4 border-ajmf-blue">
      
      {/* Icon/Emoji for visual appeal. Uses Saffron accent color. */}
      <div className="text-5xl text-ajmf-saffron mb-4">
        {icon}
      </div> 
      
      {/* Program Title */}
      <h3 className="text-2xl font-semibold text-ajmf-blue mb-3">
        {title}
      </h3>
      
      {/* Short Description */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      
      {/* Call to Action Link */}
      <a 
        href={link} 
        className="text-ajmf-blue font-medium hover:text-cta-inquire transition duration-150 flex items-center"
      >
        Learn More &rarr;
      </a>
    </div>
  );
};

export default ProgramCard;