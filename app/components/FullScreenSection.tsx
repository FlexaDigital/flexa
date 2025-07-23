'use client';

import { ReactNode } from 'react';

interface FullScreenSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function FullScreenSection({ children, className = '', id }: FullScreenSectionProps) {
  return (
    <section id={id} className={`py-20 flex flex-col justify-center ${className}`}>
      {children}
    </section>
  );
}