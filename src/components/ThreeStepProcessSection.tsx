import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import consultSupportHero from '../assets/images/consult_support_hero_1790425888889.jpg';

interface ThreeStepProcessSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const ThreeStepProcessSection: React.FC<ThreeStepProcessSectionProps> = ({ onOpenApplyModal }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Start the Conversation',
      desc: "Share your goals—buying, remortgaging, debt transfer, or business expansion—and we'll guide you every step of the way.",
      points: [
        'Share your goals—buying, balance transfer, or working capital',
        'Minimal digital paperwork and swift initial KYC check',
        'Dedicated senior finance underwriter assigned immediately',
      ],
      buttonText: 'Get Started',
    },
    {
      num: 2,
      title: 'Compare 120+ Banks & NBFCs',
      desc: 'Our algorithms match your financial profile against 120+ institutional lenders to lock in the lowest interest rate and maximum tenure.',
      points: [
        'Transparent comparison of ROI, processing fees, and waivers',
        'Balance transfer calculation with instant savings breakdown',
        'Direct coordination with bank credit managers for express approval',
      ],
      buttonText: 'Compare Rates',
    },
    {
      num: 3,
      title: 'Seamless Approval & Disbursal',
      desc: '100% timely disbursal with zero stress. We handle legal clearance, doorstep document verification, and account credit.',
      points: [
        'Doorstep executive collection and legal property scrutiny',
        '24/7 CRM application tracking from login to disbursement',
        'Guaranteed transparent terms with no hidden platform charges',
      ],
      buttonText: 'Claim Your Loan',
    },
  ];

  const current = steps.find((s) => s.num === activeStep) || steps[0];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-10 max-w-[1440px] mx-auto">
      
      {/* Centered Heading Matching Screenshot */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
          A simple 3-step process to secure the right finance for you
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 font-normal">
          From first phone call to final fund disbursal in your bank account, we make every stage effortless.
        </p>

        {/* Step Selector Tabs */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {steps.map((s) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeStep === s.num
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'bg-white/80 hover:bg-white text-neutral-600 border border-neutral-200'
              }`}
            >
              Step 0{s.num}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column Card Layout matching lower right of screenshot */}
      <div className="bg-white rounded-[32px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 border border-neutral-100 shadow-soft-pill grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Pastel Periwinkle Container with Line-Art Support Agent Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="w-full max-w-[400px] aspect-square rounded-[32px] bg-[#DDE5F9] p-6 sm:p-8 flex items-center justify-center overflow-hidden border border-indigo-100/80 shadow-sm relative">
            <img
              src={consultSupportHero}
              alt="Support specialist assisting client"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Right Column: Numbered Badge, Title, Prose, Checklist, Black Pill Button */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Numbered Circle (Matching Screenshot) */}
          <div className="w-12 h-12 rounded-full border border-sky-300 text-sky-700 bg-sky-50 flex items-center justify-center font-bold text-lg">
            {current.num}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {current.desc}
            </p>
          </div>

          {/* Checklist with clean checkmarks */}
          <div className="space-y-3 pt-2">
            {current.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Black Pill Button */}
          <div className="pt-4">
            <button
              onClick={() => onOpenApplyModal(`Step ${current.num}: ${current.title}`)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <span>{current.buttonText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};
