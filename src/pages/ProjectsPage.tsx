import { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (project: ProjectItem) => void;
  onHoverPeek: (title: string, tags: string[], e: React.MouseEvent) => void;
  onLeavePeek: () => void;
}

type FilterCategory = 'ALL' | 'BUILD' | 'CONCEPT' | 'EXPERIMENT';

export default function ProjectsPage({
  onNavigate,
  onSelectProject,
  onHoverPeek,
  onLeavePeek,
}: ProjectsPageProps) {
  const [filter, setFilter] = useState<FilterCategory>('ALL');

  const filteredProjects = PROJECTS.filter((item) => {
    if (filter === 'ALL') return true;
    return item.category === filter;
  });

  return (
    <div className="pt-24 sm:pt-28 pb-16 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-300">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48]" />
            <span>Showcase &amp; Exploration</span>
            <span className="text-slate-400">·</span>
            <span>Index 01–06</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-[#1a2433] tracking-tight">
            Projects &amp; Builds
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-sans">
            A transparent inventory of executed software, community platforms, operational concepts, and core engineering experiments.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-200/80 rounded border border-slate-300 shrink-0 self-start md:self-auto">
          {(['ALL', 'BUILD', 'CONCEPT', 'EXPERIMENT'] as FilterCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-150 rounded ${
                filter === cat
                  ? 'bg-white text-[#1a2433] font-bold shadow-brutal-sm'
                  : 'text-slate-600 hover:text-[#1a2433] hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL' ? 'ALL' : `${cat}S`}
            </button>
          ))}
        </div>
      </div>

      {/* Distinction Banner */}
      <div className="p-4 bg-white border border-slate-300 rounded text-xs text-slate-600 font-mono flex flex-wrap items-center gap-4 sm:gap-6 shadow-brutal-sm">
        <span className="font-bold text-[#1a2433] uppercase">Legend:</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-600" />
          <span>BUILD: Production / Functional Code</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>CONCEPT: System Architecture &amp; UI</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          <span>EXPERIMENT: Core Algorithms &amp; CLI</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => {
          return (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              onMouseEnter={(e) => onHoverPeek(project.title, project.peekTags, e)}
              onMouseLeave={onLeavePeek}
              className="group relative bg-white border border-slate-300 rounded-lg p-6 sm:p-7 shadow-brutal-sm hover-shadow-brutal transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Card Top Metadata Ribbon */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#e11d48]">
                      NO. {project.number}
                    </span>
                    <span className="text-slate-400">/</span>
                    <span
                      className={`font-semibold ${
                        project.category === 'BUILD'
                          ? 'text-emerald-700'
                          : project.category === 'CONCEPT'
                          ? 'text-amber-700'
                          : 'text-indigo-700'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <span className="text-slate-500 font-medium">
                    {project.status}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1a2433] tracking-tight group-hover:text-[#e11d48] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#e11d48] transition-colors shrink-0" />
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {project.shortDesc}
                </p>

                {/* Highlights List Preview */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  {project.highlights.slice(0, 2).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e11d48] mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Meta & Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-600">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200 text-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 text-slate-500 text-[10px]">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action link */}
                  <span className="text-xs font-mono font-semibold text-[#1a2433] group-hover:text-[#e11d48] transition-colors">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Cross-CTA */}
      <div className="mt-12 p-8 bg-white border border-slate-300 rounded-lg shadow-brutal flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
            Next Section
          </span>
          <h3 className="text-xl font-bold font-display text-[#1a2433] mt-1">
            Explore Leadership &amp; Student Events
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-lg">
            Read about founding CodeLab, the Code Race Challenge, and coordinating Paramarsh at MSU Baroda.
          </p>
        </div>
        <button
          onClick={() => onNavigate('experience')}
          className="px-5 py-2.5 bg-[#1a2433] text-white text-xs font-semibold rounded hover:bg-[#e11d48] transition-colors shadow-brutal-sm shrink-0"
        >
          <span>View Leadership Story</span>
        </button>
      </div>
    </div>
  );
}
