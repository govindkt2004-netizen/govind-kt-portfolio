import React from 'react';
import { motion } from 'motion/react';

interface HudFurnitureProps {
  activeSection?: string;
}

export const HudFurniture: React.FC<HudFurnitureProps> = ({ activeSection = 'home' }) => {
  const isHero = activeSection === 'home';

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 overflow-hidden select-none transition-opacity duration-500 ${
        isHero ? 'opacity-100 pointer-events-none' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* 1. Dropping WELCOME TO MY WORLD Banner (with slight blur-in and overshoot) */}
      <motion.div
        initial={{ y: -80, opacity: 0, filter: 'blur(8px)' }}
        animate={isHero ? { y: 0, opacity: 1, filter: 'blur(0px)' } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.14, 0.86, 0.22, 1.06] }}
        className="absolute top-[72px] sm:top-[85px] left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-1 text-center font-oswald text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.26em] uppercase text-white font-bold whitespace-nowrap"
        style={{
          textShadow: '0 0 10px rgba(0,0,0,0.95), 0 0 25px rgba(0,0,0,0.9), 0 0 45px rgba(222,27,28,0.5)',
        }}
      >
        <span>WELCOME TO MY WORLD</span>
        <span className="flex items-center gap-1 text-[#de1b1c]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#de1b1c] animate-ping" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#de1b1c]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#de1b1c]" />
        </span>
      </motion.div>

      {/* 2. Left Edge Arrows: 5 vertical chevrons pointing LEFT */}
      <div className="hidden md:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 flex-col gap-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ x: [0, -4, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.15 }}
            className="w-0 h-0 border-y-[6px] border-y-transparent border-r-[9px] border-r-[#e2e8f0]"
          />
        ))}
      </div>

      {/* 3. Right Edge Arrows: 5 vertical chevrons pointing RIGHT */}
      <div className="hidden md:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 flex-col gap-6">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 4, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: (4 - i) * 0.15 }}
            className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-[#e2e8f0]"
          />
        ))}
      </div>

      {/* 4. Bottom-Left Inverted Chip: • ARTIST GOVIND • */}
      <div className="absolute bottom-5 sm:bottom-8 left-4 sm:left-8 pointer-events-auto">
        <span className="chip-inverted shadow-[0_4px_20px_rgba(0,0,0,0.8)] border border-white/20 hover:scale-105 transition-transform">
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
          <span>ARTIST GOVIND</span>
          <span className="w-1.5 h-1.5 rounded-full bg-black inline-block" />
        </span>
      </div>

      {/* 5. Bottom-Right Corner Dot Matrix: 8 cols x 2 rows */}
      <div className="absolute bottom-5 sm:bottom-8 right-4 sm:right-8 grid grid-cols-8 gap-1.5">
        {Array.from({ length: 16 }).map((_, i) => (
          <motion.i
            key={i}
            animate={{ opacity: [0.35, 0.95, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, delay: (i % 8) * 0.1 }}
            className="w-1.5 h-1.5 rounded-full bg-[#e2e8f0] block not-italic"
          />
        ))}
      </div>
    </div>
  );
};
