"use client";

import { motion, useReducedMotion } from "framer-motion";

interface AvatarOrbitProps {
  src: string;
  alt: string;
}

export function AvatarOrbit({ src, alt }: AvatarOrbitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative group w-36 h-36 md:w-52 md:h-52">
      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/15 to-amber-500/30 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />

      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute -inset-3 rounded-full border"
        style={{ borderColor: "var(--orbit-ring)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.8)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/70 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
      </motion.div>

      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        className="absolute -inset-6 rounded-full border"
        style={{ borderColor: "var(--orbit-ring-2)" }}
      >
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-amber-400/60" />
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-orange-400/50" />
      </motion.div>

      <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-glass">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={208}
          height={208}
          fetchPriority="high"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="absolute bottom-1 right-1 z-20 flex items-center justify-center w-6 h-6 rounded-full bg-primary">
        <motion.div
          animate={reduceMotion ? undefined : { scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
        />
      </div>
    </div>
  );
}
