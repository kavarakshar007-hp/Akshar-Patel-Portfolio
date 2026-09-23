import { PageId } from '../types';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Award, CheckCircle2, ArrowRight, ShieldCheck, Flag } from 'lucide-react';

interface AchievementsPageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function AchievementsPage({
  onNavigate,
  onHoverPeek,
  onLeavePeek,
}: AchievementsPageProps) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Verifiable Milestones</span>
          <span className="text-slate-400">·</span>
          <span>Zero Fabricated Accolades</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          Milestones &amp; Growth
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          A wall celebrating concrete initiatives started, events organized, and communities built during undergraduate studies at MSU Baroda.
        </p>
      </div>

      {/* Authenticity Principle Banner */}
      <div className="p-4 bg-white border border-slate-300 rounded shadow-brutal-sm flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#e11d48] shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed font-sans">
          <strong className="text-[#1a2433] font-mono uppercase mr-1">Authentic Portfolio Standard:</strong>
          Every milestone listed here is grounded in real student initiatives. No imaginary rankings, fake certificates, or inflated corporate metrics.
        </div>
      </div>

      {/* Milestones Wall */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {ACHIEVEMENTS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex flex-col justify-between"
            onMouseEnter={(e) => onHoverPeek(item.title, [item.year, item.category], e)}
            onMouseLeave={onLeavePeek}
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <span className="font-mono text-xs font-bold text-[#e11d48]">
                  {item.year}
                </span>
                <span className="font-mono text-[11px] text-slate-500 uppercase">
                  {item.category}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#1a2433] tracking-tight mb-1">
                {item.title}
              </h2>
              <p className="text-xs font-mono text-slate-500 mb-3">
                {item.organization}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {item.narrative}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50 p-3 rounded">
              <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5 font-bold">
                Key Takeaway
              </span>
              <p className="text-xs font-medium text-slate-800 font-sans">
                {item.keyTakeaway}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Cross-CTA */}
      <div className="p-8 bg-[#1a2433] text-white rounded-lg shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-[#e11d48] font-bold">
            The Timeline
          </span>
          <h3 className="text-xl font-bold font-display text-white mt-1">
            See the step-by-step chronology
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
            Walk through the full vertical timeline of how each chapter connected to the next.
          </p>
        </div>
        <button
          onClick={() => onNavigate('journey')}
          className="px-5 py-2.5 bg-[#e11d48] text-white text-xs font-semibold rounded hover:bg-rose-700 transition-colors shadow-brutal-sm shrink-0"
        >
          <span>Explore Journey</span>
        </button>
      </div>
    </div>
  );
}
