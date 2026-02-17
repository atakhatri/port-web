"use client";

import React, { useState, useEffect } from "react";

interface PreloaderProps {
  onAnimationComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onAnimationComplete }) => {
  const quote = "good is not good enough".split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isVanishing, setIsVanishing] = useState(false);
  const [preloaderFadingOut, setPreloaderFadingOut] = useState(false);

  const APPEAR_DELAY = 200;
  const PAUSE_BEFORE_VANISHING = 800;
  const VANISH_DELAY = 150;
  const PRELOADER_FADE_OUT_DURATION = 500;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isVanishing) {
      if (currentWordIndex < quote.length - 1) {
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => prev + 1);
        }, APPEAR_DELAY);
      } else {
        timeout = setTimeout(() => {
          setIsVanishing(true);
        }, PAUSE_BEFORE_VANISHING);
      }
    } else {
      if (currentWordIndex >= 0) {
        timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => prev - 1);
        }, VANISH_DELAY);
      } else {
        setPreloaderFadingOut(true);
        timeout = setTimeout(() => {
          onAnimationComplete();
        }, PRELOADER_FADE_OUT_DURATION);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentWordIndex, isVanishing, quote.length, onAnimationComplete]);

  const renderedWords = quote.map((word, index) => (
    <span
      key={index}
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
