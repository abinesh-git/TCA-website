'use client';

import { motion } from 'framer-motion';

const taglines = [
  "Preserving Tamil Heritage",
  "Fostering Community Bonds",
  "Celebrating Cultural Excellence",
  "Empowering Future Generations"
];

export function ScrollingTagline() {
  return (
    <div className="h-20 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-2xl font-medium text-center"
      >
        {taglines.map((tagline, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{
              animation: `scrollTagline 12s infinite ${index * 3}s`
            }}
          >
            {tagline}
          </motion.div>
        ))}
      </motion.div>
      <style jsx global>{`
        @keyframes scrollTagline {
          0%, 20% { opacity: 0; transform: translateY(20px); }
          25%, 45% { opacity: 1; transform: translateY(0); }
          50%, 100% { opacity: 0; transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
} 