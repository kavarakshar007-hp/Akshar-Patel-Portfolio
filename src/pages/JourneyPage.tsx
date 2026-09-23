import { PageId } from '../types';
import { TIMELINE_NODES } from '../data/portfolioData';
import { Sparkles, ArrowRight, Circle, Check } from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function JourneyPage({
  onNavigate,
  onHoverPeek,
  onLeavePeek,
}: JourneyPageProps) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-5xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Evolution Narrative</span>
          <span className="text-slate-400">·</span>
          <span>From First Code to Present</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          The Journey So Far
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          A continuous timeline of curiosities tested, communities organized, and lessons learned on the path to becoming a complete engineer.
        </p>
      </div>

      {/* Vertical Timeline Tree */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-slate-300">
        {TIMELINE_NODES.map((node, idx) => {
          const isLast = idx === TIMELINE_NODES.length - 1;
          return (
            <div
              key={node.id}
              className="relative group"
              onMouseEnter={(e) => onHoverPeek(node.title, node.peekTags, e)}
              onMouseLeave={onLeavePeek}
            >
              {/* Timeline Cherry Node */}
              <div
                className={`absolute -left-[30px] sm:-left-[46px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-150 ${
                  isLast
                    ? 'bg-[#e11d48] border-[#1a2433] scale-125 animate-pulse'
                    : 'bg-white border-slate-600 group-hover:border-[#e11d48] group-hover:scale-110'
                }`}
                aria-hidden="true"
              />

              {/* Node Card */}
              <div
                className={`p-6 sm:p-7 rounded-lg border transition-all duration-200 ${
                  isLast
                    ? 'bg-[#1a2433] text-white border-slate-700 shadow-brutal'
                    : 'bg-white text-[#1a2433] border-slate-300 shadow-brutal-sm hover-shadow-brutal'
                }`}
              >
                {/* Node Metadata Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200/60 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-bold ${
                        isLast ? 'text-[#e11d48]' : 'text-[#e11d48]'
                      }`}
                    >
                      CHAPTER {node.index}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className={isLast ? 'text-slate-300' : 'text-slate-500'}>
                      {node.stage}
                    </span>
                  </div>

                  <span className={isLast ? 'text-slate-400' : 'text-slate-500'}>
                    {node.period}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl font-bold font-display tracking-tight ${
                    isLast ? 'text-white' : 'text-[#1a2433] group-hover:text-[#e11d48]'
                  } transition-colors`}
                >
                  {node.title}
                </h3>

                {/* Narrative */}
                <p
                  className={`mt-2.5 text-xs sm:text-sm leading-relaxed font-sans ${
                    isLast ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {node.narrative}
                </p>

                {/* Core Learnings */}
                <div className="mt-4 pt-3 border-t border-slate-100/40 flex flex-wrap gap-2 text-[11px] font-mono">
                  {node.learnings.map((l, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded border ${
                        isLast
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Terminal Cap: "Still building." */}
      <div className="p-8 bg-white border border-slate-300 rounded-lg shadow-brutal text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full font-mono text-xs text-slate-700">
          <span className="w-2 h-2 rounded-full bg-[#e11d48] animate-pulse" />
          <span>CURRENT STATE: STILL BUILDING</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#1a2433]">
          &ldquo;Still building. Still learning. Still bringing people together.&rdquo;
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto font-sans">
          The best code is the code that ships with purpose, and the best experiences are the ones built together.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a2433] hover:bg-[#e11d48] text-white text-xs font-semibold rounded shadow-brutal-sm transition-all"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
