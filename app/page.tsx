"use client";
import { useRef, useEffect } from "react";
import { ExternalLink, Tags } from "lucide-react";
import React, { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FadeContent from "../components/animated/fadecontent";
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
import SkillsSection from "../components/SkillsSection";
import ContactModal from "@/components/ContactModal";

const projects = [
  {
    title: "MRK TechSolutions",
    description:
      "Website for a passionate team of innovators, problem-solvers, and technology enthusiasts dedicated to empowering businesses through digital transformation. Built with the latest technologies to solve a real-world problem.",
    image: "/projects/p1/p1.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://mubin-s-project.vercel.app/",
    githubUrl: "https://github.com/atakhatri/mubin-s-project.git",
  },
  {
    title: "UNO Game",
    description:
      "Made for Entertainment purposes, a nice way to pass your boredome. Created with Original UNO game logic, where you can play it with your friends as well. it is made with latest tech and framework of next.js, and firebase.",
    image: "/projects/p2/p2.png",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://uno-ebon.vercel.app/",
    githubUrl: "https://github.com/atakhatri/UNO.git",
  },
  {
    title: "climate",
    description:
      "A weather app built using React Native and Expo that provides real-time weather information for any location. It features a clean and intuitive UI designed with Tailwind CSS, and fetches data from a reliable weather API to display current conditions, forecasts, and more.",
    image: "/projects/p3/p3.png",
    tags: ["React Native", "Expo", "Tailwind CSS", "Weather API"],
    liveUrl: "/install/climate",
    githubUrl: "https://github.com/atakhatri/climate.git",
  },
  {
    title: "Virat Kohli Fan Page",
    description:
      "A fan page dedicated to Virat Kohli, showcasing his achievements, statistics, and memorable moments in cricket. Built with Next.js and styled with Tailwind CSS, the page features a responsive design and interactive elements to engage fans.",
    image: "/projects/p4/p4.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://vk18-sigma.vercel.app/",
    githubUrl: "https://github.com/atakhatri/vk18.git",
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
  const [isContactModalOpen, setContactModalOpen] = useState(false);

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

      const canScrollMain =
        leftScrollTop >= leftScrollHeight &&
        rightScrollTop >= rightScrollHeight;

      document.body.style.overflowY = canScrollMain ? "auto" : "hidden";
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <FadeContent>
          {/* Main Flex Container */}
          <div className="flex flex-col md:flex-row md:pt-0">
            {/* Left Section - The aside wrapper */}
            <aside className="w-full md:w-1/3 md:border-r border-b md:border-b-0 border-white/10 p-2 md:p-4">
              <div className="sticky top-4 flex flex-col gap-4 md:gap-8">
                {/* 1. Profile/Contact Block */}
                <FadeContent>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Image
                          src="/pic.jpg"
                          alt="Profile Picture"
                          width={72}
                          height={72}
                          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                        />
                        <div>
                          <h2 className="text-3xl md:text-4xl text-amber-400 font-bold">
                            Ata Khatri
                          </h2>
                          <p className="text-md md:text-lg text-amber-200 mt-1">
                            Full Stack Developer
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4 justify-baseline">
                      <button
                        onClick={() => setContactModalOpen(true)}
                        className=" w-1/2 text-center px-4 py-2 rounded-full bg-black hover:bg-amber-500 hover:text-black transition-colors"
                      >
                        Contact Me
                      </button>
                      <a
                        href="/gallery"
                        className=" w-1/2 text-center px-4 py-2 rounded-full bg-amber-700 hover:bg-amber-500 hover:text-black transition-colors"
                      >
                        Gallery
                      </a>
                    </div>
                  </div>
                </FadeContent>

                {/* 2. About  */}
                <FadeContent>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2 pl-1">About</h3>
                    <div className="space-y-2">
                      <div className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                        <Link
                          href="https://open.spotify.com/playlist/4YEH7T9M0NHuoLuBpViomw?si=873c8f5ae4fc4f30"
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaSpotify className="text-green-600 w-8 h-8 bg-black p-0.5 rounded-full" />
                          <span className="text-amber-500">On Repeat:</span>
                          <span className="text-white font-medium">
                            GO TO...
                          </span>
                        </Link>
                      </div>
                      <div className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                        <Languages className="text-blue-400 w-8 h-8 bg-blue-950 p-0.5 rounded-full" />
                        <span className="text-amber-500">I Speak:</span>
                        <span className="text-white font-medium">
                          English, Hindi, Gujarati
                        </span>
                      </div>
                      <div className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                        <Link
                          href="https://github.com/atakhatri"
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGitAlt className="text-gray-600 w-8 h-8 bg-gray-400 p-0.5 rounded-full" />
                          <span className="text-amber-500">Most Active:</span>
                          <span className="text-white font-medium">Github</span>
                        </Link>
                      </div>
                      <div className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                        <FaStarHalfAlt className="text-yellow-400 w-8 h-8 bg-amber-100 p-0.5 rounded-full" />
                        <span className="text-amber-500">Expertise:</span>
                        <span className="text-white font-medium">Learning</span>
                      </div>
                    </div>
                  </div>
                </FadeContent>

                {/* 3. Timeline */}
                <FadeContent>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2 pl-1">
                      Timeline
                    </h3>
                    <div className="bg-white/10 p-2 rounded-xl">
                      <div className="space-y-4 flex flex-col">
                        {/* Present */}
                        <div className="">
                          <h4 className="font-bold text-white">Present</h4>
                          <p className="text-gray-300 text-sm">
                            Currently working as a Web / App Developer
                            [Freelancer], focusing on building responsive web /
                            Mobile applications using latest technologies.
                          </p>
                        </div>
                        {/* 24-25 */}
                        <div>
                          <h4 className="font-bold text-white">2024 - 2025</h4>
                          <p className="text-gray-300 text-sm">
                            Learnt and Enhanced Web / App - development skills,
                            Programming languages like Python, C / C++.
                          </p>
                        </div>
                        {/* Education */}
                        <div>
                          <h4 className="font-bold text-white">Education</h4>
                          <p className="text-gray-300 text-sm">
                            <strong>BCA</strong> - at MSU Baroda - [2024] -
                            [2028] <br />
                            <strong>Commerce</strong> - GSHSEB - [2022] - [2024]
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeContent>

                {/* 4. Skills */}
                <div className="bg-white/20 p-2 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4 pl-1">Skills</h3>
                  <div className="space-y-2">
                    <div className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                      <span className="text-gray-200">
                        Website / App Development
                      </span>
                      <LayoutTemplate className="text-gray-600 w-8 h-8 bg-gray-100 p-0.5 rounded" />
                    </div>
                    <div className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                      <span className="text-gray-200">Web / App Design</span>
                      <Figma className="text-blue-700 w-8 h-8 bg-blue-100 p-0.5 rounded" />
                    </div>
                    <div className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                      <span className="text-gray-200">DSA </span>
                      <TrendingUpDown className="text-green-600 w-8 h-8 bg-green-100 p-0.5 rounded" />
                    </div>
                    <div className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg">
                      <span className="text-gray-200">SQL</span>
                      <Database className="text-red-600 w-8 h-8 bg-red-100 p-0.5 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Section */}
            <main className="flex-1 p-2 md:p-4 flex flex-col">
              <SkillsSection />
              <div className="bg-white/20 p-2 rounded-xl">
                <h1 className="text-3xl font-bold mb-3 pl-1">Projects</h1>
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-4"
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
                          className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 pl-0.5">
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
          {/* End of Main Flex Container */}
        </FadeContent>
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
