import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Inbox,
  X,
  Mail,
  Trash2,
  ExternalLink,
  MessageCircle,
  Clock,
  User,
  RefreshCw,
} from 'lucide-react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp: string;
}

interface InquiriesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiriesModal: React.FC<InquiriesModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/contact-messages');
      const data = await res.json();
      if (data.success && Array.isArray(data.messages)) {
        setMessages(data.messages);
      }
    } catch (err) {
      console.error('Failed to load inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchMessages();
    }
  }, [isOpen]);

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      const res = await fetch(`/api/contact-messages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setMessages((prev) => prev.filter((m) => m.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete inquiry:', err);
    } finally {
      setDeletingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] bg-[#070913] border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                <Inbox className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">
                  Owner Inbox • Received Inquiries
                </h3>
                <p className="text-xs text-slate-400">
                  Messages submitted by visitors on your portfolio form
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={fetchMessages}
                disabled={loading}
                title="Refresh messages"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-1">
            {loading && messages.length === 0 ? (
              <div className="py-16 text-center text-slate-500 text-sm">
                <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-cyan-400" />
                Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="py-16 text-center text-slate-400 text-sm">
                <Mail className="w-8 h-8 mx-auto mb-3 text-slate-600" />
                <p className="font-medium text-slate-300">No inquiries received yet.</p>
                <p className="text-xs text-slate-500 mt-1">
                  Whenever a visitor submits the form, it will appear here immediately and route to govindkt2004@gmail.com.
                </p>
              </div>
            ) : (
              messages.map((item) => {
                const formattedDate = new Date(item.timestamp).toLocaleString();
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  item.email
                )}&su=${encodeURIComponent(`Re: ${item.subject || 'Portfolio Inquiry'}`)}`;

                return (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 space-y-3 transition-colors hover:border-slate-700"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-cyan-400" />
                          <span className="font-semibold text-sm text-white">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Mail className="w-3 h-3 text-slate-500" />
                          <a
                            href={`mailto:${item.email}`}
                            className="text-cyan-400 hover:underline"
                          >
                            {item.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <Clock className="w-3 h-3" />
                        <span>{formattedDate}</span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          disabled={deletingId === item.id}
                          title="Delete message"
                          className="ml-2 p-1.5 rounded-lg bg-slate-800 hover:bg-rose-900/40 hover:text-rose-400 text-slate-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {item.subject && (
                      <div className="text-xs font-semibold text-slate-300 bg-slate-950/60 px-3 py-1 rounded-lg inline-block border border-slate-800">
                        Subject: {item.subject}
                      </div>
                    )}

                    <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-900 whitespace-pre-wrap">
                      {item.message}
                    </div>

                    {/* Quick Reply Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-medium hover:bg-cyan-500/25 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Reply via Gmail</span>
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Note */}
          <div className="pt-4 mt-2 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Destination: govindkt2004@gmail.com</span>
            <span>Total Messages: {messages.length}</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
