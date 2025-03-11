'use client';

import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium';
  className?: string;
}

export function Logo({ size = 'small', className = '' }: LogoProps) {
  const dimensions = {
    small: { width: 32, height: 32 },
    medium: { width: 48, height: 48 }
  };

  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="TCA Logo"
        width={dimensions[size].width}
        height={dimensions[size].height}
        className="object-contain"
        priority
      />
    </Link>
  );
} 