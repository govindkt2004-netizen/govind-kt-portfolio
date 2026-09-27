import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, ArrowUp, Send, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { usePortfolioPhoto } from '../utils/photoManager';

interface CinematicFinaleProps {
  onOpenResume: () => void;
}

export const CinematicFinale: React.FC<CinematicFinaleProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { heroPhoto } = usePortfolioPhoto();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-screen bg-[#010103] overflow-hidden flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 select-none border-t border-red-950/30">
      {/* 1. Deep Red Furnace Ambient Glow & Drifting Fog */}
      <div
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[550px] rounded-full blur-[150px] opacity-35 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          background:
            'radial-gradient(circle, rgba(222,27,28,0.45) 0%, rgba(179,39,29,0.25) 45%, rgba(6,182,212,0.1) 75%, transparent 85%)',
          transform: `translate(calc(-50% + ${mousePos.x * 25}px), ${mousePos.y * 15}px)`,
        }}
      />

      {/* 2. FIVE EDITORIAL CAPTIONS (Exact Reference from extract_fin.py) */}
      {/* Caption TL: IDEAS / ARCHITECTURES / EXPERIENCES / REAL IMPACT */}
      <div className="absolute top-16 left-6 sm:left-12 z-20 hidden md:block pl-3 border-l-2 border-[#de1b1c] font-oswald text-[11px] uppercase tracking-[0.34em] text-[#e9dcd0]/80 leading-loose pointer-events-none">
        <div>IDEAS</div>
        <div>ARCHITECTURES</div>
        <div>EXPERIENCES</div>
        <div className="text-[#de1b1c]">REAL IMPACT</div>
      </div>

      {/* Caption Mid Left: The Quote with Red Dash */}
      <div className="absolute top-[42%] left-6 sm:left-12 z-20 hidden lg:block font-oswald text-[13px] uppercase tracking-[0.28em] text-[#f0e6dc] pointer-events-none">
        <div>&ldquo;FROM DISCIPLINE COMES CLARITY.&rdquo;</div>
        <div className="w-10 h-[2px] bg-[#de1b1c] mt-3" />
      </div>

      {/* Caption BL: A DEVELOPER'S WORLD */}
      <div className="absolute bottom-32 left-6 sm:left-12 z-20 hidden md:block pl-3 border-l-2 border-[#de1b1c] font-oswald text-[11px] uppercase tracking-[0.34em] text-[#e9dcd0]/80 leading-loose pointer-events-none">
        <div>A</div>
        <div>DEVELOPER&apos;S</div>
        <div className="text-white">WORLD</div>
      </div>

      {/* Caption TR: SAME PASSION / A BRIGHTER TOMORROW */}
      <div className="absolute top-16 right-6 sm:right-12 z-20 hidden md:block text-right font-oswald text-[11px] uppercase tracking-[0.34em] text-[#e9dcd0]/80 leading-loose pointer-events-none">
        <div>SAME PASSION</div>
        <div className="text-[#de1b1c]">A BRIGHTER TOMORROW</div>
        <div className="w-8 h-[2px] bg-[#de1b1c] mt-2 ml-auto" />
      </div>

      {/* Caption BR: DESIGN / BUILD / EXPLORE / REPEAT */}
      <div className="absolute bottom-32 right-6 sm:right-12 z-20 hidden md:block text-right font-oswald text-[11px] uppercase tracking-[0.34em] text-[#e9dcd0]/80 leading-loose pointer-events-none">
        <div>DESIGN</div>
        <div>BUILD</div>
        <div>EXPLORE</div>
        <div className="text-[#de1b1c]">REPEAT</div>
        <div className="w-8 h-[2px] bg-[#de1b1c] mt-2 ml-auto" />
      </div>

      {/* 3. CENTER: COLOSSAL WORDMARK & STANDING SILHOUETTE */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-auto min-h-[500px]">
        {/* Layer A: Giant Red Distressed Wordmark */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
          style={{
            transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -10}px, 0)`,
          }}
        >
          <span className="font-anton text-[22vw] sm:text-[19vw] lg:text-[18vw] tracking-[-0.03em] leading-[0.82] text-center wordmark-distressed-red uppercase">
            GOVIND
          </span>
          <span className="font-oswald font-bold text-xs sm:text-sm tracking-[0.5em] text-[#8a8a8a] -mt-2 sm:-mt-4 uppercase">
            FULL-STACK DEVELOPER &amp; AI ENGINEER
          </span>
        </div>

        {/* Layer B: Standing Figure - Crisp and Original */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center justify-end h-full max-h-[520px] sm:max-h-[620px] w-auto"
          style={{
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 8}px, 0)`,
          }}
        >
          <div className="relative group">
            <img
              src={heroPhoto}
              alt="Govind K T"
              referrerPolicy="no-referrer"
              className="h-[390px] sm:h-[490px] md:h-[570px] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] transition-transform duration-500 group-hover:scale-[1.01]"
              style={{
                imageRendering: 'auto',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* 4. BOTTOM ACTION & FUNCTIONAL ROW */}
      <div className="relative z-20 max-w-7xl mx-auto w-full space-y-6">
        {/* Banner CTA Box */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 p-6 sm:p-7 rounded-2xl bg-[#06060c]/90 border border-slate-800/80 backdrop-blur-xl shadow-2xl">
          <div>
            <span className="text-[10px] font-mono text-[#de1b1c] uppercase tracking-widest block mb-1">
              THE VISION
            </span>
            <p className="font-oswald font-bold text-xl sm:text-2xl text-white tracking-wide">
              &ldquo;Transforming ideas into resilient software architecture.&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 rounded-xl bg-[#de1b1c] hover:bg-[#ff2a2b] text-white font-medium text-xs tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </button>

            <button
              onClick={() => {
                onOpenResume();
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#de1b1c] text-white text-xs font-medium tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#de1b1c]" />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Functional Row: Verified Socials, Email, Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 border-t border-slate-800/50 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_DETAILS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#de1b1c] text-slate-300 hover:text-white transition-all cursor-pointer"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DETAILS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#de1b1c] text-slate-300 hover:text-white transition-all cursor-pointer"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DETAILS.email}`}
              className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#de1b1c] text-slate-300 hover:text-white transition-all flex items-center gap-2 cursor-pointer text-xs"
            >
              <Mail className="w-3.5 h-3.5 text-[#de1b1c]" />
              <span>{PERSONAL_DETAILS.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <span>© 2026 GOVIND K T</span>
            <span>ALL RIGHTS RESERVED</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#de1b1c] transition-colors cursor-pointer uppercase"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
