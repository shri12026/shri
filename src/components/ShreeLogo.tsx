import React, { useState } from 'react';

export const SHREE_LOGO_SRC =
  'https://ik.imagekit.io/nb6cfzd7m/WhatsApp%20Image%202026-09-24%20at%2012.23.19%20PM%20-%20Edited.jpg';

interface ShreeLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ShreeLogo: React.FC<ShreeLogoProps> = ({
  className = '',
  variant = 'light',
  showText = true,
  size = 'md',
}) => {
  const [hasError, setHasError] = useState(false);

  const iconDimensions = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12',
    lg: 'w-12 h-12 sm:w-16 sm:h-16',
    xl: 'w-16 h-16 sm:w-24 sm:h-24',
  }[size];

  const titleSize = {
    sm: 'text-sm sm:text-base',
    md: 'text-sm xs:text-base sm:text-lg md:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl',
  }[size];

  const subtitleSize = {
    sm: 'text-[8px] sm:text-[9px]',
    md: 'text-[9px] sm:text-[10px] md:text-[11px]',
    lg: 'text-[10px] sm:text-xs',
    xl: 'text-xs sm:text-sm',
  }[size];

  return (
    <div className={`flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Official Shree Services Logo Image Container */}
      <div
        className={`relative ${iconDimensions} shrink-0 rounded-2xl overflow-hidden shadow-md border border-[#E5A93C]/40 bg-white p-0.5 flex items-center justify-center transition-transform duration-300 hover:scale-105`}
        style={{
          boxShadow: '0 4px 14px -2px rgba(229, 169, 60, 0.35)',
        }}
      >
        {!hasError ? (
          <img
            src={SHREE_LOGO_SRC}
            alt="Shree Services Pvt Ltd Official Logo"
            className="w-full h-full object-contain rounded-xl"
            onError={() => setHasError(true)}
            loading="eager"
            referrerPolicy="no-referrer"
          />
        ) : (
          /* High-fidelity fallback emblem if network fails */
          <div className="w-full h-full bg-[#0A1C44] rounded-xl flex items-center justify-center text-[#E5A93C] font-bold text-sm">
            श्री
          </div>
        )}
      </div>

      {/* Brand Text Lockup */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-serif-display font-bold tracking-tight ${titleSize} ${
                variant === 'light'
                  ? 'text-white'
                  : variant === 'dark'
                  ? 'text-[#0A1C44]'
                  : 'text-white'
              }`}
            >
              SHREE
            </span>
            <span
              className={`font-serif-display font-semibold tracking-wider ${titleSize} text-[#E5A93C]`}
            >
              SERVICES
            </span>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5 leading-tight">
            <span
              className={`font-sans tracking-wider uppercase font-semibold ${subtitleSize} ${
                variant === 'light' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Pvt Ltd
            </span>
            <span className="text-[#E5A93C] text-[10px]">·</span>
            <span
              className={`font-sans font-medium tracking-wide ${subtitleSize} text-[#E5A93C]`}
            >
              Loan & Finance
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

