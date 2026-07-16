"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: trackRef });

  return (
    <section id="experience" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <h2 className="max-w-xl text-balance font-sans font-semibold tracking-tight text-4xl leading-tight text-foreground md:text-5xl">
            Enterprise engagements, end to end.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14">
        <div
          ref={trackRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:px-10"
        >
          {experience.map((role, i) => (
            <motion.article
              key={`${role.company}-${i}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="w-[85vw] flex-shrink-0 snap-start rounded-3xl border border-border bg-surface p-8 md:w-[440px]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-muted">{role.period}</p>
              <h3 className="mt-3 font-sans font-semibold tracking-tight text-2xl text-foreground">{role.company}</h3>
              <p className="mt-1 text-sm text-accent">{role.role}</p>
              <p className="mt-1 text-xs text-muted">{role.location}</p>
              <ul className="mt-6 space-y-3">
                {role.impact.map((line, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
          <div className="w-px flex-shrink-0 md:w-4" aria-hidden />
        </div>

        <div className="mx-6 h-px bg-border md:mx-10">
          <motion.div
            style={{ scaleX: scrollXProgress }}
            className="h-full origin-left bg-accent"
          />
        </div>
      </div>
    </section>
  );
}
