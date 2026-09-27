import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Landmark, ShieldAlert, Award, FileCheck, Check, ArrowRight, Info, HelpCircle, ExternalLink } from 'lucide-react';
import { GovtScheme } from '../types';

interface GovtSchemesSectionProps {
  onOpenApplyModal: (schemeName?: string) => void;
}

export const GovtSchemesSection: React.FC<GovtSchemesSectionProps> = ({ onOpenApplyModal }) => {
  const schemes: GovtScheme[] = [
    {
      id: 'cgtmse',
      name: 'CGTMSE Scheme',
      fullName: 'Credit Guarantee Fund Trust for Micro and Small Enterprises',
      highlight: 'Up to ₹5 Crore Collateral-Free Credit',
      maxAmount: '₹5,00,00,000',
      subsidyRate: 'Guarantee cover up to 85%',
      whatItIs: 'A flagship initiative launched by the Ministry of MSME and SIDBI to facilitate credit flow to the MSE sector without the burden of third-party collateral or personal property mortgages.',
      whoIsEligible: [
        'New and existing Micro and Small Enterprises (MSEs)',
        'Manufacturing and Service sector businesses (including retail/wholesale trade)',
        'Educational institutions, training institutions, IT/software firms',
        'Borrowers with viable business proposals and good banking records',
      ],
      keyBenefits: [
        'No mortgage of residential or commercial property required',
        'Guarantee cover up to 85% for micro-enterprises (up to ₹5 Lakhs)',
        'Up to 85% cover for Women Entrepreneurs and SC/ST promoters',
        'Direct sanction through our tie-up PSU and Private banks',
      ],
      nodalAgency: 'SIDBI & Ministry of MSME, Govt of India',
    },
    {
      id: 'pmegp',
      name: 'PMEGP Subsidy Loan',
      fullName: "Prime Minister's Employment Generation Programme",
      highlight: 'Up to 35% Direct Government Capital Subsidy',
      maxAmount: '₹50,00,000 (Mfg) / ₹20,00,000 (Service)',
      subsidyRate: '15% to 35% Govt Subsidy',
      whatItIs: 'A credit-linked subsidy programme aimed at generating self-employment through setting up of micro-enterprises in non-farm sectors by helping traditional artisans and unemployed youth.',
      whoIsEligible: [
        'Any individual above 18 years of age (minimum 8th pass for projects >₹10L)',
        'Self Help Groups (SHGs) and Charitable Trusts',
        'First-generation entrepreneurs establishing new units',
        'Special category beneficiaries (SC/ST/OBC/Women/Ex-servicemen/PH)',
      ],
      keyBenefits: [
        '35% subsidy for special categories in rural areas (25% in urban)',
        '25% subsidy for general category in rural areas (15% in urban)',
        'Own contribution required is only 5% to 10% of total project cost',
        'Shree Services assists with Detailed Project Report (DPR) preparation',
      ],
      nodalAgency: 'Khadi & Village Industries Commission (KVIC)',
    },
    {
      id: 'mudra',
      name: 'MUDRA Loan (PMMY)',
      fullName: 'Pradhan Mantri Mudra Yojana',
      highlight: '3 Tiers: Shishu, Kishor & Tarun up to ₹20 Lakh',
      maxAmount: 'Up to ₹20,00,000',
      subsidyRate: 'Subsidized Interest Rates',
      whatItIs: 'Refinancing scheme aimed at funding non-corporate, non-farm small and micro enterprises. Categorized into Shishu (up to ₹50,000), Kishor (₹50,000 to ₹5 Lakh), and Tarun (₹5 Lakh to ₹20 Lakh).',
      whoIsEligible: [
        'Small manufacturing units, shopkeepers, fruit/vegetable vendors',
        'Artisans, food processing units, repair workshops, transport operators',
        'Self-employed individuals needing initial capital or expansion funds',
        'Entities operating in urban, semi-urban, or rural localities',
      ],
      keyBenefits: [
        'Zero processing charges for Shishu & Kishor categories',
        'No collateral security required for eligible applicants',
        'Convenient Mudra Debit Card for seamless working capital withdrawals',
        'Quick sanction turnaround via nationalized partner banks',
      ],
      nodalAgency: 'MUDRA Ltd / Department of Financial Services',
    },
    {
      id: 'cgss',
      name: 'CGSS Scheme',
      fullName: 'Credit Guarantee Scheme for Startups',
      highlight: 'Guarantee Cover up to ₹10 Crore for DPIIT Startups',
      maxAmount: 'Up to ₹10,00,0000',
      subsidyRate: 'Credit Cover up to 80%',
      whatItIs: 'Government-backed credit guarantee facility specifically formulated to provide collateral-free debt funding to innovative DPIIT-recognized startups that have demonstrated traction and clear cash flow models.',
      whoIsEligible: [
        'Startups recognized by DPIIT with valid certificate of incorporation',
        'Startups with stable business operations and revenue trajectory',
        'Entities not in default with any financial lending institution',
        'Innovative ventures requiring growth debt without equity dilution',
      ],
      keyBenefits: [
        'Non-dilutive growth debt for early-stage & growth-stage founders',
        'Transaction-based or umbrella-based credit guarantee structure',
        'Accelerates product scaling, inventory, and hiring',
        'Guidance on DPIIT compliance and debt structuring',
      ],
      nodalAgency: 'National Credit Guarantee Trustee Company (NCGTC)',
    },
  ];

  const [activeTab, setActiveTab] = useState(schemes[0].id);
  const currentScheme = schemes.find((s) => s.id === activeTab) || schemes[0];

  return (
    <section id="govt-schemes" className="py-20 lg:py-28 bg-[#060F26] text-white relative overflow-hidden">
      {/* Background Decorative Rings & Ambient Gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0A1C44]/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(229,169,60,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E5A93C] bg-white/5 px-4 py-1.5 rounded-full border border-[#E5A93C]/30">
            <Landmark className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Government Credit & Subsidies</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Unlock Sovereign Financial Backing for Your Enterprise
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Avail government subsidies, zero-collateral guarantee shields, and concessional interest rates through our specialized liaison desk in Greater Noida West.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {schemes.map((scheme) => {
            const isActive = scheme.id === activeTab;
            return (
              <button
                key={scheme.id}
                onClick={() => setActiveTab(scheme.id)}
                className={`px-4 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap border ${
                  isActive
                    ? 'bg-gold-gradient text-[#060F26] border-[#E5A93C] shadow-lg shadow-[#E5A93C]/20 scale-102'
                    : 'bg-white/5 text-slate-200 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span>{scheme.name}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Scheme Showcase Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0A1C44]/95 to-[#071330]/95 border border-[#E5A93C]/35 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Detail Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-xs font-semibold text-emerald-300">
                    {currentScheme.subsidyRate}
                  </span>
                  <span className="text-xs text-amber-200/80 font-medium">
                    Nodal: {currentScheme.nodalAgency}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-white mt-3">
                  {currentScheme.fullName}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#E5A93C] mt-1">
                  {currentScheme.highlight}
                </p>
              </div>

              {/* What It Is */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                  {currentScheme.whatItIs}
                </p>
              </div>

              {/* Who is eligible */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">Who Can Apply?</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentScheme.whoIsEligible.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 bg-white/[0.04] p-6 sm:p-8 rounded-2xl border border-white/10">
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#060F26]/80 border border-[#E5A93C]/30 text-center">
                  <div className="text-xs uppercase text-amber-200/80 font-semibold">Maximum Financial Limit</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#E5A93C] mt-1">
                    {currentScheme.maxAmount}
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1">Collateral-free / Subsidy linked</div>
                </div>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">Prime Benefits:</span>
                  <div className="space-y-2">
                    {currentScheme.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Award className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <Link
                  to={`/government-schemes/${currentScheme.id}`}
                  className="w-full py-3 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-[#E5A93C]/40 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>View Complete {currentScheme.name} Guide</span>
                  <ExternalLink className="w-4 h-4 text-[#E5A93C]" />
                </Link>

                <button
                  onClick={() => onOpenApplyModal(`Government Scheme: ${currentScheme.name}`)}
                  className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/20 cursor-pointer"
                >
                  <span>Apply / Check Eligibility Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  Detailed Project Report (DPR) consultation by chartered experts
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Regulatory Disclaimer Note */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-2.5 text-xs text-slate-300 text-center">
          <Info className="w-4 h-4 text-[#E5A93C] shrink-0" />
          <span>
            Note: Terms, limits and subsidy rates are as per current government and bank guidelines. Final approval is subject to statutory verification and lending bank sanctions.
          </span>
        </div>

      </div>
    </section>
  );
};
