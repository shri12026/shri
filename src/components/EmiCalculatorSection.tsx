import React, { useState, useId } from 'react';
import { Calculator, PieChart, ArrowRight, IndianRupee } from 'lucide-react';

interface EmiCalculatorSectionProps {
  onOpenApplyModal: (loanType?: string, amount?: string) => void;
}

export const EmiCalculatorSection: React.FC<EmiCalculatorSectionProps> = ({ onOpenApplyModal }) => {
  const [loanType, setLoanType] = useState<'home' | 'personal' | 'business'>('home');

  // Input states
  const [amount, setAmount] = useState<number>(5000000); // 50 Lakhs
  const [rate, setRate] = useState<number>(8.5); // 8.5%
  const [tenureYears, setTenureYears] = useState<number>(20); // 20 years

  const amountInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();

  // Preset presets for tabs
  const handleTabChange = (type: 'home' | 'personal' | 'business') => {
    setLoanType(type);
    if (type === 'home') {
      setAmount(5000000);
      setRate(8.5);
      setTenureYears(20);
    } else if (type === 'personal') {
      setAmount(500000);
      setRate(11.0);
      setTenureYears(4);
    } else {
      setAmount(2500000);
      setRate(12.0);
      setTenureYears(5);
    }
  };

  // Limits based on loan type
  const limits = {
    home: { minAmount: 500000, maxAmount: 50000000, stepAmount: 100000, minRate: 6.5, maxRate: 15.0, minTenure: 1, maxTenure: 30 },
    personal: { minAmount: 50000, maxAmount: 5000000, stepAmount: 50000, minRate: 9.5, maxRate: 24.0, minTenure: 1, maxTenure: 7 },
    business: { minAmount: 200000, maxAmount: 100000000, stepAmount: 100000, minRate: 9.0, maxRate: 20.0, minTenure: 1, maxTenure: 10 },
  }[loanType];

  // Mathematical EMI calculation
  const monthlyRate = rate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    monthlyRate > 0
      ? Math.round(
          (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : Math.round(amount / totalMonths);

  const totalPayable = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayable - amount);

  const principalRatio = totalPayable > 0 ? (amount / totalPayable) : 0.5;
  const interestRatio = totalPayable > 0 ? (totalInterest / totalPayable) : 0.5;

  // Donut SVG circumference calculation
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const principalStroke = principalRatio * circumference;
  const interestStroke = interestRatio * circumference;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatCompact = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="emi-calculator" className="py-20 lg:py-28 bg-[#0A1C44]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <Calculator className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Interactive Financial Planner</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            Calculate Your Monthly Loan EMI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Adjust loan amount, interest rate, and repayment tenure to evaluate your monthly obligations and interest savings instantly.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="inline-flex max-w-full overflow-x-auto p-1 sm:p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm scrollbar-none">
            <button
              onClick={() => handleTabChange('home')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                loanType === 'home'
                  ? 'bg-[#0A1C44] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0A1C44]'
              }`}
            >
              Home Loan
            </button>
            <button
              onClick={() => handleTabChange('personal')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                loanType === 'personal'
                  ? 'bg-[#0A1C44] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0A1C44]'
              }`}
            >
              Personal Loan
            </button>
            <button
              onClick={() => handleTabChange('business')}
              className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                loanType === 'business'
                  ? 'bg-[#0A1C44] text-white shadow-md'
                  : 'text-slate-600 hover:text-[#0A1C44]'
              }`}
            >
              Business Loan
            </button>
          </div>
        </div>

        {/* Main Calculator Box */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-2xl p-5 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* 1. Loan Amount Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={amountInputId} className="text-sm font-bold text-slate-700">
                    Loan Amount
                  </label>
                  <div className="px-4 py-1.5 rounded-lg bg-[#0A1C44]/5 border border-[#0A1C44]/20 text-sm font-bold text-[#0A1C44] tabular-nums">
                    {formatCurrency(amount)}
                  </div>
                </div>
                <input
                  id={amountInputId}
                  type="range"
                  min={limits.minAmount}
                  max={limits.maxAmount}
                  step={limits.stepAmount}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1C44]"
                />
                <div className="flex justify-between text-xs text-slate-600">
                  <span>{formatCompact(limits.minAmount)}</span>
                  <span>{formatCompact(limits.maxAmount)}</span>
                </div>
              </div>

              {/* 2. Interest Rate Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={rateInputId} className="text-sm font-bold text-slate-700">
                    Interest Rate (% p.a.)
                  </label>
                  <div className="px-4 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-sm font-bold text-[#B87B19] tabular-nums">
                    {rate.toFixed(2)} %
                  </div>
                </div>
                <input
                  id={rateInputId}
                  type="range"
                  min={limits.minRate}
                  max={limits.maxRate}
                  step={0.05}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E5A93C]"
                />
                <div className="flex justify-between text-xs text-slate-600">
                  <span>{limits.minRate}%</span>
                  <span>{limits.maxRate}%</span>
                </div>
              </div>

              {/* 3. Tenure Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor={tenureInputId} className="text-sm font-bold text-slate-700">
                    Loan Tenure (Years)
                  </label>
                  <div className="px-4 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-sm font-bold text-emerald-700 tabular-nums">
                    {tenureYears} Years ({totalMonths} Months)
                  </div>
                </div>
                <input
                  id={tenureInputId}
                  type="range"
                  min={limits.minTenure}
                  max={limits.maxTenure}
                  step={1}
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-xs text-slate-600">
                  <span>{limits.minTenure} Year</span>
                  <span>{limits.maxTenure} Years</span>
                </div>
              </div>

            </div>

            {/* Right Output & Donut Chart Column */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col items-center justify-between space-y-6">
              
              {/* Monthly EMI Hero Figure */}
              <div className="w-full text-center p-5 rounded-2xl bg-gradient-to-r from-[#060F26] via-[#0A1C44] to-[#0D2459] text-white shadow-lg border border-[#E5A93C]/30">
                <div className="text-xs uppercase tracking-wider text-[#E5A93C] font-semibold">
                  Estimated Monthly EMI
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-serif-display text-[#E5A93C] mt-1 tabular-nums">
                  {formatCurrency(emi)}
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Payable for {totalMonths} months
                </div>
              </div>

              {/* Donut Chart Visual */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                  {/* Background track */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="18"
                  />
                  {/* Principal Stroke (Imperial Sapphire) */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#0A1C44"
                    strokeWidth="18"
                    strokeDasharray={`${principalStroke} ${circumference}`}
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                  />
                  {/* Interest Stroke (Champagne Gold) */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="none"
                    stroke="#E5A93C"
                    strokeWidth="18"
                    strokeDasharray={`${interestStroke} ${circumference}`}
                    strokeDashoffset={-principalStroke}
                    strokeLinecap="round"
                    className="transition-all duration-500 ease-out"
                  />
                </svg>
                
                {/* Center Badge in Donut */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-600">Breakdown</span>
                  <span className="text-xs font-bold text-[#0A1C44]">
                    {Math.round(principalRatio * 100)}% / {Math.round(interestRatio * 100)}%
                  </span>
                </div>
              </div>

              {/* Numerical Breakdown Rows */}
              <div className="w-full space-y-2.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#0A1C44]" />
                    <span className="text-slate-600">Principal Amount:</span>
                  </div>
                  <span className="font-bold text-slate-800 tabular-nums">
                    {formatCurrency(amount)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E5A93C]" />
                    <span className="text-slate-600">Total Interest Payable:</span>
                  </div>
                  <span className="font-bold text-[#B87B19] tabular-nums">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#0A1C44]/5 border border-[#0A1C44]/20 font-bold">
                  <span className="text-[#0A1C44]">Total Amount (P + I):</span>
                  <span className="text-[#0A1C44] tabular-nums">
                    {formatCurrency(totalPayable)}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() =>
                  onOpenApplyModal(
                    loanType === 'home'
                      ? 'Home Loan'
                      : loanType === 'personal'
                      ? 'Personal Loan'
                      : 'Business Loan',
                    amount.toString()
                  )
                }
                className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#E5A93C]/25 cursor-pointer"
              >
                <span>Apply for this Loan Offer</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
