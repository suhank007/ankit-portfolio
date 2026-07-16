import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";
import { CaseStudyCard } from "@/components/sections/case-study-card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Case Studies, Ankit Parihar",
  description:
    "Case studies from enterprise BI engagements across aviation, financial services, and retail: problem, approach, architecture, and business outcome.",
};

export default function ProjectsPage() {
  return (
    <div className="px-6 pb-20 pt-32 md:px-10 md:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-5xl">
            Case studies from enterprise engagements.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Each dashboard below is an illustrative reconstruction built to demonstrate methodology,
            not the live client system. Client names and engagement context are real; figures and
            underlying data are synthetic.
          </p>
        </Reveal>

        <div className="mt-16">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
