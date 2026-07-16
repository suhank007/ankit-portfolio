"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
  id,
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "span" | "li";
  id?: string;
}) {
  const Component = motion[as];
  return (
    <Component
      id={id}
      className={cn(className)}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
