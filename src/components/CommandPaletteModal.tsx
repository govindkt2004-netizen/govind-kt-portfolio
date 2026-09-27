import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Command,
  FileText,
  Mail,
  Phone,
  Trophy,
  ExternalLink,
  Code,
  FolderGit2,
  Sparkles,
  ArrowRight,
  X,
  Check,
  Briefcase,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_DETAILS } from '../data/portfolioData';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface PaletteItem {
  id: string;
  title: string;
  category: 'Section' | 'Project' | 'Action' | 'Contact';
  subtitle?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage(`Copied ${label} to clipboard!`);
    setTimeout(() => setCopiedMessage(null), 2500);
  };

  // Compile all searchable palette items
  const items: PaletteItem[] = [
    // Actions
    {
      id: 'act-resume',
      title: 'View Official Resume',
      category: 'Action',
      subtitle: 'Complete verified credentials & academic details',
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-copy-email',
      title: `Copy Email (${PERSONAL_DETAILS.email})`,
      category: 'Contact',
      subtitle: 'Direct email for full-time and project opportunities',
      icon: <Mail className="w-4 h-4 text-[#de1b1c]" />,
      action: () => copyToClipboard(PERSONAL_DETAILS.email, 'email address'),
    },
    {
      id: 'act-copy-phone',
      title: `Copy Phone (${PERSONAL_DETAILS.phone})`,
      category: 'Contact',
      subtitle: 'Direct mobile contact for recruiter inquiries',
      icon: <Phone className="w-4 h-4 text-sky-400" />,
      action: () => copyToClipboard(PERSONAL_DETAILS.phone, 'phone number'),
    },

    // Sections
    {
      id: 'sec-hero',
      title: 'Go to Hero & Monumental Intro',
      category: 'Section',
      subtitle: 'Top scene with monumental title and standing figure',
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('home'),
    },
    {
      id: 'sec-about',
      title: 'Go to About Me & Developer Dossier',
      category: 'Section',
      subtitle: 'Profile overview, background, career objective',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => scrollToSection('about'),
    },
    {
      id: 'sec-projects',
      title: 'Go to Featured Projects Showcase',
      category: 'Section',
      subtitle: 'All 7 practical software and machine learning systems',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection('projects'),
    },
    {
      id: 'sec-experience',
      title: 'Go to Professional Experience',
      category: 'Section',
      subtitle: 'Thiranex Full-Stack Development Internship',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => scrollToSection('experience'),
    },
    {
      id: 'sec-skills',
      title: 'Go to Technical Skills Matrix',
      category: 'Section',
      subtitle: 'Languages, frontend, backend, AI/ML, databases, tools',
      icon: <Layers className="w-4 h-4 text-amber-400" />,
      action: () => scrollToSection('skills'),
    },
    {
      id: 'sec-awards',
      title: 'Go to Major Award & 1st Place Distinction',
      category: 'Section',
      subtitle: '1st Place Project Exhibition Winner',
      icon: <Trophy className="w-4 h-4 text-yellow-400" />,
      action: () => scrollToSection('achievements'),
    },
    {
      id: 'sec-education',
      title: 'Go to Academic Education Timeline',
      category: 'Section',
      subtitle: 'RYMEC Ballari, B.E. Information Science (8.44 CGPA)',
      icon: <GraduationCap className="w-4 h-4 text-indigo-400" />,
      action: () => scrollToSection('education'),
    },
    {
      id: 'sec-contact',
      title: 'Go to Contact Terminal',
      category: 'Section',
      subtitle: 'Send a direct message or inquiry',
      icon: <Mail className="w-4 h-4 text-[#de1b1c]" />,
      action: () => scrollToSection('contact'),
    },

    // All Projects
    ...PROJECTS_DATA.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      category: 'Project' as const,
      subtitle: `${p.technologies.slice(0, 3).join(', ')} · ${p.tagline}`,
      icon: <Code className="w-4 h-4 text-cyan-400" />,
      action: () => {
        onClose();
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
    })),
  ];

  const filteredItems = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.subtitle && item.subtitle.toLowerCase().includes(q))
    );
  });

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredItems, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -15 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#090b14] border border-slate-800 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden z-10 flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-slate-800 bg-[#070912]">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, or section..."
                className="w-full bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-slate-800 text-[10px] font-mono text-slate-400">
                <span>ESC</span>
              </div>
            </div>

            {/* Toast Confirmation Message */}
            <AnimatePresence>
              {copiedMessage && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-emerald-950/90 border-b border-emerald-500/40 px-4 py-2 text-xs text-emerald-300 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>{copiedMessage}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400/80">Ready to paste</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  No matching results for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => item.action()}
                      onMouseEnter={() => {
                        setSelectedIndex(index);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-800/90 text-white shadow-sm ring-1 ring-white/10'
                          : 'text-slate-300 hover:bg-slate-900/60'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg ${
                            isSelected ? 'bg-slate-700/80 text-white' : 'bg-slate-900 text-slate-400'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="truncate">
                          <div className="text-xs sm:text-sm font-medium text-white truncate flex items-center gap-2">
                            <span>{item.title}</span>
                          </div>
                          {item.subtitle && (
                            <p className="text-[11px] text-slate-400 truncate mt-0.5">
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 hidden sm:inline">
                          {item.category}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isSelected ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Bar */}
            <div className="px-4 py-2.5 bg-[#05060d] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">↓</kbd>
                  <span className="ml-1 hidden sm:inline">to navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">↵</kbd>
                  <span className="ml-1 hidden sm:inline">to select</span>
                </span>
              </div>
              <span className="text-[10px] text-slate-400">Govind K T Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
