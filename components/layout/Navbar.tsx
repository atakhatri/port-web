"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Menu, X } from "lucide-react";
import AnimatedContent from "../animated/animatedcontent";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-700 bg-nav-bg/95 backdrop-blur-lg">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
            <Briefcase className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl text-foreground">Portify</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex items-center gap-8 text-base font-medium">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-primary" : "text-gray-300"
              } hover:text-foreground transition-colors`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "text-primary" : "text-gray-300"
              } hover:text-foreground transition-colors`}
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

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-700">
          <nav className="flex flex-col items-center space-y-4 px-4 pt-4 pb-6">
            <Link href="/" className="text-gray-300 hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-primary">
              About
            </Link>
            <Link href="/signup" className="w-full text-center btn-primary">
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
