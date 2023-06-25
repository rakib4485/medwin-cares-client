import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link
              to="/"
              className="text-white hover:text-gray-300 mx-3 sm:mx-6 transition duration-150 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 mx-3 sm:mx-6 transition duration-150 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 mx-3 sm:mx-6 transition duration-150 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 mx-3 sm:mx-6 transition duration-150 ease-in-out"
            >
              Contact
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Medwin Cares. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
