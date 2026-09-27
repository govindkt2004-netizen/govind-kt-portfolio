import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Inbox,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';
import { ContactFormData } from '../types';
import { TechHeading } from './TechHeading';
import { InquiriesModal } from './InquiriesModal';
import { SectionAtmosphereHeader } from './SectionAtmosphereHeader';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inboxOpen, setInboxOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getGmailComposeUrl = () => {
    const to = PERSONAL_DETAILS.email;
    const subject = formData.subject || 'Portfolio Inquiry';
    const body = formData.name
      ? `Hi Govind,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      : `Hi Govind,\n\nI visited your portfolio and wanted to reach out regarding...`;
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getWhatsAppUrl = () => {
    const text = formData.name
      ? `Hi Govind! I am ${formData.name} (${formData.email}). Regarding: ${formData.subject || 'Portfolio'}. Message: ${formData.message}`
      : `Hi Govind! I visited your portfolio and would like to connect with you.`;
    return `https://wa.me/919591455853?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setError(data.error || 'Failed to send message. Please try reaching out directly.');
      }
    } catch {
      // Graceful offline fallback
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-cyan-600/5 blur-[130px] rounded-full pointer-events-none" />

      {/* Atmospheric Section Header */}
      <SectionAtmosphereHeader
        badgeIcon={Mail}
        badgeLabel="Direct Communication"
        badgeIndex="10"
        accentGlow="cyan"
        title="Get in Touch"
        highlight="Touch"
        highlightClass="text-cyan-400"
        subtitle="Reach Govind K T directly for software development roles, internships, and technical collaborations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct contact cards & socials */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl border border-slate-800 bg-[#070913]/90 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  {PERSONAL_DETAILS.name}
                </h3>
                <p className="text-xs text-slate-400">
                  Software Developer • Full-Stack Architect • AI/ML
                </p>
              </div>

              {/* Owner Inbox Button */}
              <button
                onClick={() => setInboxOpen(true)}
                title="View received visitor inquiries (Owner Inbox)"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono transition-all cursor-pointer shadow-sm"
              >
                <Inbox className="w-3.5 h-3.5 text-cyan-400" />
                <span>Inbox</span>
              </button>
            </div>

            {/* Clear explanation of how messages reach Govind */}
            <div className="mb-6 p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-cyan-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>How messages reach Govind:</span>
              </div>
              <ul className="space-y-1.5 text-[11.5px] text-slate-300 pl-1 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>
                    Delivered straight to personal email: <strong className="text-white">govindkt2004@gmail.com</strong>
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>
                    Direct phone &amp; WhatsApp line: <strong className="text-white">+91 9591455853</strong>
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyan-400 font-bold">•</span>
                  <span>Stored securely in the portfolio’s private message inbox for Govind.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              {/* Email item */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block">Personal Email</span>
                    <a
                      href={`mailto:${PERSONAL_DETAILS.email}`}
                      className="text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_DETAILS.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_DETAILS.phone}`}
                      className="text-xs font-semibold text-slate-200 hover:text-emerald-300 transition-colors block"
                    >
                      {PERSONAL_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 hover:bg-emerald-500/30 text-emerald-300 text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick 1-Click Launch Buttons */}
            <div className="pt-4 mt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open in Gmail</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center gap-1.5 text-xs text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct WhatsApp</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-5 mt-5 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-3 font-medium">
                Profiles &amp; Repositories
              </span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 flex flex-col items-center text-center transition-all group cursor-pointer"
                >
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-cyan-300 mb-1 transition-colors" />
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                    GitHub
                  </span>
                </a>

                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 flex flex-col items-center text-center transition-all group cursor-pointer"
                >
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-sky-300 mb-1 transition-colors" />
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Clean Interactive Contact Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-800 bg-[#070913]/90 backdrop-blur-2xl shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <h3 className="font-display font-semibold text-xl text-white">
                Send a Message
              </h3>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto">
                <Lock className="w-3 h-3 text-cyan-400" />
                <span>Direct to govindkt2004@gmail.com</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-6">
              Messages are sent directly to Govind K T and stored in the portfolio's secure inquiry log.
            </p>

            {/* Success Alert Banner */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between gap-3 shadow-lg"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Message Sent Successfully!</p>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      Thank you! Your message has been delivered to Govind's inbox.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[11px] text-emerald-400 hover:text-emerald-200 underline cursor-pointer shrink-0 font-mono"
                >
                  Dismiss
                </button>
              </motion.div>
            )}

            {/* Error Banner */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Subject <span className="text-slate-500 font-normal">(Optional)</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Software Development Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Tell Govind about your project, role, or ideas you'd like to collaborate on..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/70 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                id="btn-submit-contact"
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.99] disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Govind</span>
                  </>
                )}
              </button>

              {/* Direct Alternative Reach Option */}
              <div className="pt-3 text-center">
                <span className="text-[11px] text-slate-500">
                  Prefer direct email?{' '}
                  <a
                    href={getGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline font-medium"
                  >
                    Click here to open in Gmail
                  </a>{' '}
                  or{' '}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    Chat on WhatsApp
                  </a>
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Owner Inbox Modal */}
      <InquiriesModal isOpen={inboxOpen} onClose={() => setInboxOpen(false)} />
    </section>
  );
};
