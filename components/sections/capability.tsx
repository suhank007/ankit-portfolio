"use client";

import { Factory, Gem, HeartPulse, Landmark, Plane } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLocale } from "@/components/locale-provider";

const industryIcons = [Plane, Factory, Gem, HeartPulse, Landmark];

export function Capability() {
  const { dict } = useLocale();
  return (
    <section id="capability" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
            {dict.capability.headline}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {dict.capability.sub}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {dict.capability.domains.map((group, i) => (
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
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {dict.capability.industriesLabel}
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {dict.capability.industries.map((industry, i) => {
              const Icon = industryIcons[i];
              return (
                <span
                  key={industry}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground"
                >
                  {Icon && <Icon className="h-4 w-4 text-accent" strokeWidth={1.5} />}
                  {industry}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
