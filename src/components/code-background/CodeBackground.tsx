// src/components/code-background/CodeBackground.tsx
"use client";

import { useState, useEffect } from 'react';
import { useCodeBackground } from '@/hooks/use-code-background';
import { cn } from '@/lib/utils';

const TYPING_SPEED_CHARS_PER_INTERVAL = 30; // Chars per interval
const TYPING_INTERVAL_MS = 16; // Approx 60 FPS

export function CodeBackground() {
  const { isCodeVisible, sourceCode } = useCodeBackground();
  const [displayedCodeContent, setDisplayedCodeContent] = useState('');

  useEffect(() => {
    let animationFrameId: number;
    let currentIdx = 0;

    if (isCodeVisible && sourceCode) {
      setDisplayedCodeContent(''); // Reset before starting new animation

      const type = () => {
        if (currentIdx < sourceCode.length) {
          const nextChunk = sourceCode.substring(currentIdx, currentIdx + TYPING_SPEED_CHARS_PER_INTERVAL);
          setDisplayedCodeContent(prev => prev + nextChunk);
          currentIdx += TYPING_SPEED_CHARS_PER_INTERVAL;
          animationFrameId = requestAnimationFrame(type);
        }
      };
      animationFrameId = requestAnimationFrame(type);
    } else {
      setDisplayedCodeContent(''); // Clear code when not visible or no source code
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isCodeVisible, sourceCode]);

  if (!isCodeVisible && !displayedCodeContent) { // Also check displayedCodeContent to allow fade out animation if any
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[-1] overflow-hidden transition-opacity duration-500 ease-in-out",
        isCodeVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-hidden={!isCodeVisible}
    >
      <pre className="h-full w-full p-4 text-xs font-code text-foreground/10 dark:text-foreground/10 whitespace-pre-wrap break-all select-none leading-relaxed">
        <code>{displayedCodeContent}</code>
      </pre>
    </div>
  );
}
