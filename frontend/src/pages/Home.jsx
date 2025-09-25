// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/specific/Hero'; // Assuming you move the hero code here
import SectionHeader from '../components/reusable/SectionHeader';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto py-16 px-4 text-center">
        <SectionHeader title="Welcome to AJMF" subTitle="Honoring Anish's Legacy" alignment="center" />
        <p className="mt-8 text-lg text-gray-700">
          This is the core content area for the homepage. Add your mission statement, impact stats, and program snapshots here!
        </p>
      </div>
      {/* ... other homepage sections ... */}
    </div>
  );
};

export default Home;