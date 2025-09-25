// src/components/layout/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-nav-bg text-white mt-12 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8">
          
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-bold text-ajmf-saffron mb-3">AJMF Foundation</h3>
            <p className="text-sm text-gray-400">
              Empowering underprivileged youth through education and skill development in memory of Anish Jadhav.
            </p>
            <div className="flex space-x-4 mt-4 text-gray-300">
              {/* Social Media Icons Placeholder */}
              <a href="#" className="hover:text-cta-inquire transition">FB</a>
              <a href="#" className="hover:text-cta-inquire transition">IN</a>
              <a href="#" className="hover:text-cta-inquire transition">LN</a>
            </div>
          </div>

          {/* Column 2: About Links */}
          <div>
            <h4 className="font-semibold text-ajmf-saffron mb-3">ABOUT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/about/story" className="hover:text-white transition">Story of Anish</a></li>
              <li><a href="/about/mission" className="hover:text-white transition">Vision & Mission</a></li>
              <li><a href="/about/team" className="hover:text-white transition">Our Team</a></li>
              <li><a href="/news" className="hover:text-white transition">News & Events</a></li>
            </ul>
          </div>

          {/* Column 3: Get Involved Links */}
          <div>
            <h4 className="font-semibold text-ajmf-saffron mb-3">GET INVOLVED</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/donate" className="hover:text-white transition">Donate</a></li>
              <li><a href="/volunteer" className="hover:text-white transition">Volunteer</a></li>
              <li><a href="/apply" className="hover:text-white transition">Apply Now</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Contact/Legal */}
          <div>
            <h4 className="font-semibold text-ajmf-saffron mb-3">CONTACT</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="/campus" className="hover:text-white transition">Lohegaon Campus</a></li>
              <li><a href="/transparency" className="hover:text-white transition">Transparency</a></li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Anish Jadhav Memorial Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;