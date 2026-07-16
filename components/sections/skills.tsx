"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills, type SkillNode } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const categories = Array.from(new Set(skills.map((s) => s.category)));

export function Skills() {
  const [active, setActive] = useState<SkillNode>(skills[0]);

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
      >
        <defs>
          <pattern id="skills-grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="var(--muted)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#skills-grid)" />
      </svg>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-xl text-balance font-sans font-semibold tracking-tight text-4xl leading-tight text-foreground md:text-5xl">
            A stack built across analytics, platform, and automation.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            {categories.map((category, ci) => (
              <Reveal key={category} index={ci}>
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted">
                  {category}
                </p>
                <div className="flex flex-wrap gap-3">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <button
                        key={skill.name}
                        type="button"
                        onMouseEnter={() => setActive(skill)}
                        onFocus={() => setActive(skill)}
                        onClick={() => setActive(skill)}
                        className={cn(
                          "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300",
                          active.name === skill.name
                            ? "border-accent bg-accent-soft text-foreground shadow-[0_0_0_1px_var(--accent)]"
                            : "border-border text-muted hover:border-accent hover:text-foreground"
                        )}
                      >
                        {skill.logo && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={skill.logo} alt="" aria-hidden className="h-4 w-4" />
                        )}
                        {skill.name}
                      </button>
                    ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-border bg-surface p-8"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.25em] text-accent">
                    {active.category}
                  </p>
                  {active.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={active.logo} alt="" aria-hidden className="h-7 w-7" />
                  )}
                </div>
                <h3 className="mt-3 font-sans font-semibold tracking-tight text-3xl text-foreground">{active.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{active.blurb}</p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                  <span>Experience</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-foreground">{active.years}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
