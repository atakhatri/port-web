"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  LoaderPinwheel,
  LayoutGrid,
  Flower2,
  MessageCircle,
} from "lucide-react";
import ContactModal from "../ContactModal";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactModalOpen, setContactModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleOutsideHeaderClick = (event: MouseEvent | TouchEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleOutsideHeaderClick);
    document.addEventListener("touchstart", handleOutsideHeaderClick, {
      passive: true,
    });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleOutsideHeaderClick);
      document.removeEventListener("touchstart", handleOutsideHeaderClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100 &&
        !isMenuOpen
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[50] transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`absolute inset-0 w-full h-10 backdrop-blur-md transition-colors duration-300 ${
            scrolled ? "bg-black/30" : ""
          }`}
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 25%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 25%, transparent 100%)",
          }}
        />
        <div className="relative container mx-auto flex h-15 items-center justify-between px-4 sm:px-6 lg:px-4 mt-4">
          <div className="hidden md:flex flex-1 gap-2">
            {/* <Link href="/" className="flex items-center gap-2 pr-8">
              <LoaderPinwheel className="h-12 w-12 text-primary transition-all duration-300 ease-in-out hover:rotate-180 hover:text-amber-500" />
            </Link> */}
            <nav className="flex items-center gap-1 px-0 py-2 text-base font-medium">
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
                href="/gallery"
                className={`${
                  pathname === "/gallery"
                    ? "rounded-full border border-white/10 bg-amber-500 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md text-black"
                    : "rounded-full border border-white/10 bg-black/20 px-4 py-2 text-base font-medium shadow-lg backdrop-blur-md"
                } flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-300 ease-in-out hover:bg-amber-300 hover:text-black`}
              >
                <Flower2 className="h-5 w-5" />
                Gallery
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex flex-1 justify-end">
            <button
              onClick={() => setContactModalOpen(true)}
              className=" rounded-full px-3 py-2 transition-all duration-300 ease-in-out text-base font-medium bg-gray-300/20 text-white hover:bg-amber-300 hover:text-black"
            >
              Get in touch
            </button>
          </div>

          <div className="md:hidden ">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-[70] p-2 rounded-md text-gray-300 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-12 w-12 rounded-xl border border-white/10 bg-black/40 p-1 text-white shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out" />
              ) : (
                <Menu
                  className={` h-12 w-12 text-white font-extrabold transition-all duration-300 ease-in-out ${
                    scrolled
                      ? "rounded-xl border border-white/10 bg-black/30 p-1 text-white font-medium shadow-lg backdrop-blur-md"
                      : "text-white/80"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[60] "
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ type: "spring", stiffness: 340, damping: 32 }}
                onClick={(event) => event.stopPropagation()}
                className="absolute left-4 top-20 rounded-2xl border border-white/15 bg-zinc-950/80 backdrop:backdrop-blur-3xl p-3 shadow-2xl"
              >
                <div className="flex flex-col gap-3">
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/"
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`${
                        pathname === "/"
                          ? "border-amber-300/30 bg-amber-500 text-black"
                          : "border-white/20 bg-gray-300/20 text-white"
                      } inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-amber-300 group-hover:text-black`}
                    >
                      <LayoutGrid className="h-5 w-5" />
                    </span>
                    <span
                      className={`${
                        pathname === "/"
                          ? "border-amber-300/30 bg-amber-500 text-black"
                          : "border-white/20 bg-gray-300/20 text-white"
                      } inline-flex h-11 min-w-[8.75rem] items-center rounded-full border px-4 text-sm font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:bg-amber-300 group-hover:text-black`}
                    >
                      Dashboard
                    </span>
                  </Link>
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href="/gallery"
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`${
                        pathname === "/gallery"
                          ? "border-amber-300/30 bg-amber-500 text-black"
                          : "border-white/20 bg-gray-300/20 text-white"
                      } inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-amber-300 group-hover:text-black`}
                    >
                      <Flower2 className="h-5 w-5" />
                    </span>
                    <span
                      className={`${
                        pathname === "/gallery"
                          ? "border-amber-300/30 bg-amber-500 text-black"
                          : "border-white/20 bg-gray-300/20 text-white"
                      } inline-flex h-11 min-w-[8.75rem] items-center rounded-full border px-4 text-sm font-medium shadow-lg transition-all duration-300 ease-in-out group-hover:bg-amber-300 group-hover:text-black`}
                    >
                      Gallery
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      setContactModalOpen(true);
                    }}
                    className="group flex items-center gap-2"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-gray-300/20 text-white shadow-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:bg-amber-300 group-hover:text-black">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span className="inline-flex h-11 min-w-[8.75rem] items-center rounded-full border border-white/20 bg-gray-300/20 px-4 text-sm font-medium text-white shadow-lg transition-all duration-300 ease-in-out group-hover:bg-amber-300 group-hover:text-black">
                      Get in touch
                    </span>
                  </button>
                </div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
