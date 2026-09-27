import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, FileText, MapPin, RotateCcw, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { usePortfolioPhoto } from '../utils/photoManager';

interface MonumentalHeroProps {
  onOpenResume: () => void;
  isReady?: boolean;
}

export const MonumentalHero: React.FC<MonumentalHeroProps> = ({
  onOpenResume,
  isReady = true,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [animIteration, setAnimIteration] = useState(0);
  const { heroPhoto } = usePortfolioPhoto();
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger animation when isReady becomes true or user replays
  useEffect(() => {
    if (isReady) {
      setAnimIteration((prev) => prev + 1);
    }
  }, [isReady]);

  const handleReplay = () => {
    setAnimIteration((prev) => prev + 1);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letters = ['G', 'O', 'V', 'I', 'N', 'D'];
  const letterTilts = [-4, 3, -2, 2, -3, 4];

  // Floating atmospheric embers in the hero arena
  const embers = [
    { left: '16%', bottom: '18%', size: 3, delay: 0.3, duration: 4.2 },
    { left: '28%', bottom: '12%', size: 2.5, delay: 0.8, duration: 5.0 },
    { left: '42%', bottom: '22%', size: 3.5, delay: 0.2, duration: 4.6 },
    { left: '56%', bottom: '14%', size: 2, delay: 0.9, duration: 5.4 },
    { left: '72%', bottom: '20%', size: 3, delay: 0.5, duration: 4.8 },
    { left: '84%', bottom: '16%', size: 2.5, delay: 1.1, duration: 5.2 },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#030306] flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 select-none"
    >
      {/* Dynamic Background Amber & Cyan Embers */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(245,158,11,0.25) 50%, transparent 80%)',
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px))`,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* TOP ROW: Clean Professional Status Pill & Controls */}
      <div className="relative z-30 flex flex-col items-center justify-center gap-3 max-w-7xl w-full mx-auto text-xs sm:flex-row sm:justify-between sm:items-center">
        <motion.div
          key={`status-${animIteration}`}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md shadow-sm mx-auto sm:mx-0"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-slate-300 font-medium text-xs">
            Open for Software &amp; AI Opportunities
          </span>
        </motion.div>

        <motion.div
          key={`top-right-${animIteration}`}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mx-auto sm:mx-0"
        >
          <button
            onClick={handleReplay}
            title="Replay cinematic entrance animation"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all cursor-pointer text-[11px] font-mono shadow-sm group"
          >
            <RotateCcw className="w-3 h-3 group-hover:-rotate-90 transition-transform duration-300 text-cyan-400" />
            <span>Replay Intro</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-slate-400 text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#de1b1c]" />
            <span>{PERSONAL_DETAILS.location}</span>
          </div>
        </motion.div>
      </div>

      {/* CENTER STAGE: Giant Wordmark Layer + Standing Figure Layer */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full max-w-7xl mx-auto my-auto min-h-[500px] sm:min-h-[600px]">
        {/* Ambient Crimson Furnace Glow Behind Wordmark */}
        <motion.div
          key={`furnace-${animIteration}`}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[420px] bg-[#de1b1c]/15 blur-[120px] rounded-full pointer-events-none"
        />

        {/* Floating Atmospheric Red Embers */}
        {embers.map((emb, idx) => (
          <motion.div
            key={`ember-${animIteration}-${idx}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: [0, 0.85, 0],
              y: [-10, -180],
              x: [0, (idx % 2 === 0 ? 15 : -15)],
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
            className="absolute rounded-full bg-[#ff3333] shadow-[0_0_10px_#ff2a2b] pointer-events-none z-15"
          />
        ))}

        {/* LAYER A: Massive Wordmark BEHIND the Figure */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 px-2 sm:px-0"
          style={{
            transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -14}px, 0)`,
            transition: 'transform 0.15s ease-out',
          }}
        >
          {/* Aesthetic Letter-by-Letter Entrance */}
          <div className="flex items-end justify-center tracking-[-0.03em] leading-[0.68] w-full max-w-[1600px] px-3 overflow-visible">
            {letters.map((char, index) => (
              <motion.div
                key={`char-${animIteration}-${index}`}
                initial={{
                  opacity: 0,
                  y: 100,
                  scale: 0.72,
                  rotateX: 35,
                  rotateZ: letterTilts[index],
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                  rotateZ: 0,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.12 + index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -14,
                  scale: 1.06,
                  transition: { duration: 0.18 },
                }}
                className="relative inline-block origin-bottom transform-gpu"
                style={{ perspective: 1000 }}
              >
                {/* Radiant Ignition Flare upon letter impact */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{
                    opacity: [0, 0.9, 0],
                    scale: [0.3, 1.4, 2.0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.12 + index * 0.08 + 0.22,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 bg-radial from-[#de1b1c]/60 via-[#ff2a2b]/30 to-transparent blur-xl pointer-events-none rounded-full"
                />

                <span className="font-anton text-[clamp(6.5rem,18vw,18rem)] leading-[0.68] text-center wordmark-distressed-red uppercase block pointer-events-auto cursor-pointer select-none">
                  {char}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Expanding Subtitle Row */}
          <motion.div
            key={`subtitle-${animIteration}`}
            initial={{ opacity: 0, y: 15, letterSpacing: '0.15em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.42em' }}
            transition={{ duration: 0.85, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-[#8a8a8a] font-oswald text-[9px] sm:text-xs uppercase -mt-2 sm:-mt-4 text-center"
          >
            <span>SOFTWARE</span>
            <span className="text-[#de1b1c] animate-pulse">•</span>
            <span>FULL-STACK</span>
            <span className="text-[#de1b1c] animate-pulse">•</span>
            <span>AI &amp; MACHINE LEARNING</span>
          </motion.div>
        </div>

        {/* LAYER B: Govind Standing Cutout Photo IN FRONT of the Wordmark */}
        <motion.div
          key={`hero-figure-${animIteration}`}
          initial={{
            opacity: 0,
            y: 90,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.95,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative z-20 flex flex-col items-center justify-end h-full max-h-[600px] sm:max-h-[700px] w-auto transform-gpu -mt-10 sm:-mt-12"
          style={{
            transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 8}px, 0)`,
            transition: 'transform 0.12s ease-out',
          }}
        >
          {/* Focused Stage Backlight */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] bg-gradient-to-t from-[#de1b1c]/15 to-transparent blur-[80px] rounded-full pointer-events-none -z-10 opacity-60" />

          {/* Original Cutout Image - Crisp, Clean, and Unobstructed */}
          <div className="relative group">
            <img
              src={heroPhoto}
              alt="Govind K T — Full-Stack & AI Developer"
              referrerPolicy="no-referrer"
              className="h-[430px] sm:h-[550px] md:h-[630px] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.01]"
              style={{
                imageRendering: 'auto',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: Clean Navigation Controls */}
      <motion.div
        key={`bottom-${animIteration}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-slate-800/60 text-xs"
      >
        {/* Left: Bio Tagline */}
        <div className="text-center sm:text-left">
          <span className="text-slate-400 block font-medium">Govind K T</span>
          <span className="text-slate-200">
            Software Developer • Full-Stack Developer • AI &amp; Machine Learning
          </span>
        </div>

        {/* Center: Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            id="btn-hero-projects"
            onClick={() => scrollToSection('projects')}
            className="px-5 py-2.5 rounded-xl bg-[#de1b1c] hover:bg-[#b51415] text-white font-medium tracking-wide transition-all duration-200 shadow-md cursor-pointer hover:shadow-[0_0_20px_rgba(222,27,28,0.4)]"
          >
            View Projects
          </button>

          <button
            id="btn-hero-contact"
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 transition-all cursor-pointer"
          >
            Contact Me
          </button>

          <button
            id="btn-hero-resume"
            onClick={() => {
              onOpenResume();
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Right: Scroll prompt */}
        <button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#de1b1c]" />
        </button>
      </motion.div>
    </section>
  );
};
