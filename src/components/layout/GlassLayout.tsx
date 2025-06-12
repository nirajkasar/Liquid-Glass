// src/components/layout/GlassLayout.tsx
import type { ReactNode } from 'react';
import { CodeBackground } from '@/components/code-background/CodeBackground';
import { CodeToggle } from '@/components/code-background/CodeToggle';

interface GlassLayoutProps {
  children: ReactNode;
}

export default function GlassLayout({ children }: GlassLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <CodeBackground />
      <main className="flex-grow">
        {children}
      </main>
      <CodeToggle />
    </div>
  );
}
