import { PageId } from '../types';
import { EXPERIENCES } from '../data/portfolioData';
import {
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ClipboardList,
  CheckCircle2,
  Radio,
  Flame,
  Search,
  Rocket,
} from 'lucide-react';

interface ExperiencePageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function ExperiencePage({
  onNavigate,
  onHoverPeek,
  onLeavePeek,
}: ExperiencePageProps) {
  const codelabExp = EXPERIENCES.find((e) => e.id === 'codelab');
  const paramarshExp = EXPERIENCES.find((e) => e.id === 'paramarsh');
  const campusExp = EXPERIENCES.find((e) => e.id === 'campus-initiatives');

  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Leadership &amp; Community Execution</span>
          <span className="text-slate-400">·</span>
          <span>MSU Baroda (Joined 2025)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          Leadership &amp; Events
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          Transforming energy into execution: founding CodeLab in 2025, organizing Code Race on 29th January 2026, and spearheading the Paramarsh revival (researched March, implemented July 2026).
        </p>
      </div>

      {/* ========================================================= */}
      {/* 1. MAJOR HIGHLIGHT — CODELAB (EST. 2025)                  */}
      {/* ========================================================= */}
      {codelabExp && (
        <section
          className="p-6 sm:p-10 bg-white border border-slate-300 rounded-lg shadow-brutal space-y-8"
          onMouseEnter={(e) => onHoverPeek('CODELAB', codelabExp.peekTags, e)}
          onMouseLeave={onLeavePeek}
        >
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
                <span className="text-[#e11d48] font-bold">FOUNDED IN 2025</span>
                <span>·</span>
                <span>MSU BARODA COMMUNITY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-[#1a2433] tracking-tight">
                {codelabExp.organization}
              </h2>
              <p className="text-sm font-mono text-[#e11d48] font-semibold mt-0.5">
                {codelabExp.role}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {codelabExp.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4 text-sm text-slate-700 leading-relaxed font-sans">
              <p className="text-base font-medium text-[#1a2433]">
                {codelabExp.tagline}
              </p>
              <p>{codelabExp.description}</p>
              <div className="p-4 bg-[#f1f5f9] rounded border border-slate-200 space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Core Mission
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Provide junior engineering students with a safe, accessible springboard into algorithmic problem-solving in C/C++, peer code reviews, and competitive coding habits.
                </p>
              </div>
            </div>

            {/* The Experience Story */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
                <Radio className="w-3.5 h-3.5 text-[#e11d48]" />
                <span>The Experience Arc</span>
              </div>

              <div className="space-y-3">
                {codelabExp.storySteps?.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <span className="font-mono font-bold text-[#e11d48] shrink-0 mt-0.5">
                      0{idx + 1}.
                    </span>
                    <div>
                      <span className="font-semibold text-slate-900 block font-sans">
                        {step.step}
                      </span>
                      <span className="text-slate-600 leading-relaxed block mt-0.5">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Race Challenge Spotlight — 29th January 2026 */}
          <div className="p-6 bg-[#1a2433] text-white rounded-lg border border-slate-700 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#e11d48]">
                  <Flame className="w-4 h-4" />
                  <span>FLAGSHIP EVENT — 29TH JANUARY 2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
                  Code Race Challenge
                </h3>
              </div>
              <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-xs font-mono text-slate-300 self-start sm:self-auto">
                Held on 29th January 2026
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              Organized and executed on <strong>29th January 2026</strong> for first-year engineering students to test foundational programming logic under timed conditions. Rather than isolating students with overly abstract theory, the competition focused on hands-on algorithmic problem solving, clear constraints, and direct mentor debriefs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
              <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                <span className="block text-slate-400 text-[10px] uppercase">Execution Date</span>
                <span className="font-bold text-[#e11d48]">29th January 2026</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                <span className="block text-slate-400 text-[10px] uppercase">Core Tech</span>
                <span className="font-bold text-white">C / C++ Problem Sets</span>
              </div>
              <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                <span className="block text-slate-400 text-[10px] uppercase">Outcome</span>
                <span className="font-bold text-white">High First-Year Engagement</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 2. PARAMARSH REVIVAL — RESEARCH MAR 2026, IMPL JUL 2026    */}
      {/* ========================================================= */}
      {paramarshExp && (
        <section
          className="relative bg-white border border-slate-300 rounded-lg p-6 sm:p-10 shadow-brutal space-y-8 overflow-hidden"
          onMouseEnter={(e) => onHoverPeek('PARAMARSH', paramarshExp.peekTags, e)}
          onMouseLeave={onLeavePeek}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#e11d48] uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-[#e11d48]" />
                <span>National-Level Non-Technical Fiesta · Est. 2001</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
                PARAMARSH
              </h2>
              <p className="text-sm font-mono text-slate-600 mt-1">
                Faculty of Technology &amp; Engineering, MSU Baroda
              </p>
            </div>

            <div className="p-3 bg-slate-100 border border-slate-300 rounded font-mono text-xs text-slate-800 shadow-brutal-sm self-start sm:self-auto">
              <span className="block text-[10px] text-slate-500 uppercase">Revival Roadmap</span>
              <span className="font-bold text-[#e11d48]">
                Researched March 2026 · Implemented July 2026
              </span>
            </div>
          </div>

          {/* Context & Timeline Phase Cards */}
          <div className="space-y-6 text-slate-700 font-sans text-sm sm:text-base leading-relaxed">
            <p>
              Paramarsh is a student-run national-level non-technical fiesta associated with the Faculty of Technology &amp; Engineering at Maharaja Sayajirao University of Baroda (originating in 2001). Akshar was part of the core team committed to bringing Paramarsh back, advancing from strategic research to full campus staging.
            </p>

            {/* The Two Distinct Phases: Research (March) & Implementation (July) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phase 1: Research in March 2026 */}
              <div className="p-5 bg-slate-50 border-2 border-slate-300 rounded-lg space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1a2433]">
                    <Search className="w-4 h-4 text-[#e11d48]" />
                    <span>PHASE 1: RESEARCH &amp; STRATEGY</span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-200 text-slate-800 rounded font-mono text-[11px] font-bold">
                    March 2026
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-[#1a2433]">
                  Archival Investigation &amp; Concept Blueprint
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conducted deep-dive research into past editions of Paramarsh, interviewed senior organizers and alumni, analyzed logistical bottlenecks, and formulated the operational blueprint to restore the festival with contemporary flair.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-1">
                  Key Focus: Legacy mapping, event guidelines &amp; feasibility modeling.
                </div>
              </div>

              {/* Phase 2: Implementation in July 2026 */}
              <div className="p-5 bg-[#1a2433] text-white border-2 border-[#1a2433] rounded-lg space-y-3 shadow-brutal-sm">
                <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                    <Rocket className="w-4 h-4 text-[#e11d48]" />
                    <span>PHASE 2: IMPLEMENTATION &amp; STAGING</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#e11d48] text-white rounded font-mono text-[11px] font-bold">
                    July 2026
                  </span>
                </div>
                <h4 className="font-display font-bold text-base text-white">
                  Full On-Ground Execution &amp; Live Operations
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Turned months of research into live campus action in July 2026. Handled multi-track event logistics, volunteer alignment, stage management, real-time crisis resolution, and crowd coordination across MSU FTE.
                </p>
                <div className="text-[11px] font-mono text-slate-400 pt-1">
                  Key Focus: On-ground execution, venue flow &amp; student experience.
                </div>
              </div>
            </div>

            {/* Experience Quote Callout */}
            <div className="p-4 bg-[#f1f5f9] border-l-4 border-[#e11d48] rounded-r border-t border-b border-r border-slate-200 text-sm text-[#1a2433] font-medium italic">
              &ldquo;Technology isn&apos;t the only thing I build. Sometimes I help build experiences.&rdquo;
            </div>
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 3. ADDITIONAL CAMPUS INITIATIVES                           */}
      {/* ========================================================= */}
      {campusExp && (
        <section
          className="p-6 sm:p-8 bg-white border border-slate-300 rounded-lg shadow-brutal-sm space-y-4"
          onMouseEnter={(e) => onHoverPeek('CAMPUS OPS', campusExp.peekTags, e)}
          onMouseLeave={onLeavePeek}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono text-[#e11d48] uppercase tracking-wider font-semibold">
                CAMPUS CITIZENSHIP
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1a2433] mt-0.5">
                {campusExp.organization}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Joined MSU 2025 · Present
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed font-sans">
            {campusExp.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-700">
            {campusExp.bulletPoints.map((bp, i) => (
              <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#e11d48] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{bp}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cross-Link CTAs */}
      <div className="p-6 sm:p-8 bg-slate-100 border border-slate-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg text-[#1a2433]">
            Want to see the step-by-step chronology?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Explore the vertical timeline from joining MSU in 2025 to Code Race and Paramarsh in 2026.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('journey')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded shadow-brutal-sm transition-colors"
          >
            <span>View Timeline</span>
          </button>
        </div>
      </div>
    </div>
  );
}
