import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SlideSection.css';

const slides = [
  {
    id: 1,
    title: "Crypto Currency Investments",
    subtitle: "Looking for a Cryptocurrency First-Class Expert?...",
    image: "/images/HomePage images/SlideSection/cryptocurrency.jpg", // Placeholder image
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
    <div className="relative h-[300px] w-full overflow-hidden bg-gradient-to-r from-blue-100 to-orange-100 md:h-[500px] SlideSection">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
            index === currentSlide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 h-full">
            {/* Text Div*/}
            <div className="md:text-center md:text-left w-full md:relative text-div">
              <div className="absolute top-1/2 -translate-y-1/2 transform left-1/2 -translate-x-1/2 w-full text-section-div
              text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 w-full slide-heading">
                  <span className="text-orange-300 orange-slide-text">{slide.title.split(' ')[0]}</span>{' '}
                  {slide.title.split(' ').slice(1).join(' ')}
                </h1>
                <p className="mt-2 text-sm md:text-lx text-gray-600 slide-subtitle">{slide.subtitle}</p>
                <button className="cursor-pointer mt-4 px-4 pt-1 pb-2 bg-blue-500 text-white rounded-lg shadow hover:bg-orange-300 transition">
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Div */}
            <div className="w-full h-full md:h-full image-container">
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
