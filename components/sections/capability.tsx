"use client";

import { capabilityMap, industries } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Capability() {
  return (
    <section id="capability" className="px-6 py-20 md:px-10 md:py-28">
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

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilityMap.map((group, i) => (
            <Reveal
              key={group.domain}
              index={i}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {group.domain}
                </h3>
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              </div>
              <p className="mt-2 text-sm text-muted">{group.description}</p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal index={1} className="mt-10 border-t border-border pt-10">
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
