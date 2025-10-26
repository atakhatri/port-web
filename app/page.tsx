"use client";

import React, { useState } from "react";
import FadeContent from "../components/animated/fadecontent";
import Preloader from "@/components/layout/Preloader";

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
    <div className="container mx-auto">
      {showContent && (
        <FadeContent>
          <div className="flex min-h-[calc(100vh-5rem)]">
            {/* Left Section */}
            <aside className="w-1/4 border-r border-white/10 p-8">
              <div className="w-ful h-50 bg-amber-100 text-black rounded-xl"></div>
            </aside>
            {/* Right Section */}
            <main className="flex-1 p-8">
              <h1 className="text-2xl font-bold">Right Section</h1>
              <p className="mt-4 text-gray-400">
                This is the right section taking up the remaining width.
              </p>
            </main>
          </div>
        </FadeContent>
      )}
    </div>
  );
}
