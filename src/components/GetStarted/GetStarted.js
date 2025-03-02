/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="relative bg-white pt-5 pb-10 px-4 md:px-12 lg:px-24 get-started-section">
      <div className="absolute inset-0">
        <img
          src="/images/HomePage images/GetStartedSection/dotted-world-map.jpg"
          alt="Dotted World Map"
          className="w-full h-full object-cover opacity-3"
        />
      </div>

      <div className="relative text-center mb-12 get-started-title">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get <span className="text-orange-300">Started</span>
        </h2>
        <p className="mt-4 text-gray-600 sm:text-lg">
        🚀 Start your crypto journey with expert guidance and strategic growth.  
  💰 Invest smartly today and turn opportunities into lasting wealth! 🔥  
        </p>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/btacc.png"
              alt="Better than a Credit Card"
              className="h-30 w-30 mb-4 group-hover:scale-110 
              transition-transform rounded-lg"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Better than a Credit Card
            </h3>
          </a>
        </div>

        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/verified.png"
              alt="Safe & Secure"
              className="h-25 w-25 mb-4 group-hover:scale-110 
               transition-transform"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Safe & Secure
            </h3>
          </a>
        </div>

        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/mobile-app.png"
              alt="Mobile App"
              className="h-25 w-25 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Mobile App
            </h3>
          </a>
        </div>

        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/cashless-t.png"
              alt="Better than Cash"
              className="h-25 w-25 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Better than Cash
            </h3>
          </a>
        </div>

        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/ie.png"
              alt="Instant Exchange"
              className="h-25 w-25 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Instant Exchange
            </h3>
          </a>
        </div>

        <div className="text-center">
          <a href="#" className="flex flex-col items-center group">
            <img
              src="/images/HomePage images/GetStartedSection/settlement.png"
              alt="Faster Settlement"
              className="h-25 w-25 mb-4 group-hover:scale-110 transition-transform"
            />
            <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-300">
              Faster Settlement
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
