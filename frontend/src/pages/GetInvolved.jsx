// src/pages/GetInvolved.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

// Component for a styled input field
const InputField = ({ type = 'text', placeholder, required = false }) => (
    <input 
        type={type} 
        placeholder={placeholder} 
        required={required} 
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ajmf-blue focus:border-ajmf-blue transition duration-200"
    />
);

const GetInvolved = () => {
  
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Your Support Fuels Our Mission" subTitle="Get Involved" alignment="center" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
        
        {/* === COLUMN 1: DONATION FORM === */}
        <div className="bg-ajmf-light p-8 rounded-xl shadow-2xl border-t-8 border-cta-donate animate-fade-in">
          <h2 className="text-3xl font-bold text-ajmf-blue mb-4">Make a Donation</h2>
          <p className="text-gray-700 mb-6">Every contribution goes directly towards student scholarships and skill development programs.</p>

          <form className="space-y-4">
            
            <h3 className="text-xl font-semibold text-ajmf-red">Amount:</h3>
            {/* Quick Donation Buttons */}
            <div className="flex space-x-3 mb-4">
              <button type="button" className="px-5 py-2 border rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition shadow-sm">₹500</button>
              <button type="button" className="px-5 py-2 border rounded-full bg-white text-gray-700 font-medium hover:bg-gray-100 transition shadow-sm">₹2,500</button>
              <button type="button" className="px-5 py-2 border rounded-full bg-ajmf-saffron text-white font-medium hover:bg-opacity-90 transition shadow-md">₹5,000</button>
            </div>
            
            <InputField type="number" placeholder="Or Enter Custom Amount (₹)" required={true} />
            
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-cta-donate rounded focus:ring-cta-donate" />
              <span>Make this a recurring monthly donation</span>
            </label>
            
            <div className="pt-4">
                <button type="submit" className="w-full py-3 bg-cta-donate text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-xl transform hover:scale-[1.01] hover:bg-[#17a2b8]">
                Donate Securely &rarr;
                </button>
            </div>
          </form>
        </div>

        {/* === COLUMN 2: VOLUNTEER FORM === */}
        <div className="bg-white p-8 rounded-xl shadow-2xl border-t-8 border-ajmf-blue animate-fade-in">
          <h2 className="text-3xl font-bold text-ajmf-red mb-4">Volunteer Your Skills</h2>
          <p className="text-gray-700 mb-6">Share your expertise as a mentor or educator. Your time is invaluable.</p>

          <form className="space-y-4">
            <InputField placeholder="Your Full Name" required={true} />
            <InputField type="email" placeholder="Email Address" required={true} />
            <InputField placeholder="Your Profession/Skills (e.g., Python Developer, Digital Marketer)" required={true} />
            
            <textarea 
                placeholder="Tell us about your interest and availability." 
                rows="4" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-ajmf-blue focus:border-ajmf-blue  transition duration-200"
            ></textarea>

            <div className="pt-4">
    <button type="submit" 
  className="w-full py-3 bg-cta-inquire text-white font-bold rounded-lg shadow-xl transition duration-300 transform hover:scale-[1.01] hover:bg-[#E5760E] bg-4 bg-red-300 red border-4 border-red-500 h-20"
>
    Submit Volunteer Application
</button>
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;