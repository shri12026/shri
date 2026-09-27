import React from 'react';
import { ArrowRight, Star, ShieldCheck, CheckCircle2, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import heroIllustration from '../assets/images/hero_illustration_1790425874919.jpg';

interface HeroSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="pt-24 sm:pt-28 pb-6 px-3 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
      {/* Powder Sky Blue Rounded Card (Matching Screenshot) */}
      <div className="bg-[#C8E5F7] rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] p-6 sm:p-10 lg:p-14 relative overflow-hidden border border-sky-100 shadow-pastel-card">
        {/* Subtle cloudy / ambient backdrop highlights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-sky-200/50 rounded-full blur-2xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
          {/* Left Column: Google Badge, Big Headline, Subtitle, and Soft Pill CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Google Reviews Pill Badge (Exact match to screenshot) */}
            <div className="inline-flex items-center gap-2.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-soft-pill border border-white">
              {/* Google G Logo SVG */}
              <div className="flex items-center gap-1 font-bold text-xs tracking-tight">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                4.9 Stars on Google Reviews
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-[#111827] leading-[1.08] tracking-tight">
                Experts At Getting You Approved
              </h1>
              <p className="text-base sm:text-lg text-neutral-700 max-w-xl font-normal leading-relaxed">
                Whether you're self-employed, looking for business capital, need a lower interest balance transfer, or face unique credit challenges — we make loans and financial approvals simple and guide you every step of the way.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenApplyModal('General Financial Consultation')}
                className="px-7 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm sm:text-base shadow-soft-pill hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer border border-white"
              >
                Get Started
              </button>

              <a
                href="#services-bento"
                className="px-6 py-3.5 rounded-full bg-white/40 hover:bg-white/70 text-neutral-900 font-semibold text-sm transition-all border border-white/60"
              >
                Explore 500+ Services →
              </a>
            </div>

            {/* Quick trust metrics row */}
            <div className="pt-4 border-t border-sky-200/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>120+ Banks &amp; NBFCs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>From 8.35%* ROI</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Gaur City Mall Desk</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hand-drawn Ink Vector Illustration on Sky Blue */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
              <img
                src={heroIllustration}
                alt="Friendly finance character stacking structural blocks"
                className="w-full h-full object-cover object-center mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
