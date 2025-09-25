// src/components/specific/Hero.jsx (FINAL DYNAMIC & STYLED VERSION)

import React, { useState } from 'react';

// Array to hold your 4 different image paths and texts
const heroSlides = [
  { 
    src: "/images/hero-students.jpg", 
    headline: "INSPIRING A PASSION FOR LEARNING" 
  },
  { 
    src: "/images/hero-community.jpg", 
    headline: "EMPOWERING YOUTH, BUILDING COMMUNITY"
  },
  { 
    src: "/images/hero-residence.jpg", 
    headline: "SKILLING FOR DIGNITY AND INDEPENDENCE" 
  },
  { 
    src: "/images/hero-impact.jpg", 
    headline: "YOUR SUPPORT DRIVES REAL CHANGE" 
  },
];

const Hero = () => {
  // State to track which slide is currently active (0, 1, 2, or 3)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get the current slide data
  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative max-w-7xl mx-auto p-2 md:p-6 pt-0"> 
      
      {/* 1. Hero Image Container (Stylized) */}
      <div 
        className="relative h-[65vh] md:h-[75vh] bg-cover bg-center overflow-hidden 
                   rounded-[4rem] md:rounded-[6rem] shadow-2xl shadow-gray-500/50 
                   transition-all duration-1000 transform hover:scale-[1.005] hover:shadow-3xl"
        // 💥 Dynamic background image applied here 💥
        style={{ 
          backgroundImage: `url(${currentSlideData.src})` 
        }}
      >
        {/* Overlay: Subtle gradient for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div> 

        {/* Headline Container (Text changes with slide) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center p-4 animate-slide-in">
          <h1 
            key={currentSlide} // Forces re-render and fade-in animation
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter 
                       font-sans drop-shadow-lg animate-fade-in" // Using the fade-in animation on the text
          >
            {/* Display headline text with line breaks */}
            {currentSlideData.headline.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < currentSlideData.headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
        </div>

        {/* 2. Vertical Dots/Slider Navigation (Functional and Styled) */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-4"
        >
          {heroSlides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)} // 💥 Functionality: Clicking changes the state 💥
              className={`w-4 h-4 rounded-full transition-all duration-300 shadow-lg 
                ${index === currentSlide 
                  // Active dot gets the pulse ring and saffron color
                  ? 'bg-ajmf-saffron ring-4 ring-ajmf-saffron/50 animate-pulse' 
                  // Inactive dots are white/transparent
                  : 'bg-white/70 hover:bg-white border-2 border-transparent' 
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;