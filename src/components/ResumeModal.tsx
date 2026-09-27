import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  X,
  Printer,
  FileText,
  Sparkles,
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  ExternalLink,
  Check,
  Copy,
} from 'lucide-react';
import {
  PERSONAL_DETAILS,
  ORIGINAL_RESUME_DATA,
  CAREER_OBJECTIVE,
  EDUCATION_DATA,
  INTERNSHIP_DATA,
  SKILL_CATEGORIES,
  PROJECTS_DATA,
  MAIN_ACHIEVEMENT,
  CERTIFICATIONS,
  LANGUAGES_KNOWN,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'original' | 'interactive'>('original');
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(ORIGINAL_RESUME_DATA.header.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static print:inset-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-4 text-slate-200 print:border-none print:shadow-none print:w-full print:max-w-none print:m-0 print:bg-white print:text-black"
      >
        {/* Sticky Action Toolbar (Hidden in Print) */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800 backdrop-blur-xl print:hidden">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                id="btn-tab-original-resume"
                onClick={() => setActiveTab('original')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'original'
                    ? 'bg-[#1b3a60] text-white shadow-sm border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>Original Resume (Official)</span>
              </button>

              <button
                id="btn-tab-interactive-resume"
                onClick={() => setActiveTab('interactive')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'interactive'
                    ? 'bg-slate-800 text-white shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Modern Tech View</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-print-resume"
              onClick={handlePrint}
              title="Print document or save directly as PDF"
              className="px-3 sm:px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-95"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              title="Close modal (Esc)"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* VIEW 1: AUTHENTIC ORIGINAL RESUME (Exact 1:1 replica of user's PDF)      */}
        {/* ========================================================================= */}
        {activeTab === 'original' && (
          <div className="p-4 sm:p-8 md:p-12 max-h-[82vh] overflow-y-auto print:max-h-none print:p-0 print:overflow-visible bg-slate-900/60 print:bg-white flex flex-col items-center">
            {/* White Paper Canvas */}
            <div
              id="official-resume-document"
              className="w-full max-w-[800px] bg-white text-gray-900 shadow-2xl print:shadow-none border border-gray-200 print:border-none p-6 sm:p-10 md:p-12 font-serif text-[13px] leading-relaxed select-text"
              style={{ fontFamily: '"Georgia", "Times New Roman", Times, serif' }}
            >
              {/* PAGE 1 CONTENT */}
              <div className="space-y-6 pb-6">
                {/* Title */}
                <div className="text-center">
                  <h1 className="text-sm sm:text-base font-bold tracking-widest text-gray-800 uppercase font-sans">
                    {ORIGINAL_RESUME_DATA.header.title}
                  </h1>
                </div>

                {/* Name Banner Block (High contrast dark navy bar like the original PDF) */}
                <div className="bg-[#1b3a60] text-white py-2 px-4 text-center rounded-xs">
                  <h2 className="text-lg sm:text-xl font-bold tracking-wider font-sans uppercase">
                    {ORIGINAL_RESUME_DATA.header.name}
                  </h2>
                </div>

                {/* Address & Contact Info */}
                <div className="text-xs sm:text-[13px] text-gray-800 space-y-1">
                  <p className="font-normal">{ORIGINAL_RESUME_DATA.header.addressLine1}</p>
                  <p className="font-normal">{ORIGINAL_RESUME_DATA.header.addressLine2}</p>
                  <p className="pt-0.5">
                    <span className="font-semibold">Cell:</span>{' '}
                    <a
                      href={`tel:${ORIGINAL_RESUME_DATA.header.cell.replace(/\s+/g, '')}`}
                      className="text-gray-900 hover:text-blue-700 underline print:no-underline"
                    >
                      {ORIGINAL_RESUME_DATA.header.cell}
                    </a>
                    {' | '}
                    <span className="font-semibold">E-Mail:</span>{' '}
                    <a
                      href={`mailto:${ORIGINAL_RESUME_DATA.header.email}`}
                      className="text-gray-900 hover:text-blue-700 underline print:no-underline"
                    >
                      {ORIGINAL_RESUME_DATA.header.email}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">LinkedIn:</span>{' '}
                    <a
                      href={ORIGINAL_RESUME_DATA.header.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline break-all"
                    >
                      {ORIGINAL_RESUME_DATA.header.linkedin}
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold">GitHub:</span>{' '}
                    <a
                      href={ORIGINAL_RESUME_DATA.header.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline break-all"
                    >
                      {ORIGINAL_RESUME_DATA.header.github}
                    </a>
                  </p>
                </div>

                {/* Solid Divider */}
                <hr className="border-t border-gray-400 my-4" />

                {/* CAREER OBJECTIVE */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-1">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      CAREER
                      <br />
                      OBJECTIVE
                    </h3>
                  </div>
                  <div className="md:col-span-9 text-justify text-gray-800 leading-relaxed">
                    <p>{ORIGINAL_RESUME_DATA.careerObjective}</p>
                  </div>
                </div>

                {/* EDUCATIONAL QUALIFICATION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      EDUCATIONAL
                      <br />
                      QUALIFICATION
                    </h3>
                  </div>
                  <div className="md:col-span-9 overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-600 text-xs sm:text-[12.5px] text-left">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-600 px-2.5 py-1.5 font-bold text-gray-900 font-sans">
                            Course
                          </th>
                          <th className="border border-gray-600 px-2.5 py-1.5 font-bold text-gray-900 font-sans">
                            Institution
                          </th>
                          <th className="border border-gray-600 px-2.5 py-1.5 font-bold text-gray-900 font-sans">
                            Board/University
                          </th>
                          <th className="border border-gray-600 px-2.5 py-1.5 font-bold text-gray-900 font-sans">
                            Percentage
                          </th>
                          <th className="border border-gray-600 px-2.5 py-1.5 font-bold text-gray-900 font-sans">
                            Year of passing
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ORIGINAL_RESUME_DATA.educationQualifications.map((item) => (
                          <tr key={item.course}>
                            <td className="border border-gray-600 px-2.5 py-1.5 font-medium">
                              {item.course}
                            </td>
                            <td className="border border-gray-600 px-2.5 py-1.5">{item.institution}</td>
                            <td className="border border-gray-600 px-2.5 py-1.5">
                              {item.boardUniversity}
                            </td>
                            <td className="border border-gray-600 px-2.5 py-1.5">{item.percentage}</td>
                            <td className="border border-gray-600 px-2.5 py-1.5">{item.yearOfPassing}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* INTERNSHIP */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      INTERNSHIP
                    </h3>
                  </div>
                  <div className="md:col-span-9 space-y-1">
                    <p className="font-bold text-gray-900 font-sans text-xs sm:text-[13px]">
                      {ORIGINAL_RESUME_DATA.internship.company} |{' '}
                      <span className="font-semibold text-gray-800">
                        {ORIGINAL_RESUME_DATA.internship.role}
                      </span>
                    </p>
                    <p className="text-xs italic text-gray-600">
                      {ORIGINAL_RESUME_DATA.internship.duration}
                    </p>
                    <ul className="space-y-1 pt-1 text-gray-800">
                      {ORIGINAL_RESUME_DATA.internship.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gray-500 font-bold">o</span>
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* TECHNICAL SKILLS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      TECHNICAL
                      <br />
                      SKILLS
                    </h3>
                  </div>
                  <div className="md:col-span-9 space-y-1 text-gray-800">
                    <p>
                      <strong className="font-semibold text-gray-900">Languages</strong> :{' '}
                      {ORIGINAL_RESUME_DATA.technicalSkills.languages}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">Office Packages</strong> :{' '}
                      {ORIGINAL_RESUME_DATA.technicalSkills.officePackages}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900">Operating System</strong> :{' '}
                      {ORIGINAL_RESUME_DATA.technicalSkills.operatingSystem}
                    </p>
                  </div>
                </div>

                {/* CERTIFICATIONS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      CERTIFICATIONS
                    </h3>
                  </div>
                  <div className="md:col-span-9 space-y-1 text-gray-800">
                    {ORIGINAL_RESUME_DATA.certifications.map((cert) => (
                      <div key={cert.title}>
                        <p className="font-bold text-gray-900 font-sans text-xs sm:text-[13px]">
                          {cert.title} - {cert.period}
                        </p>
                        <p className="text-justify">{cert.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* PAGE BREAK INDICATOR (Divider on web, page-break in print) */}
              <div className="my-8 py-3 border-y border-dashed border-gray-300 text-center text-xs text-gray-400 font-mono print:hidden">
                ——— Page 2 / Continued ———
              </div>
              <div className="hidden print:block page-break" style={{ pageBreakBefore: 'always' }} />

              {/* PAGE 2 CONTENT */}
              <div className="space-y-6 pt-2">
                {/* ACHIEVEMENTS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      ACHIEVEMENTS
                    </h3>
                  </div>
                  <div className="md:col-span-9 text-justify text-gray-800 leading-relaxed">
                    <p>{ORIGINAL_RESUME_DATA.achievements}</p>
                  </div>
                </div>

                {/* PROJECT PROFILE */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      PROJECT
                      <br />
                      PROFILE
                    </h3>
                  </div>
                  <div className="md:col-span-9 space-y-4 text-gray-800">
                    {ORIGINAL_RESUME_DATA.projectProfile.map((proj) => (
                      <div key={proj.title} className="space-y-1">
                        <p className="font-bold text-gray-900 font-sans text-xs sm:text-[13px]">
                          {proj.title} :
                        </p>
                        <p className="text-justify">{proj.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PERSONAL SKILLS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      PERSONAL
                      <br />
                      SKILLS
                    </h3>
                  </div>
                  <div className="md:col-span-9">
                    <ul className="space-y-1.5 text-gray-800">
                      {ORIGINAL_RESUME_DATA.personalSkills.map((skill, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gray-500 font-bold">o</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* EXTRA CURRICULAR */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      EXTRA
                      <br />
                      CURRICULAR
                    </h3>
                  </div>
                  <div className="md:col-span-9 text-justify text-gray-800 leading-relaxed">
                    <p>{ORIGINAL_RESUME_DATA.extraCurricular}</p>
                  </div>
                </div>

                {/* PERSONAL PROFILE */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-2">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      PERSONAL
                      <br />
                      PROFILE
                    </h3>
                  </div>
                  <div className="md:col-span-9 space-y-1 text-gray-800">
                    <p>
                      <strong className="font-semibold text-gray-900 inline-block w-36">
                        Nationality
                      </strong>{' '}
                      : {ORIGINAL_RESUME_DATA.personalProfile.nationality}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900 inline-block w-36">
                        Date of Birth
                      </strong>{' '}
                      : {ORIGINAL_RESUME_DATA.personalProfile.dob}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900 inline-block w-36">Gender</strong> :{' '}
                      {ORIGINAL_RESUME_DATA.personalProfile.gender}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900 inline-block w-36">Hobbies</strong>{' '}
                      : {ORIGINAL_RESUME_DATA.personalProfile.hobbies}
                    </p>
                    <p>
                      <strong className="font-semibold text-gray-900 inline-block w-36">
                        Languages Known
                      </strong>{' '}
                      : {ORIGINAL_RESUME_DATA.personalProfile.languagesKnown}
                    </p>
                  </div>
                </div>

                {/* TRUTH DECLARATION */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline pt-3 border-t border-gray-300">
                  <div className="md:col-span-3">
                    <h3 className="text-xs sm:text-[13px] font-bold text-gray-900 uppercase tracking-wider font-sans">
                      TRUTH
                      <br />
                      DECLARATION
                    </h3>
                  </div>
                  <div className="md:col-span-9 text-justify text-gray-800 leading-relaxed">
                    <p>{ORIGINAL_RESUME_DATA.truthDeclaration.statement}</p>
                  </div>
                </div>

                {/* Signature Row */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs sm:text-[13px] text-gray-900 font-sans gap-4">
                  <div className="space-y-1.5">
                    <p>
                      <span className="font-bold">Place :</span>{' '}
                      {ORIGINAL_RESUME_DATA.truthDeclaration.place}
                    </p>
                    <p>
                      <span className="font-bold">Date :</span>{' '}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="font-bold">
                      Name : {ORIGINAL_RESUME_DATA.truthDeclaration.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VIEW 2: MODERN INTERACTIVE RESUME (Dark Cyber Portfolio View)             */}
        {/* ========================================================================= */}
        {activeTab === 'interactive' && (
          <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto print:max-h-none print:p-0 space-y-8 bg-slate-950 text-slate-100 font-sans">
            {/* Header */}
            <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-2">
                <FileText className="w-3.5 h-3.5" />
                <span>Verified Resume • {PERSONAL_DETAILS.location}</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight uppercase">
                {PERSONAL_DETAILS.name}
              </h1>
              <p className="text-sm font-mono text-cyan-400 mt-1 font-semibold">
                Information Science and Engineering Student • Software &amp; AI Developer
              </p>

              {/* Contact details */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2 mt-3 text-xs font-mono text-slate-400">
                <a
                  href={`mailto:${PERSONAL_DETAILS.email}`}
                  className="flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  {PERSONAL_DETAILS.email}
                </a>
                <a
                  href={`tel:${PERSONAL_DETAILS.phone}`}
                  className="flex items-center gap-1 hover:text-emerald-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {PERSONAL_DETAILS.phone}
                </a>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#de1b1c]" />
                  {PERSONAL_DETAILS.location}
                </span>
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-slate-300" />
                  github.com/govindkt2004-netizen
                </a>
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Objective */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2 pb-1 border-b border-slate-800">
                Career Objective
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {CAREER_OBJECTIVE}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
                Education
              </h2>
              <div className="space-y-4">
                {EDUCATION_DATA.map((edu) => (
                  <div
                    key={edu.degree}
                    className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm p-3 rounded-xl bg-slate-900/50 border border-slate-800/80"
                  >
                    <div>
                      <span className="font-bold text-white block">
                        {edu.degree} {edu.field && `— ${edu.field}`}
                      </span>
                      <span className="text-slate-400">
                        {edu.institution} {edu.university && `(${edu.university})`}
                      </span>
                    </div>
                    <div className="text-right sm:text-right mt-1 sm:mt-0 font-mono text-xs">
                      <span className="text-cyan-300 font-semibold block">
                        {edu.scoreType}: {edu.score}
                      </span>
                      <span className="text-slate-500">
                        {edu.year} • {edu.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
                Internship Experience
              </h2>
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <span className="font-bold text-white">{INTERNSHIP_DATA.role}</span>
                    <span className="text-slate-400"> — {INTERNSHIP_DATA.company}</span>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">{INTERNSHIP_DATA.duration}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  {INTERNSHIP_DATA.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {INTERNSHIP_DATA.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
                Key Projects
              </h2>
              <div className="space-y-3">
                {PROJECTS_DATA.slice(0, 4).map((p) => (
                  <div
                    key={p.id}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm"
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-white">{p.title}</span>
                      <span className="text-[11px] font-mono text-cyan-400">
                        {p.technologies.join(', ')}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
                Technical Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div
                    key={cat.categoryKey}
                    className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60"
                  >
                    <span className="font-semibold text-slate-200 block mb-1">{cat.title}:</span>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement & Certification */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 pb-1 border-b border-slate-800">
                Distinction &amp; Certification
              </h2>
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30">
                  <span className="font-bold text-amber-300 block">
                    {MAIN_ACHIEVEMENT.rank} — {MAIN_ACHIEVEMENT.competition}
                  </span>
                  <span className="text-slate-400 block mt-0.5">
                    {MAIN_ACHIEVEMENT.event} at {MAIN_ACHIEVEMENT.venue} ({MAIN_ACHIEVEMENT.date})
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/30">
                  <span className="font-bold text-cyan-300 block">
                    {CERTIFICATIONS[0].title}
                  </span>
                  <span className="text-slate-400 block mt-0.5">
                    {CERTIFICATIONS[0].description} ({CERTIFICATIONS[0].date})
                  </span>
                </div>
              </div>
            </div>

            {/* Personal Details & Location */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#de1b1c]" />
                Permanent Location: <strong className="text-white">{PERSONAL_DETAILS.location}</strong>
              </span>
              <span>Languages: {LANGUAGES_KNOWN.map((l) => l.language).join(' • ')}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
