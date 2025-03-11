'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Dialog } from '@headlessui/react';
import { format } from 'date-fns';
import { EventLinks } from './EventLinks';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  date: string;
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        setImages(data.images);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load images');
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageLoad = (imageId: string) => {
    setLoadedImages(prev => new Set([...prev, imageId]));
  };

  // Split images based on screen size
  const rowCount = isMobile ? 6 : 4;
  const rows = Array.from({ length: rowCount }, (_, i) => 
    images.filter((_, index) => index % rowCount === i)
  );

  // Animation for each row
  const rowVariants = {
    animate: (custom: number) => ({
      x: [0, '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          duration: 15 + custom * 1.5,
          ease: "linear"
        }
      }
    })
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] text-red-500">
        <p>Error loading gallery: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden py-12">
        <div className="space-y-8 md:space-y-8">
          {rows.map((rowImages, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-8 md:gap-8"
              variants={rowVariants}
              animate="animate"
              custom={rowIndex}
              style={{ 
                height: isMobile ? 'calc(15vh - 1rem)' : 'calc(25vh - 2rem)',
              }}
            >
              {/* Duplicate images for seamless loop */}
              {[...rowImages, ...rowImages].map((image, index) => (
                <motion.div
                  key={`${image.id}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-full rounded-lg overflow-hidden"
                  style={{ 
                    minWidth: isMobile ? '200px' : '300px',
                    width: isMobile 
                      ? 'calc(2 * (15vh - 1rem))' 
                      : 'calc(2 * (25vh - 2rem))'
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                      loadedImages.has(image.id) ? 'opacity-100' : 'opacity-0'
                    }`}
                    sizes={isMobile 
                      ? "(max-width: 768px) 100vw" 
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    quality={75}
                    loading="lazy"
                    onLoad={() => handleImageLoad(image.id)}
                    onClick={() => setSelectedImage(image)}
                    draggable={false}
                  />
                  {!loadedImages.has(image.id) && (
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event Links Section */}
      <EventLinks />

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <Dialog
            open={!!selectedImage}
            onClose={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="fixed inset-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80"
                onClick={() => setSelectedImage(null)}
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-5xl w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  quality={90}
                  priority
                />
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {format(new Date(selectedImage.date), 'MMMM d, yyyy')}
                </p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
} 