import { useRef } from "react";
import { BackgroundBeamsWithCollision } from "../components/ui/misc/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "../components/ui/text/TextGenerateEffect";
import { LampContainer } from "../components/ui/misc/LampContainer";

const About = () => {
  const intro = `Bilingual Frontend Developer (EN/ES) skilled in React,
   Angular, and TypeScript. I build scalable, responsive applications
    with a UX-first approach and CI/CD best practices, improving
     maintainability by 25% across client and personal projects.`;

  return (
    <BackgroundBeamsWithCollision className="flex flex-col c-space section-spacing py-30">
      <section id="about" className="relative c-space">
        <div className="mx-auto max-w-7xl min-h-fit">
          <div className="mt-6 md:mt-8 flex align-baseline justify-center">
            <TextGenerateEffect
              words={intro}
              sizeClass="text-4xl md:text-6xl"
              duration={2}
              className="text-neutral-300 text-base/10 leading-relaxed"
            />
          </div>

          {/* Add more content below as needed */}
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default About;
