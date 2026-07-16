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
      <div className="mt-3 h-6 overflow-hidden text-sm uppercase tracking-[0.2em] text-accent">
        <span className="block">{profile.roles[0]}</span>
      </div>
    );
  }

  return (
    <div className="mt-3 h-6 overflow-hidden text-sm uppercase tracking-[0.2em] text-accent">
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
