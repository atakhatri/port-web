"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import PROJECT_DATA from "@/data/projects";

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

export default function ProjectsSection() {
  const [websitePage, setWebsitePage] = useState(0);
  const [appPage, setAppPage] = useState(0);

  // Separate projects by type
  const websites = PROJECT_DATA.filter((p) => p.type === "Website");
  const mobileApps = PROJECT_DATA.filter((p) => p.type === "Mobile App");

  const projectsPerPage = 3;
  const totalWebsitePages = Math.ceil(websites.length / projectsPerPage);
  const totalAppPages = Math.ceil(mobileApps.length / projectsPerPage);

  const displayedWebsites = websites.slice(
    websitePage * projectsPerPage,
    (websitePage + 1) * projectsPerPage,
  );

  const displayedApps = mobileApps.slice(
    appPage * projectsPerPage,
    (appPage + 1) * projectsPerPage,
  );

  const renderDesktopCard = (
    project: (typeof websites)[number],
    key: string | number,
  ) => (
    <motion.div
      key={key}
      variants={cardVariants}
      className="flex flex-col h-full bg-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:scale-[1.02]"
    >
      {/* Desktop-shaped container */}
      <div className="flex-shrink-0 bg-black rounded-xl p-0  m-2 aspect-[16/10] overflow-hidden border border-white/20">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-2">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm flex-1 mb-3">
          {project.description}
        </p>

        {/* Tags */}
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

        {/* Links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
            rel={
              project.liveUrl.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
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

  const renderMobileCard = (
    project: (typeof mobileApps)[number],
    key: string | number,
  ) => (
    <motion.div
      key={key}
      variants={cardVariants}
      className="flex flex-col h-full bg-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/20 hover:shadow-2xl hover:scale-[1.02]"
    >
      {/* Mobile-shaped container */}
      <div className="flex-shrink-0 mx-auto mt-2 mb-0 w-[170px] h-[300px] bg-gray-800 rounded-[2rem] p-0 overflow-hidden border-[6px] border-gray-800 shadow-xl">
        <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 rounded-[1.5rem] overflow-hidden relative flex items-center justify-center">
          {/* Notch simulation */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-3 bg-gray-900 rounded-b-xl z-10"></div>
          <div className="w-28 h-24 rounded-2xl bg-black/35 p-2 backdrop-blur-[1px]">
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-16 rounded-full bg-white/25"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm flex-1 mb-3">
          {project.description}
        </p>

        {/* Tags */}
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

        {/* Links */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href={project.liveUrl}
            target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
            rel={
              project.liveUrl.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="flex items-center gap-1 hover:text-amber-400 transition-colors"
          >
            {project.type == "Website" ? "Visit" : "Install"}{" "}
            <ExternalLink size={16} />
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
    <div className="hidden md:block space-y-12">
      {/* Websites Section */}
      <div>
        {/* <h2 className="text-2xl font-bold mb-6">Websites</h2> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`websites-${websitePage}`}
            className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8 }}
          >
            {displayedWebsites.map((project, index) =>
              renderDesktopCard(
                project,
                `${project.title}-${websitePage}-${index}`,
              ),
            )}
          </motion.div>
        </AnimatePresence>

        {/* Website Pagination */}
        {totalWebsitePages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setWebsitePage((prev) => Math.max(0, prev - 1))}
              disabled={websitePage === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous websites"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-sm text-white/80 min-w-[60px] text-center">
              {websitePage + 1} / {totalWebsitePages}
            </p>
            <button
              onClick={() =>
                setWebsitePage((prev) =>
                  Math.min(totalWebsitePages - 1, prev + 1),
                )
              }
              disabled={websitePage === totalWebsitePages - 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next websites"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mobile Apps Section */}
      <div>
        {/* <h2 className="text-2xl font-bold mb-6">Mobile Apps</h2> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`apps-${appPage}`}
            className="grid grid-cols-1 lg:grid-cols-3 gap-2 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8 }}
          >
            {displayedApps.map((project, index) =>
              renderMobileCard(project, `${project.title}-${appPage}-${index}`),
            )}
          </motion.div>
        </AnimatePresence>

        {/* Mobile Apps Pagination */}
        {totalAppPages > 1 && (
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setAppPage((prev) => Math.max(0, prev - 1))}
              disabled={appPage === 0}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Previous apps"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <p className="text-sm text-white/80 min-w-[60px] text-center">
              {appPage + 1} / {totalAppPages}
            </p>
            <button
              onClick={() =>
                setAppPage((prev) => Math.min(totalAppPages - 1, prev + 1))
              }
              disabled={appPage === totalAppPages - 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-amber-400 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Next apps"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
