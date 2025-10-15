"use client";
import { memo, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

function rafTyping({ text, cps, onUpdate, onDone }) {
  // cps = chars per second
  const charsPerMs = cps / 1000;
  let start = 0;
  let acc = 0;
  let index = 0;
  let rafId = 0;

  const loop = (t) => {
    if (!start) start = t;
    const dt = t - start;
    start = t;

    acc += dt * charsPerMs;            // how many chars to reveal this frame
    const step = Math.max(1, Math.floor(acc)); // chunk size (>=1)
    acc -= step;

    if (index < text.length) {
      index = Math.min(text.length, index + step);
      onUpdate(text.slice(0, index));
      rafId = requestAnimationFrame(loop);
    } else {
      onUpdate(text);
      onDone?.();
    }
  };

  rafId = requestAnimationFrame(loop);
  return () => cancelAnimationFrame(rafId);
}

export const TypingAnimation = memo(function TypingAnimation({
  children,
  className,
  delay = 0,          // ms start delay
  cps = 30,           // chars per second (lower == smoother/cheaper)
  start = true,
  once = true,
}) {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const [txt, setTxt] = useState("");
  const hasTypedRef = useRef(false);

  useEffect(() => {
    if (!start) return;
    if (once && hasTypedRef.current) return;

    let cancel = () => {};
    const t = setTimeout(() => {
      cancel = rafTyping({
        text: children,
        cps,
        onUpdate: setTxt,
        onDone: () => (hasTypedRef.current = true),
      });
    }, delay);

    return () => {
      clearTimeout(t);
      cancel();
    };
  }, [start, delay, children, cps, once]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {txt}
    </motion.span>
  );
});