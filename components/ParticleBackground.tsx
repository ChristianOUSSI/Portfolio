"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    const count = 20;
    setParticles(Array.from({ length: count }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="bg-blue-400/40 dark:bg-blue-500/30 rounded-full w-1.5 h-1.5 absolute"
          initial={{ opacity: 0, x: '50%', y: '50%' }}
          animate={{
            opacity: [0, 0.8, 0],
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`
          }}
          transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
