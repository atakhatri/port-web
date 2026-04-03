"use client";

import React, { useEffect, useRef, useState } from "react";
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

type SkillDefinition = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  size: string;
};

type SkillLayout = {
  top: string;
  left: string;
  rotation: string;
  enterDelay: number;
  visibleDuration: number;
  restartDelay: number;
};

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 999 + 17) * 10000;
  return x - Math.floor(x);
};

const skills: SkillDefinition[] = [
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

const skillLayouts: SkillLayout[] = skills.map((_, index) => ({
  top: `${8 + seededRandom(index + 1) * 84}%`,
  left: `${4 + seededRandom(index + 11) * 88}%`,
  rotation: `${Math.round(-85 + seededRandom(index + 21) * 170)}deg`,
  enterDelay: Math.round(seededRandom(index + 31) * 7000),
  visibleDuration: Math.round(15000 + seededRandom(index + 41) * 5000),
  restartDelay: Math.round(500 + seededRandom(index + 51) * 2600),
}));

type SkillIconItemProps = SkillDefinition & SkillLayout;

const SkillIconItem = ({
  icon: IconComponent,
  color,
  size,
  top,
  left,
  rotation,
  enterDelay,
  visibleDuration,
  restartDelay,
}: SkillIconItemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPopping, setIsPopping] = useState(false);
  const timersRef = useRef<number[]>([]);

  function clearTimers() {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timersRef.current = [];
  }

  function scheduleCycle() {
    clearTimers();

    const showTimer = window.setTimeout(() => {
      setIsVisible(true);
      setIsPopping(false);

      const autoPopTimer = window.setTimeout(() => {
        triggerPop();
      }, visibleDuration);

      timersRef.current.push(autoPopTimer);
    }, enterDelay);

    timersRef.current.push(showTimer);
  }

  function triggerPop() {
    clearTimers();
    setIsVisible(true);
    setIsPopping(true);

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
      setIsPopping(false);

      const restartTimer = window.setTimeout(() => {
        scheduleCycle();
      }, restartDelay);

      timersRef.current.push(restartTimer);
    }, 280);

    timersRef.current.push(hideTimer);
  }

  useEffect(() => {
    scheduleCycle();
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const transform = `translateY(${isPopping ? "-22px" : isVisible ? "0px" : "18px"}) rotate(${rotation}) scale(${isPopping ? 1.3 : isVisible ? 1 : 0.55})`;

  return (
    <IconComponent
      onClick={triggerPop}
      className={`skill-icon absolute ${color} cursor-pointer select-none transition-[transform,opacity,filter] duration-300 ease-out hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      style={{
        top,
        left,
        transform,
        opacity: isVisible ? (isPopping ? 0 : 1) : 0,
        fontSize: size,
        willChange: "transform, opacity",
      }}
    />
  );
};

const SkillsSection = () => {
  return (
    <div className=" px-0 rounded-xl relative h-[15rem] overflow-hidden">
      <div className="absolute inset-0 p-4">
        {skills.map((skill, i) => {
          return (
            <SkillIconItem
              key={i}
              icon={skill.icon}
              color={skill.color}
              size={skill.size}
              top={skillLayouts[i].top}
              left={skillLayouts[i].left}
              rotation={skillLayouts[i].rotation}
              enterDelay={skillLayouts[i].enterDelay}
              visibleDuration={skillLayouts[i].visibleDuration}
              restartDelay={skillLayouts[i].restartDelay}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsSection;
