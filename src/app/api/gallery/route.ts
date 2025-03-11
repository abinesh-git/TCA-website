import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const galleryPath = path.join(process.cwd(), 'public', 'images', 'gallery');
    const files = fs.readdirSync(galleryPath)
      .filter(file => {
        // Only include image files
        const ext = path.extname(file).toLowerCase();
        return ['.jpg','.JPG', '.jpeg', '.JPEG', '.png', '.PNG', '.gif', '.GIF', '.webp', '.WEBP'].includes(ext);
      })
      .map(filename => {
        const stats = fs.statSync(path.join(galleryPath, filename));
        return {
          id: filename.replace(/\.[^/.]+$/, ''), // Remove extension
          src: `/images/gallery/${filename}`,
          alt: `Tamil Cultural Association Event Photo`,
          date: stats.mtime.toISOString().split('T')[0] // Use file modification date
        };
      })
      .sort((a, b) => b.date.localeCompare(a.date)); // Sort by date, newest first

    return NextResponse.json({ images: files });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 });
  }
} 