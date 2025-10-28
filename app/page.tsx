"use client";
import { useRef, useEffect } from "react";
import { ExternalLink, Tags } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FadeContent from "../components/animated/fadecontent";
import Preloader from "@/components/layout/Preloader";
import {
  FaSpotify,
  FaGitAlt,
  FaStarHalfAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiCplusplus,
} from "react-icons/si";
import {
  Languages,
  LayoutTemplate,
  Figma,
  Code,
  TrendingUpDown,
  Database,
} from "lucide-react";
import Link from "next/link";
import SkillsSection from "../components/SkillsSection"; // Import the new component

const projects = [
  {
    title: "MRK TechSolutions",
    description:
      "Website for a passionate team of innovators, problem-solvers, and technology enthusiasts dedicated to empowering businesses through digital transformation. Built with the latest technologies to solve a real-world problem.",
    image: "/projects/p1.png", // Replace with your project image
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://mubin-s-project.vercel.app/",
    githubUrl: "https://github.com/atakhatri/mubin-s-project.git",
  },
  {
    title: "UNO Game",
    description:
      "Made for Entertainment purposes, a nice way to pass your boredome. Created with Original UNO game logic, where you can play it with your friends as well. it is made with latest tech and framework of next.js, and firebase.",
    image: "/projects/p2/p2.png", // Replace with your project image
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://uno-ebon.vercel.app/",
    githubUrl: "https://github.com/atakhatri/UNO.git",
  },
  {
    title: "Weather App",
    description: "",
    image: "/p3.png", // Replace with your project image
    tags: ["Next.js", "React", "Tailwind CSS"],
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

  const leftSectionRef = useRef<HTMLDivElement>(null);
  const rightSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const leftSection = leftSectionRef.current;
      const rightSection = rightSectionRef.current;

      if (!leftSection || !rightSection) return;

      const leftScrollTop = leftSection.scrollTop;
      const rightScrollTop = rightSection.scrollTop;

      const leftScrollHeight =
        leftSection.scrollHeight - leftSection.clientHeight;
      const rightScrollHeight =
        rightSection.scrollHeight - rightSection.clientHeight;

      // Check if both sections are at their scrollable bottom
      const canScrollMain =
        leftScrollTop >= leftScrollHeight &&
        rightScrollTop >= rightScrollHeight;

      document.body.style.overflowY = canScrollMain ? "auto" : "hidden";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Use a timeout to allow the preloader to fade out before content fades in
    setTimeout(() => setShowContent(true), 100);
  };

  if (isLoading)
    return <Preloader onAnimationComplete={handlePreloaderComplete} />;

  return (
    <div className="container mx-auto">
      {showContent && (
        <FadeContent>
          {/* Main Flex Container */}
          <div className="flex flex-col md:flex-row pt-8 md:pt-0">
            {/* Left Section - The aside wrapper (sets the 1/3 width) */}
            <aside className="w-full md:w-1/3 md:border-r border-b md:border-b-0 border-white/10 p-8">
              {/* === THE STICKY ELEMENT === */}
              {/* 'sticky top-4' pins the entire sidebar content.
                  'flex flex-col gap-8' ensures spacing between the sections. */}
              <div className="sticky top-4 flex flex-col gap-8">
                {/* 1. Profile/Contact Block */}
                <div className="bg-white/20 px-4 py-4 rounded-xl">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <Image
                        src="/pic.jpg"
                        alt="Profile Picture"
                        width={72}
                        height={72}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div>
                        <h2 className="text-4xl text-amber-400 font-bold">
                          Ata Khatri
                        </h2>
                        <p className="text-amber-200 text-lg">
                          Frontend Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-baseline">
                    <a
                      href="/contact"
                      className=" w-1/2 text-center px-4 py-2 rounded-full bg-black hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      Contact Me
                    </a>
                    <a
                      href="/gallary"
                      className=" w-1/2 text-center px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-500 hover:text-black transition-colors"
                    >
                      Gallary
                    </a>
                  </div>
                </div>

                {/* 2. About Block (Now inside the sticky wrapper) */}
                <div className="bg-white/20 px-4 py-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">About</h3>
                  <div className="space-y-2">
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <Link
                        href="https://open.spotify.com/playlist/4YEH7T9M0NHuoLuBpViomw?si=873c8f5ae4fc4f30"
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaSpotify className="text-green-600 w-8 h-8 bg-black p-0.5 rounded" />
                        <span className="text-amber-500">On Repeat:</span>
                        <span className="text-white font-medium">GO TO...</span>
                      </Link>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <Languages className="text-blue-400 w-8 h-8 bg-blue-950 p-0.5 rounded" />
                      <span className="text-amber-500">I Speak:</span>
                      <span className="text-white font-medium">
                        English, Hindi, Gujarati
                      </span>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <Link
                        href="https://github.com/atakhatri"
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGitAlt className="text-gray-600 w-8 h-8 bg-gray-400 p-0.5 rounded" />
                        <span className="text-amber-500">Most Active:</span>
                        <span className="text-white font-medium">Github</span>
                      </Link>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <FaStarHalfAlt className="text-yellow-400 w-8 h-8 bg-amber-100 p-0.5 rounded" />
                      <span className="text-amber-500">Expertise:</span>
                      <span className="text-white font-medium">Learning</span>
                    </div>
                  </div>
                </div>

                {/* 3. Timeline Block (Now inside the sticky wrapper) */}
                <div className="bg-white/20 px-4 py-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Timeline</h3>
                  <div className="bg-white/10 px-4 py-4 rounded-xl">
                    <div className="space-y-4 flex flex-col gap-4">
                      {/* Present */}
                      <div className="">
                        <h4 className="font-bold text-white">Present</h4>
                        <p className="text-gray-300 text-sm">
                          Currently working as a Frontend Developer
                          [Freelancer], focusing on building responsive web
                          applications with React and Next.js.
                        </p>
                      </div>
                      {/* 24-25 */}
                      <div>
                        <h4 className="font-bold text-white">2024 - 2025</h4>
                        <p className="text-gray-300 text-sm">
                          Learnt and Enhanced Web-development skills,
                          Programming languages like Python, C / C++.
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
                </div>

                {/* 4. Skills Block (Now inside the sticky wrapper) */}
                <div className="bg-white/20 px-4 py-4 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Skills</h3>
                  <div className="space-y-2">
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <LayoutTemplate className="text-gray-600 w-8 h-8 bg-gray-100 p-0.5 rounded" />
                      <span className="text-gray-200">Web Development</span>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <Figma className="text-blue-700 w-8 h-8 bg-blue-100 p-0.5 rounded" />
                      <span className="text-gray-200">Web Design</span>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <TrendingUpDown className="text-green-600 w-8 h-8 bg-green-100 p-0.5 rounded" />
                      <span className="text-gray-200">DSA</span>
                    </div>
                    <div className="flex justify-baseline gap-2 items-center bg-white/10 px-4 py-2 rounded-lg">
                      <Database className="text-red-600 w-8 h-8 bg-red-100 p-0.5 rounded" />
                      <span className="text-gray-200">SQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Section - The main scrollable content */}
            <main
              className="flex-1 p-8 flex flex-col"
              // 💡 REMOVED: ref={rightSectionRef} and overflow-y-scroll
            >
              <SkillsSection />
              <div className="bg-white/20 px-4 py-4 rounded-xl">
                <h1 className="text-3xl font-bold mb-5">Projects</h1>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
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
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
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
