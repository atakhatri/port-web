"use client";
import { ExternalLink, FileCheck, Tags } from "lucide-react";
import React, { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import FadeContent from "../components/animated/fadecontent";
import { FaSpotify, FaGitAlt, FaStarHalfAlt } from "react-icons/fa";
import {
  Languages,
  LayoutTemplate,
  Figma,
  TrendingUpDown,
  Database,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import SkillsSection from "../components/SkillsSection";
import ContactModal from "@/components/ContactModal";
import PROJECT_DATA from "../data/projects";

const projects = PROJECT_DATA;

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
  const [mobileProjectPage, setMobileProjectPage] = useState(0);

  const projectsPerMobilePage = 2;
  const totalMobileProjectPages = Math.max(
    1,
    Math.ceil(projects.length / projectsPerMobilePage),
  );
  const mobileProjects = projects.slice(
    mobileProjectPage * projectsPerMobilePage,
    mobileProjectPage * projectsPerMobilePage + projectsPerMobilePage,
  );

  const renderProjectCard = (
    project: (typeof projects)[number],
    key: string | number,
  ) => (
    <motion.div
      key={key}
      variants={cardVariants}
      tabIndex={0}
      className="bg-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-500/50"
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
        <p className="text-gray-300 mb-4">{project.description}</p>
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
            Visit <ExternalLink size={16} />
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
  );

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
                <FadeContent delay={0}>
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
                            Web / App Developer
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
                <FadeContent delay={0.2}>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2 pl-1">About</h3>
                    <div className="space-y-2">
                      <div
                        tabIndex={0}
                        className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <Link
                          href="https://open.spotify.com/playlist/4YEH7T9M0NHuoLuBpViomw?si=873c8f5ae4fc4f30"
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaSpotify className="text-green-600 w-8 h-8 bg-black p-0.5 rounded-full animate-[spin_4s_linear_infinite]" />
                          <span className="text-amber-500">On Repeat:</span>
                          <span className="text-white font-medium">
                            GO TO...
                          </span>
                        </Link>
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <Languages className="text-blue-400 w-8 h-8 bg-blue-950 p-0.5 rounded-full" />
                        <span className="text-amber-500">I Speak:</span>
                        <span className="text-white font-medium">
                          English, Hindi, Gujarati
                        </span>
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
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
                      <div
                        tabIndex={0}
                        className="flex justify-baseline gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <FaStarHalfAlt className="text-yellow-400 w-8 h-8 bg-amber-100 p-0.5 rounded-full" />
                        <span className="text-amber-500">Expertise:</span>
                        <span className="text-white font-medium">
                          Learning & Development
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeContent>

                {/* 3. Timeline */}
                <FadeContent delay={0.4}>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <h3 className="text-lg font-semibold mb-2 pl-1">
                      Timeline
                    </h3>
                    <div
                      tabIndex={0}
                      className="bg-white/10 p-2 rounded-xl hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                    >
                      <div className="space-y-4 flex flex-col">
                        {/* Present */}
                        <div className="">
                          <h4 className="font-bold text-white">Present</h4>
                          <p className="text-gray-300 text-sm">
                            Currently enhancing Web / App Development and
                            looking for a job opportunity.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-bold text-white">2024 - 2025</h4>
                          <p className="text-gray-300 text-sm">
                            Learnt and Enhanced Web / App - development skills,
                            Programming languages like Python, C / C++.
                          </p>
                        </div>
                        {/* 23-24 */}
                        <div>
                          <h4 className="font-bold text-white">2023-2024</h4>
                          <p className="text-gray-300 text-sm">
                            Completed Higher Secondary Education with
                            specialization in Commerce stream from GSHSEB.
                          </p>
                        </div>
                        {/* Education */}
                        <div>
                          <h4 className="font-bold text-white">Education</h4>
                          <p className="text-gray-300 text-sm">
                            <strong>BCA</strong> - at MSU Baroda - (2024 - 2028)
                            <br />
                            <strong>Commerce</strong> - GSHSEB - (2022 - 2024)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeContent>

                {/* 4. Skills */}
                <FadeContent delay={0.6}>
                  <div className="bg-white/20 p-2 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 pl-1">Skills</h3>
                    <div className="space-y-2">
                      <div
                        tabIndex={0}
                        className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <span className="text-gray-200">
                          Web / App Development
                        </span>
                        <LayoutTemplate className="text-gray-600 w-8 h-8 bg-gray-100 p-0.5 rounded" />
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <span className="text-gray-200">Web / App Design</span>
                        <Figma className="text-blue-700 w-8 h-8 bg-blue-100 p-0.5 rounded" />
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <span className="text-gray-200">DSA </span>
                        <TrendingUpDown className="text-green-600 w-8 h-8 bg-green-100 p-0.5 rounded" />
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <span className="text-gray-200">DB management</span>
                        <Database className="text-red-600 w-8 h-8 bg-red-100 p-0.5 rounded" />
                      </div>
                      <div
                        tabIndex={0}
                        className="flex justify-end gap-2 items-center bg-white/10 px-2 py-2 rounded-lg hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 cursor-default focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                      >
                        <span className="text-gray-200">Problem Solving</span>
                        <FileCheck className="text-yellow-400 w-8 h-8 bg-yellow-100 p-0.5 rounded" />
                      </div>
                    </div>
                  </div>
                </FadeContent>
              </div>
            </aside>

            {/* Right Section */}
            <main className="flex-1 p-2 md:p-4 flex flex-col">
              <SkillsSection />
              <div className="bg-white/20 p-2 rounded-xl" id="projects">
                <h1 className="text-3xl font-bold mb-3 pl-1">Projects</h1>

                <div className="md:hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={mobileProjectPage}
                      className="grid grid-cols-1 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit={{ opacity: 0, y: 8 }}
                    >
                      {mobileProjects.map((project, index) =>
                        renderProjectCard(
                          project,
                          `${project.title}-${mobileProjectPage}-${index}`,
                        ),
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {totalMobileProjectPages > 1 && (
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <button
                        onClick={() =>
                          setMobileProjectPage((prev) => Math.max(0, prev - 1))
                        }
                        disabled={mobileProjectPage === 0}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Previous projects"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <p className="text-sm text-white/80">
                        {mobileProjectPage + 1} / {totalMobileProjectPages}
                      </p>
                      <button
                        onClick={() =>
                          setMobileProjectPage((prev) =>
                            Math.min(totalMobileProjectPages - 1, prev + 1),
                          )
                        }
                        disabled={
                          mobileProjectPage === totalMobileProjectPages - 1
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
                        aria-label="Next projects"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                </div>

                <motion.div
                  className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {projects.map((project, index) =>
                    renderProjectCard(project, `${project.title}-${index}`),
                  )}
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
