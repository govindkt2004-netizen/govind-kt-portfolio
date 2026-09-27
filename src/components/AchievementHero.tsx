import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  Flame,
  RotateCcw,
  Medal,
  Building2,
  GraduationCap,
  Star,
  CheckCircle2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MAIN_ACHIEVEMENT } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const AchievementHero: React.FC = () => {
  const [celebrated, setCelebrated] = useState(false);
  const [celebrationCount, setCelebrationCount] = useState(0);
  const celebrationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerGrandCelebration = () => {
    setCelebrated(true);
    setCelebrationCount((prev) => prev + 1);

    try {
      // WAVE 1: Grand angled cannons from bottom-left & bottom-right
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 80,
        origin: { x: 0.06, y: 0.8 },
        colors: ['#ffd700', '#f59e0b', '#ffffff', '#ec4899', '#06b6d4', '#de1b1c'],
        scalar: 1.2,
        drift: 0.1,
      });

      confetti({
        particleCount: 75,
        angle: 120,
        spread: 80,
        origin: { x: 0.94, y: 0.8 },
        colors: ['#ffd700', '#f59e0b', '#ffffff', '#ec4899', '#06b6d4', '#de1b1c'],
        scalar: 1.2,
        drift: -0.1,
      });

      // Central gold starburst
      confetti({
        particleCount: 100,
        spread: 110,
        origin: { y: 0.48 },
        colors: ['#fff6d6', '#ffd700', '#f59e0b', '#fbbf24', '#ffffff'],
        shapes: ['circle', 'square'],
        scalar: 1.3,
      });

      // WAVE 2 at 350ms: Golden rain shower from above
      setTimeout(() => {
        confetti({
          particleCount: 85,
          spread: 120,
          origin: { y: 0.2 },
          colors: ['#ffd700', '#f59e0b', '#fef08a', '#ffffff', '#38bdf8'],
          scalar: 1.1,
          gravity: 0.85,
        });
      }, 350);

      // WAVE 3 at 750ms: Second crescendo burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 75,
          spread: 65,
          origin: { x: 0.25, y: 0.65 },
          colors: ['#ffd700', '#f59e0b', '#ffffff', '#a855f7'],
        });
        confetti({
          particleCount: 60,
          angle: 105,
          spread: 65,
          origin: { x: 0.75, y: 0.65 },
          colors: ['#ffd700', '#f59e0b', '#ffffff', '#06b6d4'],
        });
      }, 750);
    } catch {
      // Fallback
    }

    if (celebrationTimeoutRef.current) {
      clearTimeout(celebrationTimeoutRef.current);
    }
    celebrationTimeoutRef.current = setTimeout(() => {
      setCelebrated(false);
    }, 4500);
  };

  // Atmospheric golden embers
  const embers = [
    { left: '12%', bottom: '20%', size: 3, delay: 0.2, duration: 4.5 },
    { left: '26%', bottom: '15%', size: 2.5, delay: 0.9, duration: 5.2 },
    { left: '48%', bottom: '25%', size: 3.5, delay: 0.4, duration: 4.8 },
    { left: '70%', bottom: '18%', size: 2, delay: 1.1, duration: 5.6 },
    { left: '86%', bottom: '22%', size: 3, delay: 0.6, duration: 4.9 },
  ];

  return (
    <section id="achievements" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Gold / Amber Ambient Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-600/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        align="center"
        badgeIcon={Trophy}
        badgeLabel="Honors & Distinction"
        badgeIndex="07"
        accentGlow="amber"
        title="State Championship Victory"
        highlight="Victory"
        highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500"
        subtitle="1st Place winner among engineering institutions across Karnataka State at the 22nd ISTE Convention."
        className="relative z-10 mb-16"
      />

      {/* The Magnificent Championship Award Plaque */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative z-10 max-w-4xl mx-auto rounded-3xl border ${
          celebrated
            ? 'border-yellow-400 shadow-[0_0_100px_rgba(250,204,21,0.5)]'
            : 'border-amber-500/40 shadow-[0_0_80px_-20px_rgba(245,158,11,0.35)]'
        } bg-gradient-to-b from-[#181105] via-[#0d0d16] to-[#06070d] p-7 sm:p-12 md:p-16 backdrop-blur-2xl text-center overflow-hidden transition-all duration-700`}
      >
        {/* Heraldic Gold Corner Accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-400/60 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-400/60 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-400/60 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-400/60 rounded-br-lg pointer-events-none" />

        {/* Ambient Top Golden Edge Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-yellow-400/30 to-transparent blur-2xl pointer-events-none" />

        {/* Floating Atmospheric Red/Gold Embers */}
        {embers.map((emb, idx) => (
          <motion.div
            key={idx}
            animate={{
              opacity: [0, 0.75, 0],
              y: [-10, -140],
              x: [0, idx % 2 === 0 ? 12 : -12],
            }}
            transition={{
              duration: emb.duration,
              delay: emb.delay,
              repeat: Infinity,
              ease: 'easeOut',
            }}
            style={{
              left: emb.left,
              bottom: emb.bottom,
              width: emb.size,
              height: emb.size,
            }}
            className="absolute rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24] pointer-events-none z-0"
          />
        ))}

        {/* Active Celebration Shockwave Aura */}
        <AnimatePresence>
          {celebrated && (
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: [0, 0.9, 0.5, 0.8, 0], scale: [0.7, 1.2, 1.4] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: 'easeOut' }}
              className="absolute inset-0 bg-radial from-amber-400/25 via-yellow-500/15 to-transparent pointer-events-none rounded-3xl z-0"
            />
          )}
        </AnimatePresence>

        {/* TOP STATUS BAR: Category Ribbon & Celebration Counter */}
        <div className="relative z-20 flex items-center justify-between gap-2 mb-8 text-xs font-mono">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span className="font-semibold tracking-wider">STATE CHAMPIONSHIP</span>
          </div>

          <div className="flex items-center gap-2">
            {celebrationCount > 0 && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[11px]">
                <Flame className="w-3 h-3 text-amber-400" />
                <span>{celebrationCount} {celebrationCount === 1 ? 'Celebration' : 'Celebrations'}</span>
              </span>
            )}
          </div>
        </div>

        {/* CENTERPIECE: 3D Trophy Pedestal flanked by Golden Laurel Wreath */}
        <div className="relative mx-auto mb-8 w-full max-w-md flex items-center justify-center">
          {/* Rotating Celestial Sunburst Rays behind Trophy */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-10 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                'conic-gradient(from 0deg, transparent 0deg, rgba(245,158,11,0.25) 20deg, transparent 40deg, rgba(250,204,21,0.25) 60deg, transparent 80deg, rgba(245,158,11,0.25) 100deg, transparent 120deg, rgba(250,204,21,0.25) 140deg, transparent 160deg, rgba(245,158,11,0.25) 180deg, transparent 200deg, rgba(250,204,21,0.25) 220deg, transparent 240deg, rgba(245,158,11,0.25) 260deg, transparent 280deg, rgba(250,204,21,0.25) 300deg, transparent 320deg, rgba(245,158,11,0.25) 340deg, transparent 360deg)',
            }}
          />

          {/* Left Laurel Branch */}
          <div className="hidden sm:flex flex-col items-center pr-4 pointer-events-none select-none text-amber-400/80">
            <svg
              className="w-16 h-28 transform -scale-x-100 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              viewBox="0 0 100 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85 10 C60 40 40 90 50 150"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path d="M75 25 C65 20 60 15 68 8 C78 12 80 20 75 25 Z" fill="currentColor" />
              <path d="M60 50 C48 45 45 38 54 32 C65 38 66 45 60 50 Z" fill="currentColor" />
              <path d="M48 80 C36 76 32 68 42 62 C53 68 53 76 48 80 Z" fill="currentColor" />
              <path d="M44 110 C32 108 28 100 38 94 C50 99 49 107 44 110 Z" fill="currentColor" />
              <path d="M46 140 C34 138 32 130 42 124 C52 129 52 137 46 140 Z" fill="currentColor" />
            </svg>
          </div>

          {/* The Trophy Center with Multi-Ring Aura */}
          <motion.div
            animate={
              celebrated
                ? {
                    scale: [1, 1.15, 1.08, 1.12, 1],
                    rotate: [0, -5, 5, -3, 0],
                    y: [0, -12, -4, -8, 0],
                  }
                : {
                    y: [0, -4, 0],
                  }
            }
            transition={
              celebrated
                ? { duration: 1.2, ease: 'easeOut' }
                : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }
            className="relative flex flex-col items-center cursor-pointer group"
            onClick={triggerGrandCelebration}
            title="Click to celebrate victory with fanfare & confetti!"
          >
            {/* Pulsing Concentric Gold Halo Rings */}
            <div className="absolute inset-0 -m-3 rounded-full border border-amber-400/40 animate-ping opacity-30 pointer-events-none" />
            <div className="absolute inset-0 -m-6 rounded-full border border-yellow-400/20 pointer-events-none" />

            {/* Glowing Trophy Base Box */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-b from-yellow-300 via-amber-400 to-amber-600 p-[2px] shadow-[0_0_55px_rgba(245,158,11,0.7)] group-hover:shadow-[0_0_75px_rgba(250,204,21,0.9)] transition-shadow">
              <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#2a1b05] via-[#170e03] to-[#0c0802] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Specular Diagonal Light Sweep */}
                <motion.div
                  animate={{ x: ['-150%', '150%'] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-25 pointer-events-none"
                />
                <Trophy className="w-12 h-12 sm:w-14 sm:h-14 text-yellow-400 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] filter drop-shadow(0 0 15px rgba(250,204,21,0.6)) group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>

            {/* Shield Ribbon: ★ 1ST PLACE WINNER ★ */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative -mt-3.5 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-extrabold text-[11px] sm:text-xs font-mono uppercase tracking-widest shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center gap-1.5 border border-yellow-200"
            >
              <Star className="w-3 h-3 fill-black text-black" />
              <span>1ST PLACE WINNER</span>
              <Star className="w-3 h-3 fill-black text-black" />
            </motion.div>
          </motion.div>

          {/* Right Laurel Branch */}
          <div className="hidden sm:flex flex-col items-center pl-4 pointer-events-none select-none text-amber-400/80">
            <svg
              className="w-16 h-28 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
              viewBox="0 0 100 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M85 10 C60 40 40 90 50 150"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path d="M75 25 C65 20 60 15 68 8 C78 12 80 20 75 25 Z" fill="currentColor" />
              <path d="M60 50 C48 45 45 38 54 32 C65 38 66 45 60 50 Z" fill="currentColor" />
              <path d="M48 80 C36 76 32 68 42 62 C53 68 53 76 48 80 Z" fill="currentColor" />
              <path d="M44 110 C32 108 28 100 38 94 C50 99 49 107 44 110 Z" fill="currentColor" />
              <path d="M46 140 C34 138 32 130 42 124 C52 129 52 137 46 140 Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* HERALDIC VICTORY TITLES (Crafted, Prestigious & Beautiful) */}
        <div className="space-y-4 max-w-2xl mx-auto relative z-20">
          {/* Header Tagline */}
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.35em] uppercase text-amber-400 font-bold flex items-center gap-1.5">
              <span>PROJECT EXHIBITION COMPETITION</span>
            </span>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>

          {/* GRAND TITLE: FIRST PLACE (Liquid Gold 3D Lustre) */}
          <div className="relative py-1">
            <motion.h3
              initial={{ scale: 0.95 }}
              animate={celebrated ? { scale: [1, 1.06, 1] } : { scale: 1 }}
              transition={{ duration: 0.6 }}
              className="font-anton text-5xl sm:text-7xl md:text-8xl tracking-[0.02em] leading-none uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-[#fffef0] via-[#ffd700] via-[#f59e0b] to-[#b45309] drop-shadow-[0_4px_35px_rgba(245,158,11,0.55)]"
            >
              FIRST PLACE
            </motion.h3>

            {/* Glowing Under-glow line */}
            <div className="h-1 w-32 sm:w-48 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full mt-2" />
          </div>

          {/* EVENT BADGE: 22nd ISTE Karnataka State Level Student Convention */}
          <div className="pt-2">
            <div className="inline-block px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border border-amber-500/30 backdrop-blur-md shadow-lg max-w-xl">
              <h4 className="font-display font-bold text-lg sm:text-2xl md:text-3xl text-white tracking-normal leading-tight">
                22nd ISTE Karnataka State Level Student Convention
              </h4>
              <div className="mt-1.5 inline-flex items-center gap-2 text-xs font-mono text-amber-300 font-bold tracking-widest uppercase">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Academic Year: {MAIN_ACHIEVEMENT.academicYear}</span>
              </div>
            </div>
          </div>

          {/* INSTITUTIONS: Venue & Representation */}
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
            {/* Host Institution */}
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-amber-500/20 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/80 block">
                  Host Convention Venue
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block truncate">
                  Lingaraj Appa Engineering College
                </span>
                <span className="text-[11px] text-slate-400 block">Bidar, Karnataka</span>
              </div>
            </div>

            {/* Representing College */}
            <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-cyan-500/20 flex items-start gap-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400/80 block">
                  Representing College
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white block truncate">
                  RYMEC Ballari
                </span>
                <span className="text-[11px] text-slate-400 block">Dept. of Information Science &amp; Engg.</span>
              </div>
            </div>
          </div>
        </div>

        {/* THREE KEY VICTORY HIGHLIGHT METRICS */}
        <div className="mt-8 pt-8 border-t border-amber-500/20 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#141209]/80 border border-amber-500/20">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Convention Scope</span>
            <span className="text-sm font-bold text-amber-300 font-display">State Level (Karnataka)</span>
          </div>
          <div className="p-3 rounded-xl bg-[#141209]/80 border border-amber-500/20">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">Official Award Date</span>
            <span className="text-sm font-bold text-white font-mono">{MAIN_ACHIEVEMENT.date}</span>
          </div>
          <div className="p-3 rounded-xl bg-[#141209]/80 border border-amber-500/20">
            <span className="text-[10px] font-mono uppercase text-slate-400 block">State Ranking</span>
            <span className="text-sm font-bold text-emerald-400 font-display">Rank #1 Champion</span>
          </div>
        </div>

        {/* OFFICIAL CITATION TEXT */}
        <div className="mt-6 max-w-2xl mx-auto p-4 rounded-2xl bg-black/40 border border-white/5 text-center">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-normal">
            &ldquo;{MAIN_ACHIEVEMENT.details}&rdquo;
          </p>
        </div>

        {/* GRAND CELEBRATION ACTION BAR */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20">
          <motion.button
            id="btn-celebrate-achievement"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={triggerGrandCelebration}
            className={`group relative px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm font-mono uppercase tracking-wider transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-3 overflow-hidden ${
              celebrated
                ? 'bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black shadow-[0_0_40px_rgba(250,204,21,0.7)]'
                : 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)]'
            }`}
          >
            {/* Animated Light Sweep in button */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-20 pointer-events-none"
            />

            <Flame className="w-5 h-5 text-black group-hover:scale-125 transition-transform" />
            <span className="font-extrabold tracking-widest">
              {celebrated ? '🎉 VICTORY CELEBRATED! 🎉' : 'CELEBRATE VICTORY! 🏆'}
            </span>
            <Sparkles className="w-5 h-5 text-black animate-spin-slow" />
          </motion.button>
        </div>

        {/* Sub-label for user */}
        <p className="text-[11px] font-mono text-slate-500 mt-3 relative z-20">
          Click button anytime to trigger fireworks, golden confetti cannons, and radiant victory animations.
        </p>
      </motion.div>
    </section>
  );
};
