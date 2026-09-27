import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { TechHeading } from './TechHeading';

export interface SectionAtmosphereHeaderProps {
  badgeIcon: LucideIcon;
  badgeLabel: string;
  badgeIndex?: string; // e.g. "01", "02", "SEC // 04"
  title: string;
  highlight?: string;
  highlightClass?: string;
  subtitle?: string;
  tooltipHint?: string;
  tooltipTag?: string;
  align?: 'left' | 'center';
  accentGlow?: 'cyan' | 'emerald' | 'amber' | 'purple' | 'red' | 'indigo' | 'teal';
  className?: string;
  children?: React.ReactNode;
}

const GLOW_COLOR_MAP = {
  cyan: {
    badgeBorder: 'border-cyan-500/30',
    badgeBg: 'bg-cyan-950/40',
    badgeText: 'text-cyan-300',
    iconColor: 'text-cyan-400',
    glowBeam: 'from-cyan-500/20 via-cyan-400/5 to-transparent',
    dotGlow: 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]',
    defaultHighlight: 'text-cyan-400',
  },
  emerald: {
    badgeBorder: 'border-emerald-500/30',
    badgeBg: 'bg-emerald-950/40',
    badgeText: 'text-emerald-300',
    iconColor: 'text-emerald-400',
    glowBeam: 'from-emerald-500/20 via-emerald-400/5 to-transparent',
    dotGlow: 'bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]',
    defaultHighlight: 'text-emerald-400',
  },
  amber: {
    badgeBorder: 'border-amber-500/40',
    badgeBg: 'bg-amber-950/40',
    badgeText: 'text-amber-300',
    iconColor: 'text-amber-400',
    glowBeam: 'from-amber-500/25 via-yellow-500/5 to-transparent',
    dotGlow: 'bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]',
    defaultHighlight: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500',
  },
  purple: {
    badgeBorder: 'border-purple-500/30',
    badgeBg: 'bg-purple-950/40',
    badgeText: 'text-purple-300',
    iconColor: 'text-purple-400',
    glowBeam: 'from-purple-500/20 via-purple-400/5 to-transparent',
    dotGlow: 'bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]',
    defaultHighlight: 'text-purple-400',
  },
  red: {
    badgeBorder: 'border-red-500/30',
    badgeBg: 'bg-red-950/40',
    badgeText: 'text-red-300',
    iconColor: 'text-red-400',
    glowBeam: 'from-red-500/20 via-rose-400/5 to-transparent',
    dotGlow: 'bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.8)]',
    defaultHighlight: 'text-red-400',
  },
  indigo: {
    badgeBorder: 'border-indigo-500/30',
    badgeBg: 'bg-indigo-950/40',
    badgeText: 'text-indigo-300',
    iconColor: 'text-indigo-400',
    glowBeam: 'from-indigo-500/20 via-indigo-400/5 to-transparent',
    dotGlow: 'bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]',
    defaultHighlight: 'text-indigo-400',
  },
  teal: {
    badgeBorder: 'border-teal-500/30',
    badgeBg: 'bg-teal-950/40',
    badgeText: 'text-teal-300',
    iconColor: 'text-teal-400',
    glowBeam: 'from-teal-500/20 via-teal-400/5 to-transparent',
    dotGlow: 'bg-teal-400 shadow-[0_0_8px_rgba(20,184,166,0.8)]',
    defaultHighlight: 'text-teal-400',
  },
};

export const SectionAtmosphereHeader: React.FC<SectionAtmosphereHeaderProps> = ({
  badgeIcon: Icon,
  badgeLabel,
  badgeIndex,
  title,
  highlight,
  highlightClass,
  subtitle,
  align = 'left',
  accentGlow = 'cyan',
  className = '',
  children,
}) => {
  const glow = GLOW_COLOR_MAP[accentGlow] || GLOW_COLOR_MAP.cyan;
  const isCentered = align === 'center';

  return (
    <div
      className={`relative mb-12 sm:mb-14 ${
        isCentered ? 'flex flex-col items-center text-center' : 'flex flex-col items-start text-left'
      } ${className}`}
    >
      {/* Ambient background blur beam that gently illuminates on scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className={`pointer-events-none absolute -top-8 ${
          isCentered ? 'left-1/2 -translate-x-1/2' : '-left-4'
        } w-64 sm:w-96 h-28 bg-gradient-to-r ${glow.glowBeam} blur-3xl -z-10`}
      />

      {/* Atmospheric Pill Badge with Animated Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-3 inline-flex"
      >
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md text-xs font-mono tracking-wider transition-all duration-300 shadow-sm ${glow.badgeBorder} ${glow.badgeBg} ${glow.badgeText}`}
        >
          {badgeIndex && (
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest border-r border-slate-700/60 pr-2">
              {badgeIndex}
            </span>
          )}
          <Icon className={`w-3.5 h-3.5 shrink-0 ${glow.iconColor}`} />
          <span className="font-medium tracking-normal">{badgeLabel}</span>
          <span className={`w-1.5 h-1.5 rounded-full ${glow.dotGlow}`} />
        </div>
      </motion.div>

      {/* Primary Section Title with Typewriter & Gradient Accents */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <TechHeading
          as="h2"
          className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]"
          text={title}
          highlight={highlight}
          highlightClass={highlightClass || glow.defaultHighlight}
        />
      </motion.div>

      {/* Subtitle / Descriptive Copy with Atmospheric Entrance */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          className={`text-sm sm:text-base text-slate-400 mt-2.5 font-normal leading-relaxed ${
            isCentered ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Optional Injected Header Children (e.g. Filters, Search bars, or Actions) */}
      {children && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
          className="w-full mt-4"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};
