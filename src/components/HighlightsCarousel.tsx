'use client';


import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const highlights = [
  {
    id: 1,
    image: '/images/highlights/pongal.jpg',
    title: 'Pongal Celebration',
    description: 'Traditional Pongal celebrations with the community'
  },
  {
    id: 2,
    image: '/images/highlights/dance.jpg',
    title: 'Dance Performance',
    description: 'Classical dance performance'
  },
  {
    id: 3,
    image: '/images/highlights/cricket.jpg',
    title: 'Kalaam Cup',
    description: 'Annual Cricket Tournament'
  }
];

export function HighlightsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % highlights.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleImageError = () => {
    setIsPlaceholder(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Recent Highlights
        </h2>
        <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full rounded-lg overflow-hidden"
            >
              {isPlaceholder ? (
                <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <p className="text-gray-500 dark:text-gray-400">Image add pananum</p>
                </div>
              ) : (
                <Image
                  src={highlights[currentIndex].image}
                  alt={highlights[currentIndex].title}
                  fill
                  className="object-cover"
                  onError={handleImageError}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{highlights[currentIndex].title}</h3>
                  <p className="text-gray-200">{highlights[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>

          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {highlights.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-4 bg-blue-600'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
} 