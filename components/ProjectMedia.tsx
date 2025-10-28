"use client";

import { useRef } from "react";
import Image from "next/image";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface ProjectMediaProps {
  item: MediaItem;
  alt: string;
}

export default function ProjectMedia({ item, alt }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.play();
  };

  if (item.type === "image") {
    return (
      <Image
        src={item.src}
        alt={alt}
        width={500}
        height={300}
        className="w-full h-auto object-cover"
      />
    );
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <video ref={videoRef} src={item.src} muted loop playsInline />
    </div>
  );
}
