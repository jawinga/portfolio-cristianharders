import React from "react";
import Button from "../components/ui/buttons/Button";
import SheetVisionArchitecture from "../components/ui/minor-sections/SheetVisionArchitecture";
import SheetVisionTechStack from "../components/ui/minor-sections/SheetVisionTechStack";
import { motion } from "motion/react";

const FeaturedProject = () => {
  function GithubIcon(props) {
    return (
      <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          fill="currentColor"
        />
      </svg>
    );
  }
  function VercelIcon(props) {
    return (
      <svg
        viewBox="0 -17 256 256"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <g>
          <polygon
            fill="#000000"
            points="128 0 256 221.705007 0 221.705007"
          ></polygon>
        </g>
      </svg>
    );
  }

  return (
    <section className="-mx-[calc((100vw-100%)/2)] w-screen bg-[#651011] ">
      <div className="flex flex-col gap-7 py-10">
        {/* Header Section */}
        <div className="flex flex-col py-10">
          <h3 className="text-heading text-center text-6xl">
            Featured Project
          </h3>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative inline-block text-center"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span
                className="bg-gradient-to-r from-[#fefffe] via-[#ff2a2a] to-[#ed1313] bg-clip-text text-transparent"
                style={{
                  textShadow: "0 0 40px rgba(237, 19, 19, 0.3)",
                }}
              >
                Sheet Vision
              </span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ed1313] to-transparent opacity-20 blur-3xl -z-10" />
          </motion.h1>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="c-space section-spacing">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="flex flex-col justify-start items-start max-w-xl text-left gap-2.5">
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4">
                Summary
              </h4>
              <p className="mb-3 text-neutral-200 text-xl">
                Sheet Vision is an Angular-based web application that transforms
                static Excel files into dynamic, data-driven dashboards.
              </p>
              <div className="flex lg:flex-row gap-5">
                <Button
                  label="Check it out"
                  icon={GithubIcon}
                  href="https://github.com/jawinga/sheet-vision-app"
                />
                <Button
                  label="Try it out!"
                  icon={VercelIcon}
                  href="https://sheet-vision-app-git-main-cristians-projects-399d0222.vercel.app/"
                />
              </div>
            </div>
            <div className="rounded-3xl bg-gray-600 w-[500px] h-[300px] overflow-hidden shadow-lg">
              <video
                src="/assets/demo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <SheetVisionArchitecture></SheetVisionArchitecture>
          <SheetVisionTechStack></SheetVisionTechStack>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
