import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={GraduationCap}
        badgeLabel="Academic Qualifications"
        badgeIndex="05"
        accentGlow="purple"
        title="Academic Background"
        highlight="Background"
        highlightClass="text-purple-400"
        subtitle="Formal education, foundational sciences, and engineering credentials."
      />

      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
        {EDUCATION_DATA.map((item, index) => {
          const isCurrent = item.status === 'Pursuing';
          return (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Illuminated Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-6 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  isCurrent
                    ? 'bg-purple-950 border-purple-500 text-purple-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Education Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-xl relative overflow-hidden ${
                  isCurrent
                    ? 'border-purple-500/40 bg-slate-900/80 shadow-lg'
                    : 'border-slate-800 bg-[#070913]/80 hover:border-slate-700'
                }`}
              >
                {/* Header row: Degree & Status */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">
                        {item.year}
                      </span>
                      {isCurrent ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          PURSUING
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-800 border border-slate-700 text-slate-300 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          COMPLETED
                        </span>
                      )}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {item.degree}
                    </h3>
                    {item.field && (
                      <p className="text-sm font-medium text-purple-300 font-mono mt-0.5">
                        {item.field}
                      </p>
                    )}
                  </div>

                  {/* Score Pill */}
                  <div className="px-4 py-2 rounded-xl bg-purple-950/50 border border-purple-500/40 flex flex-col items-center">
                    <span className="text-[10px] font-mono text-purple-300 uppercase">{item.scoreType}</span>
                    <span className="font-display font-extrabold text-xl text-white tracking-tight">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Institution & University */}
                <div className="space-y-1.5 mb-4 text-sm text-slate-300">
                  <div className="flex items-center gap-2 font-medium">
                    <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  {item.university && (
                    <div className="flex items-center gap-2 text-slate-400 text-xs pl-6">
                      <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>Affiliated to {item.university}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-400 text-xs pl-6">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Academic Highlights */}
                {item.details && item.details.length > 0 && (
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {item.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
