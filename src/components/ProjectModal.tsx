"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Pillar } from "@/content/pillars";

interface ProjectModalProps {
  pillar: Pillar | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  pillar,
  isOpen,
  onClose,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>([]);
  const [imageLoading, setImageLoading] = useState<boolean[]>([]);

  // Reset states when pillar changes
  useEffect(() => {
    if (pillar) {
      setCurrentImageIndex(0);
      setImageError(new Array(pillar.images.length).fill(false));
      setImageLoading(new Array(pillar.images.length).fill(false));
    }
  }, [pillar]);

  if (!pillar) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === pillar.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? pillar.images.length - 1 : prev - 1
    );
  };

  const handleImageError = (index: number) => {
    setImageError((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
    setImageLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const handleImageLoad = (index: number) => {
    setImageLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = false;
      return newLoading;
    });
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoading((prev) => {
      const newLoading = [...prev];
      newLoading[index] = true;
      return newLoading;
    });
    setImageError((prev) => {
      const newErrors = [...prev];
      newErrors[index] = false;
      return newErrors;
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
          />

          {/* Modal - Magazine Spread */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-6xl h-[85vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-full flex flex-col lg:flex-row">
              {/* Close Button - Glassmorphism */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-12 h-12 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
              >
                <X size={22} className="text-gray-700" />
              </button>

              {/* Left Side - Full Bleed Image (Clean) */}
              <div className="relative lg:w-1/2 h-[40vh] lg:h-full bg-gray-200 overflow-hidden">
                {/* Fixed Aspect Ratio Container for Mobile */}
                <div className="w-full h-full lg:aspect-none aspect-[4/3] relative">
                  {/* Loading State */}
                  {imageLoading[currentImageIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="w-8 h-8 border-2 border-gray-300 border-t-accent rounded-full animate-spin" />
                    </div>
                  )}

                  {/* Error State */}
                  {imageError[currentImageIndex] &&
                    !imageLoading[currentImageIndex] && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-10">
                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                          <svg
                            className="w-8 h-8 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-500">
                          Không thể tải ảnh
                        </p>
                      </div>
                    )}

                  {/* Image - Full Bleed with Next.js Image Optimization */}
                  {pillar.images[currentImageIndex] &&
                    pillar.images[currentImageIndex].trim() !== "" && (
                      <Image
                        src={pillar.images[currentImageIndex]}
                        alt={`${pillar.title} - Image ${currentImageIndex + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        className={`w-full h-full object-cover bg-gray-200 transition-opacity duration-300 ${
                          imageLoading[currentImageIndex] ||
                          imageError[currentImageIndex]
                            ? "opacity-0"
                            : "opacity-100"
                        }`}
                        onLoadStart={() =>
                          handleImageLoadStart(currentImageIndex)
                        }
                        onLoad={() => handleImageLoad(currentImageIndex)}
                        onError={() => handleImageError(currentImageIndex)}
                        unoptimized={true}
                        priority={true}
                      />
                    )}
                </div>

                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Image Navigation - Glassmorphism Inside Image */}
                {pillar.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronLeft size={24} className="text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronRight size={24} className="text-white" />
                    </button>
                  </>
                )}

                {/* Image Indicators - Bottom of Image */}
                {pillar.images.length > 1 && (
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {pillar.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentImageIndex
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side - Content with Generous Padding */}
              <div className="relative flex-1 lg:w-1/2 p-8 md:p-12 lg:p-16 overflow-y-auto bg-white">
                {/* Large Watermark Index Number - Background */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 text-[10rem] lg:text-[12rem] font-bold leading-none text-gray-100 select-none z-0">
                  {pillar.id.toString().padStart(2, "0")}
                </div>

                {/* Content - Above Watermark */}
                <div className="relative z-10 max-w-md mx-auto lg:mx-0">
                  {/* Eyebrow */}
                  <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase mb-2 block">
                    Case Study
                  </span>

                  {/* Title - Large & Bold */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight leading-tight text-gray-900">
                    {pillar.title}
                  </h2>

                  {/* Short Description */}
                  <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                    {pillar.shortDesc}
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-[2px] bg-accent mb-10" />

                  {/* Full Content */}
                  <div className="mb-12">
                    <p className="text-gray-700 leading-loose text-base">
                      {pillar.fullContent}
                    </p>
                  </div>

                  {/* Achievements Section - Border Left Accent Style */}
                  <div className="mt-10">
                    <h3 className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                      Kết quả đạt được
                    </h3>
                    <div className="border-l-4 border-accent pl-6">
                      <ul className="space-y-4">
                        {pillar.achievements.map((achievement, index) => (
                          <li key={index}>
                            <span className="text-gray-800 font-medium leading-relaxed block">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
