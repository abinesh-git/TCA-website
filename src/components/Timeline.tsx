'use client';

import { motion } from 'framer-motion';

interface TimelineEvent {
  title: string;
  date: string;
  location: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="relative"
        >
          {/* Card with left border and dot */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 pl-6 shadow-md 
                        border-l-4 border-blue-600 dark:border-blue-400 relative">
            {/* Dot */}
            <div className="absolute left-[-8px] top-6 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 
                          border-2 border-white dark:border-gray-800" />
            
            {/* Date badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 
                          text-blue-600 dark:text-blue-400 text-sm font-medium mb-2">
              {event.date}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {event.title}
            </h3>
            
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {event.location}
            </div>
            
            <p className="text-gray-700 dark:text-gray-300">
              {event.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 