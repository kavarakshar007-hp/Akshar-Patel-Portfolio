import { PageId } from '../types';
import { PERSONAL_INFO, PERSONALITY_TRAITS } from '../data/portfolioData';
import { GraduationCap, ArrowRight, Compass, Sparkles, MapPin, Code2, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

export default function AboutPage({ onNavigate, onHoverPeek, onLeavePeek }: AboutPageProps) {
  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
      {/* Editorial Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
          <span>Biographical Identity</span>
          <span className="text-slate-400">·</span>
          <span>thatsakki</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
          Who is Akshar?
        </h1>
        <p className="text-base sm:text-lg text-slate-600 font-sans max-w-2xl leading-relaxed">
          A Computer Science Engineering student at MSU Baroda (joined 2025) who views software as an engine for empowerment, and leadership as the art of turning groups into cohesive teams.
        </p>
      </div>

      {/* Main Narrative Split with Photo Cutout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Narrative Prose */}
        <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
          <div className="p-6 bg-white border border-slate-300 rounded-lg shadow-brutal-sm space-y-4">
            <h2 className="font-display font-bold text-xl text-[#1a2433]">
              The Human Behind the Handle
            </h2>
            <p>
              Kavar Akshar, known across the internet as <strong className="font-mono text-[#1a2433]">thatsakki</strong>, joined the renowned <strong>Faculty of Technology &amp; Engineering, Maharaja Sayajirao University of Baroda</strong> in <strong>2025</strong> to pursue his Bachelor of Engineering in Computer Science.
            </p>
            <p>
              Unlike conventional developers who retreat solely into terminal screens, Akshar is driven by a dual urge: the analytical satisfaction of writing structured logic in C++ and Python, combined with the social electricity of building student communities and staging campus events.
            </p>
            <p>
              In <strong>2025</strong>, he founded <strong>CodeLab</strong>, a dedicated peer-to-peer coding group, and organized the landmark <strong>Code Race Challenge on 29th January 2026</strong> to make algorithmic problem-solving exciting and accessible to first-year students.
            </p>
            <p>
              Later in 2026, he played a central role in bringing back <strong>Paramarsh</strong>—MSU&apos;s historic national-level non-technical fiesta (est. 2001)—conducting extensive research and concept revitalization in <strong>March 2026</strong>, and translating that groundwork into full on-ground festival execution in <strong>July 2026</strong>.
            </p>
          </div>

          <div className="p-6 bg-[#f1f5f9] border border-slate-300 rounded-lg space-y-3">
            <h3 className="font-display font-bold text-lg text-[#1a2433] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#e11d48]" />
              <span>The Core Philosophy</span>
            </h3>
            <blockquote className="border-l-2 border-[#e11d48] pl-4 italic text-slate-700 font-medium">
              &ldquo;I build things, bring people together, and turn ideas into experiences. Code is the instrument, but people are the reason.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-600">
              Whether synchronizing backstage operations for Paramarsh or debugging algorithmic invariants, the goal remains identical: clean execution and lasting impact.
            </p>
          </div>
        </div>

        {/* Right Column: Academic & Identity Specs */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          {/* Academic Card */}
          <div
            className="w-full p-6 bg-white border border-slate-300 rounded-lg shadow-brutal hover-shadow-brutal transition-all"
            onMouseEnter={(e) =>
              onHoverPeek('ACADEMIC CONTEXT', ['MSU Baroda', 'FTE', 'Joined 2025', 'CSE BE 2'], e)
            }
            onMouseLeave={onLeavePeek}
          >
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
              <div className="p-2.5 bg-slate-100 rounded text-[#1a2433] border border-slate-200">
                <GraduationCap className="w-5 h-5 text-[#e11d48]" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500">
                  Institution
                </span>
                <h3 className="font-display font-bold text-base text-[#1a2433]">
                  MSU Baroda
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div>
                <span className="text-slate-500 text-xs font-mono block">Faculty / Campus:</span>
                <span className="font-semibold text-slate-800">
                  Faculty of Technology &amp; Engineering (FTE)
                </span>
              </div>

              <div>
                <span className="text-slate-500 text-xs font-mono block">Degree Program:</span>
                <span className="font-semibold text-slate-800">
                  Bachelor of Engineering (B.E.)
                </span>
              </div>

              <div>
                <span className="text-slate-500 text-xs font-mono block">Specialization:</span>
                <span className="font-semibold text-[#1a2433]">
                  Computer Science Engineering
                </span>
              </div>

              <div>
                <span className="text-slate-500 text-xs font-mono block">Admission &amp; Year:</span>
                <span className="font-mono text-[#e11d48] font-bold">
                  Joined 2025 · 2nd Year
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-600 font-sans leading-relaxed">
              <p>
                MSU FTE is one of western India&apos;s historic engineering institutions, renowned for producing foundational technologists, inventors, and collegiate leaders.
              </p>
            </div>
          </div>

          {/* Identity & Presence Summary */}
          <div className="w-full p-5 bg-white border border-slate-300 rounded-lg shadow-brutal-sm text-xs font-mono space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-bold text-[#1a2433] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#e11d48]" />
                <span>LOCATION &amp; PRESENCE</span>
              </span>
              <span className="text-slate-500">MSU FTE Campus</span>
            </div>

            <div className="space-y-2 text-slate-600">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Primary Handle:</span>
                <span className="font-bold text-[#1a2433]">thatsakki</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Student Community:</span>
                <span className="font-bold text-[#1a2433]">CodeLab Founder (2025)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Code Race:</span>
                <span className="font-bold text-[#e11d48]">29th January 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Paramarsh Revival:</span>
                <span className="font-bold text-[#1a2433]">Mar &amp; Jul 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PERSONALITY GRID                                          */}
      {/* ========================================================= */}
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-[#e11d48]" />
            <span>Operational Mindset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#1a2433] tracking-tight">
            Personality &amp; Approach
          </h2>
          <p className="text-slate-600 text-sm max-w-xl">
            Six distinct traits that define how Akshar approaches code, communities, and high-energy student projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PERSONALITY_TRAITS.map((trait, idx) => (
            <div
              key={trait.title}
              className="p-6 bg-white border border-slate-300 rounded-lg shadow-brutal-sm hover-shadow-brutal transition-all flex flex-col justify-between"
              onMouseEnter={(e) => onHoverPeek(trait.title, [trait.subtitle, trait.tag], e)}
              onMouseLeave={onLeavePeek}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#e11d48]">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-[11px] text-slate-500 uppercase">
                    {trait.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#1a2433] tracking-tight mb-1">
                  {trait.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mb-2">
                  {trait.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {trait.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>APPROACH</span>
                <span className="text-[#1a2433] font-medium">Applied Daily</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Link CTAs */}
      <div className="p-8 bg-slate-100 border border-slate-300 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-bold text-lg text-[#1a2433]">
            Curious about what Akshar has built?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Check out CodeLab (founded 2025), Code Race (29th Jan 2026), and Paramarsh revival.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('projects')}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded shadow-brutal-sm transition-colors"
          >
            <span>View Projects</span>
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors"
          >
            <span>Read Leadership Story</span>
          </button>
        </div>
      </div>
    </div>
  );
}
