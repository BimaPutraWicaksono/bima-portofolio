"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(`#${visible.target.id}`);
        }
      },
      { threshold: [0.35, 0.5, 0.7], rootMargin: "-10% 0px -35% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e0bbe4]/35 bg-white/65 shadow-[0_8px_30px_rgba(160,140,190,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1300px] items-center justify-between px-4 py-4 sm:px-6 lg:px-[6vw]">
        <a href="#home" className="reference-gradient text-lg font-bold tracking-[0.01em] sm:text-xl">
          BIMA
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                  className={`relative px-0.5 py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-[#e0bbe4] after:to-[#cde7f0] after:transition-all hover:text-[#a98fd9] hover:after:w-full ${
                    isActive ? "text-[#a98fd9] after:w-full" : "text-[#6d6875]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-zinc-100 transition-colors hover:border-white/20 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-white transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded-full bg-white transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 rounded-full bg-white transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-label="Mobile navigation"
            className="overflow-hidden border-t border-white/10 bg-[#090b10] md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-2 text-sm transition-colors ${
                      isActive ? "bg-white/8 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
