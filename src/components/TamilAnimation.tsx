'use client';

import { motion } from 'framer-motion';

export function TamilAnimation() {
  // Tamil Om symbol path
  const tamilOmPath = "M50,10 C70,10 85,25 85,45 C85,65 70,80 50,80 C30,80 15,65 15,45 C15,25 30,10 50,10 M50,20 C65,20 75,30 75,45 C75,60 65,70 50,70 C35,70 25,60 25,45 C25,30 35,20 50,20 M45,35 L55,35 M45,45 L55,45 M45,55 L55,55";

  return (
    <div className="w-full h-[400px] flex items-center justify-center">
      <motion.svg
        viewBox="0 0 100 100"
        className="w-48 h-48"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ 
          scale: [0.5, 1, 0.8, 1],
          opacity: 1,
          rotate: [0, 360]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <motion.path
          d={tamilOmPath}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-blue-600 dark:text-blue-400"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </div>
  );
} 