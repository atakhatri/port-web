"use client";

import React, { useState } from "react";
import FadeContent from "../components/animated/fadecontent";
import Preloader from "@/components/layout/Preloader";
import VerticalImageSlider from "@/components/content/VerticalImageSlider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Use a timeout to allow the preloader to fade out before content fades in
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading) {
    return <Preloader onAnimationComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="flex items-center justify-between">
      <div
        className={`transition-opacity duration-500 ease-in-out w-full max-w-6xl mx-auto px-4 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-between">
          {/* Hero Section */}
          <section className="text-left">
            <FadeContent
              blur={true}
              duration={1000}
              easing="ease-out"
              initialOpacity={0}
            >
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                Create Your Stunning Portfolio in Minutes
              </h1>

              <p className="mt-6 text-2xl text-gray-400">
                Showcase your work with our intuitive and customizable portfolio
                builder. No coding required.
              </p>
              <div className="mt-8 flex justify-baseline">
                <a href="/signup" className="btn-primary">
                  Get Started for Free
                </a>
              </div>
            </FadeContent>
          </section>
          {/* Vertical Image Slider Section */}
          <section className="w-full h-[60vh] max-w-xs mx-auto md:max-w-none md:h-[25vw] md:max-h-[450px]">
            <VerticalImageSlider />
          </section>
        </div>
      </div>
    </div>
  );
}
