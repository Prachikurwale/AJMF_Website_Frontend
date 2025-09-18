import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080.png?text=AJMF+Campus')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold md:text-6xl lg:text-7xl">Anish Jadhav Memorial Foundation</h1>
        <p className="mt-4 text-xl font-medium md:text-2xl">Empowering the Needy through Skills</p>
        <a href="#programs" className="mt-8 rounded-full bg-yellow-400 px-8 py-3 text-lg font-bold text-gray-900 transition hover:bg-yellow-500">
          Explore Our Programs
        </a>
      </div>
    </section>
  );
};

export default HeroSection;