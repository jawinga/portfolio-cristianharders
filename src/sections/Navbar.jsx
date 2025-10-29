"use client";

import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { links } from "../constants/links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToElement = useCallback((hash) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  function Navigation({ onItemClick }) {
    return (
      <ul className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              className="relative text-neutral-300 hover:text-white transition-all duration-300 text-sm sm:text-base font-medium group"
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollToElement(href);
                onItemClick?.();
              }}
            >
              {label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href="/"
              className="relative text-xl sm:text-2xl font-bold transition-all duration-300 group"
            >
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Cristian Harders
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 sm:hidden"
              aria-label="Toggle navigation menu"
            >
              <img
                src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
                alt={isOpen ? "Close menu" : "Open menu"}
                className="w-5 h-5"
              />
            </button>

            {/* Desktop navigation */}
            <nav className="hidden sm:flex">
              <Navigation />
            </nav>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="sm:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="px-4 py-6">
            <Navigation onItemClick={() => setIsOpen(false)} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
