"use client"
import { CodeBlock } from "./CodeBlock"

export function CodeEducation() {
  const code = `
interface Education {
  degree: string;
  university: string;
  duration: string;
  averageGrade: number;
  focus: string[];
}

const education: Education = {
  degree: "Técnico Superior en Desarrollo de Aplicaciones Web",
  university: "Universidad Europea de Madrid",
  duration: "October 2023 – June 2025",
  averageGrade: 9.3,
  focus: [
    "Frontend (React, Angular, Tailwind, UX/UI)",
    "Backend (Java, Spring Boot, PHP, MySQL)",
    "CI/CD, Docker, GitHub Actions"
  ],
};
`

  return (
    <div className="max-w-3xl mx-auto w-full relative group">
      <div
        className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 
        rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      <div
        className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 
        rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative">
        <CodeBlock language="tsx" filename="education.ts" highlightLines={[2, 8, 10, 13, 17]} code={code} />
      </div>
    </div>
  )
}
