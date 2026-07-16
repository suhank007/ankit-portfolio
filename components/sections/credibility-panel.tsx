"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { achievements, profile } from "@/lib/data";
import { RoleTicker } from "@/components/sections/role-ticker";
import { AnimatedStat } from "@/components/ui/animated-stat";

export function CredibilityPanel() {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur-sm md:p-8">
      <div className="flex items-center gap-5">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-border bg-background sm:h-24 sm:w-24 md:h-28 md:w-28">
          <Image
            src={profile.photo}
            alt={profile.name}
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="text-lg font-semibold tracking-tight text-foreground">{profile.name}</p>
          <RoleTicker />
        </div>
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8">
        {achievements.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              <AnimatedStat value={item.value} />
            </dt>
            <dd className="mt-2 text-xs leading-relaxed text-muted">{item.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email Ankit Parihar"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <Mail className="h-4 w-4" strokeWidth={1.5} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Ankit Parihar on LinkedIn"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <LinkedinIcon className="h-4 w-4" />
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="Ankit Parihar on GitHub"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
