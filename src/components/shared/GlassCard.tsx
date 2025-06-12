// src/components/shared/GlassCard.tsx
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-xl shadow-xl", // Increased rounding and shadow for more pop
        "bg-background/15 dark:bg-background/25", // Use themed background with opacity
        "backdrop-blur-lg", // Increased blur
        "border border-[rgba(255,255,255,0.2)] dark:border-[rgba(255,255,255,0.1)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
