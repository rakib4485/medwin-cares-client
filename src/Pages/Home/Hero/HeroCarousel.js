import React from 'react';
import { useState } from 'react';

const HeroCarousel = ({slides}) => {
    const [activeSlide, setActiveSlide] = useState(0);

    const goToNextSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };
  
    const goToPrevSlide = () => {
      setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };
    return (
        <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-500 ${
            index === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 p-4 bg-gray-800 bg-opacity-50 text-white">
            <h2 className="text-xl font-bold">{slide.title}</h2>
            <p className="mt-2">{slide.description}</p>
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
    );
};

export default HeroCarousel;