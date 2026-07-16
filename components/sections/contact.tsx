"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { LocationIcon } from "@/components/ui/location-icon";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-accent-soft blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Get in touch</p>
        </Reveal>
        <Reveal index={1}>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance font-sans font-semibold tracking-tight text-[clamp(2.25rem,6vw,5rem)] leading-[1.05] text-foreground">
            Let&rsquo;s turn your data into a decision advantage.
          </h2>
        </Reveal>

        <Reveal index={2}>
          <div className="mt-12 flex justify-center">
            <MagneticButton
              as="button"
              strength={0.25}
              type="button"
              onClick={copyEmail}
              className="group flex cursor-pointer items-center gap-3 rounded-full border border-border px-7 py-4 text-lg text-foreground transition-colors hover:border-accent"
            >
              {profile.email}
              {copied ? (
                <Check className="h-4 w-4 text-accent" strokeWidth={1.5} />
              ) : (
                <Copy className="h-4 w-4 text-muted transition-colors group-hover:text-accent" strokeWidth={1.5} />
              )}
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal index={3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}?subject=Let's talk`}

              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              Book a Call
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"

              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"

              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
              aria-label="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-muted">
              <LocationIcon location={profile.location} className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
