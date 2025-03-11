'use client';

import { motion } from 'framer-motion';

interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
}

const sampleAnnouncements: Announcement[] = [
  {
    id: 1,
    title: "Announcement 1",
    date: "March 11, 2025",
    content: "Test announcement 1."
  },
  {
    id: 2,
    title: "Announcement 2",
    date: "Ongoing",
    content: "Test announcement 2."
  },
  {
    id: 3,
    title: "Announcement 3",
    date: "Starting April 2025",
    content: "Test announcement 3."
  }
];

export function Announcements() {
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
    <div className="space-y-4">
      {sampleAnnouncements.map((announcement, index) => (
        <motion.div
          key={announcement.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {announcement.title}
            </h3>
            <span className="text-sm text-blue-600 dark:text-blue-400">
              {announcement.date}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {announcement.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
} 