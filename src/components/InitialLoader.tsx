import { useEffect, useState } from 'react';

interface InitialLoaderProps {
  onComplete: () => void;
}

export default function InitialLoader({ onComplete }: InitialLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader this session
    const hasLoaded = sessionStorage.getItem('thatsakki_loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            sessionStorage.setItem('thatsakki_loaded', 'true');
            onComplete();
          }, 200);
          return 100;
        }
        return prev + 25;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f1f5f9] transition-opacity duration-200 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e11d48] animate-pulse" />
          <span className="font-display font-bold text-2xl tracking-tight text-[#1a2433]">
            THATSAKKI
          </span>
        </div>
        <div className="w-36 h-[2px] bg-slate-300 overflow-hidden rounded-full">
          <div
            className="h-full bg-[#e11d48] transition-all duration-75 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="font-mono text-[11px] text-[#64748b] tracking-wider uppercase">
          Initializing Portfolio · 2026
        </span>
      </div>
    </div>
  );
}
