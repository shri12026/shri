import React from 'react';
import { ArrowRight, Phone, MessageCircle, Coins } from 'lucide-react';
import consultPersonPhone from '../assets/images/consult_person_phone_1790425901879.jpg';

interface ConsultationBannerSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const ConsultationBannerSection: React.FC<ConsultationBannerSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
      {/* Soft Pastel Mint Green Rounded Card (Exact match to middle right of screenshot) */}
      <div className="bg-[#CEEED9] rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border border-emerald-200/70 shadow-pastel-card relative overflow-hidden">
        
        {/* Subtle cloudy highlight */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/40 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left: Friendly Person Photo */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="w-40 sm:w-48 lg:w-full max-w-[240px] aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-emerald-300/40">
              <img
                src={consultPersonPhone}
                alt="Consultant reviewing client loan options"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Center: Headline, Subtitle, and Pill Button */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] leading-tight tracking-tight">
              Get In Touch For Your Free Consultation
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 max-w-lg leading-relaxed">
              Speak to one of our loan and finance underwriters so we can show you what your options are across 120+ leading Banks &amp; NBFCs.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={() => onOpenApplyModal('Free Consultation & Eligibility Check')}
                className="px-7 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm shadow-soft-pill hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer border border-white"
              >
                Find Your Loan
              </button>

              <a
                href="tel:+919548634988"
                className="px-6 py-3.5 rounded-full bg-emerald-800/10 hover:bg-emerald-800/20 text-emerald-950 font-semibold text-sm transition-all border border-emerald-300/60 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-800" />
                <span>Call Desk: 9548634988</span>
              </a>
            </div>
          </div>

          {/* Right: Clean line-art illustration of hands holding & counting coins */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-36 h-36 rounded-3xl bg-white/50 border border-emerald-200/80 flex items-center justify-center p-4">
              <svg
                viewBox="0 0 100 100"
                className="w-24 h-24 stroke-neutral-900 stroke-[2.5] fill-none stroke-linecap-round stroke-linejoin-round"
              >
                {/* Hand counting coins lineart */}
                <path d="M20 70 C 35 60, 45 65, 55 68 C 65 71, 75 66, 85 55" />
                <path d="M25 78 C 40 70, 50 74, 60 76 C 70 78, 80 72, 88 62" />
                <ellipse cx="65" cy="35" rx="14" ry="7" />
                <path d="M51 35 v 8 c 0 4 6 7 14 7 s 14 -3 14 -7 v -8" />
                <path d="M51 43 v 8 c 0 4 6 7 14 7 s 14 -3 14 -7 v -8" />
                <path d="M51 51 v 8 c 0 4 6 7 14 7 s 14 -3 14 -7 v -8" />
                <path d="M38 45 L42 41" />
                <path d="M42 45 L38 41" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
