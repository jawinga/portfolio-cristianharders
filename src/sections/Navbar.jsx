import React, { useState, useCallback } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToElement = useCallback((hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
  ];

  function Navigation({ onItemClick }) {
    return (
      <ul className="nav-ul">
        {links.map(({ label, href }) => (
          <li className="nav-li" key={href}>
            <a
              className="nav-link"
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
      </ul>
    );
  }

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Cristian Harders
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="flex cursor-pointer w-6 h-6 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle navigation menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt={isOpen ? "Close menu" : "Open menu"}
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          style={{ maxHeight: "100vh" }}
        >
          <nav className="pb-5">
            <Navigation onItemClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;