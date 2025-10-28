// VisibilitySection.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import clsx from "clsx";

export default function VisibilitySection({
  children,
  className,
  amount = 0.2,
  once = true,
  margin = "-10% 0px -10% 0px",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount, margin }); // framer 2.0 API
  const [hasEntered, setHasEntered] = useState(false);
  const [mounted, setMounted] = useState(false);

  // avoid hydration flash: don’t animate until mounted
  useEffect(() => setMounted(true), []);

  // latch once to avoid flapping
  useEffect(() => {
    if (inView) setHasEntered(true);
  }, [inView]);

  const shouldShow = once ? hasEntered : inView;

  return (
    <motion.section
      ref={ref}
      className={clsx(
        "will-change-[opacity,transform] transform-gpu",
        className
      )}
      // prevent “initial hide” on SSR → client mismatch
      initial={false}
      animate={
        mounted && shouldShow
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 16 } // stays softly hidden before mount
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}