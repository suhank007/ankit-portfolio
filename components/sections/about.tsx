"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline, certifications } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="about" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <h2 className="mt-4 max-w-xs text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                A decade turning raw data into decisions.
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                From India to Paris, across enterprise consulting engagements
                and PLM transformation programmes, every stop sharpened one
                obsession: making data legible enough to act on.
              </p>
            </Reveal>

            <Reveal index={1} className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">Certified</p>
              <div className="mt-3 flex flex-col gap-2">
                {certifications.map((cert) =>
                  cert.verifyUrl ? (
                    <a
                      key={cert.name}
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"

                      className="w-fit rounded-full border border-border px-4 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <span
                      key={cert.name}
                      className="w-fit rounded-full border border-border px-4 py-1.5 text-xs text-muted"
                    >
                      {cert.name}
                    </span>
                  )
                )}
              </div>
            </Reveal>
          </div>

          <div ref={ref} className="relative pl-8">
            <div className="absolute left-0 top-1 bottom-1 w-px bg-border" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-0 top-1 w-px bg-accent"
            />

            <ol className="space-y-14">
              {timeline.map((stop, i) => (
                <Reveal as="li" index={i % 4} key={stop.title} className="relative">
                  <span className="absolute -left-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background" />
                  <p className="text-xs uppercase tracking-[0.25em] text-muted">
                    {stop.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {stop.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {stop.description}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
