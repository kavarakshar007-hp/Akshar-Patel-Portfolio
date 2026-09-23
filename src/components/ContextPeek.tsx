import { useEffect, useState } from 'react';

export interface PeekState {
  visible: boolean;
  title: string;
  tags: string[];
  x: number;
  y: number;
}

interface ContextPeekProps {
  peek: PeekState;
}

export default function ContextPeek({ peek }: ContextPeekProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Keep within viewport boundaries
    const offsetLeft = Math.min(peek.x + 16, window.innerWidth - 240);
    const offsetTop = Math.min(peek.y + 16, window.innerHeight - 100);
    setCoords({ x: Math.max(12, offsetLeft), y: Math.max(12, offsetTop) });
  }, [peek.x, peek.y]);

  if (!peek.visible || peek.tags.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-all duration-75 ease-out hidden md:block"
      style={{
        transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
      }}
    >
      <div className="bg-[#1a2433] text-white border border-[#334155] rounded px-3 py-2 shadow-brutal-sm text-xs max-w-[240px]">
        <div className="flex items-center gap-1.5 mb-1.5 font-mono text-[10px] tracking-wider uppercase text-slate-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e11d48] animate-pulse" />
          <span>{peek.title}</span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-slate-300 font-sans">
          {peek.tags.map((tag, idx) => (
            <span key={idx} className="text-[11px] font-medium text-slate-200">
              {tag}
              {idx < peek.tags.length - 1 && <span className="ml-1.5 text-slate-500 font-mono">·</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
