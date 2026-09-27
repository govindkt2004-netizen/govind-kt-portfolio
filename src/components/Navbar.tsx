import React, { useState, useEffect } from 'react';
import {
  FileText,
  Sparkles,
  Search,
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  activeSection,
  onOpenCommandPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-[#030306]/92 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.9)]'
          : 'py-2.5 sm:py-3.5 bg-gradient-to-b from-black/90 via-black/50 to-transparent'
      }`}
    >
      <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Unified Top Navigation Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5">
          {/* Top Line (Brand & Mobile Controls) */}
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center gap-3 group cursor-pointer select-none shrink-0"
            >
              <span className="font-anton text-2xl sm:text-3xl tracking-[0.02em] uppercase text-[#de1b1c] wordmark-distressed-red group-hover:scale-105 transition-transform duration-300">
                GOVIND
              </span>

              <div className="hidden sm:block w-[1px] h-6 bg-[#3a3a3a]" />

              <div className="hidden sm:flex flex-col text-[8px] sm:text-[9px] font-oswald font-normal uppercase tracking-[0.3em] text-[#8a8a8a] leading-[1.3]">
                <span>SOFTWARE DEVELOPER</span>
                <span>AI &amp; MACHINE LEARNING</span>
              </div>
            </a>

            {/* Mobile Actions in Top Row */}
            <div className="lg:hidden flex items-center gap-1.5 shrink-0">
              {onOpenCommandPalette && (
                <button
                  onClick={() => {
                    onOpenCommandPalette();
                  }}
                  title="Search & Jump (⌘K)"
                  className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                >
                  <Search className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              )}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-sky-500 text-black shadow-[0_0_12px_rgba(6,182,212,0.3)] hover:brightness-110 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Navigation Links in Row Upside */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer select-none shrink-0 ${
                    isActive
                      ? 'bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 font-semibold shadow-[0_0_14px_rgba(6,182,212,0.3)]'
                      : 'bg-slate-900/50 text-slate-300 hover:bg-slate-800/70 hover:text-white border border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />}
                </button>
              );
            })}
          </nav>

          {/* Desktop Controls (Right side of row) */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Quick Command Palette Button */}
            {onOpenCommandPalette && (
              <button
                onClick={() => {
                  onOpenCommandPalette();
                }}
                title="Search & Jump (Cmd + K)"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-cyan-500/40 transition-all text-xs font-mono cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px]">⌘K</span>
              </button>
            )}

            {/* Desktop Resume Button */}
            <button
              id="btn-view-resume-nav"
              onClick={() => {
                onOpenResume();
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-sky-500 text-black hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer shadow-[0_0_16px_rgba(6,182,212,0.35)]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* CHAMFERED HUD RULE SVG ACROSS BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none h-[12px]">
        <svg
          className="w-full h-full text-[#4a4a4a]"
          viewBox="0 0 1600 12"
          preserveAspectRatio="none"
        >
          <polyline
            points="0,1 28,11 1572,11 1600,1"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-75"
          />
        </svg>
      </div>
    </header>
  );
};
