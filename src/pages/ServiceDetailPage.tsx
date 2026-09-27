import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { LOANS_DATA } from '../data/loansData';
import {
  Home,
  User,
  Briefcase,
  Car,
  Building,
  Landmark,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Phone,
  Clock,
  Percent,
  Calendar,
  Wallet,
  FileText,
  Building2,
  HelpCircle,
  Calculator,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ServiceDetailPageProps {
  onOpenApplyModal: (serviceName?: string, amount?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenApplyModal }) => {
  const { slug } = useParams<{ slug: string }>();

  // If slug doesn't exist in data, redirect to services hub
  if (!slug || !LOANS_DATA[slug]) {
    return <Navigate to="/services" replace />;
  }

  const loan = LOANS_DATA[slug];

  // Local Mini-Calculator state
  const defaultAmount = slug === 'personal-loan' ? 500000 : slug === 'home-loan' ? 5000000 : 2500000;
  const defaultRate = parseFloat(loan.rateFrom) || 9.5;
  const defaultTenure = slug === 'home-loan' ? 20 : slug === 'personal-loan' ? 5 : 7;

  const [calcAmount, setCalcAmount] = useState(defaultAmount);
  const [calcRate, setCalcRate] = useState(defaultRate);
  const [calcTenure, setCalcTenure] = useState(defaultTenure);

  // In-page inquiry form state
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryCity, setInquiryCity] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculate EMI
  const monthlyRate = calcRate / (12 * 100);
  const totalMonths = calcTenure * 12;
  const emi = Math.round(
    (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;
  const totalRepayment = emi * totalMonths;
  const totalInterest = totalRepayment - calcAmount;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryPhone) return;
    setFormSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'home':
        return <Home className="w-8 h-8 text-[#E5A93C]" />;
      case 'user':
        return <User className="w-8 h-8 text-[#E5A93C]" />;
      case 'briefcase':
        return <Briefcase className="w-8 h-8 text-[#E5A93C]" />;
      case 'car':
        return <Car className="w-8 h-8 text-[#E5A93C]" />;
      case 'building':
        return <Building className="w-8 h-8 text-[#E5A93C]" />;
      case 'landmark':
        return <Landmark className="w-8 h-8 text-[#E5A93C]" />;
      default:
        return <GraduationCap className="w-8 h-8 text-[#E5A93C]" />;
    }
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
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">{loan.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{loan.badge}</span>
                <span className="text-white/40">·</span>
                <span className="text-slate-200">120+ Partner Banks</span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                {loan.title}
              </h1>

              <p className="text-base sm:text-lg text-[#E5A93C] font-serif italic">
                &ldquo;{loan.tagline}&rdquo;
              </p>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {loan.heroSummary}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenApplyModal(loan.title)}
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Apply for {loan.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="tel:+919548634988"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-[#E5A93C]/40 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <span>Call Advisor: +91 95486 34988</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <div className="w-32 h-32 rounded-3xl bg-white/10 border-2 border-[#E5A93C]/40 flex items-center justify-center shadow-2xl backdrop-blur-md">
                {getIcon(loan.iconName)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <Percent className="w-5 h-5 text-[#E5A93C]" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Interest Rate From</span>
              <span className="text-base sm:text-lg font-bold text-[#0A1C44]">{loan.rateFrom}</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-[#0A1C44]" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Maximum Tenure</span>
              <span className="text-base sm:text-lg font-bold text-slate-800">{loan.tenureMax}</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Wallet className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Maximum Sanction</span>
              <span className="text-base sm:text-lg font-bold text-slate-800">{loan.amountMax}</span>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Sanction Speed</span>
              <span className="text-base sm:text-lg font-bold text-emerald-700">{loan.approvalSpeed}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Content Split */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Comprehensive Information */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Overview */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">In-Depth Overview</span>
                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0A1C44]">
                  About {loan.title} with Shree Services
                </h2>
              </div>
              <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                {loan.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Sub-Types Available */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Variants & Offerings</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Types of {loan.title} Available
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loan.subTypes.map((sub, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#E5A93C] transition-colors space-y-2">
                    <h3 className="font-serif-display text-base font-bold text-[#0A1C44]">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                Key Benefits & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {loan.keyBenefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{ben}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Table */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Applicant Criteria</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Eligibility Requirements
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-semibold text-slate-800 bg-slate-50 w-1/3">Age Limit</td>
                      <td className="py-3 px-4 text-slate-600">{loan.eligibility.age}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-semibold text-slate-800 bg-slate-50">CIBIL Score</td>
                      <td className="py-3 px-4 text-slate-600">{loan.eligibility.cibil}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-semibold text-slate-800 bg-slate-50">Minimum Income</td>
                      <td className="py-3 px-4 text-slate-600">{loan.eligibility.income}</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 px-4 font-semibold text-slate-800 bg-slate-50">Experience / Vintage</td>
                      <td className="py-3 px-4 text-slate-600">{loan.eligibility.employment}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-800 bg-slate-50">Nationality</td>
                      <td className="py-3 px-4 text-slate-600">{loan.eligibility.nationality}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Required Documentation */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Document Checklist</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Required Documents
                </h2>
                <p className="text-xs text-slate-500">
                  Our doorstep executive picks up self-attested photocopies across Greater Noida West & Delhi NCR.
                </p>
              </div>

              <div className="space-y-4">
                {loan.documents.map((docGroup, idx) => (
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

            {/* Application Process Timeline */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">How It Works</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  4-Step Approval & Disbursal Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loan.processSteps.map((step) => (
                  <div key={step.step} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 relative">
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

            {/* Partner Banks Rate Comparison */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">Bank Comparison</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Top Lenders for {loan.title}
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs sm:text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A1C44] text-white">
                      <th className="py-3 px-4 font-semibold rounded-tl-lg">Lender Bank</th>
                      <th className="py-3 px-4 font-semibold">Interest Rate</th>
                      <th className="py-3 px-4 font-semibold">Max Tenure</th>
                      <th className="py-3 px-4 font-semibold rounded-tr-lg">Processing Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {loan.partnerBanks.map((bank, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="py-3 px-4 font-bold text-slate-800">{bank.name}</td>
                        <td className="py-3 px-4 text-emerald-700 font-semibold">{bank.rate}</td>
                        <td className="py-3 px-4 text-slate-600">{bank.maxTenure}</td>
                        <td className="py-3 px-4 text-slate-600">{bank.processingFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Loan FAQs */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Common Inquiries</span>
                <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {loan.faqs.map((faq, idx) => {
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

          {/* Right Column: Sticky Mini-Calculator & Quick Lead Form */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick EMI Estimator */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg sticky top-28 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0A1C44]">
                <Calculator className="w-4 h-4 text-[#E5A93C]" />
                <span>{loan.title} EMI Estimator</span>
              </div>

              {/* Amount Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Loan Amount:</span>
                  <span className="font-bold text-[#0A1C44]">₹{calcAmount.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min={slug === 'personal-loan' ? 50000 : 500000}
                  max={slug === 'personal-loan' ? 5000000 : 20000000}
                  step={50000}
                  value={calcAmount}
                  onChange={(e) => setCalcAmount(Number(e.target.value))}
                  className="w-full accent-[#0A1C44] cursor-pointer"
                />
              </div>

              {/* Rate Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Interest Rate (% p.a.):</span>
                  <span className="font-bold text-[#0A1C44]">{calcRate}%</span>
                </div>
                <input
                  type="range"
                  min={7.5}
                  max={16.0}
                  step={0.1}
                  value={calcRate}
                  onChange={(e) => setCalcRate(Number(e.target.value))}
                  className="w-full accent-[#0A1C44] cursor-pointer"
                />
              </div>

              {/* Tenure Slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Tenure (Years):</span>
                  <span className="font-bold text-[#0A1C44]">{calcTenure} Years</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={slug === 'home-loan' ? 30 : 10}
                  step={1}
                  value={calcTenure}
                  onChange={(e) => setCalcTenure(Number(e.target.value))}
                  className="w-full accent-[#0A1C44] cursor-pointer"
                />
              </div>

              {/* Result Box */}
              <div className="p-4 rounded-2xl bg-[#060F26] text-white text-center space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#E5A93C] font-semibold block">Estimated Monthly EMI</span>
                <div className="text-2xl font-extrabold text-gold-gradient font-serif-display">
                  ₹{emi.toLocaleString('en-IN')} /mo*
                </div>
                <div className="text-[10px] text-slate-300">
                  Total Repayment: ₹{totalRepayment.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Direct Quick Apply Form */}
              <div className="pt-2 border-t border-slate-100">
                {!formSubmitted ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-3">
                    <span className="text-xs font-bold text-slate-800 block">
                      Get Pre-Approved for {loan.title}
                    </span>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />
                    <input
                      type="tel"
                      placeholder="10-Digit Mobile Number"
                      required
                      pattern="[0-9]{10}"
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />
                    <input
                      type="text"
                      placeholder="City (e.g. Greater Noida West)"
                      value={inquiryCity}
                      onChange={(e) => setInquiryCity(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#E5A93C]"
                    />

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Instant Bank Call</span>
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-1 text-emerald-900">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                    <div className="text-xs font-bold">Request Received!</div>
                    <p className="text-[11px] text-emerald-700">
                      Our {loan.title} manager will call you within 15 minutes.
                    </p>
                  </div>
                )}

                <div className="mt-3 text-center">
                  <button
                    onClick={() => onOpenApplyModal(loan.title, `₹${calcAmount.toLocaleString('en-IN')}`)}
                    className="text-[11px] font-semibold text-[#0A1C44] hover:underline"
                  >
                    Or open full application form →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Bottom Return Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            Looking for a different loan product?
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              to="/services"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/15 transition-colors"
            >
              All Loan Services
            </Link>
            <Link
              to="/calculators"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/15 transition-colors"
            >
              Detailed EMI Calculator
            </Link>
            <Link
              to="/government-schemes"
              className="px-4 py-2 rounded-xl text-xs font-extrabold text-[#060F26] bg-[#E5A93C] hover:brightness-105 transition-all"
            >
              Govt Subsidy Schemes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
