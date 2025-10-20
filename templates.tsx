"use client";

import React, { useState } from "react";

// Define the type for a single portfolio item
interface Portfolio {
  id: number;
  title: string;
  author: string;
  imgSrc: string;
}

// Define props for the ArrowRight component
interface ArrowRightProps {
  className?: string;
}

// SVG component for the arrow icon
const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Templates: React.FC = () => {
  // Dummy data for portfolios with the Portfolio type
  const portfolios: Portfolio[] = [
    {
      id: 1,
      title: "Vibrant Illustrations",
      author: "Studio Ghibli",
      imgSrc: "https://placehold.co/320x400/3498db/ffffff?text=Project+1",
    },
    {
      id: 2,
      title: "Minimalist Branding",
      author: "Bauhaus Design",
      imgSrc: "https://placehold.co/320x400/9b59b6/ffffff?text=Project+2",
    },
    {
      id: 3,
      title: "Abstract Photography",
      author: "Ansel Adams",
      imgSrc: "https://placehold.co/320x400/e74c3c/ffffff?text=Project+3",
    },
    {
      id: 4,
      title: "Modern Web App",
      author: "Jane Doe Tech",
      imgSrc: "https://placehold.co/320x400/2ecc71/ffffff?text=Project+4",
    },
    {
      id: 5,
      title: "Architectural Renders",
      author: "Zaha Hadid",
      imgSrc: "https://placehold.co/320x400/f1c40f/ffffff?text=Project+5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? portfolios.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === portfolios.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-primary min-h-screen font-sans">
      {/* Section Header */}
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-primary">
          Popular Portfolios
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Get inspired by our community's creative showcases. Hover to explore
          the collection.
        </p>
      </div>

      {/* Interactive Portfolio Deck */}
      <div className="mt-16 relative h-[300px] sm:h-[550px] flex items-center justify-center px-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-10 p-2 rounded-full bg-nav-bg/50 text-white hover:bg-nav-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous template"
        >
          <ArrowRight className="h-6 w-6 transform rotate-180" />
        </button>

        {/* Central Card */}
        <div className="w-full max-w-[500px] h-[281px] sm:max-w-[800px] sm:h-[450px] group [perspective:1000px]">
          <div className="relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front of the card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] rounded-xl shadow-2xl overflow-hidden border-2 border-gray-800 bg-nav-bg/40">
              <img
                src={portfolios[currentIndex].imgSrc}
                alt={portfolios[currentIndex].title}
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/800x450/111827/4b5563?text=Image+Error";
                }}
              />
            </div>
            {/* Back of the card */}
            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-nav-bg rounded-xl shadow-2xl border-2 border-primary flex flex-col justify-center items-center p-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {portfolios[currentIndex].title}
                </h3>
                <p className="text-md text-gray-300 mt-2">
                  By {portfolios[currentIndex].author}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 z-10 p-2 rounded-full bg-nav-bg/50 text-white hover:bg-nav-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next template"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>

      {/* Call to Action Link */}
      <div className="mt-24 flex justify-center">
        <a
          href="#"
          className="flex items-center text-orange-300 hover:text-orange-500 transition-colors duration-300 group"
        >
          <span className="text-lg font-medium">Explore more portfolios</span>
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Templates;
