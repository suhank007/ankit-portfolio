"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";

function parseStat(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const [, sign, num, suffix] = match;
  return { prefix: sign, number: parseFloat(num), suffix };
}

export function AnimatedStat({ value, className }: { value: string; className?: string }) {
  const { prefix, number, suffix } = parseStat(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      motionValue.set(number);
      return;
    }
    const controls = animate(motionValue, number, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) {
          const decimals = number % 1 !== 0 ? 1 : 0;
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, motionValue, number, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
