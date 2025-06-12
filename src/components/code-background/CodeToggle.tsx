// src/components/code-background/CodeToggle.tsx
"use client";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useCodeBackground } from "@/hooks/use-code-background";
import { CodeXml } from "lucide-react"; // Changed icon to CodeXml for better relevance

export function CodeToggle() {
  const { isCodeVisible, toggleCodeVisibility } = useCodeBackground();

  return (
    <div className="fixed bottom-5 right-5 z-50 p-3 bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(30,30,40,0.25)] backdrop-blur-md border border-[rgba(255,255,255,0.2)] dark:border-[rgba(255,255,255,0.1)] rounded-xl shadow-lg flex items-center space-x-2">
      <CodeXml className="h-5 w-5 text-primary dark:text-accent" />
      <Label htmlFor="code-visibility-switch" className="text-sm font-medium text-foreground">
        Code Background
      </Label>
      <Switch
        id="code-visibility-switch"
        checked={isCodeVisible}
        onCheckedChange={toggleCodeVisibility}
        aria-label="Toggle background code visibility"
      />
    </div>
  );
}
