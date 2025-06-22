'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  link?: string;
}

const sampleAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "TCA Connect",
    date: "June 2024",
    content: "A new initiative bringing Tamil students together through informal meetups, shared interests, and cultural bonding.",
    imageUrl: "/images/sample.jpg",
    link: "https://tcaiitb.vercel.app"
  },
  {
    id: 2,
    title: "TCA Alumni Circle",
    date: "",
    content: "A space for Tamil alumni of IIT Bombay who wish to stay connected and contribute to the Tamil Cultural Association in any meaningful way",
    link: "tbadded"
  }
];

export function Announcements() {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | null>(null);
  const hasAnnouncements = sampleAnnouncements.length > 0;

  if (!hasAnnouncements) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
        <p className="text-gray-600 dark:text-gray-400">
          No announcements at the moment.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-4">
        {sampleAnnouncements.map((announcement, index) => (
          <motion.div
            key={announcement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md relative"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {announcement.title}
              </h3>
              <span className="text-sm text-blue-600 dark:text-blue-400 whitespace-nowrap">
                {announcement.date}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              {announcement.content.slice(0, 80)}...
            </p>

            <div className="mt-3 flex justify-end">
              <button
                onClick={() => setSelectedAnnouncement(announcement)}
                className="text-blue-500 hover:text-blue-700 text-sm flex items-center gap-1"
                title="Expand"
              >
                <ArrowsPointingOutIcon className="h-4 w-4" />
                Expand
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 max-w-2xl w-full p-8 rounded-xl shadow-xl relative overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedAnnouncement.title}
            </h3>
            <p className="text-sm text-blue-600 dark:text-blue-400 mb-4">
              {selectedAnnouncement.date}
            </p>

            {selectedAnnouncement.imageUrl && (
              <img
                src={selectedAnnouncement.imageUrl}
                alt={selectedAnnouncement.title}
                className="mb-4 rounded-lg w-full object-cover max-h-64"
              />
            )}

            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">
              {selectedAnnouncement.content}
            </p>

            {selectedAnnouncement.link && (
              <a
                href={selectedAnnouncement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:underline text-sm mb-4"
              >
                Learn more
              </a>
            )}

            <button
              onClick={() => setSelectedAnnouncement(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-white text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
