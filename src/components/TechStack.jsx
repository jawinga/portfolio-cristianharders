"use client";

import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Frameworks } from "./Frameworks";

export function TechStack() {
  const code = `export const techStack = {
  frontend: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS", "SCSS", "Bootstrap"],
  backend: ["Java (Spring Boot)", "Node.js", "PHP", "MySQL", "JWT"],
  state-management: ["Context API", "useReducer", "Zod"],
  tools: ["Git", "GitHub", "Docker", "Vite", "Netlify", "Vercel", "ESLint", "Prettier", "npm", "pnpm", "Yarn", "VSCode", "IntelliJ"],
};

export function describeStack() {
  return "Building modern, scalable, and intuitive web experiences ✨";
}
`;

return (
    <div className="my-20">
  <h2 className="text-heading text-center mb-10">My Current Tech Stack</h2>

  <div
    className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8"
  >
    
      {/* <CodeBlock
        language="typescript"
        filename="stack.config.ts"
        highlightLines={[2, 3, 4, 8, 11]}
        code={code}
      /> */}

    
  </div>
</div>
);
}