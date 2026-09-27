import React from 'react';
import { Send, FileSearch, CheckCircle, Banknote, ArrowRight } from 'lucide-react';

interface HowItWorksSectionProps {
  onOpenApplyModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenApplyModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Apply & Consult',
      subtitle: 'Share Your Requirement',
      description: 'Fill our quick enquiry form online or speak with our Gaur City Mall loan desk. We assess your credit profile, required amount, and repayment preferences.',
      icon: <Send className="w-5 h-5 text-[#060F26]" />,
      time: '15 Mins',
    },
    {
      step: '02',
      title: 'Document Check',
      subtitle: 'Doorstep & Digital KYC',
      description: 'Our executive collects your KYC, income proof, property title, or GST returns. We organize and pre-underwrite documents to prevent bank rejections.',
      icon: <FileSearch className="w-5 h-5 text-[#060F26]" />,
      time: 'Within 24 Hrs',
    },
    {
      step: '03',
      title: 'Bank Sanction',
      subtitle: 'Optimal Lender Matching',
      description: 'We negotiate with 120+ partner banks and NBFCs simultaneously to get your formal Sanction Letter at the lowest available interest rate.',
      icon: <CheckCircle className="w-5 h-5 text-[#060F26]" />,
      time: '24–48 Hrs',
    },
    {
      step: '04',
      title: 'Disbursement',
      subtitle: 'Funds in Your Account',
      description: 'Sign the loan agreement and get funds credited directly to your bank account or builder/seller with zero delays or hidden deductions.',
      icon: <Banknote className="w-5 h-5 text-[#060F26]" />,
      time: 'Instant Credit',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            How Your Loan Gets Approved & Disbursed
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Our streamlined facilitation turns complicated banking procedures into a straightforward, predictable journey.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0A1C44] via-[#E5A93C] to-emerald-600 -translate-y-6 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#E5A93C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Header with Icon & Number */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="font-serif-display font-bold text-2xl text-slate-200 group-hover:text-[#E5A93C] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>

                  <h3 className="text-lg font-bold font-serif-display text-[#0A1C44] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600">Turnaround:</span>
                  <span className="font-semibold text-[#0A1C44] bg-[#0A1C44]/5 px-2.5 py-1 rounded-lg">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Banner */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenApplyModal}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 transition-all shadow-md cursor-pointer group"
          >
            <span>Start Step 1: Submit Your Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
