import { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, CAPABILITY_STACK, WHAT_I_DO } from '../data/portfolioData';
import {
  ArrowRight,
  Terminal,
  Users,
  CalendarCheck,
  Sparkles,
  Share2,
  Compass,
  ArrowUpRight,
  Code2,
  Award,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function HomePage({ onNavigate, onHoverPeek, onLeavePeek }: HomePageProps) {
  const [activeCapability, setActiveCapability] = useState(0);

  const getBentoIcon = (name: string) => {
    switch (name) {
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-[#1a2433]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#1a2433]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#1a2433]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#1a2433]" />;
      default:
        return <Share2 className="w-5 h-5 text-[#1a2433]" />;
    }
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Lead-in */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#64748b]">
                <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse" />
                <span>{PERSONAL_INFO.statusPill}</span>
                <span className="text-slate-400">·</span>
                <span>JOINED 2025 · FTE MSU BARODA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#1a2433] leading-[1.08] tracking-tight">
                <span>I build with code.</span>
                <br />
                <span className="text-slate-700">I lead with people.</span>
                <br />
                <span className="relative inline-block text-[#1a2433]">
                  I turn ideas into experiences.
                  <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#e11d48]/40" />
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-600 font-sans max-w-xl leading-relaxed">
                {PERSONAL_INFO.heroSubtext}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={() => onNavigate('projects')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a2433] text-white text-sm font-semibold rounded shadow-brutal hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 text-[#e11d48]" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1a2433] border border-slate-300 text-sm font-semibold rounded shadow-brutal-sm hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 hover:border-[#1a2433] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

              {/* Monospace Micro-Coordinates */}
              <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-slate-500">
                <span>IDENTITY: THATSAKKI</span>
                <span>/</span>
                <span>MSU: 2025</span>
                <span>/</span>
                <span>CODELAB: 2025</span>
                <span>/</span>
                <span>CODERACE: 29 JAN 2026</span>
              </div>
            </div>

            {/* Right Column: Digital Identity Showcase Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div
                className="w-full max-w-md bg-white border-2 border-[#1a2433] rounded-lg shadow-brutal p-6 space-y-5 hover-shadow-brutal transition-all"
                onMouseEnter={(e) =>
                  onHoverPeek('DIGITAL IDENTITY', ['CSE 2025', 'CodeLab Founder', 'Paramarsh Team'], e)
                }
                onMouseLeave={onLeavePeek}
              >
                {/* Top OS Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#1a2433] tracking-wider">
                    IDENTITY.SPEC // 2026
                  </span>
                </div>

                {/* Profile Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-[#1a2433] tracking-tight">
                      Kavar Akshar
                    </h3>
                    <p className="font-mono text-xs text-[#e11d48] font-bold mt-0.5">
                      @thatsakki
                    </p>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-300 text-slate-700 text-[10px] font-mono font-bold rounded">
                    BE · 2ND YEAR
                  </span>
                </div>

                {/* Grounded Meta Grid */}
                <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-1">
                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[10px] text-slate-400 block uppercase">University</span>
                    <span className="font-bold text-[#1a2433] block mt-0.5">MSU Baroda</span>
                    <span className="text-[10px] text-slate-500 block">Joined 2025 · FTE</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[10px] text-slate-400 block uppercase">Community</span>
                    <span className="font-bold text-[#1a2433] block mt-0.5">CodeLab</span>
                    <span className="text-[10px] text-slate-500 block">Founder (Est. 2025)</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[10px] text-slate-400 block uppercase">Flagship Contest</span>
                    <span className="font-bold text-[#1a2433] block mt-0.5">Code Race</span>
                    <span className="text-[10px] text-[#e11d48] font-bold block">29th January 2026</span>
                  </div>

                  <div className="p-2.5 bg-slate-50 border border-slate-200 rounded">
                    <span className="text-[10px] text-slate-400 block uppercase">Paramarsh Fiesta</span>
                    <span className="font-bold text-[#1a2433] block mt-0.5">Core Team</span>
                    <span className="text-[10px] text-slate-500 block">Mar (R) · Jul (I) 2026</span>
                  </div>
                </div>

                {/* Monospace Code Capsule */}
                <div className="p-3 bg-[#1a2433] text-slate-300 rounded font-mono text-xs space-y-1 overflow-x-auto border border-slate-700">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-700">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Code2 className="w-3 h-3 text-[#e11d48]" />
                      <span>thatsakki.c</span>
                    </span>
                    <span>C99 / GCC</span>
                  </div>
                  <pre className="text-[11px] leading-relaxed pt-1 text-slate-200">
                    <code>
{`// Ethos definition
char* build() {
  return "Software & Communities";
}
int main() {
  printf("Turning ideas into experiences.\\n");
  return 0;
}`}
                    </code>
                  </pre>
                </div>

                {/* Footer Micro-Status */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>STATUS: ACTIVE &amp; BUILDING</span>
                  </div>
                  <span className="text-slate-400">BARODA, GJ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. "WHAT I DO" — BENTO GRID                               */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
            <span>Core Focus Areas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#1a2433] tracking-tight">
            What I Do
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl">
            Software, websites, experiments, communities, and live student experiences.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHAT_I_DO.map((item, idx) => {
            const isWide = idx === 0 || idx === 1;
            return (
              <div
                key={item.title}
                className={`p-6 sm:p-7 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all duration-150 flex flex-col justify-between ${
                  isWide ? 'lg:col-span-1' : ''
                }`}
                onMouseEnter={(e) => onHoverPeek(item.title, item.tags, e)}
                onMouseLeave={onLeavePeek}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-100 rounded border border-slate-200">
                      {getBentoIcon(item.icon)}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-semibold tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#1a2433] tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#e11d48] font-medium mb-3">
                    {item.headline}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-mono text-slate-500">
                  {item.tags.map((t, i) => (
                    <span key={i} className="text-slate-600">
                      {t}
                      {i < item.tags.length - 1 && <span className="ml-2 text-slate-300">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Quick Connect Tile */}
          <div className="p-6 sm:p-7 bg-[#1a2433] text-white rounded-lg shadow-brutal flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
                Direct Collaboration
              </span>
              <h3 className="text-xl font-display font-bold text-white mt-2 mb-2">
                Have an initiative or idea?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Always eager to collaborate on technical builds, student workshops, or campus events.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#e11d48] text-white text-xs font-semibold rounded hover:bg-rose-700 transition-colors"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FEATURED IDENTITY — "MORE THAN A DEVELOPER"             */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 bg-white border border-slate-300 rounded-lg shadow-brutal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                <Compass className="w-3.5 h-3.5 text-[#e11d48]" />
                <span>Dual Spectrum Growth</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1a2433] tracking-tight">
                More than a developer.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Akshar is actively cultivating both: the disciplined algorithmic rigor of a Computer Science engineer at MSU Baroda (joined 2025), paired with the communication, convincing, and operational agility required to rally people around a common vision.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                From launching CodeLab and hosting the Code Race Challenge on 29th January 2026 to revitalizing the historic Paramarsh fiesta (researched March 2026, implemented July 2026), leadership is practiced through direct action.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#1a2433] hover:text-[#e11d48] transition-colors"
                >
                  <span>Read full story &amp; background</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Interactive Capability Stack */}
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
                Interactive Capability Stack (Hover or click)
              </span>

              <div className="space-y-2">
                {CAPABILITY_STACK.map((item, idx) => {
                  const isActive = activeCapability === idx;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveCapability(idx)}
                      onMouseEnter={() => setActiveCapability(idx)}
                      className={`p-3.5 sm:p-4 rounded border transition-all duration-150 cursor-pointer ${
                        isActive
                          ? 'bg-[#1a2433] text-white border-[#1a2433] shadow-brutal-sm'
                          : 'bg-slate-50 hover:bg-slate-100 text-[#1a2433] border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs font-bold ${
                              isActive ? 'text-[#e11d48]' : 'text-slate-500'
                            }`}
                          >
                            0{idx + 1}
                          </span>
                          <span className="font-display font-bold text-sm tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono ${
                            isActive ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {isActive ? '● ACTIVE' : 'EXPLORE'}
                        </span>
                      </div>

                      {isActive && (
                        <div className="mt-2.5 pt-2.5 border-t border-slate-700/80 animate-in fade-in duration-150">
                          <p className="text-xs sm:text-sm font-medium text-slate-200">
                            {item.summary}
                          </p>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CURRENTLY BUILDING — "CURRENT MODE" CARD               */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-8 bg-white border border-slate-300 rounded-lg shadow-brutal-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#1a2433]">
                  {PERSONAL_INFO.currentMode.title}
                </span>
                <span className="text-slate-400">·</span>
                <span className="font-mono text-xs text-slate-500">STATUS: {PERSONAL_INFO.currentMode.status}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold font-display text-[#1a2433] tracking-tight">
                {PERSONAL_INFO.currentMode.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Currently actively mentoring junior peers at CodeLab (founded 2025), building following the Code Race on 29th January 2026, and coordinating logistics for MSU Baroda student initiatives.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('experience')}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded transition-colors shadow-brutal-sm"
              >
                <span>CodeLab &amp; Paramarsh</span>
              </button>
              <button
                onClick={() => onNavigate('journey')}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors"
              >
                <span>View Timeline</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. QUICK NAVIGATION ACCELERATOR                            */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            onClick={() => onNavigate('projects')}
            className="p-5 bg-white border border-slate-300 rounded hover-shadow-brutal shadow-brutal-sm cursor-pointer group transition-all"
          >
            <span className="text-xs font-mono text-[#e11d48] font-bold">01 / BUILDS</span>
            <h4 className="font-display font-bold text-base text-[#1a2433] mt-1 group-hover:text-[#e11d48] transition-colors flex items-center justify-between">
              <span>Projects &amp; Concepts</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48]" />
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Explore CodeLab Platform, Code Race, and system architectures.
            </p>
          </div>

          <div
            onClick={() => onNavigate('experience')}
            className="p-5 bg-white border border-slate-300 rounded hover-shadow-brutal shadow-brutal-sm cursor-pointer group transition-all"
          >
            <span className="text-xs font-mono text-[#e11d48] font-bold">02 / LEADERSHIP</span>
            <h4 className="font-display font-bold text-base text-[#1a2433] mt-1 group-hover:text-[#e11d48] transition-colors flex items-center justify-between">
              <span>CodeLab &amp; Paramarsh</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48]" />
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              CodeLab (est. 2025), Code Race (29 Jan 2026), and Paramarsh revival.
            </p>
          </div>

          <div
            onClick={() => onNavigate('skills')}
            className="p-5 bg-white border border-slate-300 rounded hover-shadow-brutal shadow-brutal-sm cursor-pointer group transition-all"
          >
            <span className="text-xs font-mono text-[#e11d48] font-bold">03 / CAPABILITIES</span>
            <h4 className="font-display font-bold text-base text-[#1a2433] mt-1 group-hover:text-[#e11d48] transition-colors flex items-center justify-between">
              <span>Technical &amp; People Map</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48]" />
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Authentic breakdown of core C++, OOP, Java, and leadership dynamics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
