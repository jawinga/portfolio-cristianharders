import React from "react";
import { motion } from "motion/react";

const styleContainer = {
  position: "relative",
  width: 50,
  height: 50
};

const styleSpan = {
  display: "block",
  width: 50,
  height: 50,
  border: "7px solid #eee",
  borderTop: "7px solid #2D3134",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0
};

const spinTransition = {
  repeat: Infinity,
  ease: "easeInOut",
  // width: ['100%', '50%'],
  duration: 1
};

export const Spinner = () => {
  return (
    <div style={styleContainer}>
      <motion.span
        style={styleSpan}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
};
