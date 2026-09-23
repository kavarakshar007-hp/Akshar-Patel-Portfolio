import { useState } from 'react';
import { PageId, SkillLevel, TechnicalSkill } from '../types';
import { TECHNICAL_SKILLS, NON_TECHNICAL_SKILLS } from '../data/portfolioData';
import { Terminal, Users, Sparkles, Check, ArrowRight } from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function SkillsPage({
  onNavigate,
  onHoverPeek,
  onLeavePeek,
}: SkillsPageProps) {
  const [activeLevelFilter, setActiveLevelFilter] = useState<'ALL' | SkillLevel>('ALL');
  const [selectedTech, setSelectedTech] = useState<TechnicalSkill | null>(null);

  const filteredTech = TECHNICAL_SKILLS.filter((tech) => {
    if (activeLevelFilter === 'ALL') return true;
    return tech.status === activeLevelFilter;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Capability Architecture</span>
          <span className="text-slate-400">·</span>
          <span>No Fake Percentage Bars</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          Skills &amp; Capabilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          Ground-truth technical competence rooted in C++, OOP, and software foundations, equally balanced with real-world people and event leadership.
        </p>
      </div>

      {/* ========================================================= */}
      {/* 1. TECHNICAL SKILLS SECTION                               */}
      {/* ========================================================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-300">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e11d48] font-semibold">
              <Terminal className="w-4 h-4" />
              <span>Section 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1a2433] mt-1">
              Technical Stack &amp; Explorations
            </h2>
          </div>

          {/* Level Filter segmented control */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded border border-slate-300 self-start sm:self-auto font-mono text-xs">
            {(['ALL', 'CORE', 'ACTIVE', 'EXPLORING'] as const).map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevelFilter(level)}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeLevelFilter === level
                    ? 'bg-white text-[#1a2433] font-bold shadow-brutal-sm'
                    : 'text-slate-600 hover:text-[#1a2433]'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Status Guide */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div className="p-3 bg-white border border-slate-200 rounded shadow-brutal-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-2" />
            <strong className="text-slate-900">CORE:</strong> Daily language, deep memory &amp; algorithmic logic.
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded shadow-brutal-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-2" />
            <strong className="text-slate-900">ACTIVE:</strong> Coursework, scripting, and modular UI structure.
          </div>
          <div className="p-3 bg-white border border-slate-200 rounded shadow-brutal-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-purple-600 mr-2" />
            <strong className="text-slate-900">EXPLORING:</strong> Modern web paradigms, APIs, and databases.
          </div>
        </div>

        {/* Technical Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTech.map((tech) => {
            const isSelected = selectedTech?.name === tech.name;
            return (
              <div
                key={tech.name}
                onClick={() => setSelectedTech(isSelected ? null : tech)}
                onMouseEnter={(e) => onHoverPeek(tech.name, [tech.category, tech.status], e)}
                onMouseLeave={onLeavePeek}
                className={`p-5 rounded-lg border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1a2433] text-white border-[#1a2433] shadow-brutal'
                    : 'bg-white hover:bg-slate-50 text-[#1a2433] border-slate-300 shadow-brutal-sm hover-shadow-brutal'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        isSelected ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {tech.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        tech.status === 'CORE'
                          ? 'bg-emerald-100 text-emerald-800'
                          : tech.status === 'ACTIVE'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {tech.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display tracking-tight">
                    {tech.name}
                  </h3>

                  <p
                    className={`mt-2 text-xs leading-relaxed font-sans ${
                      isSelected ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {tech.usageContext}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-mono ${
                    isSelected ? 'border-slate-700 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}
                >
                  <span>Focus: {tech.focusArea}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. NON-TECHNICAL & LEADERSHIP SKILLS SECTION              */}
      {/* ========================================================= */}
      <section className="space-y-8">
        <div className="pb-4 border-b border-slate-300">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e11d48] font-semibold">
            <Users className="w-4 h-4" />
            <span>Section 02</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1a2433] mt-1">
            People, Influence &amp; Leadership Dynamics
          </h2>
          <p className="text-slate-600 text-sm mt-1 max-w-xl font-sans">
            Technical brilliance accomplishes nothing in isolation. Real execution requires clear communication, convincing, and coordinating people under pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {NON_TECHNICAL_SKILLS.map((skill, idx) => (
            <div
              key={skill.name}
              className="p-6 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex flex-col justify-between"
              onMouseEnter={(e) => onHoverPeek(skill.name, [skill.domain], e)}
              onMouseLeave={onLeavePeek}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#e11d48]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">
                    {skill.domain}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1a2433] tracking-tight mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-600">
                <span className="text-slate-400 block mb-0.5 text-[10px] uppercase">
                  Demonstrated In:
                </span>
                <span className="text-[#1a2433] font-medium font-sans text-xs">
                  {skill.appliedIn}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Link CTAs */}
      <div className="p-6 sm:p-8 bg-slate-100 border border-slate-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg text-[#1a2433]">
            Track the Evolution of These Skills
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            See the timeline from the very first lines of C to CodeLab and Paramarsh.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('journey')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded shadow-brutal-sm transition-colors"
          >
            <span>View Journey Timeline</span>
          </button>
        </div>
      </div>
    </div>
  );
}
