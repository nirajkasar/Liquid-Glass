// src/contexts/CodeBackgroundContext.tsx
"use client";

import type { ReactNode } from 'react';
import { createContext, useState, useCallback, useEffect } from 'react';

interface CodeBackgroundContextType {
  isCodeVisible: boolean;
  toggleCodeVisibility: () => void;
  sourceCode: string | null;
}

export const CodeBackgroundContext = createContext<CodeBackgroundContextType | undefined>(undefined);

export const CodeBackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [isCodeVisible, setIsCodeVisible] = useState(true);
  const [sourceCode, setSourceCode] = useState<string | null>(null);

  const toggleCodeVisibility = useCallback(() => {
    setIsCodeVisible(prev => !prev);
  }, []);

  useEffect(() => {
    // Fetch HTML source code on client-side
    if (typeof window !== 'undefined') {
      // A short delay to ensure the page is mostly rendered
      // to get a more complete source.
      const timer = setTimeout(() => {
        try {
          const html = document.documentElement.outerHTML;
          // Basic formatting: indent lines for readability
          const formattedHtml = html.split('\n').map(line => line.trimStart()).join('\n');
          setSourceCode(formattedHtml);
        } catch (error) {
          console.error("Failed to get document source:", error);
          setSourceCode("Error fetching source code.");
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);


  return (
    <CodeBackgroundContext.Provider value={{ isCodeVisible, toggleCodeVisibility, sourceCode }}>
      {children}
    </CodeBackgroundContext.Provider>
  );
};
