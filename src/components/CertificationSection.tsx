import React from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const CertificationSection: React.FC = () => {
  return (
    <section id="certification" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={Award}
        badgeLabel="Accreditation"
        badgeIndex="08"
        accentGlow="teal"
        title="Professional Certifications"
        highlight="Certifications"
        highlightClass="text-teal-400"
        subtitle="Verified industry coursework, algorithmic foundations, and machine learning specializations."
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {CERTIFICATIONS.map((cert) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-12 lg:col-span-10 lg:col-start-2 p-8 sm:p-10 rounded-3xl border border-slate-800 bg-[#070913]/90 backdrop-blur-2xl relative overflow-hidden shadow-xl"
          >
            {/* Ambient accent */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-teal-500/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-teal-950/60 border border-teal-500/40 flex items-center justify-center text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-teal-400 font-semibold tracking-wider uppercase">
                      MACHINE LEARNING DOMAIN
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {cert.title}
                  </h3>
                </div>
              </div>

              {/* Completion date badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Completed: {cert.date}</span>
              </div>
            </div>

            {/* Description & skills covered */}
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  &ldquo;{cert.description}&rdquo;
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Core Competencies Mastered
                </span>
                <div className="flex flex-wrap gap-2">
                  {cert.skillsCovered.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-teal-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
