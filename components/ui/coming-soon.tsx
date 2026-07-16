import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { profile } from "@/lib/data";

export function ComingSoon({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="flex min-h-[100svh] flex-col justify-center px-6 pt-32 pb-20 md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
        <h1 className="mt-6 text-balance font-sans font-semibold tracking-tight text-[clamp(2rem,6vw,4rem)] leading-[1.05] text-foreground">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{description}</p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/"

            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Back to home
          </Link>
          <a
            href={`mailto:${profile.email}`}

            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
