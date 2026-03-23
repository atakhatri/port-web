"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollableHeight = doc.scrollHeight - doc.clientHeight;

      if (scrollableHeight <= 0) {
        setProgress(0);
        setIsScrollable(false);
        return;
      }

      const nextProgress = Math.min(
        100,
        Math.max(0, (scrollTop / scrollableHeight) * 100),
      );

      setProgress(nextProgress);
      setIsScrollable(true);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return (
    <div className="overflow-hidden pointer-events-none fixed left-0 top-0 z-[80] h-1 w-full">
      <div
        className="h-full origin-left bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 shadow-[0_0_10px_rgba(255,183,3,0.55)] transition-[transform,opacity] duration-150 ease-out"
        style={{
          transform: `scaleX(${progress / 100})`,
          opacity: isScrollable ? 1 : 0,
        }}
      />
    </div>
  );
}
