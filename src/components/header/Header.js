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
          <a href="https://www.facebook.com/bobby.offiong.3" className="hover:text-orange-300">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/offiongekpeedet_jr/" className="hover:text-orange-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://x.com/ubgocnigeria" className="hover:text-orange-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/@bobbyoffiong" className="hover:text-orange-300">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/ekpe-offiong/" className="hover:text-orange-300">
            <i className="fab fa-linkedin"></i>
          </a>
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

      {/* STIE LOGO */}
      <div className="flex justify-between items-center px-4 py-3 bg-blue-500 text-white">
        <div>
          <Link to="/" className="flex items-center space-x-1">
            <img src="/images/header/logo.jpg" alt="Logo" className="w-10 h-10 rounded-md" />
            <span className="font-bold text-3xl uppercase bob">Bob</span>
            <span className="text-3xl text-orange-200 uppercase font-bold Xchange">Xchange</span>
          </Link>
        </div>

        {/* Cryptocurrency Prices - Visible on large screens */}
        <div className="crypto-prices">
          <CryptoPrices />
        </div>

        {/* Navigation Menu */}
        <nav className="space-x-6 lg:block">
          <Link to="/" className="hover:text-orange-200">{polyglot.t("home")}</Link>
          <Link to="/about" className="hover:text-orange-200">{polyglot.t("about")}</Link>
          <Link to="/services" className="hover:text-orange-200">{polyglot.t("services")}</Link>
          <Link to="/pages" className="hover:text-orange-200">{polyglot.t("pages")}</Link>
          <Link to="/blog" className="hover:text-orange-200">{polyglot.t("blog")}</Link>
          <Link to="/contact" className="hover:text-orange-200">{polyglot.t("contact")}</Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
            <i className="fas fa-bars"></i>
          </button>
          {isMobileMenuOpen && (
            <nav className="mobile-menu absolute w-full bg-blue-500/90 text-white">
              <div className="flex justify-end p-4">
                <button onClick={toggleMobileMenu} className="text-white text-2xl">&times;</button>
              </div>
              <ul className="flex flex-col items-center space-y-4 py-4">
                <li><Link to="/" className="hover:text-orange-300">{polyglot.t("home")}</Link></li>
                <li><Link to="/about" className="hover:text-orange-300">{polyglot.t("about")}</Link></li>
                <li><Link to="/services" className="hover:text-orange-300">{polyglot.t("services")}</Link></li>
                <li><Link to="/pages" className="hover:text-orange-300">{polyglot.t("pages")}</Link></li>
                <li><Link to="/blog" className="hover:text-orange-300">{polyglot.t("blog")}</Link></li>
                <li><Link to="/contact" className="hover:text-orange-300">{polyglot.t("contact")}</Link></li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
