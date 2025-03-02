import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Polyglot from "node-polyglot";
import translations from "../../translations";
import CryptoPrices from "../CryptoPrices/CryptoPrices";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  const polyglot = new Polyglot({ phrases: translations[language] });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="bg-gray-100">
      {/* Top Section, Social Media Icons */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <div className="flex space-x-4 text-gray-600">
          {[
            { href: "https://www.facebook.com/bobby.offiong.3", icon: "fab fa-facebook" },
            { href: "https://www.instagram.com/offiongekpeedet_jr/", icon: "fab fa-instagram" },
            { href: "https://x.com/ubgocnigeria", icon: "fab fa-twitter" },
            { href: "https://www.youtube.com/@bobbyoffiong", icon: "fab fa-youtube" },
            { href: "https://www.linkedin.com/in/ekpe-offiong/", icon: "fab fa-linkedin" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="hover:text-orange-300 active:text-orange-300 focus:text-orange-300 transition"
            >
              <i className={`${social.icon} transition-all`}></i>
            </a>
          ))}
        </div>

        {/* LANGUAGE SECTION */}
        <div>
          <select
            className="border border-gray-300 rounded px-2 py-1 text-sm"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
          </select>
        </div>
      </div>

      {/* SITE LOGO */}
      <div className="flex justify-between items-center px-4 py-3 bg-blue-500 text-white">
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <img src="/images/header/logo.jpg" alt="Logo" className="w-10 h-10 rounded-md" />
            <span className="font-bold text-3xl uppercase bob">Bob</span>
            <span className="text-3xl text-orange-200 uppercase font-bold Xchange-logo">Xchange</span>
          </Link>
        </div>

        {/* Cryptocurrency Prices - Visible on large screens */}
        <div className="crypto-prices">
          <CryptoPrices />
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-6 nav-menu">
          {["home", "about", "services", "pages", "blog", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="hover:text-orange-300 active:text-orange-300 focus:text-orange-300 transition"
            >
              {polyglot.t(item)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-orange-300 active:text-orange-300 focus:text-orange-300 transition"
          >
            <i className="fas fa-bars"></i>
          </button>
          {isMobileMenuOpen && (
            <nav className="mobile-menu absolute w-full bg-blue-500/90 text-white">
              <div className="flex justify-end p-4">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white text-2xl hover:text-orange-300 active:text-orange-300 focus:text-orange-300 transition"
                >
                  &times;
                </button>
              </div>
              <ul className="flex flex-col items-center space-y-4 py-4">
                {["home", "about", "services", "pages", "blog", "contact"].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item}`}
                      className="hover:text-orange-300 active:text-orange-300 focus:text-orange-300 transition"
                    >
                      {polyglot.t(item)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
