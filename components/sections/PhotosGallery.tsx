"use client";

import { profile } from "@/src/content/profile";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function PhotosGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="photos" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
          >
            The Human Side
          </motion.h2>

          {profile.photos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Photos will be displayed here once added.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Add photos to <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">public/photos/</code> and update <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">src/content/profile.ts</code>
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profile.photos.map((photo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800 hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                    aria-label={`View ${photo.alt}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </div>

              <AnimatePresence>
                {selectedImage !== null && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                  >
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      onClick={closeLightbox}
                      className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                      aria-label="Close lightbox"
                    >
                      <X className="w-6 h-6" />
                    </motion.button>

                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      className="relative max-w-5xl max-h-[90vh] w-full h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Image
                        src={profile.photos[selectedImage].src}
                        alt={profile.photos[selectedImage].alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

