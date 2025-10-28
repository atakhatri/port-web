"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Github, Linkedin, Twitter, Instagram } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const contactOptions = [
  {
    name: "Email",
    icon: <Mail />,
    href: "mailto:atakhatri905@gmail.com",
    handle: "atakhatri905@gmail.com",
  },
  {
    name: "GitHub",
    icon: <Github />,
    href: "https://github.com/atakhatri",
    handle: "@atakhatri",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/ata-khatri/",
    handle: "Ata Khatri",
  },
  {
    name: "X",
    icon: <Twitter />,
    href: "https://x.com/KhatriAta",
    handle: "@KhatriAta",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    href: "https://www.instagram.com/ata_here",
    handle: "@Ata",
  },
];

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-[2147483647]"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          />

          {/* Modal Content */}
          <motion.div
            className="bg-gray-900/80 border border-white/10 rounded-2xl p-8 w-full max-w-md relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close contact modal"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-amber-400 mb-6">
              Get in touch
            </h2>
            <div className="space-y-4">
              {contactOptions.slice(0, -2).map((option) => (
                <a
                  key={option.name}
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="text-amber-400">{option.icon}</div>
                  <div>
                    <p className="font-semibold">{option.name}</p>
                    <p className="text-sm text-gray-300 truncate">
                      {option.handle}
                    </p>
                  </div>
                </a>
              ))}
              <div className="flex gap-4">
                {contactOptions.slice(-2).map((option) => (
                  <a
                    key={option.name}
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-center"
                  >
                    <div className="text-amber-400">{option.icon}</div>
                    <p className="font-semibold text-sm">{option.name}</p>
                    <p className="text-xs text-gray-400">{option.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
