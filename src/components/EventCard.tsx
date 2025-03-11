'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PlaceholderImage } from './PlaceholderImage';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

export function EventCard({ title, date, location, image, description }: EventCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        {imageError ? (
          <PlaceholderImage title={title} />
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">{description}</p>
        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
} 