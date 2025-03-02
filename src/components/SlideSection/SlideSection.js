import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SlideSection.css";

const slides = [
  {
    id: 1,
    title: "Crypto Currency Investments",
    subtitle: "Looking for a Cryptocurrency First-Class Expert?...",
    image: "/images/HomePage images/SlideSection/cryptocurrency.jpg",
  },
  {
    id: 2,
    title: "Secure Your Future",
    subtitle: "Invest wisely with our proven strategies...",
    image: "/images/HomePage images/SlideSection/secure.jpg",
  },
  {
    id: 3,
    title: "Expert Guidance",
    subtitle: "Get advice from leading experts in the field...",
    image: "/images/HomePage images/SlideSection/expert.jpg",
  },
  {
    id: 4,
    title: "Start Today",
    subtitle: "Take the first step toward financial freedom...",
    image: "/images/HomePage images/SlideSection/start.jpg",
  },
];

export default function SlideSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-gradient-to-r from-blue-100 to-orange-100 md:h-[500px] SlideSection">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          {/* Mobile & Tablet (md and below): Text Over Image */}
          <div className="md:hidden relative w-full h-full">
            {/* Image */}
            <img 
              src={slide.image} 
              alt="Slide Visual" 
              className="h-full w-full object-cover object-center brightness-75" 
            />

            {/* Overlay & Text */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-4xl font-bold">{slide.title}</h1>
              <p className="mt-2 text-sm">{slide.subtitle}</p>
              <button
                onClick={() => setIsClicked(!isClicked)}
                className={`cursor-pointer mt-4 px-4 py-2 rounded-lg shadow transition ${
                  isClicked ? "bg-orange-300" : "bg-blue-500"
                }`}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Desktop (md and above): Text Left, Image Right */}
          <div className="hidden md:grid md:grid-cols-2 h-full">
            {/* Text Section */}
            <div className="flex flex-col items-start justify-center px-12">
              <h1 className="text-6xl font-bold text-gray-800">
                <span className="text-orange-300">{slide.title.split(" ")[0]}</span>{" "}
                {slide.title.split(" ").slice(1).join(" ")}
              </h1>
              <p className="mt-2 text-lg text-gray-600">{slide.subtitle}</p>
              <button
                onClick={() => setIsClicked(!isClicked)}
                className={`cursor-pointer mt-4 px-4 py-2 text-white rounded-lg shadow hover:bg-orange-300 transition ${
                  isClicked ? "bg-orange-300" : "bg-blue-500"
                }`}
              >
                Learn More
              </button>
            </div>

            {/* Image Section */}
            <div className="w-full h-full relative">
              <img
                src={slide.image}
                alt="Slide Visual"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        className="cursor-pointer arrow-btn absolute left-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-orange-300 sm:hidden md:block"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        className="cursor-pointer arrow-btn absolute right-6 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-orange-300 sm:hidden md:block"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}
