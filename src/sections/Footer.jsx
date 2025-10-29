import { links } from "../constants/links";
import { useCallback } from "react";

const Footer = ({ onItemClick }) => {
  function LinkedInIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          fill="white"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
        />
      </svg>
    );
  }

  const scrollToElement = useCallback((hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="c-space section-spacing min-h-[60vh]">
      <div className="h-2 w-full bg-[#fefffece] rounded-3xl mt-20 mb-20"></div>
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#fefffece] mb-3 sm:mb-4">
              Say hello
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4">
              cristianharders@gmail.com
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#fefffece] mb-3 sm:mb-4">
              Give me a ring
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4">
              +34 603 01 12 56
            </h2>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#fefffece] mb-3 sm:mb-4">
              Let's connect
            </h3>
            <a
              className="text-3xl flex flex-row align-middle items-center gap-3 sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4"
              href="https://www.linkedin.com/in/cristianharders/"
            >
              <LinkedInIcon></LinkedInIcon> in/cristianharders
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          {links.map(({ label, href }) => (
            <li className="nav-ul justify-items-start items-start" key={href}>
              <a
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#fefffe] mb-3 sm:mb-4"
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement(href);
                  onItemClick?.();
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
