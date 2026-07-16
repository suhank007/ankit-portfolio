"use client";

import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { CaseStudy } from "@/lib/data";

const techLogos: Record<string, string> = {
  "Power BI": "/logos/powerbi.svg",
  "Microsoft Azure": "/logos/azure.svg",
  "Azure Data Factory": "/logos/azure.svg",
  Databricks: "/logos/databricks.svg",
  Python: "/logos/python.svg",
  Snowflake: "/logos/snowflake.svg",
  Tableau: "/logos/tableau.svg",
  dbt: "/logos/dbt.svg",
};

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <Reveal
      index={index % 3}
      className="scroll-mt-28 border-t border-border py-14 first:border-t-0 first:pt-0"
      id={study.slug}
    >
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {study.industry} · {study.period}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
            {study.client}
          </h3>
          <p className="mt-1 text-sm text-muted">{study.role}</p>

          <p className="mt-6 text-sm leading-relaxed text-muted">{study.problem}</p>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Approach</p>
            <ul className="mt-3 space-y-2">
              {study.approach.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.technology.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {techLogos[tech] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={techLogos[tech]} alt="" aria-hidden className="h-3.5 w-3.5" />
                )}
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6">
            {study.outcome.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-foreground">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              src={study.dashboardFile}
              title={`${study.client} dashboard reconstruction`}
              loading="lazy"
              className="h-[520px] w-full bg-background"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-muted">
            <span>Illustrative reconstruction with synthetic data, not the live production system.</span>
            <a
              href={study.dashboardFile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1 underline-offset-4 hover:text-foreground hover:underline"
            >
              Open full view
              <ExternalLink className="h-3 w-3" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
