"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClimateInstallPage() {
  return (
    <div className="relative h-150 w-full flex overflow-hidden px-2 pt-20">
      {/* Background Image */}
      {/* Content */}
      <motion.div
        className="relative z-20 text-center flex flex-col items-center max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-amber-400 mb-4"
          variants={itemVariants}
        >
          Climate
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
          variants={itemVariants}
        >
          A weather app built using React Native and Expo that provides
          real-time weather information for any location, designed with a clean
          and intuitive UI.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            href="https://expo.dev/artifacts/eas/tadU93yqfHSQENoW1u8jy4.apk"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 text-black font-bold rounded-full text-lg hover:bg-amber-400 transition-all duration-300 ease-in-out shadow-lg hover:shadow-amber-500/30 transform hover:-translate-y-1"
          >
            <Download size={24} />
            Download .apk
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
