// src/components/shared/GlassCard.tsx
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "p-6", // Keep existing padding
        "bg-[rgba(255,255,255,0.2)]", // User-provided background
        "rounded-[16px]", // User-provided border-radius
        "shadow-[0_4px_30px_rgba(0,0,0,0.1)]", // User-provided box-shadow
        "backdrop-blur-[5px]", // User-provided backdrop-filter
        "border border-[rgba(255,255,255,0.3)]", // User-provided border
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
