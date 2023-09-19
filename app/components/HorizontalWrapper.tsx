"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { relative } from "path";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  direction: number;
  height: string;
}

export default function HorizontalWrapper({
  children,
  direction,
  height,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Direction
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 0, direction]
  );

  return (
    <div ref={scrollRef}>
      <motion.div
        style={{
          height: height,
          zIndex: 6,
          position: "relative",
          translateX: xTransform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
