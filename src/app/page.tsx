'use client';

import { Navbar } from '@/components/Navbar';
import { Announcements } from '@/components/Announcements';
import { Timeline } from '@/components/Timeline';
import { HighlightsCarousel } from '@/components/HighlightsCarousel';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const sampleEvents = [
  {
    title: "Tamil New Year Celebration",
    date: "April 14, 2024",
    location: "Community Center",
    description: "Join us for a grand celebration of Tamil New Year with traditional performances, food, and cultural activities."
  },
  {
    title: "Classical Dance Workshop",
    date: "May 1, 2024",
    location: "Dance Studio",
    description: "Learn the beautiful art of Bharatanatyam with our experienced instructors."
  },
  {
    title: "Tamil Language Classes",
    date: "Every Saturday",
    location: "Learning Center",
    description: "Weekly Tamil language classes for all levels, from beginners to advanced learners."
  }
];

export default function Home() {
  const [heroImageError, setHeroImageError] = useState(false);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        {heroImageError ? (
          <PlaceholderImage 
            title="Tamil Cultural Association" 
            className="absolute inset-0"
          />
        ) : (
          <Image
            src="/images/hero/hero-bg.JPG"
            alt="Tamil Cultural Association"
            fill
            priority
            className="object-cover"
            onError={() => setHeroImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight">
                Tamil Cultural
                <br />
                Association
              </h1>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
                Celebrating Tamil Heritage at IIT Bombay - Where Culture Meets Excellence
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Welcome
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {/* Announcements and Timeline Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Announcements Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Latest Announcements
                </h2>
                <div className="space-y-4">
                  <Announcements />
                </div>
              </div>

              {/* Timeline Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Upcoming Events
                </h2>
                <Timeline events={sampleEvents} />
              </div>
            </motion.div>

            {/* Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                
              </h2>
              <HighlightsCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
