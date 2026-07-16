"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="max-w-xl text-balance font-sans font-semibold tracking-tight text-4xl leading-tight text-foreground md:text-5xl">
            Where I create leverage for enterprise teams.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.title} index={i % 5}>
              <a
                href="#contact"

                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group relative flex flex-col justify-between gap-3 border-b border-border py-7 md:flex-row md:items-center md:gap-8 md:py-8"
              >
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="pointer-events-none absolute inset-0 -mx-6 bg-accent-soft md:-mx-10"
                />
                <div className="relative flex items-baseline gap-5">
                  <span className="text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-sans font-semibold tracking-tight text-2xl text-foreground transition-colors group-hover:text-accent md:text-3xl">
                    {service.title}
                  </h3>
                </div>
                <p className="relative max-w-md text-sm leading-relaxed text-muted md:text-right">
                  {service.description}
                </p>
                <ArrowUpRight
                  className="relative h-5 w-5 flex-shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:hidden lg:block"
                  strokeWidth={1.5}
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
