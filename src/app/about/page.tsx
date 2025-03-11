'use client';

import { Navbar } from '@/components/Navbar';
import { TamilAnimation } from '@/components/TamilAnimation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// This will be set to true when content is ready
const SHOW_FULL_CONTENT = false;

// Dormant content that will be used later
const aboutContent = {
  history: {
    title: "Our History",
    content: "Content about TCA's history will go here...",
    image: "/images/about/history.jpg"
  },
  mission: {
    title: "Our Mission",
    content: "Content about TCA's mission will go here...",
  },
  vision: {
    title: "Our Vision",
    content: "Content about TCA's vision will go here...",
  },
  achievements: [
    {
      year: "2023",
      title: "Achievement 1",
      description: "Description will go here...",
      image: "/images/about/achievement1.jpg"
    },
    // More achievements will be added here
  ],
  culturalSignificance: {
    title: "Cultural Significance",
    sections: [
      {
        title: "Language Preservation",
        content: "Content about language preservation will go here...",
        image: "/images/about/language.jpg"
      },
      // More sections will be added here
    ]
  }
};

export default function About() {
  if (!SHOW_FULL_CONTENT) {
    return (
      <main className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              About TCA
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Our story is being crafted with care. Check back soon to learn more about our journey.
            </p>
            
            <TamilAnimation />

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8 text-lg text-blue-600 dark:text-blue-400 font-medium"
            >
              Coming Soon
            </motion.div>
          </motion.div>
        </div>
      </main>
    );
  }

  // Dormant full content section - will be activated when SHOW_FULL_CONTENT is true
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gray-900">
        <Image
          src="/images/about/hero.jpg"
          alt="TCA History"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Preserving and promoting Tamil culture since our inception
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {aboutContent.history.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {aboutContent.history.content}
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={aboutContent.history.image}
                alt="TCA History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {aboutContent.mission.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {aboutContent.mission.content}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {aboutContent.vision.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {aboutContent.vision.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Achievements
          </h2>
          <div className="space-y-12">
            {aboutContent.achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/3 h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="text-blue-600 dark:text-blue-400 font-bold mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {aboutContent.culturalSignificance.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {aboutContent.culturalSignificance.sections.map((section, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-[250px]">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 