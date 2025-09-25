// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components (from src/components/layout)
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; 

// Page Components (from src/pages - You must create these files)
import Home from './pages/Home';
import About from './pages/About';
import Programs from "./pages/Programs.jsx"; // Explicitly include the extension
import Collaboration from './pages/Collaboration';
import Campus from './pages/Campus';
import Community from './pages/Community';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Header and Footer are outside <Routes> so they appear on all pages */}
      <Header />
      
      <main className="min-h-screen">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Programs />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/community" element={<Community />} />

          {/* Action Pages */}
          <Route path="/donate" element={<GetInvolved type="donate" />} />
          <Route path="/inquire" element={<Contact />} />
          <Route path="/apply" element={<Programs />} /> 

          {/* Optional: Add routes for dropdown sub-links here (e.g., /about/story) */}

          {/* Fallback for 404 */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

const NotFound = () => (
    <div className="text-center py-20">
        <h1 className="text-6xl font-extrabold text-ajmf-red">404</h1>
        <p className="text-xl mt-3 text-gray-700">Page Not Found. The passion for learning continues elsewhere.</p>
    </div>
);


export default App;