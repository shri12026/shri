import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Building, Landmark, CreditCard, Umbrella, Briefcase, ArrowLeftRight, Wallet } from 'lucide-react';
import happyClientPointing from '../assets/images/happy_client_pointing_1790425912955.jpg';

interface PastelBentoSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const PastelBentoSection: React.FC<PastelBentoSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="services-bento" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 sm:mb-12">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            500+ Financial &amp; Business Services Under One Roof
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
            Tailored Finance For Every Goal
          </h2>
        </div>
        <p className="text-sm text-neutral-600 max-w-md font-normal">
          From residential mortgages and debt consolidation to working capital and business registrations across 120+ banks.
        </p>
      </div>

      {/* 4 Pastel Cards Grid matching screenshot layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        
        {/* Card 1: Soft Yellow / Butter Card - Balance Transfer & Overdraft */}
        <div className="bg-[#FEF3C7] rounded-[32px] p-7 flex flex-col justify-between border border-amber-200/60 shadow-pastel-card group hover:-translate-y-1 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-400/30 flex items-center justify-center text-amber-900">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-amber-400/30 text-amber-950">
                Top Priority
              </span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Balance Transfer &amp; Overdraft
            </h3>
            <p className="text-xs text-neutral-700 mt-2 leading-relaxed">
              Switch existing high-rate home/LAP loans to lower interest partner banks. Save up to 40% on EMI plus access instant revolving OD limits.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>Save up to ₹4 Lakhs on interest</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0" />
                <span>Drop-line OD &amp; CC limits</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('Balance Transfer & Overdraft')}
              className="w-full py-3 px-4 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group-hover:scale-[1.02]"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 2: Soft Sky Blue Card - Home Loans & LAP */}
        <div className="bg-[#C8E5F7] rounded-[32px] p-7 flex flex-col justify-between border border-sky-200/60 shadow-pastel-card group hover:-translate-y-1 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-sky-300/40 flex items-center justify-center text-sky-950">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-sky-300/40 text-sky-950">
                From 8.35%*
              </span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              Home Loans &amp; Property Finance
            </h3>
            <p className="text-xs text-neutral-700 mt-2 leading-relaxed">
              Buy, build, or unlock equity from residential or commercial property with 30-year tenures and priority sanctions.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-900 shrink-0" />
                <span>Up to ₹25 Cr Loan Against Property</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-900 shrink-0" />
                <span>Doorstep legal verification</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('Home Loan & Property Finance')}
              className="w-full py-3 px-4 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group-hover:scale-[1.02]"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 3: Pastel Lilac / Periwinkle Card with Smiling Person Photo (Direct match to screenshot) */}
        <div className="bg-[#DDE5F9] rounded-[32px] p-7 flex flex-col justify-between border border-indigo-100 shadow-pastel-card relative overflow-hidden group hover:-translate-y-1 transition-all">
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-300/40 flex items-center justify-center text-indigo-950">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-indigo-300/40 text-indigo-950">
                Zero Annual Fee
              </span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              7+ Credit Cards
            </h3>
            <p className="text-xs text-neutral-700 mt-2 leading-relaxed">
              Lifetime Free cards, airport lounge access, 5% cashback on groceries &amp; fuel surcharge waivers.
            </p>
          </div>

          {/* Photo of client peeking out */}
          <div className="my-2 relative h-28 overflow-hidden rounded-2xl">
            <img
              src={happyClientPointing}
              alt="Happy customer pointing at options"
              className="w-full h-full object-cover object-top mix-blend-multiply"
            />
          </div>

          <div className="pt-2 relative z-10">
            <button
              onClick={() => onOpenApplyModal('Credit Card Services')}
              className="w-full py-3 px-4 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group-hover:scale-[1.02]"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Card 4: Soft Mint Green Card - Business & Insurance Services */}
        <div className="bg-[#CEEED9] rounded-[32px] p-7 flex flex-col justify-between border border-emerald-200/60 shadow-pastel-card group hover:-translate-y-1 transition-all">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-300/40 flex items-center justify-center text-emerald-950">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-300/40 text-emerald-950">
                MSME &amp; Corporate
              </span>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
              8+ Business Clearances
            </h3>
            <p className="text-xs text-neutral-700 mt-2 leading-relaxed">
              GST Registration &amp; Filing, Udyam MSME, FSSAI Food License, Class 3 DSC, and PAN/TAN tax clearances.
            </p>

            <ul className="mt-4 space-y-1.5 text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-900 shrink-0" />
                <span>Health &amp; Life Insurance Covers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-900 shrink-0" />
                <span>&ldquo;Your Business Our Support&rdquo;</span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <button
              onClick={() => onOpenApplyModal('Business & Insurance Services')}
              className="w-full py-3 px-4 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm group-hover:scale-[1.02]"
            >
              <span>Learn more</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
