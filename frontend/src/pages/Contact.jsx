// src/pages/Contact.jsx

import React from 'react';
import SectionHeader from '../components/reusable/SectionHeader';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <SectionHeader title="Get In Touch" subTitle="Inquiries & Information" alignment="center" />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Contact Details */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-2xl font-bold text-ajmf-blue">Contact Information</h2>
          <div className="space-y-2">
            <p className="font-semibold">Address:</p>
            <p className="text-gray-700">Pathare Wasti, Lohegaon, Pune – 411047, Maharashtra, India</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Email:</p>
            <p className="text-gray-700">info@ajmf-foundation.org</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">Phone:</p>
            <p className="text-gray-700">+91 XXXXXXXXXX</p>
          </div>
          
          <h2 className="text-2xl font-bold text-ajmf-blue mt-8">Location Map</h2>
          {/* Google Maps Embed Placeholder */}
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            [Google Maps Embed]
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-ajmf-light p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Full Name" required className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg" />
            <input type="text" placeholder="Subject" required className="w-full p-3 border border-gray-300 rounded-lg" />
            <textarea placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            <button type="submit" className="px-8 py-3 bg-cta-inquire text-white font-bold rounded-lg hover:bg-opacity-90 transition shadow-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;