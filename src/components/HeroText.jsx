import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"
import { TypewriterEffect } from "./TypewriterEffect"

const HeroText = () => {
  const words = ["Intuitive", "Scalable", "Modern", "Secure"]
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className="z-10 mt-20 text-center md:mt-40 sm:mt-50 md:text-left rounded-3xl bg-clip-text">
      {/*Desktop View*/}

      <div className="flex-col hidden md:flex c-space gap-10">
        <motion.h1
          className="text-7xl font-bold bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Hey, I'm <TypewriterEffect words={[{ text: "Cristian" }]} />
        </motion.h1>

        <div className="flex flex-col items-start gap-2">
          <motion.div
            className="text-5xl font-light text-neutral-400 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            I transform ideas into
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <FlipWords words={words} className="font-black text-white text-9xl drop-shadow-2xl" />
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />
          </motion.div>

          <motion.p
            className="text-5xl font-light text-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            digital experiences
          </motion.p>
        </div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="group flex items-center gap-3 px-8 py-4 text-lg font-medium bg-white text-black rounded-full w-fit hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-2xl"
        >
          Explore My Work
          <motion.svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </motion.svg>
        </motion.a>
      </div>

      {/*Mobile View*/}
      <div className="flex flex-col space-y-8 md:hidden">
        <motion.p
          className="text-5xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <TypewriterEffect words={[{ text: "Cristian" }]} />
        </motion.p>

        <motion.p
          className="text-2xl font-light text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I transform ideas into
        </motion.p>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <FlipWords words={words} className="font-black text-white text-7xl drop-shadow-2xl" />
          </motion.div>
          <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />
        </div>

        <motion.p
          className="text-3xl font-light text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          digital experiences
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileTap={{ scale: 0.95 }}
          href="#about"
          className="flex items-center justify-center gap-3 px-8 py-4 text-base font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 shadow-lg mx-auto"
        >
          Explore My Work
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}

export default HeroText
