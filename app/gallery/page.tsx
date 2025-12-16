"use client";

import { useState, useEffect } from "react";
import ImageGallery from "@/components/ImageGallery";
import DomeGallery from "@/components/DomeGallery";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, ChevronDown } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";
import { AnimatePresence, motion } from "framer-motion";
import { title } from "process";
import FadeContent from "@/components/animated/fadecontent";

const galleryImages = [
  {
    imageSrc: "/gallery/grid/code.jpeg",
    altText: "Image of Code",
    captionText: "Code",
  },
  {
    imageSrc: "/gallery/grid/kohli1.jpeg",
    altText: "Virat Kohli",
    captionText: "Vk-18",
  },
  {
    imageSrc: "/gallery/grid/luffy.jpeg",
    altText: "Welcome to Ata's Gallery",
    captionText: "Ata Khatri",
    overlayContent: (
      <p className="tilted-card-demo-text text-black bg-amber-500  rounded-full p-2 hover:bg-amber-300 trasnsition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        Welcome to my gallery
      </p>
    ),
  },
  {
    imageSrc: "/gallery/grid/kohli2.jpeg",
    altText: "Virat Kohli",
    captionText: "Vk-18",
  },
  {
    imageSrc: "/gallery/grid/github.jpeg",
    altText: "image of Github",
    captionText: "Github",
  },
];

const detailedProjects = [
  {
    title: "MRK TechSolutions",
    description:
      "Website for a passionate team of innovators, problem-solvers, and technology enthusiasts dedicated to empowering businesses through digital transformation. Built with the latest technologies to solve a real-world problem.",
    image: "/projects/p1/p1.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://mubin-s-project.vercel.app/",
    githubUrl: "https://github.com/atakhatri/mubin-s-project.git",
    media: [
      { type: "video", src: "/projects/p1/p1.mp4" },
      { type: "image", src: "/projects/p1/p12.png" },
    ] as const,
  },
  {
    title: "UNO Game",
    description:
      "Made for Entertainment purposes, a nice way to pass your boredome. Created with Original UNO game logic, where you can play it with your friends as well. it is made with latest tech and framework of next.js, and firebase.",
    image: "/projects/p2/p2.png",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://uno-ebon.vercel.app/",
    githubUrl: "https://github.com/atakhatri/UNO.git",
    media: [
      { type: "video", src: "/projects/p2/p2.mp4" },
      { type: "image", src: "/projects/p2/p22.png" },
    ] as const,
  },
  {
    title: "Climate",
    description:
      "A weather app built using React Native and Expo that provides real-time weather information for any location. It features a clean and intuitive UI designed with Tailwind CSS, and fetches data from a reliable weather API to display current conditions, forecasts, and more.",
    image: "/projects/p3/p3.png",
    tags: ["React Native", "Expo", "Tailwind CSS", "Weather API"],
    liveUrl: "/install/climate",
    githubUrl: "https://github.com/atakhatri/climate.git",
    media: [
      { type: "video", src: "/projects/p3/p3.mp4" },
      { type: "image", src: "/projects/p3/p32.png" },
    ] as const,
  },
  {
    title: "Virat Kohli Fan Page",
    description:
      "A fan page dedicated to Virat Kohli, showcasing his achievements, statistics, and memorable moments in cricket. Built with Next.js and styled with Tailwind CSS, the page features a responsive design and interactive elements to engage fans.",
    image: "/projects/p4/p4.png",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "https://vk18-sigma.vercel.app/",
    githubUrl: "https://github.com/atakhatri/vk18-sigma.git",
    media: [
      { type: "video", src: "/projects/p4/p4.mp4" },
      { type: "image", src: "/projects/p4/p42.png" },
    ] as const,
  },
];

export default function AboutPage() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <FadeContent>
      {/* tilted cards */}
      <div className="container mx-auto px-4 py-0">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">
          My Gallery
        </h1>
        <ImageGallery images={galleryImages} />
      </div>

      {/* Project in detail */}
      <div className="container mx-auto px-4 pb-4 pt-0">
        <div className="flex flex-col gap-4">
          {detailedProjects.map((project, index) => (
            <div key={index} className="bg-white/10 rounded-xl overflow-hidden">
              {/* Mobile Header - Click to expand */}
              <div
                className="p-2 md:hidden cursor-pointer flex justify-between items-center"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <h3 className="text-2xl font-bold pl-1.5 pb-0.5">
                  {project.title}
                </h3>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </div>

              {/* Collapsible/Desktop Content */}
              <AnimatePresence initial={false}>
                {(isDesktop || expandedIndex === index) && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col md:flex-row overflow-hidden"
                  >
                    {/* Left Side: Main Project Info */}
                    <div className="md:w-1/2 p-2 md:p-2">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-2xl mb-2"
                      />
                      <h3 className="hidden md:block text-3xl mb-2 ml-0.5">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 ml-0.5">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6 ml-0.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-amber-500/20 text-amber-300 text-xs font-medium px-3 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-baseline gap-6 text-sm ml-0.5 md:mb-0">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                        >
                          Live Demo <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 hover:text-amber-400 transition-colors"
                        >
                          GitHub <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    {/* Right Side: Media Gallery */}
                    <div className="md:w-1/2 p-2 md:p-2 md:bg-black/20">
                      <div className="grid grid-cols-1 gap-2">
                        {project.media.map((item, mediaIndex) => (
                          <div
                            key={mediaIndex}
                            className="rounded-2xl overflow-hidden"
                          >
                            <ProjectMedia
                              item={item}
                              alt={`${project.title} media ${mediaIndex + 1}`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Images */}
      <div className="container mx-auto px-4 py-0">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-4 mt-4">
          Dome Gallery
        </h1>
      </div>
      <div style={{ width: "full", height: "90vh" }}>
        <DomeGallery />
      </div>

      {/* link to VSCO */}
      <div className="flex justify-center">
        <Link
          href="http://vsco.co/ataakhatri?share=MTc2MDE1ODA5OA%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className=" relative bottom-25  z-100 bg-white rounded-full flex gap-4 justify-baseline align-middle w-50 hover:bg-amber-300 transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        >
          <Image
            src="/gallery/vsco.svg"
            alt="Profile Picture"
            width={6}
            height={6}
            className="w-16 h-16 rounded-full object-cover hover:rotate-360 hover:scale-120  transition-all duration-500 ease-in-out"
          />
          <span className="text-black flex flex-col justify-center font-bold">
            VSCO
          </span>
          <ArrowUpRight className="flex flex-col justify-center w-16 h-16 text-black rounded-full object-cover rotate-45 scale-70 hover:rotate-360 hover:scale-110  transition-all duration-500 ease-in-out" />
        </Link>
      </div>
    </FadeContent>
  );
}
