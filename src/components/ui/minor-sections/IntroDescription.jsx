"use client";
import { TextGenerateEffect } from "../text/TextGenerateEffect";

const words = `Bilingual Frontend Developer (EN/ES) skilled in React, Angular, and
TypeScript. Builds scalable, responsive apps with UX-first design and
CI/CD, improving maintainability (–25% homepage code) across
client and personal projects.`;
export function IntroDescription() {
  return <TextGenerateEffect duration={2} filter={false} words={words} />;
}
