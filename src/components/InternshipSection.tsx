import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, Building2, CheckCircle, Code2 } from 'lucide-react';
import { INTERNSHIP_DATA } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const InternshipSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={Briefcase}
        badgeLabel="Work Experience"
        badgeIndex="04"
        accentGlow="emerald"
        title="Industry Internship"
        highlight="Internship"
        highlightClass="text-emerald-400"
        subtitle="Professional experience applying modern web stacks in production environments."
      />

      {/* Main Internship Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-8 sm:p-10 rounded-3xl border border-slate-800 bg-[#070913]/90 backdrop-blur-2xl relative overflow-hidden shadow-xl"
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Company & Role Spotlight */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <Calendar className="w-4 h-4" />
              <span>{INTERNSHIP_DATA.duration}</span>
            </div>

            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
              {INTERNSHIP_DATA.role}
            </h3>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm font-medium text-slate-200">
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span>{INTERNSHIP_DATA.company}</span>
            </div>

            {/* Tech Stack used */}
            <div className="pt-4">
              <span className="text-xs text-slate-400 font-medium block mb-2.5">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2">
                {INTERNSHIP_DATA.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Description & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                &ldquo;{INTERNSHIP_DATA.description}&rdquo;
              </p>
            </div>

            <div>
              <span className="text-xs text-slate-400 font-medium block mb-3">
                Key Responsibilities &amp; Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {INTERNSHIP_DATA.focusAreas.map((focus) => (
                  <div
                    key={focus}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-xs font-medium text-slate-200">{focus}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Mentorship-guided full-stack architectural design and implementation.</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
