"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  glowColor?: string;
};

export default function GlassCard({
  children,
  className,
  tilt = false,
  glowColor = "#6E5BFF",
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  }

  function handleMouseLeave() {
    setTransform("rotateX(0deg) rotateY(0deg)");
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: "transform 0.25s ease-out", transformStyle: "preserve-3d" }}
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-6 group",
        className
      )}
    >
      {tilt && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}22, transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}
