"use client";

import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

// Define the type for a single portfolio item
interface Portfolio {
  id: number;
  title: string;
  author: string;
  description: string;
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
      description:
        "A collection of vibrant and whimsical illustrations inspired by classic animation. This project explores color theory and character design.",
      imgSrc: "https://placehold.co/320x400/3498db/ffffff?text=Project+1",
    },
    {
      id: 2,
      title: "Minimalist Branding",
      author: "Bauhaus Design",
      description:
        "A complete branding guide for a modern tech startup, focusing on clean lines, simple typography, and a monochromatic color palette.",
      imgSrc: "https://placehold.co/320x400/9b59b6/ffffff?text=Project+2",
    },
    {
      id: 3,
      title: "Abstract Photography",
      author: "Ansel Adams",
      description:
        "Exploring the interplay of light and shadow in urban environments. This series captures the hidden beauty of everyday architecture.",
      imgSrc: "https://placehold.co/320x400/e74c3c/ffffff?text=Project+3",
    },
    {
      id: 4,
      title: "Modern Web App",
      author: "Jane Doe Tech",
      description:
        "A full-stack web application for project management, built with React and Node.js, featuring a real-time collaborative editor.",
      imgSrc: "https://placehold.co/320x400/2ecc71/ffffff?text=Project+4",
    },
    {
      id: 5,
      title: "Architectural Renders",
      author: "Zaha Hadid",
      description:
        "Hyper-realistic 3D renders of a futuristic residential complex, showcasing advanced modeling and texturing techniques.",
      imgSrc: "https://placehold.co/320x400/f1c40f/ffffff?text=Project+5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPortfolio, setSelectedPortfolio] = useState<Portfolio | null>(
    null
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleOpenModal = (portfolio: Portfolio) => {
    setSelectedPortfolio(portfolio);
    setTimeout(() => setIsModalVisible(true), 50); // Delay to allow mounting before animation
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setTimeout(() => setSelectedPortfolio(null), 300); // Delay to allow animation before unmounting
  };

  // Effect to prevent body scroll when modal is open
  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isModalVisible]);

  // Effect for parallax scroll on images
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { top, height } = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const scrollPercent = Math.max(
          0,
          Math.min(1, (viewportHeight - top) / (viewportHeight + height))
        );
        const yOffset = (scrollPercent - 0.5) * 40; // -20px to 20px

        containerRef.current.style.setProperty("--parallax-y", `${yOffset}px`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Section Header */}
      <div className="text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-primary">
          Popular Portfolios
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          Get inspired by our community's creative showcases. Click the center
          card to see details.
        </p>
      </div>

      {/* Interactive Portfolio Deck */}
      <div
        ref={containerRef}
        className="mt-16 relative h-[300px] sm:h-[500px] flex items-center justify-center px-4 [perspective:2000px]"
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 z-10 p-2 rounded-full bg-nav-bg/50 text-white hover:bg-nav-bg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous template"
        >
          <ArrowRight className="h-6 w-6 transform rotate-180" />
        </button>

        {/* Cards Container */}
        <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] [transform-style:preserve-3d]">
          {portfolios.map((portfolio, index) => {
            const offset =
              (index - currentIndex + portfolios.length) % portfolios.length;
            const isVisible = offset < 3 || offset > portfolios.length - 3;
            let transform = "";
            let zIndex = 0;
            let opacity = 0;

            if (isVisible) {
              opacity = 1;
              if (offset === 0) {
                // Center card
                transform = "translateX(0) translateZ(0) rotateY(0)";
                zIndex = portfolios.length;
              } else if (offset === 1 || offset === 2) {
                // Right cards
                transform = `translateX(${offset * 40}%) translateZ(-${
                  offset * 100
                }px) rotateY(-35deg)`;
                zIndex = portfolios.length - offset;
              } else if (
                offset === portfolios.length - 1 ||
                offset === portfolios.length - 2
              ) {
                // Left cards
                const leftOffset = portfolios.length - offset;
                transform = `translateX(-${leftOffset * 40}%) translateZ(-${
                  leftOffset * 100
                }px) rotateY(35deg)`;
                zIndex = portfolios.length - leftOffset;
              }
            }

            return (
              <div
                onClick={() => {
                  if (offset === 0) handleOpenModal(portfolio);
                }}
                key={portfolio.id}
                className={`absolute w-full h-full transition-all duration-500 ease-in-out ${
                  offset === 0 ? "cursor-pointer" : "cursor-default"
                }`}
                style={{ transform, zIndex, opacity }}
              >
                <img
                  style={{ transform: "translateY(var(--parallax-y, 0px))" }}
                  src={portfolio.imgSrc}
                  alt={portfolio.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-gray-700/50 pointer-events-none transition-transform duration-500 ease-out"
                />
              </div>
            );
          })}
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

      {/* Portfolio Detail Modal */}
      {selectedPortfolio && (
        <div
          className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4 transition-opacity duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleCloseModal}
        >
          <div
            className={`bg-nav-bg w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300 ease-out ${
              isModalVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img
                src={selectedPortfolio.imgSrc.replace("320x400", "600x800")}
                alt={selectedPortfolio.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <div className="flex-grow overflow-y-auto">
                <h3 className="text-3xl font-bold text-white">
                  {selectedPortfolio.title}
                </h3>
                <p className="text-md text-gray-400 mt-2">
                  By {selectedPortfolio.author}
                </p>
                <p className="text-gray-300 mt-6">
                  {selectedPortfolio.description}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-6 self-start flex items-center gap-2 text-primary hover:text-white transition-colors"
              >
                <X className="h-5 w-5" /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Templates;
