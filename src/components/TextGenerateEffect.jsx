"use client";
import React, { useEffect, useMemo, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import { useRef } from "react";

export const TextGenerateEffect = ({
  words = "",            
  className,
  filter = true,
  duration = 0.5,
  sizeClass = "text-2xl",
  threshold = 0.5,

}) => {
  const [scope, animate] = useAnimate();

  const [shouldAnimate, setShouldAnimate] = useState(false);

  const containerRef = useRef(null);

  const wordsArray = useMemo(
    () => (typeof words === "string" ? words.trim().split(/\s+/) : []),
    [words]
  );

 useEffect(() => {
  if (!shouldAnimate) return;
  animate(
    "span",
    { opacity: 1, filter: filter ? "blur(0px)" : "none" },
    { duration: duration ?? 1, delay: stagger(0.2) }
  );
}, [shouldAnimate, animate, filter, duration]);

  
  useEffect(() => {
  const node = containerRef.current;
  if (!node) return;

  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldAnimate(true);
        io.disconnect(); 
      }
    },
    { threshold }
  );

  io.observe(node);
  return () => io.disconnect();
}, [threshold]);


  return (
    <div className={cn("font-bold", className)} ref={containerRef}>
      <div className="mb-0 mt-0">
        <motion.div
          ref={scope}
          className={cn(
            "leading-snug tracking-wide text-white dark:text-white",
            sizeClass
          )}
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              className="opacity-0"
              style={{ filter: filter ? "blur(10px)" : "none" }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};