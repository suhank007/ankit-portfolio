"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { certifications, education } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { LogoBadge } from "@/components/ui/logo-badge";
import { useLocale } from "@/components/locale-provider";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const { dict } = useLocale();

  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div className="md:sticky md:top-32 md:self-start">
            <Reveal>
              <h2 className="mt-4 max-w-xs text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                {dict.about.headline}
              </h2>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
                {dict.about.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="w-fit rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-xs text-foreground">
                  {dict.about.residency}
                </span>
                <span className="w-fit rounded-full border border-border px-3 py-1.5 text-xs text-muted">
                  {dict.about.relocation}
                </span>
              </div>
            </Reveal>

            <Reveal index={1} className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                {dict.about.educationLabel}
              </p>
              <div className="mt-3 flex flex-col gap-3">
                {dict.about.education.map((edu, i) => (
                  <div
                    key={edu.degree}
                    className="w-fit rounded-2xl border border-border bg-surface px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <LogoBadge
                        logo={education[i]?.logo}
                        initials={education[i]?.initials ?? ""}
                        name={edu.institution}
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{edu.degree}</p>
                        <p className="text-xs text-muted">
                          {edu.institution} · {education[i]?.period}
                        </p>
                      </div>
                    </div>
                    {edu.note && (
                      <p className="mt-2 text-xs text-foreground">{edu.note}</p>
                    )}
                    {edu.honors && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {edu.honors.map((honor) => (
                          <span
                            key={honor}
                            className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                          >
                            {honor}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal index={2} className="mt-10">
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                {dict.about.certifiedLabel}
              </p>
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

          <div ref={ref} className="relative ps-8">
            <div className="absolute start-0 top-1 bottom-1 w-px bg-border" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute start-0 top-1 w-px bg-accent"
            />

            <ol className="space-y-14">
              {dict.about.timeline.map((stop, i) => (
                <Reveal as="li" index={i % 4} key={stop.title} className="relative">
                  <span className="absolute -start-8 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-accent bg-background rtl:translate-x-1/2" />
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
