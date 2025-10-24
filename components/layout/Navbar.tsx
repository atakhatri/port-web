"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full overflow-hidden">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-3xl text-foreground">PORTIFY</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-4 text-base font-medium bg-black/20 backdrop-blur-md rounded-full px-4 py-2 shadow-lg border border-white/10">
            <Link
              href="/"
              className={`${
                pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              } rounded-full px-4 py-1.5 transition-all duration-300 ease-in-out`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about"
                  ? "bg-primary text-primary-foreground"
                  : "text-gray-300 hover:bg-white/10 hover:text-white"
              } rounded-full px-4 py-1.5 transition-all duration-300 ease-in-out`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex flex-1 justify-end">
          <Link href="/signup" className="btn-primary">
            Get Started
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
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
            <nav className="flex flex-col items-center space-y-6 px-4 pt-4 pb-6">
              <Link
                href="/"
                className="text-lg text-gray-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg text-gray-300 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/signup"
                className="w-full text-center btn-primary mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
