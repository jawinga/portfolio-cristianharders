"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ---------------- HoverBorderGradient ---------------- */
export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const i = directions.indexOf(currentDirection);
    return clockwise
      ? (i - 1 + directions.length) % directions.length
      : (i + 1) % directions.length;
  };

  const map = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    BOTTOM: "radial-gradient(20.7% 50% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
    RIGHT: "radial-gradient(16.2% 41.2% at 100% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
  };
  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #3275F8 0%, rgba(255,255,255,0) 100%)";

  useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setDirection((prev) => {
        const dirs = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        return dirs[rotateDirection(prev)];
      });
    }, duration * 1000);
    return () => clearInterval(id);
  }, [hovered, duration]);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex w-fit content-center items-center justify-center rounded-full p-[2px] overflow-visible",
        "bg-transparent", // outer is just the border holder
        containerClassName
      )}
      {...props}
    >
      {/* Animated border layer */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] z-[1] overflow-hidden"
        style={{ filter: "blur(2px)" }}
        initial={{ background: map[direction] }}
        animate={{ background: hovered ? [map[direction], highlight] : map[direction] }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />

      {/* Button body */}
      <div
        className={cn(
          "relative z-[2] rounded-[inherit] px-4 py-2",
          "bg-white text-black dark:bg-black dark:text-white",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}

/* ---------------- Icon (fixed JSX attrs) ---------------- */
const AceternityLogo = () => {
  return (
    <svg
      className="hover:text-blue-700 w-6 h-6 text-gray-900 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

/* ---------------- The Button ---------------- */
export function HoverButton() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient containerClassName="rounded-full" as="button">
        <div className="flex items-center space-x-2">
          <AceternityLogo />
          <span>Download Certificate of Higher Education</span>
        </div>
      </HoverBorderGradient>
    </div>
  );
}