"use client";

import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeContent from "../components/animated/fadecontent";
import Preloader from "@/components/layout/Preloader";
import { FaSpotify, FaGitAlt, FaStarHalfAlt } from "react-icons/fa";
import {
  Languages,
  LayoutTemplate,
  Figma,
  TrendingUpDown,
  Database,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One, highlighting its purpose and key features. Built with the latest technologies to solve a real-world problem.",
    image: "/images/project-placeholder-1.jpg", // Replace with your project image
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two, highlighting its purpose and key features. An exploration of modern UI/UX principles.",
    image: "/images/project-placeholder-2.jpg", // Replace with your project image
    tags: ["React", "GSAP", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

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
          <div className="flex flex-col md:flex-row min-h-screen pt-8 md:pt-0 md:min-h-[calc(100vh-5rem)]">
            {/* Left Section - Increased width */}
            <aside className="w-full md:w-1/3 md:border-r border-b md:border-b-0 border-white/10 p-8 flex flex-col">
              <div className="bg-white/20 px-4 py-4 rounded-xl">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <Image
                      src="/pic.jpg" // Replace with your actual image path
                      alt="Profile Picture"
                      width={72}
                      height={72}
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h2 className="text-4xl font-bold">Ata Khatri</h2>
                      <p className="text-gray-200 text-lg">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 justify-baseline">
                  <a
                    href="/contact"
                    className=" w-1/2 text-center px-4 py-2 rounded-full bg-black  hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    Contact Me
                  </a>
                  <a
                    href="/gallary"
                    className=" w-1/2 text-center px-4 py-2 rounded-full bg-amber-700  hover:bg-amber-500 hover:text-black transition-colors"
                  >
                    Gallary
                  </a>
                </div>
              </div>

              {/* Second Div for About */}
              <div className="bg-white/20 px-4 py-4 rounded-xl mt-8">
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <div className="space-y-2">
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Link
                      href="https://open.spotify.com/user/31tfokgqvhqav2sltpjlok27ezhq?si=51eaf1406bf24124"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSpotify className="text-green-600 w-8 h-8 bg-black p-0.5 rounded" />
                    </Link>
                    <span className="text-gray-300">On Repeat:</span>
                    <span className="text-white font-medium">Song Title</span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Languages className="text-blue-400 w-8 h-8 bg-blue-950 p-0.5 rounded" />
                    <span className="text-gray-300">I Speak:</span>
                    <span className="text-white font-medium">
                      English, Hindi
                    </span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Link
                      href="https://github.com/atakhatri"
                      className="flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGitAlt className="text-gray-600 w-8 h-8 bg-gray-400 p-0.5 rounded" />
                    </Link>

                    <span className="text-gray-300">Most Active:</span>
                    <span className="text-white font-medium">Github</span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <FaStarHalfAlt className="text-yellow-400 w-8 h-8 bg-amber-100 p-0.5 rounded" />
                    <span className="text-gray-300">Expertise:</span>
                    <span className="text-white font-medium">Learning</span>
                  </div>
                </div>

                {/* Timeline Div */}
                <h3 className="text-lg font-semibold mb-4 mt-4">Timeline</h3>
                <div className="bg-white/20 px-4 py-4 rounded-xl">
                  <div className="space-y-4 flex flex-col gap-4">
                    {/* Present */}
                    <div className="">
                      <h4 className="font-bold text-white">Present</h4>
                      <p className="text-gray-300 text-sm">
                        Currently working as a Frontend Developer [Freelancer],
                        focusing on building responsive web applications with
                        React and Next.js.
                      </p>
                    </div>

                    {/* 24-25 */}
                    <div>
                      <h4 className="font-bold text-white">2024 - 2025</h4>
                      <p className="text-gray-300 text-sm">
                        Learnt and Enhanced Web-development skills, Programming
                        languages like Python, C / C++.
                      </p>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="font-bold text-white">Education</h4>
                      <p className="text-gray-300 text-sm">
                        <strong>BCA</strong> - at MSU Baroda - [2024] - [2028]{" "}
                        <br />
                        <strong>Commerce</strong> - GSHSEB - [2022] - [2024]
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 mt-4">Skills</h3>
                <div className="space-y-2">
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <LayoutTemplate className="text-gray-600 w-8 h-8 bg-gray-100 p-0.5 rounded" />
                    <span className="text-gray-200">Web Development</span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Figma className="text-blue-700 w-8 h-8 bg-blue-100 p-0.5 rounded" />
                    <span className="text-gray-200">Web Design</span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <TrendingUpDown className="text-green-600 w-8 h-8 bg-green-100 p-0.5 rounded" />
                    <span className="text-gray-200">DSA</span>
                  </div>
                  <div className="flex justify-baseline gap-2 items-center bg-white/20 px-4 py-2 rounded-lg">
                    <Database className="text-red-600 w-8 h-8 bg-red-100 p-0.5 rounded" />
                    <span className="text-gray-200">SQL</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Section */}
            <main className="flex-1 p-8">
              <div className="bg-white/20 px-4 py-4 rounded-xl">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1"
                    >
                      <div className="overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-amber-500/20 text-amber-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                          >
                            Live Demo <ExternalLink size={16} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                          >
                            GitHub <ExternalLink size={16} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </main>
          </div>
        </FadeContent>
      )}
    </div>
  );
}
