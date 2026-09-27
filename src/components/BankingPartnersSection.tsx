import React from 'react';
import { Building2, ShieldCheck, CheckCircle } from 'lucide-react';

export const BankingPartnersSection: React.FC = () => {
  const partners = [
    { name: 'State Bank of India', tag: 'India’s Largest Public Bank', color: '#1B5E20' },
    { name: 'HDFC Bank', tag: 'Premier Private Lender', color: '#004C8F' },
    { name: 'ICICI Bank', tag: 'Fast Digital Processing', color: '#B71C1C' },
    { name: 'LIC Housing Finance', tag: 'Lowest Interest Rates', color: '#E65100' },
    { name: 'Canara Bank', tag: 'Government PSU Partner', color: '#0277BD' },
    { name: 'Central Bank of India', tag: 'Nationalized Bank', color: '#2E7D32' },
    { name: 'Bank of Baroda', tag: 'Competitive MSME Loans', color: '#EF6C00' },
    { name: 'Punjab National Bank', tag: 'PMEGP & CGTMSE Desk', color: '#880E4F' },
    { name: 'Axis Bank', tag: 'Flexible LAP & Home Loans', color: '#880E4F' },
    { name: 'Kotak Mahindra Bank', tag: 'Instant Pre-Sanctions', color: '#C2185B' },
    { name: 'Tata Capital', tag: 'Reliable NBFC Financing', color: '#01579B' },
    { name: 'Bajaj Housing Finance', tag: 'Swift Property Loans', color: '#0D47A1' },
    { name: '& 120+ Banks & NBFCs', tag: 'Pan-India Lending Network', color: '#0A1C44' },
  ];

  // Duplicate for smooth seamless loop
  const marqueeList = [...partners, ...partners];

  return (
    <section id="partners" className="py-20 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
          <Building2 className="w-3.5 h-3.5" />
          <span>Our Banking Network</span>
        </div>
        <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1C44] tracking-tight">
          Direct Authorized Facilitation with India’s Foremost Lenders
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
          We leverage direct tie-ups to negotiate lower margins, waive inspection fees, and fast-track approvals for our clients.
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex gap-5 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused] py-3">
          {marqueeList.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#E5A93C] transition-all select-none shrink-0 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm shrink-0"
                style={{ backgroundColor: partner.color }}
              >
                {partner.name.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#0A1C44] transition-colors whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="text-[10px] font-semibold text-emerald-700 whitespace-nowrap">
                  {partner.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust metric footnote */}
      <div className="max-w-4xl mx-auto mt-8 px-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Direct Access to Bank Credit Committees</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>No Multiple Credit Score Hits</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Preferential Interest Rate Margins</span>
        </div>
      </div>
    </section>
  );
};
