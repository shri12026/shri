import React from 'react';
import { Percent, Clock, FileCheck2, Building2, UserCheck, Eye, ShieldCheck, Headphones } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const points = [
    {
      title: 'Lowest Interest Rates',
      description: 'We compare real-time rate sheets across 120+ lenders to secure you the most competitive ROI, saving you lakhs over your loan tenure.',
      icon: <Percent className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'From 8.35%*',
    },
    {
      title: 'Quick 48-Hour Approval',
      description: 'Expedited processing corridors with prioritized credit manager queues for swift in-principle sanctions.',
      icon: <Clock className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'Fast Track',
    },
    {
      title: 'Minimal Documentation',
      description: 'Simplified paperwork with digital KYC, doorstep document pickup, and zero unnecessary procedural hassles.',
      icon: <FileCheck2 className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'Doorstep Pickup',
    },
    {
      title: '120+ Bank & NBFC Partners',
      description: 'Direct tie-ups with India’s leading public sector, private sector, and non-banking finance companies for high FOIR approvals.',
      icon: <Building2 className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'Pan-India Network',
    },
    {
      title: 'Expert Financial Guidance',
      description: 'Chartered credit analysts and former banking officers assist in optimizing debt ratios and structuring complex proposals.',
      icon: <UserCheck className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'Free Advisory',
    },
    {
      title: '100% Transparent Process',
      description: 'Zero hidden commissions, complete clarity on bank processing charges, and clear tracking from application to disbursement.',
      icon: <Eye className="w-6 h-6 text-[#E5A93C]" />,
      badge: 'Zero Hidden Fees',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <span>Why Borrowers Choose Us</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            The Advantage That Sets Shree Services Apart
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Borrowing doesn't have to be stressful. Experience the difference of seasoned advisors acting solely in your financial best interest.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#E5A93C] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    {point.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#0A1C44] bg-[#E5A93C]/15 px-2.5 py-1 rounded-full border border-[#E5A93C]/30">
                    {point.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif-display text-[#0A1C44] group-hover:text-[#112C6E] transition-colors mb-3">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-emerald-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified SLA
                </span>
                <span className="text-[11px] font-mono text-slate-400">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
