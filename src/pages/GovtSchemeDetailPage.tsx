import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SCHEMES_DATA } from '../data/schemesData';
import {
  Landmark,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  FileText,
  Building2,
  HelpCircle,
  Percent,
  Wallet,
  Clock,
  Send,
  AlertTriangle,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface GovtSchemeDetailPageProps {
  onOpenApplyModal: (schemeName?: string) => void;
}

export const GovtSchemeDetailPage: React.FC<GovtSchemeDetailPageProps> = ({ onOpenApplyModal }) => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !SCHEMES_DATA[slug]) {
    return <Navigate to="/government-schemes" replace />;
  }

  const scheme = SCHEMES_DATA[slug];

  // In-page form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryBusiness, setInquiryBusiness] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setFormSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* 1. Dedicated Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/government-schemes" className="hover:underline">Govt Schemes</Link>
            <span>/</span>
            <span className="text-white">{scheme.shortTitle}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{scheme.ministry}</span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {scheme.name}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-serif">
                {scheme.fullName}
              </p>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-amber-400/20 to-transparent border-l-4 border-[#E5A93C] text-amber-200 text-xs sm:text-sm font-semibold">
                ✦ {scheme.highlight}
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {scheme.overview[0]}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenApplyModal(`Govt Scheme: ${scheme.name}`)}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for {scheme.shortTitle} Subsidy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919548634988"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-[#E5A93C]/40 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <span>DPR Consultation Desk</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="w-32 h-32 rounded-3xl bg-white/10 border-2 border-[#E5A93C]/40 flex items-center justify-center shadow-2xl backdrop-blur-md text-[#E5A93C]">
                <Landmark className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Ribbon */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6 text-[#E5A93C]" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Maximum Ceiling</span>
              <span className="text-base sm:text-lg font-bold text-[#0A1C44]">{scheme.maxAmount}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Percent className="w-6 h-6 text-emerald-700" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Subsidy / Guarantee</span>
              <span className="text-base sm:text-lg font-bold text-emerald-700">{scheme.subsidyRate}</span>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-slate-50 text-[#0A1C44] flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-[#0A1C44]" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Nodal Implementation</span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">{scheme.nodalAgency}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Body */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Scheme Details */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Context */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Scheme Objectives</span>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0A1C44]">
                  Detailed Breakdown of {scheme.name}
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {scheme.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* If Subsidy Matrix exists (PMEGP) */}
            {scheme.subsidyMatrix && (
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Official Subsidy Slabs</span>
                  <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A1C44]">
                    PMEGP Capital Subsidy Breakdown
                  </h2>
                </div>

                <div className="sm:hidden flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                  <span>👉 Swipe horizontally to view full subsidy slabs</span>
                </div>

                <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
                  <table className="min-w-[500px] w-full text-xs sm:text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-[#0A1C44] text-white">
                        <th className="py-3 px-4 font-semibold rounded-tl-lg">Beneficiary Category</th>
                        <th className="py-3 px-4 font-semibold">Urban Subsidy</th>
                        <th className="py-3 px-4 font-semibold">Rural Subsidy</th>
                        <th className="py-3 px-4 font-semibold rounded-tr-lg">Own Contribution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {scheme.subsidyMatrix.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3.5 px-4 font-bold text-slate-800">{row.category}</td>
                          <td className="py-3.5 px-4 text-[#0A1C44] font-semibold">{row.urbanRate}</td>
                          <td className="py-3.5 px-4 text-emerald-700 font-bold text-sm">{row.ruralRate}</td>
                          <td className="py-3.5 px-4 text-slate-600">{row.ownContribution}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Key Pillars */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Salient Features</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Key Advantages of {scheme.shortTitle}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scheme.keyPillars.map((p, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                    <h3 className="font-serif-display text-base font-bold text-[#0A1C44]">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who is Eligible */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Target Beneficiaries</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Who Can Apply?
                </h2>
              </div>

              <div className="space-y-2.5">
                {scheme.eligibility.map((el, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{el}</span>
                  </div>
                ))}
              </div>

              {scheme.ineligibleProjects && (
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Ineligible Activities & Exclusions</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                    {scheme.ineligibleProjects.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Documents Checklist */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Application Dossier</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Documents Required for {scheme.shortTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {scheme.documentsRequired.map((docGroup, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#0A1C44]">
                      <FileText className="w-4 h-4 text-[#E5A93C]" />
                      <span>{docGroup.category}</span>
                    </div>
                    <ul className="space-y-1.5 pl-6 list-disc text-xs text-slate-600">
                      {docGroup.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Step-by-Step Approval Process */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Portal & Bank Journey</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  4-Step Application & Sanction Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {scheme.stepByStepProcess.map((step) => (
                  <div key={step.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="w-7 h-7 rounded-full bg-[#0A1C44] text-[#E5A93C] text-xs font-extrabold flex items-center justify-center">
                      {step.step}
                    </div>
                    <h3 className="font-serif-display text-sm font-bold text-[#0A1C44]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Scheme Queries</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {scheme.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="rounded-xl border border-slate-200 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#0A1C44] hover:bg-slate-50 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#E5A93C]' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: In-page Consultation Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg sticky top-28 space-y-5">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Free Preliminary Assessment
                </span>
                <h3 className="font-serif-display text-xl font-bold text-[#0A1C44]">
                  Apply for {scheme.shortTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  Detailed Project Report (DPR) consultation by certified CA analysts.
                </p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Applicant Name"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">Proposed Business Activity</label>
                    <input
                      type="text"
                      placeholder="e.g. Food Processing, Textile, IT..."
                      value={inquiryBusiness}
                      onChange={(e) => setInquiryBusiness(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit for Scheme Evaluation</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1.5 text-emerald-900">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 mx-auto" />
                  <div className="text-sm font-bold">Consultation Booked!</div>
                  <p className="text-xs text-emerald-700">
                    Our government schemes division will review your profile and contact you within 24 hours.
                  </p>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 text-center space-y-2">
                <a
                  href="tel:+919548634988"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1C44] hover:text-emerald-700"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
                  <span>Call Office: +91 95486 34988</span>
                </a>
                <p className="text-[10px] text-slate-400">
                  Sector-IV, Gaur City Mall, Greater Noida West
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Bottom Scheme Navigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            Explore other government sovereign funding programs:
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {Object.values(SCHEMES_DATA)
              .filter((s) => s.slug !== scheme.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/government-schemes/${other.slug}`}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/20 transition-colors"
                >
                  {other.shortTitle}
                </Link>
              ))}
            <Link
              to="/government-schemes"
              className="px-3.5 py-1.5 rounded-lg text-xs font-extrabold text-[#060F26] bg-[#E5A93C] hover:brightness-105 transition-all"
            >
              All Schemes Hub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
