"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";
import { useLocale } from "@/components/locale-provider";

export function FeaturedWork() {
  const { dict } = useLocale();

  return (
    <section id="work" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                {dict.featuredWork.headline}
              </h2>
              {dict.featuredWork.englishNote && (
                <p className="mt-3 text-sm text-muted">{dict.featuredWork.englishNote}</p>
              )}
            </div>
            <Link
              href="/projects"
              className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {dict.featuredWork.viewAll}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} index={i}>
              <Link
                href={`/projects#${study.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-accent"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{study.industry}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                  {study.client}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {study.outcome[0]}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground">
                  {dict.featuredWork.viewCaseStudy}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
