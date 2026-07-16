"use client";

import { useMemo, useRef, type ReactNode, type ElementType } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function MagneticButton({
  children,
  className,
  as = "button",
  strength = 0.35,
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  strength?: number;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 200, mass: 0.5 });
  const springY = useSpring(y, { damping: 15, stiffness: 200, mass: 0.5 });
  const Component = useMemo(() => motion.create(as), [as]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = e.clientX - bounds.left - bounds.width / 2;
    const relY = e.clientY - bounds.top - bounds.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}

      className="inline-block"
    >
      <Component
        style={{ x: springX, y: springY }}
        className={cn(className)}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
}
