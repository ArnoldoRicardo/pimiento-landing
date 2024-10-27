import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-red-600">PimientoSoft</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-red-600 transition-colors">Services</a>
            <a href="#projects" className="text-gray-700 hover:text-red-600 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Services</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;