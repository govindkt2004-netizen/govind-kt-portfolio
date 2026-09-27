import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface WelcomeIntroProps {
  onComplete: () => void;
}

export const WelcomeIntro: React.FC<WelcomeIntroProps> = ({ onComplete }) => {
  // Automatically open the portfolio after exactly 3 seconds
  useEffect(() => {
    const autoTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(autoTimer);
  }, [onComplete]);

  // Support Enter or Space for instant entry
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  // Floating ambient starlight dust particles
  const particles = [
    { x: '18%', y: '24%', size: 3, duration: 6, delay: 0 },
    { x: '82%', y: '18%', size: 2.5, duration: 7, delay: 1 },
    { x: '28%', y: '78%', size: 3, duration: 8, delay: 2 },
    { x: '75%', y: '72%', size: 2, duration: 6.5, delay: 0.5 },
    { x: '50%', y: '12%', size: 2.5, duration: 9, delay: 1.5 },
    { x: '12%', y: '58%', size: 3, duration: 7.5, delay: 2.5 },
    { x: '88%', y: '50%', size: 2, duration: 8.5, delay: 3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#04050a] text-slate-100 overflow-hidden select-none px-4"
    >
      {/* Cinematic Depth: Ambient Gradient Aurora */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.18, 0.3, 0.18],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-transparent blur-[140px] pointer-events-none -top-32 -left-32"
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-indigo-500/20 via-[#de1b1c]/15 to-transparent blur-[140px] pointer-events-none -bottom-32 -right-32"
      />

      {/* Central Soft Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Subtle Micro Dot Matrix Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Floating Starlight Motes */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -22, 0],
            opacity: [0.2, 0.85, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full bg-cyan-300 pointer-events-none shadow-[0_0_8px_rgba(6,182,212,0.9)]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}

      {/* Main Focus Stage */}
      <div className="relative z-10 max-w-xl w-full text-center flex flex-col items-center">
        {/* Aesthetic GKT Monogram with Kinetic Floating & Border Beam */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Gentle Floating Motion */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Soft Ambient Halo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-sky-400/15 to-indigo-500/20 blur-xl opacity-80" />

            {/* Rotating Conic Border Beam */}
            <div className="relative p-[1.5px] rounded-3xl overflow-hidden shadow-2xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#38bdf8_330deg,#ffffff_360deg)]"
              />

              {/* Inner Emblem Glass Card */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-[22px] bg-gradient-to-b from-[#0e1422] via-[#090d17] to-[#04060d] backdrop-blur-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-inner">
                {/* Micro Shimmer Light Sweep */}
                <motion.div
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/12 to-transparent -skew-x-12 pointer-events-none"
                />

                {/* GKT Letterform */}
                <span className="font-outfit font-extrabold text-2xl sm:text-3xl tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 pl-1 drop-shadow-[0_2px_15px_rgba(255,255,255,0.4)]">
                  GKT
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Aesthetic High-End Name Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.22, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center select-none"
        >
          <h1 className="font-outfit text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300">
              Govind
            </span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-white drop-shadow-[0_0_35px_rgba(6,182,212,0.5)]">
              K T
            </span>
          </h1>
        </motion.div>

        {/* Creative & Attractive "View Portfolio" Button */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          {/* Animated Ambient Backlight */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/40 via-sky-400/30 to-indigo-500/40 blur-md opacity-60 group-hover:opacity-100 group-hover:blur-lg transition-all duration-300" />

          {/* Glowing Border Pill */}
          <button
            onClick={onComplete}
            className="relative px-8 py-3.5 sm:px-10 sm:py-4 rounded-full bg-gradient-to-b from-[#111827] to-[#0b0f19] border border-cyan-500/40 hover:border-cyan-400/80 text-white font-medium text-sm sm:text-base tracking-wide flex items-center gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.25)] group-hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] group-hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
          >
            {/* Subtle Button Internal Shimmer */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none"
            />

            <span className="font-semibold text-slate-100 group-hover:text-white transition-colors">
              View Portfolio
            </span>
            <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          {/* 3-Second Timed Reveal Bar */}
          <div className="mt-4 w-36 mx-auto h-[2px] rounded-full bg-slate-800/80 overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 3, ease: 'linear' }}
              className="h-full bg-gradient-to-r from-cyan-500 to-sky-400"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
