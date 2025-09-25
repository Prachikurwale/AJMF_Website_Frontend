// src/pages/Home.jsx

import React from 'react';
// Import components needed for the homepage layout
import Hero from '../components/specific/Hero'; 
import SectionHeader from '../components/reusable/SectionHeader';
import ImpactStats from '../components/reusable/ImpactStats';
import ProgramCard from '../components/reusable/ProgramCard';

const Home = () => {
  // Example data for Program Snapshots
  const programs = [
    { title: "SOP – Programming", description: "Intensive coding and software development training.", icon: "💻" },
    { title: "SOB – Business", description: "Digital marketing and vocational skills for employment.", icon: "📈" },
    { title: "SOE – Education", description: "Foundational literacy and life skills workshops.", icon: "📚" },
  ];

  return (
    <div>
      {/* 1. HERO SECTION (The large rounded image from your reference) */}
      <Hero /> 

      {/* 2. WHO WE ARE (Short Intro) */}
      <section className="max-w-7xl mx-auto py-16 px-4 text-center">
        <SectionHeader title="Honoring Anish, Building Futures" subTitle="Our Mission" alignment="center" />
        <p className="mt-4 text-xl text-gray-700 max-w-4xl mx-auto">
          The Anish Jadhav Memorial Foundation empowers underprivileged youth with free, high-quality education and skill training in technology and vocational trades, enabling them to lead lives of dignity and independence.
        </p>
        <button className="mt-8 px-8 py-3 bg-ajmf-blue text-white font-bold rounded-lg hover:bg-opacity-90 transition-all shadow-md">
          Read Our Full Story &rarr;
        </button>
      </section>

      {/* 3. IMPACT STATS */}
      <ImpactStats />
      
      {/* 4. PROGRAM SNAPSHOTS */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <SectionHeader title="Our Transformative Programs" subTitle="What We Teach" alignment="center" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {programs.map((p, index) => (
            <ProgramCard key={index} title={p.title} description={p.description} icon={p.icon} link="/academics" />
          ))}
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="bg-cta-donate bg-opacity-10 py-16 text-center">
        <h2 className="text-3xl font-bold text-ajmf-blue mb-4">Ready to Be a Part of the Change?</h2>
        <div className="flex justify-center space-x-4">
          <a href="/donate" className="px-8 py-3 bg-cta-donate text-white font-bold rounded-lg shadow-xl hover:bg-opacity-90 transition transform hover:scale-105">
            DONATE NOW
          </a>
          <a href="/apply" className="px-8 py-3 bg-ajmf-red text-white font-bold rounded-lg shadow-xl hover:bg-red-700 transition transform hover:scale-105">
            APPLY TO A PROGRAM
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;