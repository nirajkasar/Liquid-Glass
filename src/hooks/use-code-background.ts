// src/hooks/use-code-background.ts
"use client";

import { useContext } from 'react';
import { CodeBackgroundContext } from '@/contexts/CodeBackgroundContext';

export const useCodeBackground = () => {
  const context = useContext(CodeBackgroundContext);
  if (context === undefined) {
    throw new Error('useCodeBackground must be used within a CodeBackgroundProvider');
  }
  return context;
};
