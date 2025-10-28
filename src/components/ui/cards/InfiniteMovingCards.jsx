"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

export const InfiniteMovingCards = ({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) => {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    if (!scrollerRef.current || scrollerRef.current.dataset.cloned === "true") return

    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      scrollerRef.current.appendChild(duplicatedItem)
    })
    scrollerRef.current.dataset.cloned = "true"

    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-direction", direction === "left" ? "forwards" : "reverse")
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s",
      )
    }

    setStart(true)
  }, [direction, speed])

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.title ?? idx}
            className="
              relative w-[350px] h-[200px] max-w-full shrink-0 rounded-2xl overflow-hidden
              md:w-[450px] md:h-[220px]
              group cursor-pointer
              transition-all duration-500 ease-out
              hover:scale-[1.02] hover:shadow-2xl
            "
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label={`${item.title} by ${item.provider}`}
          >
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 
              group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-2xl
                ring-1 ring-white/20 group-hover:ring-white/40
                shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                transition-all duration-500"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100
                bg-gradient-to-br from-white/10 via-transparent to-transparent
                transition-opacity duration-500"
            />

            <blockquote className="relative z-10 px-6 py-6 md:px-8 md:py-7 h-full flex flex-col justify-end">
              <span
                className="text-sm font-semibold text-white/70 uppercase tracking-wider
                group-hover:text-white/90 transition-colors duration-300"
              >
                {item.provider}
              </span>

              <h3
                className="mt-3 text-xl md:text-2xl font-bold text-white leading-tight
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]
                group-hover:drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]
                transition-all duration-300"
              >
                {item.title}
              </h3>

              <div
                className="mt-4 h-1 w-16 bg-gradient-to-r from-white/60 to-transparent rounded-full
                group-hover:w-24 group-hover:from-white/80 transition-all duration-500"
              />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}
