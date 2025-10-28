"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "motion/react"
import { useEffect, useState } from "react"

export const TypewriterEffect = ({ words = [], className, cursorClassName }) => {
  const safeWords = Array.isArray(words) ? words : [{ text: String(words ?? "") }]
  const wordsArray = safeWords.map((word) => ({
    ...word,
    text: String(word.text ?? "").split(""),
  }))

  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)
  const [currentCharIndex, setCurrentCharIndex] = useState(-1)

  const totalChars = wordsArray.reduce((acc, word) => acc + word.text.length, 0)

  useEffect(() => {
    if (isInView) {
      animate(
        ".char",
        {
          display: "inline",
          opacity: 1,
          width: "fit-content",
          scale: 1,
          filter: "blur(0px)",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeOut",
        },
      )

      const charDelay = 0.1
      for (let i = 0; i <= totalChars; i++) {
        setTimeout(
          () => {
            setCurrentCharIndex(i)
          },
          i * charDelay * 1000,
        )
      }
    }
  }, [isInView, animate, totalChars])

  const renderWords = () => {
    let charCount = 0

    return (
      <motion.span ref={scope} className="inline relative">
        {wordsArray.map((word, idx) => (
          <span key={`word-${idx}`} className="inline">
            {word.text.map((char, index) => {
              const currentCount = charCount
              charCount++

              return (
                <span key={`char-${idx}-${index}`} className="inline relative">
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                      filter: "blur(4px)",
                    }}
                    className={cn(
                      "char opacity-0 inline-block",
                      "bg-gradient-to-br from-white via-blue-100 to-purple-200 bg-clip-text text-transparent",
                      "drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]",
                      word.className,
                    )}
                  >
                    {char}
                  </motion.span>

                  {currentCharIndex === currentCount && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.95, 1, 0.95],
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className={cn(
                        "inline-block align-baseline w-[0.08em] h-[1em]",
                        "bg-gradient-to-b from-blue-400 via-blue-500 to-purple-500",
                        "shadow-[0_0_12px_rgba(59,130,246,0.8)]",
                        "rounded-sm",
                        cursorClassName,
                      )}
                    />
                  )}

                  {currentCharIndex === currentCount && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-lg"
                      style={{ transform: "scale(1.5)" }}
                    />
                  )}
                </span>
              )
            })}
            {idx < wordsArray.length - 1 ? <span>&nbsp;</span> : null}
          </span>
        ))}

        {currentCharIndex >= totalChars && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.4, 1, 0.4],
              scale: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 1.2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className={cn(
              "inline-block align-baseline w-[0.08em] h-[1em]",
              "bg-gradient-to-b from-blue-400 via-blue-500 to-purple-500",
              "shadow-[0_0_12px_rgba(59,130,246,0.8)]",
              "rounded-sm",
              cursorClassName,
            )}
          />
        )}
      </motion.span>
    )
  }

  return <span className={cn("inline align-baseline", className)}>{renderWords()}</span>
}
