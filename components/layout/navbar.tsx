"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "@/components/locale-provider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const reduceMotion = useReducedMotion();
  const { dict } = useLocale();

  const sectionLinks = [
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.skills, href: "#skills" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.services, href: "#services" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  const routeLinks = [
    { label: dict.nav.projects, href: "/projects", highlight: false },
    { label: dict.nav.resume, href: "/resume", highlight: true },
  ];

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 32);
  });

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-4 top-4 z-50 md:inset-x-6 md:top-5"
      >
        <div
          className={cn(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-transparent px-5 transition-all duration-500",
            scrolled &&
              "border-border bg-surface/80 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-xl"
          )}
        >
          <Link href="#hero" className="text-[15px] font-semibold tracking-tight text-foreground">
            Ankit Parihar
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {sectionLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            {routeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors",
                  link.highlight
                    ? "rounded-full bg-foreground px-4 py-1.5 text-background hover:opacity-85"
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-background px-8 lg:hidden"
          >
            {[...sectionLinks, ...routeLinks].map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-4xl font-semibold tracking-tight text-foreground"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
