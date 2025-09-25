// src/components/specific/Hero.jsx (Updated with more attractive CSS)

import React from 'react';

const Hero = () => {
  return (
    <section className="relative max-w-7xl mx-auto p-2 md:p-6 pt-0"> 
      {/* Container classes:
        - Increased transition smoothness (duration-1000)
        - Inner shadow for a refined, premium feel (shadow-inner)
        - Stronger hover scale (hover:scale-[1.005]) 
      */}
      <div 
        className="relative h-[65vh] md:h-[75vh] bg-cover bg-center overflow-hidden 
                   rounded-[4rem] md:rounded-[6rem] shadow-2xl shadow-gray-500/50 
                   transition-all duration-1000 transform hover:scale-[1.005] hover:shadow-3xl"
        style={{ 
          backgroundImage: "url('/images/hero-students.jpg')" // Ensure this image path is correct
        }}
      >
        {/* Overlay: Use a subtle gradient overlay for depth and text contrast.
          - bg-gradient-to-t creates a fade-up effect from the bottom.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div> 

        {/* Headline Container:
          - Added text shadow for readability over complex image areas.
          - Used stronger animation settings.
        */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center p-4 animate-slide-in">
          <h1 
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter 
                       font-sans drop-shadow-lg transition-transform duration-500 hover:scale-[1.02]"
          >
            INSPIRING A PASSION
            <br />
            FOR LEARNING
          </h1>
        </div>

        {/* Vertical Dots/Slider Navigation (Enhanced Visual Effect)
          - Added a slight ring pulse animation to the active dot.
        */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:block space-y-4">
            {/* Active Dot with Pulse Ring */}
            <div className="w-4 h-4 bg-ajmf-saffron border-2 border-white rounded-full transition-all shadow-lg ring-4 ring-ajmf-saffron/50 animate-pulse"></div>
            
            {/* Inactive Dots */}
            <div className="w-3 h-3 bg-white/70 rounded-full transition-all hover:bg-white"></div>
            <div className="w-3 h-3 bg-white/70 rounded-full transition-all hover:bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;