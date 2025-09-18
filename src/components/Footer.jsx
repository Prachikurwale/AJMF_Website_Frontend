import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Anish Jadhav Memorial Foundation. All Rights Reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;