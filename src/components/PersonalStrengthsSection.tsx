import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Users,
  Compass,
  Languages,
  Heart,
  UtensilsCrossed,
  PenTool,
  Headphones,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
} from 'lucide-react';
import {
  PERSONAL_STRENGTHS,
  EXTRA_CURRICULARS,
  SOFT_SKILLS_GAINED,
  LANGUAGES_KNOWN,
  HOBBIES,
} from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const PersonalStrengthsSection: React.FC = () => {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5 text-pink-400" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-cyan-400" />;
      default:
        return <Heart className="w-5 h-5 text-red-400" />;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={Sparkles}
        badgeLabel="Character & Engagement"
        badgeIndex="09"
        accentGlow="indigo"
        title="Personal Strengths & Attributes"
        highlight="Strengths & Attributes"
        highlightClass="text-indigo-400"
        subtitle="Key interpersonal strengths, leadership traits, extracurricular activities, and creative hobbies."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Personal Strengths & Soft Skills */}
        <div className="lg:col-span-7 space-y-8">
          {/* Personal Skills / Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <BrainCircuit className="w-5 h-5 text-indigo-400" />
              <h3 className="font-display font-bold text-xl text-white">Personal Strengths</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_STRENGTHS.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-indigo-500/40 hover:bg-slate-900/70 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1 text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{item.name}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Extra-Curriculars & Soft Skills Developed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
              <Users className="w-5 h-5 text-pink-400" />
              <h3 className="font-display font-bold text-xl text-white">Extra-Curricular Activities</h3>
            </div>

            {/* List of activities */}
            <div className="space-y-3 mb-6">
              {EXTRA_CURRICULARS.map((act) => (
                <div key={act.category} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <span className="text-xs font-mono text-cyan-300 font-semibold block mb-1">
                    {act.category}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed">{act.description}</p>
                </div>
              ))}
            </div>

            {/* Soft skills gained banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-pink-950/30 border border-indigo-500/30">
              <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider block mb-2 flex items-center gap-1.5 font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                Skills Developed Through Activities
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {SOFT_SKILLS_GAINED.map((skill) => (
                  <div key={skill.title} className="p-2 rounded-lg bg-black/40 border border-indigo-500/20 text-center">
                    <span className="text-xs font-semibold text-white block">{skill.title}</span>
                    <span className="text-[10px] text-slate-400 leading-tight block mt-0.5">{skill.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Languages Known & Hobbies */}
        <div className="lg:col-span-5 space-y-8">
          {/* Languages Known (Strictly no fake percentages!) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2.5">
                <Languages className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-bold text-xl text-white">Languages Known</h3>
              </div>
              <span className="text-xs font-mono text-slate-500">3 Languages</span>
            </div>

            <div className="space-y-3">
              {LANGUAGES_KNOWN.map((lang) => (
                <div
                  key={lang.language}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                    <span className="font-display font-bold text-base text-white">{lang.language}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{lang.context}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl"
          >
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800 mb-6">
              <Compass className="w-5 h-5 text-amber-400" />
              <h3 className="font-display font-bold text-xl text-white">Interests &amp; Hobbies</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HOBBIES.map((hobby) => (
                <div
                  key={hobby.name}
                  className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col items-center text-center hover:border-amber-500/40 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 mb-3 group-hover:scale-110 transition-transform">
                    {getHobbyIcon(hobby.icon)}
                  </div>
                  <span className="text-xs font-bold text-white mb-1">{hobby.name}</span>
                  <span className="text-[10px] text-slate-400">{hobby.desc}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
