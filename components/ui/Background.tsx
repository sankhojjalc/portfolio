'use client';

import { useEffect } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export function Background() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const cursorGlow = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--cursor-glow), transparent 80%)`;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        className="absolute inset-0 opacity-80"
        style={{ background: 'var(--bg-gradient)' }}
      />

      <div
        className="absolute inset-0 bg-dot-pattern opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse at center, white, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, white, transparent 75%)',
        }}
      />

      <div className="absolute inset-0 bg-noise" />

      <motion.div className="absolute inset-0" style={{ background: cursorGlow }} />

      <div
        className="hidden md:block absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse"
        style={{ background: 'var(--orb-a)' }}
      />
      <div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] animate-pulse"
        style={{ background: 'var(--orb-b)', animationDelay: '2s' }}
      />
      <div
        className="hidden md:block absolute top-3/4 left-1/2 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse"
        style={{ background: 'var(--orb-c)', animationDelay: '4s' }}
      />
    </div>
  );
}
