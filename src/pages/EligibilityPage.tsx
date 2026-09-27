import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Calculator,
  UserCheck,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EligibilityPageProps {
  onOpenApplyModal: (serviceName?: string, amount?: string) => void;
}

export const EligibilityPage: React.FC<EligibilityPageProps> = ({ onOpenApplyModal }) => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(85000);
  const [existingEmis, setExistingEmis] = useState<number>(12000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [cibilScore, setCibilScore] = useState<number>(760);

  // Bank standard FOIR: 50% for income < 50k, 60% for income >= 50k to 1.5L, 65% for > 1.5L
  let foirPercentage = 0.50;
  if (monthlyIncome >= 150000) foirPercentage = 0.65;
  else if (monthlyIncome >= 50000) foirPercentage = 0.60;

  const maxTotalEmiAllowed = monthlyIncome * foirPercentage;
  const availableEmiForNewLoan = Math.max(0, maxTotalEmiAllowed - existingEmis);

  // Reverse calculate loan amount from available EMI
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  let maxLoanEligible = 0;
  if (availableEmiForNewLoan > 0 && monthlyRate > 0) {
    const factor = (Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths));
    maxLoanEligible = Math.round(availableEmiForNewLoan * factor);
  }

  // FOIR health
  const currentFoirUsed = Math.round(((existingEmis + availableEmiForNewLoan) / monthlyIncome) * 100);

  const handleCelebrate = () => {
    confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 }, colors: ['#0A1C44', '#E5A93C', '#10B981'] });
    onOpenApplyModal('Pre-Approved Eligibility Inquiry', `₹${maxLoanEligible.toLocaleString('en-IN')}`);
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Loan Eligibility</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Multi-Bank FOIR Eligibility Engine</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Check How Much Loan You Can Get
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Banks compute borrowing power using the Fixed Obligation to Income Ratio (FOIR). Input your in-hand earnings and existing liabilities to discover your maximum sanctioned limit across 120+ lenders.
            </p>
          </div>
        </div>
      </section>

      {/* Main Interactive Matrix */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-7">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A1C44]">
                Your Financial Profile
              </h2>
              <p className="text-xs text-slate-500">
                Adjust sliders to reflect your net take-home salary or net business profit.
              </p>
            </div>

            {/* Monthly In-hand Salary */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Net Monthly In-Hand Income
                </label>
                <div className="text-base sm:text-lg font-bold text-[#0A1C44] bg-[#0A1C44]/5 px-3 py-1 rounded-lg border border-[#0A1C44]/15">
                  ₹{monthlyIncome.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min={20000}
                max={500000}
                step={5000}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1C44]"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>₹20,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Existing EMIs */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Existing Monthly EMIs / Liabilities
                </label>
                <div className="text-base sm:text-lg font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  ₹{existingEmis.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={150000}
                step={2000}
                value={existingEmis}
                onChange={(e) => setExistingEmis(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>₹0 (Zero debt)</span>
                <span>₹50,000</span>
                <span>₹1,50,000</span>
              </div>
            </div>

            {/* Tenure & Rate Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Desired Tenure: {tenureYears} Years
                </label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700 block">
                  Target Rate: {interestRate}% p.a.
                </label>
                <input
                  type="range"
                  min={8.0}
                  max={15.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1C44]"
                />
              </div>
            </div>

            {/* CIBIL Score Selector */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-700">Estimated CIBIL Score</span>
                <span className="text-emerald-700 font-bold">{cibilScore} ({cibilScore >= 750 ? 'Excellent' : 'Average'})</span>
              </div>
              <input
                type="range"
                min={600}
                max={850}
                step={10}
                value={cibilScore}
                onChange={(e) => setCibilScore(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#060F26] text-white p-7 sm:p-8 border border-[#E5A93C]/30 shadow-xl space-y-6">
              <div className="text-center space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold block">
                  Maximum Eligible Loan Amount
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-serif-display">
                  ₹{maxLoanEligible.toLocaleString('en-IN')}*
                </div>
                <p className="text-xs text-slate-300">
                  Estimated based on an available EMI capacity of <strong>₹{Math.round(availableEmiForNewLoan).toLocaleString('en-IN')}/mo</strong>
                </p>
              </div>

              {/* FOIR Ratio Indicator */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">FOIR Utilization</span>
                  <span className="text-amber-300 font-bold">{currentFoirUsed}% (Safe Tier)</span>
                </div>
                <div className="w-full h-2.5 bg-black/30 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${Math.min(100, currentFoirUsed)}%` }}
                  />
                </div>
                <span className="text-[11px] text-slate-300 block">
                  Banks allow up to {Math.round(foirPercentage * 100)}% of your monthly earnings towards total EMIs.
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Gross Monthly Salary</span>
                  <span className="text-white font-semibold">₹{monthlyIncome.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>Existing Outgo</span>
                  <span className="text-amber-300 font-semibold">₹{existingEmis.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span>New Loan EMI Allowed</span>
                  <span className="text-emerald-300 font-semibold">₹{Math.round(availableEmiForNewLoan).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                onClick={handleCelebrate}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Get Instant Pre-Approval Letter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tips to Boost Eligibility */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-serif-display text-base font-bold text-[#0A1C44]">
                How to Boost Your Loan Eligibility?
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Add a Co-Borrower:</strong> Clubbing your spouse or parents' salary increases available EMI by up to 80%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Close Small Personal Debts:</strong> Pre-closing small credit card or consumer EMIs instantly releases FOIR space.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span><strong>Opt for Longer Tenure:</strong> Stretching from 15 to 20 or 25 years reduces monthly EMI obligations.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
