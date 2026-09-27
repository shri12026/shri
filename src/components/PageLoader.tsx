import React, { useEffect, useState } from 'react';
import { ShreeLogo } from './ShreeLogo';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsFading(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 450);
          return 100;
        }
        return prev + 15;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#060F26] text-white transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6 max-w-sm px-6 text-center">
        {/* Animated Shree Logo */}
        <div className="relative animate-pulse">
          <div className="absolute inset-0 rounded-full bg-[#E5A93C]/20 blur-2xl" />
          <ShreeLogo size="xl" variant="light" showText={false} />
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-1.5">
          <h2 className="font-serif-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
            SHREE <span className="text-gold-gradient">SERVICES</span>
          </h2>
          <p className="text-xs text-amber-200/90 font-medium">
            Your Financial Partner for a Better Tomorrow
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-gold-gradient transition-all duration-150 rounded-full shadow-[0_0_8px_#E5A93C]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-[11px] text-slate-400 font-mono tabular-nums">
          Loading Financial Portal · {progress}%
        </div>
      </div>
    </div>
  );
};
