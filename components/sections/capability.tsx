"use client";

import { competencies, industries } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Capability() {
  return (
    <section id="capability" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            Business transformation first. Data platforms second.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Nine years leading cross-functional programmes by aligning business
            priorities, engaging senior stakeholders, and establishing governance
            that survives contact with a real transformation.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item, i) => (
            <Reveal key={item} index={i % 6} className="border-t border-border pt-4">
              <p className="text-base font-medium text-foreground">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal index={1} className="mt-16 border-t border-border pt-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Industries served</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground"
              >
                {industry}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
