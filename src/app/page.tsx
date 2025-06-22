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
    title: "Freshers Event 2025",
    date: "will be shared soon",
    location: "will be shared soon",
    description: "Welcoming incoming students to insti"
  },
  
  
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
                onClick={() => {
                  const section = document.getElementById('events');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-22 text-white px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 backdrop-blur-lg border border-white/30 shadow-lghover:bg-white/20 transition-all duration-300"
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
              id="events"  // ← Add this here
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
