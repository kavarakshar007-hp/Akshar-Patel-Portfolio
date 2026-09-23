import { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Calendar, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg border border-slate-300 shadow-brutal-lg overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#e11d48]">
              NO. {project.number}
            </span>
            <span className="text-slate-400">/</span>
            <span className="font-mono text-xs text-slate-600 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-xs text-slate-500 font-medium">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-200 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3
              id="modal-project-title"
              className="text-2xl font-bold font-display text-[#1a2433] tracking-tight"
            >
              {project.title}
            </h3>
            <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              {project.shortDesc}
            </p>
          </div>

          <div className="p-4 bg-[#f1f5f9] rounded border border-slate-200">
            <h4 className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-2">
              Architecture &amp; Purpose
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-mono tracking-wider uppercase text-slate-500 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e11d48]" />
              <span>Core Highlights &amp; Scope</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e11d48] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metadata Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1.5">
                <Layers className="w-3.5 h-3.5 text-slate-400" />
                <span>Technologies &amp; Tools</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 rounded font-mono text-[11px]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>Timeline &amp; Context</span>
              </div>
              <span className="text-xs font-mono text-slate-700">
                {project.year} · MSU Baroda Community
              </span>
            </div>
          </div>
        </div>

        {/* Actions Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50">
          <div className="text-xs text-slate-500 font-mono">
            {project.status === 'Completed' ? 'Verified Build' : 'Active Exploration'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-slate-800 bg-white border border-slate-300 hover:border-slate-800 rounded transition-colors shadow-brutal-sm"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1a2433] hover:bg-[#e11d48] rounded transition-colors shadow-brutal-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
