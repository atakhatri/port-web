"use client";

import React, { useState, useEffect } from "react";

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  const quote = "good is not good enough".split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(-1); // -1 means no words displayed yet
  const [isVanishing, setIsVanishing] = useState(false);
  const [preloaderFadingOut, setPreloaderFadingOut] = useState(false);

  // Animation timings (can be adjusted for faster/smoother)
  const APPEAR_DELAY = 200; // Time to display each word
  const PAUSE_BEFORE_VANISHING = 800; // Pause after all words appear
  const VANISH_DELAY = 150; // Time to vanish each word
  const PRELOADER_FADE_OUT_DURATION = 500; // Duration for the entire preloader to fade out

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isVanishing) {
      // Appearing phase
      if (currentWordIndex < quote.length - 1) {
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
        }, APPEAR_DELAY);
      } else {
        // All words displayed, wait a bit then start vanishing
        timeout = setTimeout(() => {
          setIsVanishing(true);
        }, PAUSE_BEFORE_VANISHING);
      }
    } else {
      // Vanishing phase
      if (currentWordIndex >= 0) {
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => prev - 1);
        }, VANISH_DELAY);
      } else {
        // All words vanished, start preloader fade out
        setPreloaderFadingOut(true);
        timeout = setTimeout(() => {
          onAnimationComplete();
        }, PRELOADER_FADE_OUT_DURATION);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, isVanishing, quote.length, onAnimationComplete]);

  // Render all words, but control their visibility/opacity
  const renderedWords = quote.map((word, index) => (
    <span
      key={index}
      // Apply transition for opacity, and control opacity based on animation phase
      className={` flex flex-col transition-opacity duration-120 ease-in-out ${
        (isVanishing && index > currentWordIndex) ||
        (!isVanishing && index > currentWordIndex)
          ? "opacity-0"
          : "opacity-100"
      } ${index > 0 ? "mb-2" : ""} ${index == 0 ? "text-amber-500" : ""}`}
    >
      {word}
    </span>
  ));

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-100 transition-opacity ease-out ${
        preloaderFadingOut ? "opacity-0 duration-500" : "opacity-100"
      }`}
    >
      <h2 className="text-white text-4xl font-bold text-center">
        {renderedWords}
      </h2>
    </div>
  );
};

export default Preloader;
