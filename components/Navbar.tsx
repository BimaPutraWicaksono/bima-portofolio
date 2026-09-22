"use client";

import { AnimatePresence, motion } from "framer-motion";
import { startTransition, useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [theme, setTheme] = useState<"blue" | "premium">("blue");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const nextTheme = savedTheme === "premium" ? "premium" : "blue";

    startTransition(() => setTheme(nextTheme));
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  const changeTheme = (nextTheme: "blue" | "premium") => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
  };

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
    <header className="theme-navbar sticky top-0 z-50">
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
                          className={`theme-nav-link relative px-0.5 py-1 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-[var(--primary)] after:transition-all hover:after:w-full ${
                            isActive ? "is-active after:w-full" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="theme-switcher" aria-label="Color theme selector" role="group">
          <button
            type="button"
            className={`theme-switcher__button ${theme === "blue" ? "is-active" : ""}`}
            aria-pressed={theme === "blue"}
            onClick={() => changeTheme("blue")}
          >
            Blue
          </button>
          <button
            type="button"
            className={`theme-switcher__button ${theme === "premium" ? "is-active" : ""}`}
            aria-pressed={theme === "premium"}
            onClick={() => changeTheme("premium")}
          >
            Premium
          </button>
        </div>

        <button
          type="button"
          className="theme-menu-button inline-flex items-center justify-center rounded-full p-2 transition-colors md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 rounded-full bg-[var(--primary)] transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 rounded-full bg-[var(--primary)] transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-0.5 rounded-full bg-[var(--primary)] transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
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
            className="theme-mobile-menu overflow-hidden md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`theme-mobile-link rounded-xl px-3 py-2 text-sm transition-colors ${
                      isActive ? "is-active" : ""
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
