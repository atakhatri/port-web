'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const templates = [
  { name: 'PORTFOLIO DEMO', image: 'https://atakhatri.github.io/Portfolio-/portf/b1.jpg' },
  { name: 'TEMPLATE 2', image: 'https://atakhatri.github.io/Portfolio-/pics/template2.jpg' },
  { name: 'TEMPLATE 3', image: 'https://atakhatri.github.io/Portfolio-/pics/template3.jpg' },
  { name: 'TEMPLATE 4', image: 'https://atakhatri.github.io/Portfolio-/pics/template4.jpg' },
  { name: 'TEMPLATE 5', image: 'https://atakhatri.github.io/Portfolio-/pics/template5.jpg' },
  { name: 'TEMPLATE 6', image: 'https://atakhatri.github.io/Portfolio-/pics/template6.jpg' },
];

export default function TemplateSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change template every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
      {templates.map((template, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={template.image}
            alt={template.name}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute"
            unoptimized
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h4 className="text-white text-2xl font-bold">{template.name}</h4>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}