import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">RideRent</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#Aboutpage" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
