"use client";
import { memo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { TypingAnimation } from "./TypingAnimation";

export const AnimatedSpan = memo(function AnimatedSpan({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25, delay: delay / 1000 }}
      className={cn("grid text-sm font-normal tracking-tight", className)}
    >
      {children}
    </motion.div>
  );
});

export const Terminal = memo(function Terminal({ children, className }) {
  return (
    <div
      className={cn(
        "z-0 w-full rounded-xl border border-border bg-background",
        "max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl",
        "max-h-[60vh] md:max-h-[400px]",
        "overflow-hidden will-change-transform",
        className
      )}
    >
      <div className="flex flex-col gap-y-2 border-b border-border p-3 sm:p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500" />
          <div className="h-2 w-2 rounded-full bg-yellow-500" />
          <div className="h-2 w-2 rounded-full bg-green-500" />
        </div>
      </div>

      <div
        className="
          p-3 sm:p-4 font-mono text-[11px] sm:text-xs md:text-sm leading-relaxed
          overflow-auto whitespace-pre-wrap md:whitespace-pre break-words
        "
        role="region"
        aria-label="Terminal output"
      >
        <code className="grid gap-y-1">{children}</code>
      </div>
    </div>
  );
});