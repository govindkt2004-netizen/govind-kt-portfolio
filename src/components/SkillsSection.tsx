import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Search,
  Brain,
  Eye,
  Target,
  Camera,
  Database,
  Server,
  Network,
  GitBranch,
  Github,
  Monitor,
  Binary,
  Globe,
  Palette,
  Workflow,
  Laptop,
  FileSpreadsheet,
  HardDrive,
  LucideIcon,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

interface SkillVisualConfig {
  icon: LucideIcon;
  colorClass: string;
  glowClass: string;
  borderClass: string;
  badgeBg: string;
}

const getSkillProjectDetails = (skillName: string) => {
  const s = skillName.toLowerCase();
  if (s.includes('python')) {
    return {
      projects: ['Fruit Ripeness Detection', 'Traffic Sign Recognition', 'Explore ML Python'],
      context: 'Primary language for machine learning models, OpenCV image processing, and algorithms.',
    };
  }
  if (s.includes('opencv') || s.includes('image processing') || s.includes('computer vision')) {
    return {
      projects: ['Fruit Ripeness Detection (1st Prize)', 'Traffic Sign Recognition System'],
      context: 'Applied for real-time edge detection, color space HSV masking, and image classification.',
    };
  }
  if (s.includes('javascript') || s.includes('html') || s.includes('css') || s.includes('frontend')) {
    return {
      projects: ['Thiranex Full-Stack Internship', 'Modern Portfolio V4', 'E-Commerce Platform'],
      context: 'Utilized for responsive component architecture, DOM performance, and animations.',
    };
  }
  if (s.includes('sql') || s.includes('database')) {
    return {
      projects: ['Student Academic Monitoring', 'Library Management', 'E-Commerce Platform'],
      context: 'Normalized database schema design, ACID transactions, and indexed query optimizations.',
    };
  }
  if (s.includes('c++') || s === 'c') {
    return {
      projects: ['Academic Data Structures & Algorithm Foundations'],
      context: 'Memory management, pointers, graph traversal, and high-efficiency algorithmic problem-solving.',
    };
  }
  if (s.includes('git') || s.includes('github')) {
    return {
      projects: ['All 7 Production Repositories'],
      context: 'Feature branch workflows, commit history hygiene, semantic versioning, and collaborative PRs.',
    };
  }
  return {
    projects: ['Practical Coursework & Software Prototypes'],
    context: 'Standard industry engineering workflow and developer tooling.',
  };
};

const getSkillConfig = (skillName: string): SkillVisualConfig => {
  const name = skillName.toLowerCase();

  if (name.includes('python')) {
    return {
      icon: Terminal,
      colorClass: 'text-amber-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(251,191,36,0.22)]',
      borderClass: 'hover:border-amber-400/60',
      badgeBg: 'group-hover:bg-amber-500/15',
    };
  }
  if (name.includes('c++') || name === 'c') {
    return {
      icon: Binary,
      colorClass: 'text-sky-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(56,189,248,0.22)]',
      borderClass: 'hover:border-sky-400/60',
      badgeBg: 'group-hover:bg-sky-500/15',
    };
  }
  if (name.includes('javascript') || name.includes('js')) {
    return {
      icon: Code2,
      colorClass: 'text-yellow-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(250,204,21,0.22)]',
      borderClass: 'hover:border-yellow-400/60',
      badgeBg: 'group-hover:bg-yellow-500/15',
    };
  }
  if (name.includes('html')) {
    return {
      icon: Globe,
      colorClass: 'text-orange-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(251,146,60,0.22)]',
      borderClass: 'hover:border-orange-400/60',
      badgeBg: 'group-hover:bg-orange-500/15',
    };
  }
  if (name.includes('css')) {
    return {
      icon: Palette,
      colorClass: 'text-blue-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(96,165,250,0.22)]',
      borderClass: 'hover:border-blue-400/60',
      badgeBg: 'group-hover:bg-blue-500/15',
    };
  }
  if (name.includes('frontend')) {
    return {
      icon: Monitor,
      colorClass: 'text-cyan-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(6,182,212,0.28)]',
      borderClass: 'hover:border-cyan-400/60',
      badgeBg: 'group-hover:bg-cyan-500/15',
    };
  }
  if (name.includes('backend')) {
    return {
      icon: Server,
      colorClass: 'text-emerald-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(52,211,153,0.22)]',
      borderClass: 'hover:border-emerald-400/60',
      badgeBg: 'group-hover:bg-emerald-500/15',
    };
  }
  if (name.includes('full-stack') || name.includes('full stack')) {
    return {
      icon: Workflow,
      colorClass: 'text-teal-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(45,212,191,0.22)]',
      borderClass: 'hover:border-teal-400/60',
      badgeBg: 'group-hover:bg-teal-500/15',
    };
  }
  if (name.includes('api')) {
    return {
      icon: Network,
      colorClass: 'text-indigo-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(129,140,248,0.22)]',
      borderClass: 'hover:border-indigo-400/60',
      badgeBg: 'group-hover:bg-indigo-500/15',
    };
  }
  if (name.includes('machine learning')) {
    return {
      icon: Brain,
      colorClass: 'text-purple-400',
      glowClass: 'hover:shadow-[0_0_24px_rgba(192,132,252,0.25)]',
      borderClass: 'hover:border-purple-400/60',
      badgeBg: 'group-hover:bg-purple-500/15',
    };
  }
  if (name.includes('computer vision')) {
    return {
      icon: Eye,
      colorClass: 'text-cyan-400',
      glowClass: 'hover:shadow-[0_0_24px_rgba(6,182,212,0.28)]',
      borderClass: 'hover:border-cyan-400/60',
      badgeBg: 'group-hover:bg-cyan-500/15',
    };
  }
  if (name.includes('yolo')) {
    return {
      icon: Target,
      colorClass: 'text-rose-400',
      glowClass: 'hover:shadow-[0_0_24px_rgba(251,113,133,0.25)]',
      borderClass: 'hover:border-rose-400/60',
      badgeBg: 'group-hover:bg-rose-500/15',
    };
  }
  if (name.includes('opencv')) {
    return {
      icon: Camera,
      colorClass: 'text-emerald-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(52,211,153,0.22)]',
      borderClass: 'hover:border-emerald-400/60',
      badgeBg: 'group-hover:bg-emerald-500/15',
    };
  }
  if (name.includes('image processing')) {
    return {
      icon: Cpu,
      colorClass: 'text-fuchsia-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(232,121,249,0.22)]',
      borderClass: 'hover:border-fuchsia-400/60',
      badgeBg: 'group-hover:bg-fuchsia-500/15',
    };
  }
  if (name.includes('mongodb')) {
    return {
      icon: Database,
      colorClass: 'text-emerald-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(52,211,153,0.22)]',
      borderClass: 'hover:border-emerald-400/60',
      badgeBg: 'group-hover:bg-emerald-500/15',
    };
  }
  if (name.includes('sql') || name.includes('database')) {
    return {
      icon: HardDrive,
      colorClass: 'text-cyan-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(6,182,212,0.22)]',
      borderClass: 'hover:border-cyan-400/60',
      badgeBg: 'group-hover:bg-cyan-500/15',
    };
  }
  if (name.includes('github')) {
    return {
      icon: Github,
      colorClass: 'text-slate-200',
      glowClass: 'hover:shadow-[0_0_22px_rgba(255,255,255,0.2)]',
      borderClass: 'hover:border-slate-300',
      badgeBg: 'group-hover:bg-white/10',
    };
  }
  if (name.includes('git')) {
    return {
      icon: GitBranch,
      colorClass: 'text-orange-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(251,146,60,0.22)]',
      borderClass: 'hover:border-orange-400/60',
      badgeBg: 'group-hover:bg-orange-500/15',
    };
  }
  if (name.includes('vs code')) {
    return {
      icon: Laptop,
      colorClass: 'text-sky-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(56,189,248,0.22)]',
      borderClass: 'hover:border-sky-400/60',
      badgeBg: 'group-hover:bg-sky-500/15',
    };
  }
  if (name.includes('ms office')) {
    return {
      icon: FileSpreadsheet,
      colorClass: 'text-amber-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(251,191,36,0.22)]',
      borderClass: 'hover:border-amber-400/60',
      badgeBg: 'group-hover:bg-amber-500/15',
    };
  }
  if (name.includes('windows')) {
    return {
      icon: Monitor,
      colorClass: 'text-blue-400',
      glowClass: 'hover:shadow-[0_0_22px_rgba(96,165,250,0.22)]',
      borderClass: 'hover:border-blue-400/60',
      badgeBg: 'group-hover:bg-blue-500/15',
    };
  }

  return {
    icon: Sparkles,
    colorClass: 'text-cyan-400',
    glowClass: 'hover:shadow-[0_0_22px_rgba(6,182,212,0.22)]',
    borderClass: 'hover:border-cyan-400/60',
    badgeBg: 'group-hover:bg-cyan-500/15',
  };
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categoryGridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const skillBadgesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.06,
      },
    },
  };

  const skillBadgeVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const filterTabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Dev' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Tools & OS' },
  ];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.categoryKey === activeCategory;
  })
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      return {
        ...cat,
        skills: cat.skills.filter(
          (skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            skill.levelDescription.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6 mb-8">
        <SectionAtmosphereHeader
          badgeIcon={Code2}
          badgeLabel="Competencies & Tools"
          badgeIndex="06"
          accentGlow="cyan"
          title="Technical Skills"
          highlight="Skills"
          highlightClass="text-cyan-400"
          subtitle="Technologies, frameworks, and tools I use to build robust software systems."
          className="mb-0 sm:mb-0"
        />

        {/* Quick Search */}
        <div className="relative w-full md:w-72 shrink-0 self-start md:self-end">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-all"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = activeCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveCategory(tab.id);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                  : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Skill Categories Grid with Staggered Scroll-Triggered Entrance */}
      <motion.div
        variants={categoryGridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.categoryKey}
              layout
              variants={categoryCardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.2 } }}
              className="p-6 rounded-2xl border border-slate-800/90 bg-[#070913]/70 backdrop-blur-xl flex flex-col justify-between"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  {category.categoryKey === 'languages' && <Code2 className="w-4 h-4" />}
                  {category.categoryKey === 'web' && <Layers className="w-4 h-4" />}
                  {category.categoryKey === 'ai' && <Cpu className="w-4 h-4" />}
                  {category.categoryKey === 'database' && <Terminal className="w-4 h-4" />}
                  {category.categoryKey === 'tools' && <Sparkles className="w-4 h-4" />}
                </div>
                <h3 className="font-display font-semibold text-base sm:text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Items with Technology Icons and Staggered Badge Entrance */}
              <motion.div
                variants={skillBadgesContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-20px' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {category.skills.map((skill) => {
                  const config = getSkillConfig(skill.name);
                  const Icon = config.icon;
                  const isSelected = selectedSkill === skill.name;
                  const details = getSkillProjectDetails(skill.name);

                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillBadgeVariants}
                      whileHover={{
                        y: -3,
                        scale: 1.015,
                        transition: { duration: 0.18, ease: 'easeOut' },
                      }}
                      onClick={() => {
                        setSelectedSkill(isSelected ? null : skill.name);
                      }}
                      className={`group relative p-3 rounded-xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500 bg-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.25)] ring-1 ring-cyan-500/50'
                          : `border-slate-800/90 bg-slate-900/40 hover:bg-slate-900/90 ${config.borderClass} ${config.glowClass}`
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Icon container with subtle glow */}
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center bg-slate-950/80 border border-slate-800/80 transition-all duration-300 group-hover:scale-110 ${config.colorClass} ${config.badgeBg}`}
                        >
                          <Icon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-6" />
                        </div>

                        {/* Text & description */}
                        <div className="flex flex-col min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="font-mono text-xs font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                              {skill.name}
                            </span>
                            {skill.highlight && (
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)] shrink-0"
                                title="Core Specialization"
                              />
                            )}
                          </div>
                          <p className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors truncate leading-tight mt-0.5">
                            {skill.levelDescription}
                          </p>
                        </div>
                      </div>

                      {/* Interactive Connected Projects Pill / Drawer */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-2.5 border-t border-slate-800/90 text-[11px] space-y-1.5 overflow-hidden"
                          >
                            <p className="text-slate-400 text-[10px] leading-tight">
                              {details.context}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {details.projects.map((proj, pIdx) => (
                                <a
                                  key={pIdx}
                                  href="#projects"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-900 transition-colors text-[10px] font-medium"
                                >
                                  <span>{proj}</span>
                                  <ArrowRight className="w-2.5 h-2.5" />
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
