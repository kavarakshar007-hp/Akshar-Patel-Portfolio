import { PageId } from '../types';
import { ArrowLeft, Compass, MapPin } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-md w-full bg-white border border-slate-300 rounded-lg p-8 shadow-brutal text-center space-y-6">
        {/* Animated route / map illustration */}
        <div className="relative mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
          <svg
            className="w-16 h-16 text-slate-400"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="4 4"
          >
            <path d="M 20 80 Q 50 20 80 80" />
          </svg>
          <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-[#e11d48] animate-ping" />
          <div className="absolute top-4 right-6 w-3 h-3 rounded-full bg-[#e11d48]" />
          <Compass className="absolute w-6 h-6 text-[#1a2433]" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-[#e11d48] uppercase tracking-wider">
            STATUS 404 · ROUTE NOT FOUND
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-[#1a2433] tracking-tight">
            Looks like you wandered off the roadmap.
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
            The coordinate you requested does not exist on thatsakki.dev. Let&apos;s get you back to the main trail.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a2433] hover:bg-[#e11d48] text-white text-xs font-semibold rounded shadow-brutal-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e11d48]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}
