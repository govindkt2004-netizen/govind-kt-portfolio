import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  UserCheck,
  Target,
  Cpu,
  FileText,
} from 'lucide-react';
import { PERSONAL_DETAILS, CAREER_OBJECTIVE, PRACTICAL_EXPOSURE, ABOUT_TEXT } from '../data/portfolioData';
import { usePortfolioPhoto } from '../utils/photoManager';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

interface DeveloperDossierProps {
  onOpenResume?: () => void;
}

export const DeveloperDossier: React.FC<DeveloperDossierProps> = ({
  onOpenResume,
}) => {
  const { portraitPhoto } = usePortfolioPhoto();

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-red-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={UserCheck}
        badgeLabel="Profile Dossier"
        badgeIndex="01"
        accentGlow="cyan"
        title="Background & Profile"
        highlight="Profile"
        highlightClass="text-cyan-400"
        subtitle="Software Developer and Information Science Engineering student at RYMEC Ballari, focused on building practical web applications and AI-driven solutions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Photographic Identity Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 p-6 sm:p-7 rounded-2xl border border-slate-800 bg-[#070914]/90 backdrop-blur-xl shadow-xl relative overflow-hidden group"
        >
          {/* Card Header Bar */}
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#de1b1c]" />
              <span className="text-xs text-slate-300 font-semibold">
                Profile Overview
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[11px] bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Available for Opportunities
            </span>
          </div>

          {/* Executive Portrait Frame - Fixed & Permanent */}
          <div className="relative mx-auto rounded-2xl overflow-hidden border border-slate-800/90 bg-[#04070d] p-2.5 mb-5 shadow-[0_12px_32px_rgba(0,0,0,0.6)] ring-1 ring-white/5 max-w-[340px]">
            {/* Pure Permanent Portrait Photo - Cropped & Zoomed Executive Headshot */}
            <div className="relative rounded-xl overflow-hidden bg-black aspect-[3.8/4.8] w-full">
              <img
                src={portraitPhoto}
                alt="Govind K T Portrait"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('profile_photo.jpg')) {
                    target.src = '/images/profile_photo.jpg';
                  }
                }}
                className="w-full h-full object-cover object-[center_20%] scale-[1.24] transition-transform duration-500 will-change-transform"
                style={{
                  imageRendering: 'auto',
                }}
              />
              {/* Subtle natural photographic vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 shadow-[inset_0_0_24px_rgba(0,0,0,0.35)]" />
            </div>
          </div>

          {/* Quick Specifications Grid */}
          <div className="space-y-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-slate-400">Full Name</span>
              <span className="text-white font-semibold">{PERSONAL_DETAILS.name}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-slate-400">Department</span>
              <span className="text-cyan-300 font-medium">Information Science &amp; Engg.</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-slate-400">College</span>
              <span className="text-slate-200 font-medium">{PERSONAL_DETAILS.college}</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <span className="text-slate-400">Location</span>
              <span className="text-slate-200 font-medium">{PERSONAL_DETAILS.location}</span>
            </div>

            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm active:scale-98"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Official Resume Document</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* RIGHT: Career Narrative, Objective & Technical Exposure Grid */}
        <div className="lg:col-span-7 space-y-6">
          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl border border-slate-800 bg-[#070914]/90 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex items-center gap-2 text-[#de1b1c] text-xs font-semibold uppercase tracking-wider mb-3">
              <Target className="w-4 h-4" />
              <span>Career Objective</span>
            </div>
            <h3 className="font-display font-semibold text-lg sm:text-xl text-white mb-4 leading-snug">
              &ldquo;{CAREER_OBJECTIVE}&rdquo;
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
              {ABOUT_TEXT}
            </p>

            {/* Quick Stat Counter Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <span className="text-lg font-display font-bold text-amber-400 block">1st</span>
                <span className="text-xs text-slate-400">State Award</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <span className="text-lg font-display font-bold text-cyan-400 block">7+</span>
                <span className="text-xs text-slate-400">Projects Built</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <span className="text-lg font-display font-bold text-emerald-400 block">B.E.</span>
                <span className="text-xs text-slate-400">ISE Branch</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center">
                <span className="text-lg font-display font-bold text-purple-400 block">2027</span>
                <span className="text-xs text-slate-400">Graduation</span>
              </div>
            </div>
          </motion.div>

          {/* Practical Exposure Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 rounded-3xl border border-slate-800 bg-[#070914]/90 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Cpu className="w-4 h-4" />
              <span>Areas of Practical Exposure</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRACTICAL_EXPOSURE.map((exp) => (                <div
                  key={exp}
                  className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-colors flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{exp}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
