import { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { submitContactForm } from '../services/contactService';
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function ContactPage({
  onHoverPeek,
  onLeavePeek,
}: ContactPageProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<string | null>(null);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessResponse(null);

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email address.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid email format (e.g. name@domain.com).');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please type a message before submitting.');
      return;
    }

    setLoading(true);
    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setSuccessResponse(res.message);
        setSubmissionId(res.submissionId || null);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(res.message || 'Unable to submit at this time.');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Failed to transmit message. Please try direct email instead.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Direct Inquiries</span>
          <span className="text-slate-400">·</span>
          <span>Response Guaranteed</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          Have an idea?
          <br />
          <span className="text-[#e11d48]">Let&apos;s build something.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          Open to technical projects, community workshops, hackathon teams, and collegiate event planning. Reach out through the form or any preferred channel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Interactive Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
            Direct Contact Channels
          </span>

          {/* Primary Email Card */}
          <div
            className="p-5 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all space-y-3"
            onMouseEnter={(e) => onHoverPeek('PRIMARY EMAIL', ['Direct Inbox', 'Prompt Reply'], e)}
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-slate-100 rounded text-[#1a2433]">
                  <Mail className="w-4 h-4 text-[#e11d48]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Email
                  </span>
                  <span className="text-sm font-semibold font-mono text-slate-900">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-slate-600 font-sans">
              Best for formal invitations, event proposals, or technical queries.
            </p>
          </div>

          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex items-center justify-between group"
            onMouseEnter={(e) => onHoverPeek('GITHUB', ['Code Repos', 'Student Commits'], e)}
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded text-[#1a2433] group-hover:bg-[#1a2433] group-hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  GitHub
                </span>
                <span className="text-sm font-semibold font-mono text-slate-900 group-hover:text-[#e11d48] transition-colors">
                  {PERSONAL_INFO.github}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48]" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex items-center justify-between group"
            onMouseEnter={(e) => onHoverPeek('LINKEDIN', ['Professional', 'MSU Baroda'], e)}
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded text-[#1a2433] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  LinkedIn
                </span>
                <span className="text-sm font-semibold text-slate-900 group-hover:text-[#e11d48] transition-colors">
                  {PERSONAL_INFO.linkedin}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48]" />
          </a>

          {/* WhatsApp Card */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex items-center justify-between group"
            onMouseEnter={(e) => onHoverPeek('WHATSAPP', ['Instant Message', 'Quick Ping'], e)}
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded text-[#1a2433] group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  WhatsApp
                </span>
                <span className="text-sm font-semibold font-mono text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {PERSONAL_INFO.whatsapp}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-700" />
          </a>

          {/* Instagram Card */}
          <a
            href={PERSONAL_INFO.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex items-center justify-between group"
            onMouseEnter={(e) => onHoverPeek('INSTAGRAM', ['Campus Life', 'Personal Updates'], e)}
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 rounded text-[#1a2433] group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Instagram
                </span>
                <span className="text-sm font-semibold font-mono text-slate-900 group-hover:text-pink-600 transition-colors">
                  {PERSONAL_INFO.instagram}
                </span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-pink-600" />
          </a>
        </div>

        {/* Right Column: Verified Backend Contact Form */}
        <div className="lg:col-span-7 bg-white border border-slate-300 rounded-lg p-6 sm:p-8 shadow-brutal">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
              Direct Transmission Form
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-display text-[#1a2433] mt-1">
              Send a Message
            </h2>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Securely routed to <span className="font-mono text-slate-700">kavarakshar007@gmail.com</span>
            </p>
          </div>

          {/* Feedback Alerts */}
          {successResponse && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-150">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">{successResponse}</p>
                {submissionId && (
                  <p className="text-xs text-emerald-700 mt-1 font-mono">
                    Ref ID: {submissionId}
                  </p>
                )}
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 p-4 bg-rose-50 border border-rose-300 text-rose-900 rounded text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-150">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Transmission issue</p>
                <p className="text-xs mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 font-sans">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5"
                >
                  Your Name <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2433] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5"
                >
                  Email Address <span className="text-[#e11d48]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2433] focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="e.g. CodeLab Workshop / Collaboration Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2433] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-mono uppercase tracking-wider text-slate-600 mb-1.5"
              >
                Message <span className="text-[#e11d48]">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                placeholder="Share your idea, event context, or question..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1a2433] focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-slate-500">
                Encrypted &amp; delivered to verified inbox.
              </span>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1a2433] hover:bg-[#e11d48] text-white text-xs font-semibold rounded shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
              >
                {loading ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5 text-[#e11d48]" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
