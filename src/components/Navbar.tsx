import { useEffect, useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const NAV_LINKS: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`w-full max-w-6xl transition-all duration-200 pointer-events-auto rounded-lg border ${
          scrolled
            ? 'glass-nav bg-white/90 border-slate-300/80 shadow-brutal-sm'
            : 'bg-white/70 backdrop-blur-md border-slate-200/60'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 sm:px-5 sm:py-3">
          {/* Zone 1: Single text element Brand mark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group flex items-center gap-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
            aria-label="Go to home page"
          >
            <span className="w-2 h-2 rounded-full bg-[#e11d48] transition-transform duration-150 group-hover:scale-125" />
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#1a2433] group-hover:text-black">
              THATSAKKI
              <span className="text-slate-400 font-normal ml-1 text-xs sm:text-sm">/ AKSHAR</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-150 rounded ${
                    isActive
                      ? 'text-[#1a2433] font-semibold'
                      : 'text-[#64748b] hover:text-[#1a2433] hover:bg-slate-100/70'
                  } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#e11d48] rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded shadow-brutal-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#334155] hover:text-[#1a2433] hover:bg-slate-100 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 px-4 py-3 shadow-lg rounded-b-lg animate-in fade-in duration-150">
            <nav className="grid grid-cols-2 gap-1 py-1">
              {NAV_LINKS.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-3 py-2 text-xs font-medium rounded transition-colors text-left ${
                      isActive
                        ? 'bg-slate-100 text-[#1a2433] font-semibold border-l-2 border-[#e11d48]'
                        : 'text-[#64748b] hover:text-[#1a2433] hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />}
                  </button>
                );
              })}
            </nav>
            <div className="pt-2 mt-2 border-t border-slate-100">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-[#1a2433] rounded shadow-brutal-sm"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e11d48]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
