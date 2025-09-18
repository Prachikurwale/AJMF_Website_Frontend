import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold text-blue-600">AJMF</div>
        <ul className="flex space-x-6">
          <li><a href="#about" className="font-semibold text-gray-600 hover:text-blue-600">About Us</a></li>
          <li><a href="#programs" className="font-semibold text-gray-600 hover:text-blue-600">Programs</a></li>
          <li><a href="#campus" className="font-semibold text-gray-600 hover:text-blue-600">Campus</a></li>
          <li><a href="#news" className="font-semibold text-gray-600 hover:text-blue-600">News</a></li>
          <li><a href="#donate" className="rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700">Donate</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;