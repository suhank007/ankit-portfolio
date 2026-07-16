"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { profile, heroHeadline, heroSub } from "@/lib/data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CredibilityPanel } from "@/components/sections/credibility-panel";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24 pb-16 md:px-10"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span>{profile.location}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{profile.experienceYears} Years Experience</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            {heroSub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton as="a" href={profile.resumeUrl} download>
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors">
                <Download className="h-4 w-4" strokeWidth={1.5} />
                Download Resume
              </span>
            </MagneticButton>
            <MagneticButton as="a" href={`mailto:${profile.email}?subject=Let's talk`}>
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent">
                Book a Call
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <CredibilityPanel />
        </motion.div>
      </div>
    </section>
  );
}
