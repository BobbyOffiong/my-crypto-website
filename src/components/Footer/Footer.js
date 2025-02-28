/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap sm:flex-nowrap justify-between items-start gap-8 footer-text-center">
        {/* Logo and Description */}
        <div className="max-w-md w-full">
        <span className="font-bold text-3xl uppercase text-white">Bob</span>
        <span className="text-3xl text-orange-300 uppercase font-bold Xchange">Xchange</span>
          <p className="mt-2 text-sm">
            Investments and employment Blockchain Technologies. Optimize your business blockchain technology and Smart Contracts.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center sm:justify-start gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-orange-300"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-dribbble"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-behance"></i></a>
            <a href="#" className="hover:text-orange-300"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Links Sections */}
        <div className="flex flex-wrap gap-8 justify-center w-full">
          <div>
            <h3 className="font-bold text-lg">ABOUT US</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-orange-300">Our Coin</a></li>
              <li><a href="#" className="hover:text-orange-300">About</a></li>
              <li><a href="#" className="hover:text-orange-300">Our Team</a></li>
              <li><a href="#" className="hover:text-orange-300">Our Projects</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">RESOURCES</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-orange-300">How to Buy Coin</a></li>
              <li><a href="#" className="hover:text-orange-300">Coin Overview</a></li>
              <li><a href="#" className="hover:text-orange-300">Blog News</a></li>
              <li><a href="#" className="hover:text-orange-300">How to Sell Coin</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">SUPPORT</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" className="hover:text-orange-300">How to Buy Coin</a></li>
              <li><a href="#" className="hover:text-orange-300">Coin Overview</a></li>
              <li><a href="#" className="hover:text-orange-300">Blog News</a></li>
              <li><a href="#" className="hover:text-orange-300">How to Sell Coin</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t pt-4">
        Copyright &copy; 2025 Engr. Bobby, All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
