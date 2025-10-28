"use client";

import React, { useState } from "react";
import TiltedCard from "@/components/TiltedCard";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  imageSrc: string;
  altText: string;
  overlayContent?: React.ReactNode;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const centerIndex = Math.floor(images.length / 2);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => setSelectedImage(imageSrc);
  const closeLightbox = () => setSelectedImage(null);

  // Repeat images for a fuller mobile grid view
  const mobileImages = [...images, ...images, ...images];

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const gridItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center gap-4 md:gap-[-20px] py-8 overflow-x-auto px-4">
        {images.map((image, index) => {
          const distance = Math.abs(index - centerIndex);
          let size = 300;
          let scale = 1;
          if (distance === 1) {
            size = 200;
            scale = 0.9;
          } else if (distance > 1) {
            size = 250;
            scale = 0.9;
          }

          const zIndex = images.length - distance;

          return (
            <div
              key={index}
              style={{ zIndex, transform: `scale(${scale})` }}
              className="transition-all duration-500 ease-in-out cursor-pointer"
              onClick={() => openLightbox(image.imageSrc)}
            >
              <TiltedCard
                {...image}
                containerHeight={`${size}px`}
                containerWidth={`${size}px`}
                imageHeight={`${size}px`}
                imageWidth={`${size}px`}
                rotateAmplitude={10}
                scaleOnHover={1.05}
                displayOverlayContent={!!image.overlayContent}
                overlayContent={image.overlayContent}
              />
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <motion.div
        className="hidden grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden"
        variants={gridContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {mobileImages.map((image, index) => (
          <motion.div
            key={index}
            variants={gridItemVariants}
            onClick={() => openLightbox(image.imageSrc)}
          >
            <TiltedCard
              {...image}
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={5}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image
            >
              <img
                src={selectedImage}
                alt="Lightbox"
                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 text-white bg-black rounded-full p-1 text-2xl leading-none"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
