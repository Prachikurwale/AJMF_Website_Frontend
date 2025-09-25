// src/components/reusable/SectionHeader.jsx

import React from 'react';

const SectionHeader = ({ title, subTitle, alignment = 'center' }) => {
  // Determine text alignment based on prop
  const alignClass = alignment === 'center' ? 'text-center' : 'text-left';

  return (
    // Slide-in animation for an engaging effect
    <div className={`py-12 ${alignClass} animate-slide-in`}>
      
      {/* Subtitle (e.g., "Our Mission") - Uses the Orange CTA color for emphasis */}
      {subTitle && (
        <p className="text-cta-inquire text-lg font-medium mb-2 uppercase">
          {subTitle}
        </p>
      )}
      
      {/* Main Title (e.g., "Honoring Anish, Building Futures") */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 tracking-tight">
        {title}
      </h2>

      {/* Custom Divider: Saffron Arrow with Horizontal Lines */}
      <div className="flex justify-center items-center w-full max-w-md mx-auto">
        
        {/* Left Line */}
        <div className="flex-grow border-t border-gray-300"></div> 
        
        {/* Saffron Arrow Icon (The arrow character rotated -90 degrees) */}
        <div className="mx-4 text-ajmf-saffron text-2xl transform -rotate-90">
            &#9660; 
        </div>
        
        {/* Right Line */}
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      
    </div>
  );
};

export default SectionHeader;