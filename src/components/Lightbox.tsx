'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface LightboxProps {
  image: {
    src: string;
    alt: string;
    event: string;
    date: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function Lightbox({ image, onClose, onNext, onPrevious, hasNext, hasPrevious }: LightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close lightbox"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="relative aspect-[16/9] w-full max-h-[80vh]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
          </div>

          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex space-x-4">
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-4">
            {hasNext && (
              <button
                onClick={onNext}
                className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            <h3 className="text-xl font-semibold mb-2">{image.event}</h3>
            <p className="text-gray-300">{image.date}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 