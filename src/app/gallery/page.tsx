'use client';

import { Gallery } from '@/components/Gallery';
import { Navbar } from '@/components/Navbar';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-[2000px] mx-auto pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing moments and memories from our vibrant Tamil cultural events and celebrations
          </p>
        </motion.div>
        <Gallery />
      </div>
    </main>
  );
} 