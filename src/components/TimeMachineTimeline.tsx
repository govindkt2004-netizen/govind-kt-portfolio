import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Calendar, CheckCircle2, Award, BookOpen, Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

interface Milestone {
  year: string;
  title: string;
  category: string;
  institution: string;
  metric: string;
  metricLabel: string;
  summary: string;
  highlights: string[];
  icon: React.ReactNode;
  accentColor: string;
}

export const TimeMachineTimeline: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState<number>(5); // Default to 2026 milestone

  const milestones: Milestone[] = [
    {
      year: '2020',
      title: 'Secondary School Leaving Certificate (SSLC)',
      category: 'SECONDARY EDUCATION',
      institution: 'Karnataka Secondary Education Examination Board',
      metric: '87.36%',
      metricLabel: 'Distinction Score',
      summary: 'Completed high school education with distinction, demonstrating consistent academic rigor and analytical curiosity.',
      highlights: ['Mathematics & Science Distinction', 'Strong academic foundation'],
      icon: <CheckCircle2 className="w-5 h-5" />,
      accentColor: '#38bdf8',
    },
    {
      year: '2022',
      title: 'Pre-University Course (PUC)',
      category: 'PRE-UNIVERSITY',
      institution: 'Department of Pre-University Education, Karnataka',
      metric: '69.66%',
      metricLabel: 'Science Stream',
      summary: 'Completed senior secondary coursework in Physics, Chemistry, and Mathematics, strengthening logical problem solving.',
      highlights: ['Science discipline focus', 'Transition to advanced engineering studies'],
      icon: <BookOpen className="w-5 h-5" />,
      accentColor: '#818cf8',
    },
    {
      year: '2023',
      title: 'Commenced B.E. in Information Science',
      category: 'UNDERGRADUATE COMMENCEMENT',
      institution: 'Rao Bahadur Y Mahabaleswarappa Engineering College (RYMEC), Ballari',
      metric: 'VTU',
      metricLabel: 'Affiliation',
      summary: 'Embarked on Bachelor of Engineering in Information Science & Engineering under Visvesvaraya Technological University.',
      highlights: ['Core data structures & algorithms', 'Computer architecture & operating systems'],
      icon: <GraduationCap className="w-5 h-5" />,
      accentColor: '#a855f7',
    },
    {
      year: '2024',
      title: 'Machine Learning & Python Specialization',
      category: 'SPECIALIZED STUDY',
      institution: 'Self-Directed & Certified Coursework',
      metric: 'Python Core',
      metricLabel: 'Competency',
      summary: 'Mastered Python ecosystems, data manipulation, supervised learning algorithms, and initial image processing pipelines.',
      highlights: ['Numpy & Pandas data pipelines', 'Model evaluation and validation methods'],
      icon: <Sparkles className="w-5 h-5" />,
      accentColor: '#10b981',
    },
    {
      year: '2025',
      title: 'Full-Stack Architecture & REST APIs',
      category: 'SYSTEM DEVELOPMENT',
      institution: 'Project-Based Engineering Laboratory',
      metric: 'MERN Stack',
      metricLabel: 'Core Architecture',
      summary: 'Engineered end-to-end full-stack applications with React, Express, MongoDB, secure JWT authentication and responsive design.',
      highlights: ['Production REST API routing', 'State management & component design'],
      icon: <Briefcase className="w-5 h-5" />,
      accentColor: '#f59e0b',
    },
    {
      year: '2026',
      title: '1st Place Award & Industry Internship',
      category: 'PINNACLE MILESTONE',
      institution: 'ISTE Karnataka Convention / Thiranex',
      metric: '1ST PLACE',
      metricLabel: 'State Competition',
      summary: 'Secured First Place at 22nd ISTE Karnataka State Level Student Convention (Lingaraj Appa Engineering College, Bidar) and completed Full Stack Development Internship at Thiranex.',
      highlights: [
        'First Place Project Exhibition Award',
        'Full Stack Development Intern at Thiranex (Aug-Sep 2026)',
        'Verified Machine Learning using Python Certification (Apr 2026)',
      ],
      icon: <Award className="w-5 h-5" />,
      accentColor: '#eab308',
    },
    {
      year: '2027',
      title: 'B.E. Graduation & Professional Milestone',
      category: 'EXPECTED COMPLETION',
      institution: 'RYMEC Ballari (VTU)',
      metric: '7.68',
      metricLabel: 'Current CGPA',
      summary: 'Expected graduation year for Bachelor of Engineering in Information Science and Engineering with continuous academic excellence.',
      highlights: ['Comprehensive technical portfolio', 'Ready for engineering challenges'],
      icon: <GraduationCap className="w-5 h-5" />,
      accentColor: '#06b6d4',
    },
  ];

  const activeMilestone = milestones[selectedYearIndex];

  // Calculate clock hand angle based on selected index
  // 7 milestones spanning roughly -50 deg to +50 deg
  const handAngle = -45 + (selectedYearIndex / (milestones.length - 1)) * 90;

  return (
    <section id="chrono" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Warm Radial Light Pool */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-b from-amber-500/10 via-cyan-500/10 to-transparent blur-[150px] rounded-full pointer-events-none" />

      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        align="center"
        badgeIcon={Clock}
        badgeLabel="Career Progression"
        badgeIndex="02"
        accentGlow="amber"
        title="Journey Timeline (2020–2027)"
        highlight="Journey Timeline"
        highlightClass="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200"
        subtitle="Interactive milestone timeline detailing academic progress, internships, project awards, and technical milestones."
        className="relative z-10"
      />

      {/* THE TIME MACHINE CLOCK & TURNING MECHANISM */}
      <div className="relative z-10 max-w-5xl mx-auto mb-12 p-8 sm:p-12 rounded-3xl border border-slate-800/80 bg-[#070914]/90 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Giant Clock Face & Radial Concentric Turning Rings */}
        <div className="relative flex flex-col items-center justify-center pb-12">
          {/* Concentric Rotating Outer Ring Mechanism */}
          <div className="relative w-64 h-32 sm:w-80 sm:h-40 overflow-hidden flex items-end justify-center">
            {/* Outer dotted Arc */}
            <div className="absolute top-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-amber-500/30" />
            <div className="absolute top-4 w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-cyan-500/20" />

            {/* Pivot Ball and Hand */}
            <div className="relative z-20 flex flex-col items-center">
              {/* Hand beam projector */}
              <motion.div
                animate={{ rotate: handAngle }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
                className="w-1.5 h-28 sm:h-36 bg-gradient-to-t from-transparent via-amber-400 to-cyan-400 origin-bottom rounded-full relative shadow-[0_0_20px_rgba(245,158,11,0.8)]"
              >
                {/* Pointer Tip Needle */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_15px_#22d3ee]" />
              </motion.div>

              {/* Central Pivot Hub */}
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] -mt-2">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500" />
              </div>
            </div>
          </div>

          {/* Timeline Rail Nodes (2020 to 2027) */}
          <div className="w-full flex items-center justify-between gap-1 sm:gap-2 mt-8 pt-6 border-t border-slate-800">
            {milestones.map((m, idx) => {
              const isSelected = selectedYearIndex === idx;
              return (
                <button
                  key={m.year}
                  onClick={() => {
                    sound.playClick();
                    setSelectedYearIndex(idx);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`flex flex-col items-center gap-2 group transition-all duration-300 cursor-pointer p-2 rounded-xl flex-1 ${
                    isSelected ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? 'bg-amber-400 border-amber-300 shadow-[0_0_20px_#f59e0b] scale-125'
                        : 'bg-slate-900 border-slate-700 group-hover:border-slate-500'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </div>
                  <span
                    className={`font-mono text-xs sm:text-sm transition-colors ${
                      isSelected ? 'text-amber-400 font-bold' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE MILESTONE STAGE CARD */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.year}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-900/60 relative overflow-hidden"
          >
            {/* Projected Light Flood Accent */}
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[70px] opacity-20 pointer-events-none"
              style={{ backgroundColor: activeMilestone.accentColor }}
            />

            <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                    {activeMilestone.category}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    YEAR {activeMilestone.year}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {activeMilestone.title}
                </h3>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{activeMilestone.institution}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-2">
                  {activeMilestone.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-3">
                  {activeMilestone.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metric Hero Badge */}
              <div className="px-6 py-4 rounded-2xl bg-black/50 border border-slate-800 flex flex-col items-center justify-center shrink-0 min-w-[140px]">
                <span className="text-[10px] font-mono text-slate-400 uppercase">{activeMilestone.metricLabel}</span>
                <span className="font-display font-black text-2xl sm:text-3xl text-amber-400">
                  {activeMilestone.metric}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  VERIFIED
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
