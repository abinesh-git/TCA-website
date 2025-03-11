'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { EnvelopeIcon, LinkIcon } from '@heroicons/react/24/outline';

interface CouncilMemberProps {
  name: string;
  role: string;
  image: string;
  email: string;
  linkedIn?: string;
  department?: string;
  year?: string;
  bio?: string;
  isFaculty?: boolean;
}

export function CouncilMember({
  name,
  role,
  image,
  email,
  linkedIn,
  department,
  year,
  bio,
  isFaculty = false,
}: CouncilMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {name}
              </h3>
              <p className={`text-sm ${isFaculty ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'} font-medium mb-2`}>
                {role}
              </p>
              {(department || year) && (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {department} {year && `• ${year}`}
                </p>
              )}
            </div>
            <div className="flex space-x-2">
              <a
                href={`mailto:${email}`}
                className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label={`Email ${name}`}
              >
                <EnvelopeIcon className="w-5 h-5" />
              </a>
              {linkedIn && (
                <a
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                  aria-label={`${name}'s LinkedIn profile`}
                >
                  <LinkIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          
          {bio && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-4 text-sm text-gray-600 dark:text-gray-300 overflow-hidden"
            >
              <p>{bio}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 