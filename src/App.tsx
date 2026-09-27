/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { WelcomeIntro } from './components/WelcomeIntro';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { ScrollFadeSection } from './components/ScrollFadeSection';
import { MonumentalHero } from './components/MonumentalHero';
import { DeveloperDossier } from './components/DeveloperDossier';
import { TimeMachineTimeline } from './components/TimeMachineTimeline';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { InternshipSection } from './components/InternshipSection';
import { EducationTimeline } from './components/EducationTimeline';
import { SkillsSection } from './components/SkillsSection';
import { AchievementHero } from './components/AchievementHero';
import { CertificationSection } from './components/CertificationSection';
import { PersonalStrengthsSection } from './components/PersonalStrengthsSection';
import { ContactSection } from './components/ContactSection';
import { CinematicFinale } from './components/CinematicFinale';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { CommandPaletteModal } from './components/CommandPaletteModal';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Global Keyboard Shortcuts (Cmd+K / Ctrl+K for Search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Active section observer
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'chrono',
      'projects',
      'experience',
      'education',
      'skills',
      'achievements',
      'certification',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030306] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Custom Minimalist Animated Cursor */}
      <CustomCursor />

      {/* Animated Slim Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Welcoming Creative Entrance */}
      <AnimatePresence>
        {!introFinished && (
          <WelcomeIntro onComplete={() => setIntroFinished(true)} />
        )}
      </AnimatePresence>

      {/* Background Interactive Particle Constellation */}
      <ParticleCanvas />

      {/* Floating Header Navigation */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        activeSection={activeSection}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Main Flow: Visual Hierarchy Story */}
      <main className="relative z-10">
        {/* SCENE 01: The Monumental Hero (Massive Wordmark + Standing Cutout + Parallax) */}
        <MonumentalHero
          onOpenResume={() => setResumeModalOpen(true)}
          isReady={introFinished}
        />

        {/* SCENE 02: Developer Dossier (Close-up Portrait Photo + Credentials) */}
        <ScrollFadeSection>
          <DeveloperDossier onOpenResume={() => setResumeModalOpen(true)} />
        </ScrollFadeSection>

        {/* SCENE 03: The Time Machine (Journey Clock Mechanism 2020-2027) */}
        <ScrollFadeSection>
          <TimeMachineTimeline />
        </ScrollFadeSection>

        {/* SCENE 05: Featured Projects Showcase (All 7 Projects with Modal) */}
        <ScrollFadeSection>
          <ProjectsShowcase />
        </ScrollFadeSection>

        {/* SCENE 06: Professional Internship (Thiranex Full-Stack) */}
        <ScrollFadeSection>
          <InternshipSection />
        </ScrollFadeSection>

        {/* SCENE 07: Academic Education Timeline (RYMEC/VTU B.E., PUC, SSLC) */}
        <ScrollFadeSection>
          <EducationTimeline />
        </ScrollFadeSection>

        {/* SCENE 08: Technical Skills Matrix (Categorized, No Fake Percentages) */}
        <ScrollFadeSection>
          <SkillsSection />
        </ScrollFadeSection>

        {/* SCENE 09: Distinction & Major Award (1st Place Project Exhibition with Confetti) */}
        <ScrollFadeSection>
          <AchievementHero />
        </ScrollFadeSection>

        {/* SCENE 10: Verified Certification (Explore ML Using Python) */}
        <ScrollFadeSection>
          <CertificationSection />
        </ScrollFadeSection>

        {/* SCENE 11: Personal Strengths, Extra-Curriculars, Languages & Hobbies */}
        <ScrollFadeSection>
          <PersonalStrengthsSection />
        </ScrollFadeSection>

        {/* SCENE 12: Contact Terminal with Working Form */}
        <ScrollFadeSection>
          <ContactSection />
        </ScrollFadeSection>

        {/* SCENE 13: Cinematic Finale & Developer Stance */}
        <ScrollFadeSection>
          <CinematicFinale onOpenResume={() => setResumeModalOpen(true)} />
        </ScrollFadeSection>
      </main>

      {/* Clean Global Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandPaletteModal
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Full Resume Modal */}
      <AnimatePresence>
        {resumeModalOpen && (
          <ResumeModal
            isOpen={resumeModalOpen}
            onClose={() => setResumeModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
