"use client";

import ImageGallery from "@/components/ImageGallery";
import DomeGallery from "@/components/DomeGallary";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectMedia from "@/components/ProjectMedia";

const galleryImages = [
  {
    imageSrc: "/gallary/grid/code.jpeg",
    altText: "Image of Code",
    captionText: "Code",
  },
  {
    imageSrc: "/gallary/grid/kohli1.jpeg",
    altText: "Virat Kohli",
    captionText: "Vk-18",
  },
  {
    imageSrc: "/gallary/grid/luffy.jpeg",
    altText: "Welcome to Ata's Gallary",
    captionText: "Ata Khatri",
    overlayContent: (
      <p className="tilted-card-demo-text text-black bg-amber-500  rounded-full p-2 hover:bg-amber-300 trasnsition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
        Welcome to my gallery
      </p>
    ),
  },
  {
    imageSrc: "/gallary/grid/kohli2.jpeg",
    altText: "Virat Kohli",
    captionText: "Vk-18",
  },
  {
    imageSrc: "/gallary/grid/github.jpeg",
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
    ],
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
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      {/* tilted cards */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-amber-400 mb-8">
          My Gallery
        </h1>
        <ImageGallery images={galleryImages} />
      </div>

      {/* Gallary Images */}
      <div style={{ width: "full", height: "100vh" }}>
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
            src="/gallary/vsco.svg"
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

      {/* Project in detail */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-16">
          {detailedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Main Project Info */}
              <div className="md:w-1/2 p-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl mb-6"
                />
                <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-amber-500/20 text-amber-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-6 text-sm">
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
              <div className="md:w-1/2 p-8 bg-black/20">
                <div className="grid grid-cols-1 gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
