import { useRef } from "react";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeamsWithCollision";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { LampContainer } from "../components/LampContainer";

const About = () => {
  const grid2Container = useRef();

  const intro =
    `Bilingual Frontend Developer (EN/ES) skilled in React, Angular, and
TypeScript. Build scalable, responsive apps with UX-first design and
CI/CD, improving maintainability across
client and personal projects.`;

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