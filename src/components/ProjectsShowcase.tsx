import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Sparkles,
  ExternalLink,
  Github,
  CheckCircle2,
  X,
  Layers,
  Cpu,
  Globe,
  Camera,
  Sprout,
  GraduationCap,
  ShoppingBag,
  BookOpen,
  CheckSquare,
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TechHeading } from './TechHeading';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

const projectsGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.94,
    y: 15,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

export const ProjectsShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
    { id: 'ai', label: 'AI & Vision', count: PROJECTS_DATA.filter((p) => p.category === 'ai').length },
    { id: 'fullstack', label: 'Full-Stack Systems', count: PROJECTS_DATA.filter((p) => p.category === 'fullstack').length },
    { id: 'web', label: 'Web Applications', count: PROJECTS_DATA.filter((p) => p.category === 'web').length },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-5 h-5" />;
      case 'Sprout':
        return <Sprout className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'CheckSquare':
        return <CheckSquare className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Atmospheric Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6 mb-10">
        <SectionAtmosphereHeader
          badgeIcon={Code}
          badgeLabel="Software & ML Portfolio"
          badgeIndex="03"
          accentGlow="cyan"
          title="Featured Projects"
          highlight="Projects"
          highlightClass="text-cyan-400"
          subtitle="A selection of practical applications, machine learning systems, and full-stack solutions I have built."
          className="mb-0 sm:mb-0"
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0 self-start md:self-end">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveFilter(tab.id as 'all' | 'ai' | 'fullstack' | 'web');
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-black/20 text-black' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      {/* Projects Grid with Staggered Scroll-Triggered Reveal */}
      <motion.div
        variants={projectsGridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={projectCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#070913]/85 backdrop-blur-xl p-6 sm:p-7 hover:border-cyan-500/50 hover:shadow-[0_12px_35px_rgba(6,182,212,0.16)] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                style={{ backgroundColor: project.accentColor }}
              />

              <div>
                {/* Top bar: Category badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${project.accentColor}15`,
                      borderColor: `${project.accentColor}40`,
                      color: project.accentColor,
                    }}
                  >
                    {getProjectIcon(project.iconName)}
                  </div>

                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {project.category === 'ai' && 'AI & Vision'}
                    {project.category === 'fullstack' && 'Full-Stack'}
                    {project.category === 'web' && 'Web App'}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.tagline}
                </p>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Supported Branches Pill (If VTU seating project) */}
                {project.supportedBranches && (
                  <div className="mb-4 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block mb-1.5">
                      Supported Branches:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.supportedBranches.map((branch) => (
                        <span
                          key={branch}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300 font-semibold"
                        >
                          {branch}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                  }}
                  className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-white transition-all cursor-pointer"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-[#080a14] p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Project Details
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-400 uppercase">
                  {selectedProject.category}
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-mono text-cyan-300 mb-6">
                {selectedProject.tagline}
              </p>

              {/* Description */}
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Features */}
              {selectedProject.keyFeatures && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Engineered Capabilities &amp; Key Features
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.keyFeatures.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Supported Branches if any */}
              {selectedProject.supportedBranches && (
                <div className="mb-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                  <span className="text-xs font-mono text-purple-300 font-semibold block mb-2">
                    VTU Engineering Branches Supported:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.supportedBranches.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-purple-900/40 border border-purple-500/40 text-purple-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Applied Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">
                  Developed by Govind K T
                </span>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-black font-semibold text-xs font-mono tracking-wider uppercase flex items-center gap-2 cursor-pointer shadow-lg hover:brightness-110 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Source on GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
