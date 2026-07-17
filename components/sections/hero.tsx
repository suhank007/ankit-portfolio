"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { useLocale } from "@/components/locale-provider";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { CredibilityPanel } from "@/components/sections/credibility-panel";
import { HeroNetwork } from "@/components/sections/hero-network";
import { LocationIcon } from "@/components/ui/location-icon";
import { TiltCard } from "@/components/ui/tilt-card";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { dict } = useLocale();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24 pb-16 md:px-10"
    >
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute -left-1/4 -top-1/4 h-[70vw] w-[70vw] max-h-[720px] max-w-[720px]"
      />
      <HeroNetwork />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            initial={reduceMotion ? false : { y: 12 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.8, duration: 0.7 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.2em] text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <LocationIcon location={profile.location} className="h-3.5 w-3.5 text-accent" />
              {dict.hero.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent" />
            <span>{dict.hero.years}</span>
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            {dict.hero.headline}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-lg leading-relaxed text-muted"
          >
            {dict.hero.sub}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { y: 16 }}
            animate={{ y: 0 }}
            transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <MagneticButton as="a" href={profile.resumeUrl} download>
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors">
                <FileText className="h-4 w-4" strokeWidth={1.5} />
                {dict.hero.downloadResume}
              </span>
            </MagneticButton>
            <MagneticButton as={Link} href="/projects" strength={0.2}>
              <span className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline">
                {dict.hero.viewCaseStudies}
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </span>
            </MagneticButton>
            <MagneticButton as="a" href={`mailto:${profile.email}?subject=Let's talk`} strength={0.2}>
              <span className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline">
                {dict.hero.letsConnect}
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { y: 24 }}
          animate={{ y: 0 }}
          transition={{ delay: 2.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <TiltCard>
            <CredibilityPanel />
          </TiltCard>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        aria-hidden
        className="absolute inset-x-0 bottom-8 hidden justify-center md:flex"
      >
        <div className="relative h-10 w-px overflow-hidden bg-border">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-accent"
            animate={reduceMotion ? { y: 0 } : { y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
