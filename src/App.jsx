 import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Programs from './components/Programs';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <AboutUs />
        <Programs />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;