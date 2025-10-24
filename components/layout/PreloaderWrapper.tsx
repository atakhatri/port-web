"use client";

import React, { useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showPreloader, setShowPreloader] = useState(true);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && (
        <Preloader onAnimationComplete={handlePreloaderComplete} />
      )}
      {!showPreloader && children}
    </>
  );
}
