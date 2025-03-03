import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} RideRent. All rights reserved.</p>
        <div className="mt-4">
          <a href="#home" className="hover:text-white mx-2">Home</a>
          <a href="#services" className="hover:text-white mx-2">Services</a>
          <a href="#about" className="hover:text-white mx-2">About</a>
          <a href="#contact" className="hover:text-white mx-2">Contact</a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
