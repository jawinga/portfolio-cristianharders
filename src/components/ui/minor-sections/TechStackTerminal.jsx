// TechStackTerminal.jsx
"use client";
// import { Terminal, AnimatedSpan } from "@/components/Terminal";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { ColourfulText } from "../text/ColourfulText";
import { LampContainer } from "../misc/LampContainer";
import VisibilitySection from "./VisibilitySection";
import { Terminal } from "../minor-sections/Terminal";
import { AnimatedSpan } from "../minor-sections/Terminal";
import { TypingAnimation } from "../text/TypingAnimation";

const LogoCarousel = lazy(() => import("../misc/LogoCarousel")); // lazy

export default function TechStackTerminal() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          // mount carousel a bit later so typing is smooth
          const t = setTimeout(() => setShowCarousel(true), 500);
          observer.unobserve(node);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <VisibilitySection className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-6 pt-20">
      <LampContainer>
        <h2 className="text-heading text-center text-6xl" id="stack">
          Technologies that <ColourfulText text={"Power "} /> my work
        </h2>

        <div ref={sentinelRef} className="h-px w-full" aria-hidden />

        <Terminal className="mx-auto my-10 w-full max-w-5xl" id="terminal">
          <TypingAnimation start={shouldAnimate} delay={500} cps={36}>
            $ cristian stack --show frontend
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={1000}>
              Angular 🅰️, TypeScript 🟦, RxJS 🟣, React ⚛️, Next.js 🔺, SCSS 🎨,
              Tailwind CSS 💨
            </AnimatedSpan>
          )}

          <TypingAnimation start={shouldAnimate} delay={2200} cps={36}>
            $ cristian stack --show backend
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={2500}>
              Java (Spring Boot) ☕, Node.js (Express) 🟩, REST APIs 📉, MySQL
              🗄️, MongoDB 🦖 , JWT 🔐
            </AnimatedSpan>
          )}

          <TypingAnimation start={shouldAnimate} delay={3300} cps={36}>
            $ cristian stack --show state
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={3600}>
              Context API ⚙️, useReducer 🔁, Zod ✅
            </AnimatedSpan>
          )}

          <TypingAnimation start={shouldAnimate} delay={4300} cps={36}>
            $ cristian stack --show tools
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={4600}>
              Git/GitHub 🧠, Github Actions 🐈, Docker 🐳, Netlify/Vercel 🚀,
              npm/pnpm/yarn 📦, Vite ⚡, ESLint/Prettier ✨, VSCode 💻, IntelliJ
              ☕
            </AnimatedSpan>
          )}

          <TypingAnimation start={shouldAnimate} delay={5400} cps={36}>
            $ cristian stack --show design
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={5700}>
              Figma 🎨, Adobe XD 🧠, UX & accessibility ♿, prototyping 🧩,
              usability testing 🔍, WCAG 2.2 AA
            </AnimatedSpan>
          )}

          <TypingAnimation start={shouldAnimate} delay={6500} cps={36}>
            $ cristian stack --describe
          </TypingAnimation>
          {shouldAnimate && (
            <AnimatedSpan delay={6800}>
              Building reliable, scalable, and user-centered web applications ✨
            </AnimatedSpan>
          )}
        </Terminal>

        {showCarousel && (
          <Suspense fallback={null}>
            <div className="hidden lg:block w-full">
              <LogoCarousel columnCount={3} />
            </div>
            <div className="hidden md:block lg:hidden w-full">
              <LogoCarousel columnCount={2} />
            </div>
            <div className="block md:hidden w-full">
              <LogoCarousel columnCount={1} />
            </div>
          </Suspense>
        )}
      </LampContainer>
    </VisibilitySection>
  );
}
