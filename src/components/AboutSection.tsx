import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Code,
  Brain,
  Database,
  GitBranch,
  TerminalSquare,
  Globe,
  Camera,
  FolderGit2,
  Calendar,
  Flag,
  User,
  GraduationCap,
  MapPin,
} from 'lucide-react';
import {
  PERSONAL_DETAILS,
  ABOUT_TEXT,
  CAREER_OBJECTIVE,
  PRACTICAL_EXPOSURE,
} from '../data/portfolioData';
import { sound } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const exposureIcons: Record<string, React.ReactNode> = {
    Programming: <Code className="w-4 h-4 text-cyan-400" />,
    'Web development': <Globe className="w-4 h-4 text-sky-400" />,
    'Machine learning': <Brain className="w-4 h-4 text-purple-400" />,
    'Computer vision': <Camera className="w-4 h-4 text-emerald-400" />,
    Databases: <Database className="w-4 h-4 text-amber-400" />,
    APIs: <TerminalSquare className="w-4 h-4 text-indigo-400" />,
    'Git/GitHub': <GitBranch className="w-4 h-4 text-orange-400" />,
    'Project development': <FolderGit2 className="w-4 h-4 text-pink-400" />,
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono mb-3">
          <Compass className="w-3.5 h-3.5 text-cyan-400" />
          <span>01. BIOGRAPHY &amp; ASPIRATION</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">Govind K T</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-transparent mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: About narrative & Career objective */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-500/5 blur-[50px] rounded-full pointer-events-none" />
            <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2.5">
              <span>Engineering Journey &amp; Focus</span>
            </h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              {ABOUT_TEXT}
            </p>
          </motion.div>

          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/25 via-[#070913]/90 to-slate-950/80 backdrop-blur-xl relative overflow-hidden shadow-[0_0_30px_-10px_rgba(6,182,212,0.15)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase block">Career Objective</span>
                <span className="font-display font-semibold text-white text-base">Long-Term Professional Vision</span>
              </div>
            </div>
            <p className="text-slate-300 text-base italic leading-relaxed border-l-2 border-cyan-500 pl-4 py-1">
              &ldquo;{CAREER_OBJECTIVE}&rdquo;
            </p>
          </motion.div>

          {/* Practical Exposure Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl border border-slate-800 bg-[#070913]/80 backdrop-blur-xl"
          >
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              Practical Technology Exposure
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {PRACTICAL_EXPOSURE.map((item) => (
                <div
                  key={item}
                  onMouseEnter={() => sound.playHover()}
                  className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 hover:bg-slate-800/70 hover:border-cyan-500/40 transition-all duration-200 cursor-default"
                >
                  <div className="p-1 rounded-md bg-slate-950 border border-slate-800">
                    {exposureIcons[item] || <Code className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <span className="text-xs font-medium text-slate-200 truncate">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Personal Info & Identity Grid */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#070913]/90 backdrop-blur-xl flex flex-col justify-between h-full shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
                  Verified Identity
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  VTU Verified
                </span>
              </div>

              {/* Personal details list */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <User className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">Full Name</span>
                  </div>
                  <span className="text-xs font-semibold text-white font-mono">{PERSONAL_DETAILS.name}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-slate-400">Academic Major</span>
                  </div>
                  <span className="text-xs font-semibold text-purple-300 font-mono text-right">
                    Information Science &amp; Engg.
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span className="text-xs text-slate-400">Date of Birth</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 font-mono">{PERSONAL_DETAILS.dob}</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <Flag className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-slate-400">Nationality &amp; Gender</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 font-mono">
                    {PERSONAL_DETAILS.nationality} • {PERSONAL_DETAILS.gender}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400">Location</span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-300 font-mono text-right">
                    {PERSONAL_DETAILS.location}
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800/60">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-slate-400">College</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-200 font-mono text-right">
                    {PERSONAL_DETAILS.college}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote footnote */}
            <div className="pt-6 mt-6 border-t border-slate-800 text-xs font-mono text-slate-400 text-center">
              &gt; ISE Department • Class of 2027 • Visvesvaraya Technological University
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
