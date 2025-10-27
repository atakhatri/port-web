"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, LoaderPinwheel, LayoutGrid, Flower2 } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // New state to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`absolute inset-0 w-full h-full bg-transparent backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-black/80" : ""
        }`}
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 25%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 25%, transparent 100%)",
        }}
      />
      <div className="relative container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 mt-4">
        <div className="hidden md:flex flex-1 gap-2">
          <Link href="/" className="flex items-center gap-2 pr-8">
            <LoaderPinwheel className="h-12 w-12 text-primary transition-all duration-300 ease-in-out hover:rotate-180 hover:text-amber-500" />
          </Link>
          <nav className="flex items-center gap-1  px-4 py-2 text-base font-medium">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "rounded-full border border-white/10 bg-amber-500 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md text-black"
                  : "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md"
              } flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-amber-300 hover:text-black`}
            >
              <LayoutGrid className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/gallary"
              className={`${
                pathname === "/gallary"
                  ? "rounded-full border border-white/10 bg-amber-500 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md text-black"
                  : "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md"
              } flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-amber-300 hover:text-black`}
            >
              <Flower2 className="h-5 w-5" />
              Gallary
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <Link
            href="/signup"
            className=" rounded-full px-3 py-2 transition-all duration-300 ease-in-out text-base font-medium bg-gray-300/20 text-white hover:bg-amber-300 hover:text-black"
          >
            Get in touch
          </Link>
        </div>

        <div className="md:hidden ">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 hidden" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-background/80 backdrop-blur-lg shadow-lg"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 px-4 pt-4 pb-6 text-center">
              <Link
                href="/"
                className={`${
                  pathname === "/"
                    ? "rounded-full border border-white/10 bg-amber-500 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md text-black"
                    : "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md"
                } w-1/2 flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-amber-300 hover:text-black`}
              >
                <LayoutGrid className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/gallary"
                className={`${
                  pathname === "/gallary"
                    ? "rounded-full border border-white/10 bg-amber-500 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md text-black"
                    : "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md"
                } w-1/2 flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-amber-300 hover:text-black`}
              >
                <Flower2 className="h-5 w-5" />
                Gallary
              </Link>
              <Link
                href="/signup"
                className="w-full text-center btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get in touch
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
