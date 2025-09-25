// src/pages/GetInvolved.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

// Prop 'type' can be 'donate' or 'volunteer' passed from App.jsx routing
const GetInvolved = ({ type = 'donate' }) => {
  
  const isDonate = type === 'donate';
  
  const title = isDonate ? "Your Contribution Makes a Difference" : "Give Your Time, Share Your Skill";
  const subTitle = isDonate ? "Support Our Students Today" : "Volunteer with AJMF";

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title={title} subTitle={subTitle} alignment="center" />
      
      {isDonate ? (
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-cta-donate animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Secure Donation Form</h3>
          {/* Donation Form Placeholder */}
          <form className="space-y-4">
            <input type="number" placeholder="Enter Amount (₹)" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-cta-donate focus:border-cta-donate" />
            <div className="flex space-x-4">
              <button type="button" className="px-4 py-2 border rounded-lg bg-gray-100">₹500</button>
              <button type="button" className="px-4 py-2 border rounded-lg bg-gray-100">₹1,000</button>
              <button type="button" className="px-4 py-2 border rounded-lg bg-gray-100">₹5,000</button>
            </div>
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="form-checkbox text-cta-donate" />
              <span>Make this a recurring donation</span>
            </label>
            <button type="submit" className="w-full py-3 bg-cta-donate text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-lg">
              Donate Now
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-ajmf-blue animate-fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Volunteer Signup</h3>
          {/* Volunteer Form Placeholder */}
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Skills and Areas of Interest (Mentorship, Teaching, Events)" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="w-full py-3 bg-ajmf-blue text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-lg">
              Submit Volunteer Application
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GetInvolved;