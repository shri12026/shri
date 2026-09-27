import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, ArrowRight, IndianRupee, ShieldCheck } from 'lucide-react';

interface EligibilityCheckerSectionProps {
  onOpenApplyModal: (loanType?: string, amount?: string) => void;
}

export const EligibilityCheckerSection: React.FC<EligibilityCheckerSectionProps> = ({
  onOpenApplyModal,
}) => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(85000);
  const [existingEmi, setExistingEmi] = useState<number>(10000);
  const [age, setAge] = useState<number>(32);
  const [employmentType, setEmploymentType] = useState<string>('salaried');
  const [loanType, setLoanType] = useState<string>('Home Loan');
  const [calculated, setCalculated] = useState<boolean>(true);

  // FOIR Calculation
  const foirPercent = monthlyIncome > 100000 ? 0.65 : monthlyIncome > 50000 ? 0.60 : 0.50;
  const maxAllowableEmi = Math.max(0, monthlyIncome * foirPercent - existingEmi);

  // Estimate tenure in years based on age (max retirement age 60 for salaried, 65 for self-employed)
  const maxRetirementAge = employmentType === 'salaried' ? 60 : 65;
  const availableTenureYears = Math.min(30, Math.max(5, maxRetirementAge - age));

  // Prevailing interest rate approximation
  const approximateRate = loanType === 'Home Loan' ? 8.5 : loanType === 'Personal Loan' ? 11.0 : 11.5;
  const monthlyRate = approximateRate / 12 / 100;
  const totalMonths = availableTenureYears * 12;

  // Present value calculation of maximum loan amount
  const estimatedEligibleAmount =
    monthlyRate > 0 && maxAllowableEmi > 0
      ? Math.round(
          (maxAllowableEmi * (Math.pow(1 + monthlyRate, totalMonths) - 1)) /
            (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))
        )
      : 0;

  const triggerConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#E5A93C', '#0A1C44', '#10B981', '#F59E0B'],
    });
  };

  const handleRecalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculated(true);
    triggerConfetti();
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="eligibility" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Instant Pre-Assessment</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            Check Your Estimated Loan Eligibility
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Get an instant FOIR-backed estimate based on current Indian banking underwriting benchmarks.
          </p>
        </div>

        {/* Checker Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            <form onSubmit={handleRecalculate} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Loan Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Target Loan Type
                  </label>
                  <select
                    value={loanType}
                    onChange={(e) => setLoanType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  >
                    <option value="Home Loan">Home Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Loan Against Property">Loan Against Property</option>
                  </select>
                </div>

                {/* Employment Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Employment Category
                  </label>
                  <select
                    value={employmentType}
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  >
                    <option value="salaried">Salaried Professional</option>
                    <option value="self-employed">Self-Employed (CA/Doctor/Consultant)</option>
                    <option value="business">Business Owner / Proprietor</option>
                  </select>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Monthly Income */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Net Monthly Income (₹)
                  </label>
                  <input
                    type="number"
                    min="15000"
                    max="10000000"
                    step="5000"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                    required
                  />
                  <span className="text-[11px] text-slate-500">In-hand salary or monthly business profit</span>
                </div>

                {/* Existing EMI */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Current Monthly EMIs (₹)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="5000000"
                    step="2000"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  />
                  <span className="text-[11px] text-slate-500">Active credit card or personal/car loan EMIs</span>
                </div>

              </div>

              {/* Age */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Applicant Age: {age} Years
                  </label>
                  <span className="text-xs text-[#0A1C44] font-semibold">
                    Eligible Tenure: {availableTenureYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="21"
                  max="60"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1C44]"
                />
              </div>

              {/* Submit trigger */}
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#E5A93C]/20 cursor-pointer"
              >
                <span>Calculate Max Eligibility</span>
                <Sparkles className="w-4 h-4" />
              </button>

            </form>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#060F26] via-[#0A1C44] to-[#071330] text-white p-8 sm:p-10 rounded-3xl border border-[#E5A93C]/35 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-bold tracking-wider text-[#E5A93C]">
                  Estimated Pre-Approved Capacity
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/40">
                  Instant Estimate
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.06] border border-white/10 text-center">
                <span className="text-xs text-slate-300 block mb-1">
                  You May Be Eligible For Up To:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#E5A93C] tabular-nums">
                  {formatCurrency(estimatedEligibleAmount)}
                </div>
                <span className="text-xs text-amber-200/90 block mt-2">
                  At ~{approximateRate}% p.a. for {availableTenureYears} Years
                </span>
              </div>

              {/* Sub parameters */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-300">Max Comfortable EMI:</span>
                  <span className="font-bold text-white tabular-nums">
                    {formatCurrency(maxAllowableEmi)} / mo
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-slate-300">FOIR Utilization Capacity:</span>
                  <span className="font-bold text-emerald-400">
                    {Math.round(foirPercent * 100)}% of Net Income
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Eligibility increases with co-applicant or spouse income.</span>
              </div>

              <button
                onClick={() => onOpenApplyModal(loanType, estimatedEligibleAmount.toString())}
                className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/25 cursor-pointer"
              >
                <span>Apply with this Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
