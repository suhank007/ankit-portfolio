"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "@/lib/data";

export function RoleTicker() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="mt-3 min-h-[1.1rem] leading-tight text-[10.5px] uppercase tracking-[0.04em] text-accent sm:h-6 sm:overflow-hidden sm:text-sm sm:leading-6 sm:tracking-[0.2em]">
        <span className="block">{profile.roles[0]}</span>
      </div>
    );
  }

  return (
    <div className="mt-3 min-h-[1.1rem] leading-tight text-[10.5px] uppercase tracking-[0.04em] text-accent sm:h-6 sm:overflow-hidden sm:text-sm sm:leading-6 sm:tracking-[0.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          exit={{ y: -16 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
