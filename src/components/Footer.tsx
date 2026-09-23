import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MessageCircle, Instagram, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1a2433] text-white border-t border-slate-700/80 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] animate-pulse" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                THATSAKKI
              </span>
              <span className="font-mono text-xs text-slate-400">/ Kavar Akshar</span>
            </div>
            <p className="text-sm text-slate-300 font-sans max-w-sm leading-relaxed">
              Built with curiosity, code &amp; too many ideas.
            </p>
            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <p>B.E. Computer Science Engineering · 2nd Year</p>
              <p>Faculty of Technology &amp; Engineering, MSU Baroda</p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
              Navigation
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                About Akshar
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Projects &amp; Builds
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Leadership &amp; Events
              </button>
              <button
                onClick={() => onNavigate('skills')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Skills &amp; Stacks
              </button>
              <button
                onClick={() => onNavigate('achievements')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Milestones
              </button>
              <button
                onClick={() => onNavigate('journey')}
                className="text-left text-slate-300 hover:text-white hover:underline transition-colors"
              >
                Timeline
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left text-slate-300 hover:text-[#e11d48] font-medium transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
              Connect Directly
            </span>
            <div className="flex flex-wrap gap-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#334155] hover:bg-[#e11d48] text-white rounded transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#334155] hover:bg-[#e11d48] text-white rounded transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 bg-[#334155] hover:bg-[#e11d48] text-white rounded transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#334155] hover:bg-[#e11d48] text-white rounded transition-colors"
                aria-label="WhatsApp Message"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-[#334155] hover:bg-[#e11d48] text-white rounded transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              kavarakshar007@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
            <span>&copy; 2026 Kavar Akshar. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">·</span>
            <span className="hidden sm:inline font-mono">Baroda, Gujarat, India</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
