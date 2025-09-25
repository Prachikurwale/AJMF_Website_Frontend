// src/components/layout/Header.jsx

import React, { useState } from 'react';

// --- Navigation Data (Adjust this for final links) ---
const navData = [
  { 
    name: 'ABOUT US', 
    href: '/about', 
    dropdown: [
      { name: 'Story of Anish Jadhav', href: '/about/story' },
      { name: 'Vision & Mission', href: '/about/mission' },
      { name: 'Our Team / Trustees', href: '/about/team' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Contact Us', href: '/contact' },
    ]
  },
  { 
    name: 'ACADEMICS', 
    href: '/academics', 
    dropdown: [
      { name: 'SOP – Programming', href: '/programs/sop', column: 1 },
      { name: 'SOB – Business', href: '/programs/sob', column: 1 },
      { name: 'SOE – Education', href: '/programs/soe', column: 1 },
      { name: 'SOSC – Second Chance', href: '/programs/sosc', column: 1 },
      { name: 'NavGurukul Partnership', href: '/collaboration', isHeadline: true, column: 2 }, 
      { name: 'Residential Program Details', href: '/programs/residential', column: 2 },
      { name: 'Application Process', href: '/apply', column: 2 },
    ],
    isTwoColumn: true
  },
  { 
    name: 'COLLABORATION', 
    href: '/collaboration', 
    dropdown: [
      { name: 'Partner Institutions', href: '/collaboration/partners' },
      { name: 'Corporate Sponsors', href: '/collaboration/sponsors' },
      { name: 'Events with DY Patil', href: '/events' },
    ]
  },
  { name: 'CAMPUS & FACILITIES', href: '/campus', dropdown: [] },
  { name: 'COMMUNITY', href: '/community', dropdown: [] },
  { name: 'NEWS', href: '/news', dropdown: [] }, 
];
// ---------------------------------------------------

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Component to render the dropdown menu based on the data structure
  const DropdownMenu = ({ item }) => {
    if (!item.dropdown || item.dropdown.length === 0) return null;

    const col1 = item.dropdown.filter(sub => sub.column !== 2);
    const col2 = item.dropdown.filter(sub => sub.column === 2);

    const menuClasses = `absolute top-full left-0 mt-0 bg-white shadow-2xl rounded-b-lg overflow-hidden border-t-4 border-cta-inquire z-50 transition-all duration-300 transform origin-top 
                         ${item.isTwoColumn ? 'w-[500px] grid grid-cols-2 divide-x divide-gray-100' : 'w-64'}`;

    const renderColumn = (columnItems) => (
      <div className="py-2">
        {columnItems.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className={`block px-6 py-3 transition-colors duration-200 
                        ${subItem.isHeadline 
                          ? 'text-lg font-bold text-ajmf-blue bg-gray-50 cursor-default hover:bg-gray-50' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-cta-inquire'}`}
          >
            {subItem.name}
          </a>
        ))}
      </div>
    );

    return (
      <div className={menuClasses}>
        {renderColumn(col1)}
        {item.isTwoColumn && renderColumn(col2)}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      
      {/* ROW 1: Secondary Navigation & CTAs (Dark Gray Bar) */}
      <div className="bg-nav-bg hidden md:flex justify-end items-center space-x-4 h-10 px-4 sm:px-6 lg:px-8 text-xs font-medium">
        <a href="/calendar" className="text-gray-300 hover:text-white transition-colors duration-200">Calendar</a>
        <a href="/giving" className="text-gray-300 hover:text-white transition-colors duration-200">Giving</a>
        <a href="/alumni" className="text-gray-300 hover:text-white transition-colors duration-200">Alumni</a>
        <a href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">Careers</a>
        <a href="/store" className="text-gray-300 hover:text-white transition-colors duration-200">Store</a>
        <a href="/translate" className="text-gray-300 hover:text-white transition-colors duration-200">Translate</a>

        {/* CTAs on Row 1 */}
        <a href="/inquire" className="px-4 py-1 bg-cta-inquire text-black font-bold rounded-sm text-sm hover:opacity-90 transition-all duration-300">
          Inquire
        </a>
        <a href="/donate" className="px-4 py-1 bg-cta-donate text-black font-bold rounded-sm text-sm hover:opacity-90 transition-all duration-300">
          Donate
        </a>
      </div>

      {/* ROW 2: Primary Navigation & Logo (White Bar) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        
        {/* Logo Area (Left) */}
        <a href="/" className="flex items-center space-x-2 relative pr-8">
            {/* Logo Placeholder (Replace with actual image) */}
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-ajmf-blue shadow-md"> 
                <span className="text-3xl font-extrabold text-ajmf-saffron">AJ</span>
            </div>
            <div className="hidden sm:block">
                <p className="text-sm font-bold text-gray-800 tracking-wider">ANISH JADHAV</p>
                <p className="text-xs text-gray-600 uppercase">MEMORIAL FOUNDATION</p>
            </div>
        </a>

        {/* Primary Navigation Links (Center) */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold h-full">
          {navData.map((item) => (
            <div 
              key={item.name}
              className="relative h-full flex items-center" 
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a 
                href={item.href} 
                className={`text-gray-700 hover:text-ajmf-blue transition-colors duration-300 flex items-center h-full border-b-2 
                           ${openDropdown === item.name ? 'border-ajmf-blue' : 'border-transparent'}`}
              >
                {item.name} 
                {/* Arrow */}
                <span className={`ml-1 text-xs transition-transform duration-300 ${openDropdown === item.name ? 'transform rotate-180' : ''}`}>
                  &#9660;
                </span>
              </a>

              {/* Conditional Dropdown Rendering */}
              {openDropdown === item.name && <DropdownMenu item={item} />}
            </div>
          ))}
          
          {/* Search Icon */}
          <button className="text-gray-600 hover:text-ajmf-blue pl-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </nav>
        
        {/* APPLY NOW Button (Far Right) */}
        <a
            href="/apply"
            className="px-6 py-3 bg-ajmf-red text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
            APPLY NOW
        </a>
      </div>
    </header>
  );
};

export default Header;