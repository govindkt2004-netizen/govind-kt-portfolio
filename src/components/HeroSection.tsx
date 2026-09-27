import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Github,
  Linkedin,
  Dribbble,
  Mail,
  FileText,
  Sparkles,
  Terminal,
  Code2,
  Cpu,
  Layers,
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { sound } from '../utils/audio';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md text-xs font-mono text-cyan-300"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>AVAILABLE FOR OPPORTUNITIES • VTU ISE &apos;27</span>
          </motion.div>

          {/* Main Name Heading */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none"
            >
              GOVIND <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                K T
              </span>
            </motion.h1>

            {/* Dynamic Titles */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-base sm:text-xl font-medium text-slate-300"
            >
              <span className="text-cyan-300">Software Developer</span>
              <span className="text-slate-600">•</span>
              <span className="text-sky-300">Full-Stack Developer</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300">AI / ML Enthusiast</span>
            </motion.div>
          </div>

          {/* Tagline / Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed"
          >
            &ldquo;{PERSONAL_DETAILS.tagline}&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="group px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)] hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.9)] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Explore Projects</span>
            </a>

            <button
              onClick={() => {
                sound.playClick();
                onOpenResume();
              }}
              className="px-6 py-3.5 rounded-xl border border-slate-700 hover:border-cyan-500/50 bg-slate-900/60 hover:bg-slate-900/90 text-slate-200 hover:text-white font-mono text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3 pt-3"
          >
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
                onMouseEnter={() => sound.playHover()}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                onMouseEnter={() => sound.playHover()}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                title="Send Email"
                onMouseEnter={() => sound.playHover()}
                className="p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-slate-800/80 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: 3D Holographic Developer Terminal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl border border-slate-800/90 bg-[#070913]/90 backdrop-blur-2xl p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden group hover:border-cyan-500/40 transition-all duration-500">
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 blur-[60px] rounded-full pointer-events-none" />

            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-slate-400 font-mono">govind_profile.sh</span>
              </div>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                v2026.1
              </span>
            </div>

            {/* Terminal Code Body */}
            <div className="pt-4 space-y-3 font-mono text-xs text-slate-300">
              <div className="text-slate-500"># Engineering Profile &amp; Focus</div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">$</span>
                <div>
                  <span className="text-purple-400">const</span> developer = &#123;
                  <div className="pl-4 space-y-1 py-1 text-slate-300">
                    <div>name: <span className="text-emerald-300">&apos;Govind K T&apos;</span>,</div>
                    <div>degree: <span className="text-emerald-300">&apos;B.E. Information Science&apos;</span>,</div>
                    <div>college: <span className="text-emerald-300">&apos;RYMEC Ballari&apos;</span>,</div>
                    <div>university: <span className="text-emerald-300">&apos;VTU Belagavi&apos;</span>,</div>
                    <div>cgpa: <span className="text-yellow-300">7.68</span>,</div>
                    <div>graduation: <span className="text-yellow-300">2027</span>,</div>
                    <div>achievement: <span className="text-amber-300">&apos;1st Place ISTE State Convention&apos;</span>,</div>
                  </div>
                  &#125;;
                </div>
              </div>

              {/* Tech Pillars Pills */}
              <div className="pt-2 border-t border-slate-800/60 grid grid-cols-3 gap-2">
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
                  <Code2 className="w-4 h-4 text-cyan-400 mb-1" />
                  <span className="text-[10px] text-slate-400">Full-Stack</span>
                  <span className="text-xs font-semibold text-slate-200">MERN Stack</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
                  <Cpu className="w-4 h-4 text-purple-400 mb-1" />
                  <span className="text-[10px] text-slate-400">AI / Vision</span>
                  <span className="text-xs font-semibold text-slate-200">YOLO / OpenCV</span>
                </div>
                <div className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col items-center text-center">
                  <Layers className="w-4 h-4 text-emerald-400 mb-1" />
                  <span className="text-[10px] text-slate-400">Languages</span>
                  <span className="text-xs font-semibold text-slate-200">Python / C++ / JS</span>
                </div>
              </div>

              {/* Console Prompt */}
              <div className="flex items-center gap-2 text-cyan-400 pt-1">
                <span>&gt;</span>
                <span className="animate-pulse">Building practical digital solutions...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => {
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
      </motion.div>
    </section>
  );
};
