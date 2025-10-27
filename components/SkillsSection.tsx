import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiCplusplus,
} from "react-icons/si";
import { Languages, LayoutTemplate, Figma, Database } from "lucide-react";

// Ensure GSAP and ScrollTrigger are registered if this component might be rendered independently
// In this case, it's already registered in app/page.tsx, but it's good practice to ensure.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Define skill icons with their colors and new sizes (approx. 3x original)
const skills = [
  { icon: FaReact, color: "text-blue-400", size: "9rem" }, // text-5xl (48px) * 3 = 144px
  { icon: FaHtml5, color: "text-orange-500", size: "6.75rem" }, // text-4xl (36px) * 3 = 108px
  { icon: FaCss3Alt, color: "text-blue-600", size: "9rem" },
  { icon: FaJs, color: "text-yellow-400", size: "6.75rem" },
  { icon: SiTailwindcss, color: "text-cyan-400", size: "9rem" },
  { icon: FaGitAlt, color: "text-orange-600", size: "6.75rem" },
  { icon: FaGithub, color: "text-gray-800", size: "9rem" },
  { icon: SiNextdotjs, color: "text-gray-200", size: "9rem" },
  { icon: SiFirebase, color: "text-orange-400", size: "6.75rem" },
  { icon: Database, color: "text-green-500", size: "9rem" },
  { icon: Figma, color: "text-purple-500", size: "6.75rem" },
  { icon: FaPython, color: "text-blue-500", size: "9rem" },
  { icon: SiCplusplus, color: "text-blue-700", size: "6.75rem" },
  // Duplicate for more quantity
  { icon: FaReact, color: "text-blue-400", size: "9rem" },
  { icon: FaHtml5, color: "text-orange-500", size: "6.75rem" },
  { icon: FaCss3Alt, color: "text-blue-600", size: "9rem" },
  { icon: FaJs, color: "text-yellow-400", size: "6.75rem" },
  { icon: SiTailwindcss, color: "text-cyan-400", size: "9rem" },
  { icon: FaGitAlt, color: "text-orange-600", size: "6.75rem" },
  { icon: FaGithub, color: "text-gray-800", size: "9rem" },
  { icon: SiNextdotjs, color: "text-gray-200", size: "9rem" },
  { icon: SiFirebase, color: "text-orange-400", size: "6.75rem" },
  { icon: Database, color: "text-green-500", size: "9rem" },
  { icon: Figma, color: "text-purple-500", size: "6.75rem" },
  { icon: FaPython, color: "text-blue-500", size: "9rem" },
  { icon: SiCplusplus, color: "text-blue-700", size: "6.75rem" },
  // Another set for even more quantity
  { icon: FaReact, color: "text-blue-400", size: "9rem" },
  { icon: FaHtml5, color: "text-orange-500", size: "6.75rem" },
  { icon: FaCss3Alt, color: "text-blue-600", size: "9rem" },
  { icon: FaJs, color: "text-yellow-400", size: "6.75rem" },
  { icon: SiTailwindcss, color: "text-cyan-400", size: "9rem" },
  { icon: FaGitAlt, color: "text-orange-600", size: "6.75rem" },
  { icon: FaGithub, color: "text-gray-800", size: "9rem" },
  { icon: SiNextdotjs, color: "text-gray-200", size: "9rem" },
  { icon: SiFirebase, color: "text-orange-400", size: "6.75rem" },
  { icon: Database, color: "text-green-500", size: "9rem" },
  { icon: Figma, color: "text-purple-500", size: "6.75rem" },
  { icon: FaPython, color: "text-blue-500", size: "9rem" },
  { icon: SiCplusplus, color: "text-blue-700", size: "6.75rem" },
];

const SkillsSection = () => {
  const skillsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-icon",
        {
          opacity: 0,
          scale: 0.5,
          y: 50,
          rotation: () => gsap.utils.random(-180, 180),
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          rotation: () => gsap.utils.random(-15, 15),
          stagger: 0.05, // Reduced stagger for more icons
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsContainerRef.current,
            start: "top bottom+=100", // Start animation when the top of the container hits 100px from the bottom of the viewport
            // toggleActions: "play none none none", // Play animation once when it enters
          },
        }
      );

      // Add hover interactivity
      const icons = gsap.utils.toArray(".skill-icon");
      icons.forEach((icon: any) => {
        gsap.set(icon, { transformOrigin: "center center" });

        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            y: -15,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // Parallax effect on scroll
        icons.forEach((icon: any) => {
          gsap.to(icon, {
            y: gsap.utils.random(-100, 100),
            x: gsap.utils.random(-50, 50),
            scrollTrigger: {
              trigger: skillsContainerRef.current,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
            },
          });
        });

        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            y: 0,
            rotation: () => gsap.utils.random(-15, 15),
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, skillsContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={skillsContainerRef}
      className=" px-4 rounded-xl relative h-[15rem] overflow-hidden" // Increased height for more space
    >
      <div className="absolute inset-0 p-4">
        {skills.map((skill, i) => {
          const IconComponent = skill.icon;
          const randomTop = `${gsap.utils.random(40, 90)}%`; // Lifted up from the bottom
          const randomLeft = `${gsap.utils.random(5, 90)}%`; // More horizontal spacing
          const randomRotate = `${gsap.utils.random(-45, 45)}deg`; // Random rotation

          return (
            <IconComponent
              key={i}
              className={`skill-icon absolute ${skill.color} cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]`}
              style={{
                top: randomTop,
                left: randomLeft,
                transform: `rotate(${randomRotate})`,
                fontSize: skill.size, // Apply the 3x larger font size
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
