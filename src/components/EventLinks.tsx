'use client';

import { motion } from 'framer-motion';

interface EventLink {
  title: string;
  date: string;
  driveLink: string;
}

const eventLinks: EventLink[] = [
  {
    title: "Pongal Celebration 2025",
    date: "January 30, 2025",
    driveLink: "https://drive.google.com/drive/folders/your-folder-id-1"
  },
  {
    title: "Kaarthigai Deepam 2024",
    date: "December 14, 2024",
    driveLink: "https://drive.google.com/drive/folders/your-folder-id-2"
  },
  // Add more events here
];

function DriveIcon() {
  return (
    <svg 
      viewBox="0 0 87.3 78" 
      className="w-6 h-6"
    >
      <path 
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" 
        fill="#0066da"
      />
      <path 
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" 
        fill="#00ac47"
      />
      <path 
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" 
        fill="#ea4335"
      />
      <path 
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" 
        fill="#00832d"
      />
      <path 
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" 
        fill="#2684fc"
      />
      <path 
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" 
        fill="#ffba00"
      />
    </svg>
  );
}

export function EventLinks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
        >
          Event Albums
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventLinks.map((event, index) => (
            <motion.a
              key={index}
              href={event.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {event.date}
                  </p>
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  <DriveIcon />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
} 