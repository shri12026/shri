import React from 'react';
import { Link } from 'react-router-dom';
import { SCHEMES_DATA } from '../data/schemesData';
import {
  Landmark,
  Award,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ExternalLink,
  Check
} from 'lucide-react';

interface GovtSchemesHubPageProps {
  onOpenApplyModal: (schemeName?: string) => void;
}

export const GovtSchemesHubPage: React.FC<GovtSchemesHubPageProps> = ({ onOpenApplyModal }) => {
  const schemesList = Object.values(SCHEMES_DATA);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Government Schemes & Subsidies</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Sovereign-Backed Growth Initiatives</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Government Funding, Subsidies & Credit Guarantees
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Unlock non-refundable capital margin money subsidies up to 35% and collateral-free enterprise credit up to ₹10 Crore with our certified Detailed Project Report (DPR) and portal liaisoning desk.
            </p>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schemesList.map((scheme) => (
            <div
              key={scheme.slug}
              className="rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-[#E5A93C] transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {scheme.ministry}
                    </span>
                    <h3 className="font-serif-display text-2xl font-bold text-[#0A1C44] group-hover:text-[#112C6E] transition-colors">
                      {scheme.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {scheme.fullName}
                    </p>
                  </div>
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] shrink-0 shadow-md">
                    <Landmark className="w-6 h-6" />
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 text-amber-950 text-xs sm:text-sm font-semibold flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E5A93C] shrink-0" />
                  <span>{scheme.highlight}</span>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {scheme.overview[0]}
                </p>

                {/* Quantum & Subsidy Bar */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">Max Quantum</span>
                    <span className="font-bold text-[#0A1C44] text-sm">{scheme.maxAmount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">Subsidy / Guarantee</span>
                    <span className="font-bold text-emerald-700 text-sm">{scheme.subsidyRate}</span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-200/60">
                    <span className="text-[10px] text-slate-500 uppercase font-semibold block">Nodal Agency</span>
                    <span className="font-semibold text-slate-800 text-xs">{scheme.nodalAgency}</span>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Key Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {scheme.keyPillars.slice(0, 4).map((p, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{p.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <Link
                  to={`/government-schemes/${scheme.slug}`}
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44] hover:text-white border border-[#0A1C44]/20 text-center transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Complete Scheme Guide</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => onOpenApplyModal(`Government Scheme: ${scheme.name}`)}
                  className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 text-center transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Check Eligibility</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Shree Services for DPR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Professional Assistance</span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0A1C44]">
              Why Work with Shree Services for Government Subsidies?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Applying for sovereign subsidies like PMEGP and CGTMSE requires meticulous adherence to Ministry norms, correct industrial classification (NIC codes), and bank-compliant financial modeling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">1</div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Detailed Project Reports (DPR)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prepared by experienced chartered accountants with techno-economic feasibility (TEV), DSCR, break-even analysis, and 5-year cash projections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">2</div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Nodal Agency & Portal Liaisoning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct coordination through official e-portals (KVIC e-tracking, Udyamimitra, SIDBI portal) to ensure zero rejection due to technical anomalies.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">3</div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Bank Sanction Follow-Ups</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct engagement with Lead District Managers (LDM), SME branch heads, and credit committees to accelerate sanction letter issuance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
