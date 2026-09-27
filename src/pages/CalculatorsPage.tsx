import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calculator,
  Sliders,
  PieChart,
  Calendar,
  Percent,
  Wallet,
  ArrowRight,
  TrendingDown,
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';

interface CalculatorsPageProps {
  onOpenApplyModal: (serviceName?: string, amount?: string) => void;
}

export const CalculatorsPage: React.FC<CalculatorsPageProps> = ({ onOpenApplyModal }) => {
  const [loanAmount, setLoanAmount] = useState<number>(3500000);
  const [interestRate, setInterestRate] = useState<number>(8.65);
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [extraPrepayment, setExtraPrepayment] = useState<number>(5000);
  const [viewSchedule, setViewSchedule] = useState<'yearly' | 'monthly'>('yearly');

  // Standard EMI calculation
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;

  const totalRepayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalRepayment - loanAmount);
  const principalPercent = Math.round((loanAmount / totalRepayment) * 100) || 50;
  const interestPercent = 100 - principalPercent;

  // Prepayment savings calculation
  let balance = loanAmount;
  let monthsWithExtra = 0;
  let totalInterestWithExtra = 0;
  const acceleratedMonthlyPay = emi + extraPrepayment;

  while (balance > 0 && monthsWithExtra < totalMonths) {
    const monthlyInt = balance * monthlyRate;
    totalInterestWithExtra += monthlyInt;
    const principalPaid = acceleratedMonthlyPay - monthlyInt;
    balance -= principalPaid;
    monthsWithExtra++;
  }

  const interestSaved = Math.max(0, totalInterest - Math.round(totalInterestWithExtra));
  const tenureSavedYears = Math.max(0, ((totalMonths - monthsWithExtra) / 12)).toFixed(1);

  // Amortization Schedule (Yearly)
  const yearlySchedule = [];
  let curBalance = loanAmount;
  for (let year = 1; year <= tenureYears && curBalance > 0; year++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    for (let m = 0; m < 12; m++) {
      if (curBalance <= 0) break;
      const int = curBalance * monthlyRate;
      const prin = Math.min(curBalance, emi - int);
      yearInterest += int;
      yearPrincipal += prin;
      curBalance -= prin;
    }
    yearlySchedule.push({
      year,
      principalPaid: Math.round(yearPrincipal),
      interestPaid: Math.round(yearInterest),
      totalYearPayment: Math.round(yearPrincipal + yearInterest),
      endingBalance: Math.max(0, Math.round(curBalance))
    });
  }

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Financial Calculators</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <Calculator className="w-3.5 h-3.5" />
              <span>Smart Financial Planning Suite</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Interactive Loan EMI & Amortization Calculator
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Simulate monthly EMIs, visualize the interest-to-principal split, calculate prepayment savings, and inspect year-by-year amortization schedules.
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator Layout */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-7">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#0A1C44]">
                Configure Loan Parameters
              </h2>
              <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Live Calculation
              </span>
            </div>

            {/* Slider 1: Loan Amount */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Loan Amount
                </label>
                <div className="text-base sm:text-lg font-bold text-[#0A1C44] bg-[#0A1C44]/5 px-3 py-1 rounded-lg border border-[#0A1C44]/15">
                  ₹{loanAmount.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min={100000}
                max={50000000}
                step={50000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A1C44]"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>₹1 Lakh</span>
                <span>₹1 Crore</span>
                <span>₹5 Crore</span>
              </div>
            </div>

            {/* Slider 2: Interest Rate */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Interest Rate (% p.a.)
                </label>
                <div className="text-base sm:text-lg font-bold text-[#0A1C44] bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                  {interestRate}%
                </div>
              </div>
              <input
                type="range"
                min={7.0}
                max={18.0}
                step={0.05}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#E5A93C]"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>7.0% (Home Loan)</span>
                <span>10.5% (Business)</span>
                <span>18.0% (Personal)</span>
              </div>
            </div>

            {/* Slider 3: Tenure */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-semibold text-slate-700">
                  Loan Tenure (Years)
                </label>
                <div className="text-base sm:text-lg font-bold text-[#0A1C44] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                  {tenureYears} Years ({tenureYears * 12} Months)
                </div>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-slate-600">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
              </div>
            </div>

            {/* Prepayment Slider Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                  <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                  <span>Prepayment Simulator: Extra Monthly Payment</span>
                </div>
                <span className="text-xs font-bold text-amber-900">
                  +₹{extraPrepayment.toLocaleString('en-IN')}/mo
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={30000}
                step={1000}
                value={extraPrepayment}
                onChange={(e) => setExtraPrepayment(Number(e.target.value))}
                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="text-xs text-amber-950 font-medium">
                By paying an extra <strong>₹{extraPrepayment.toLocaleString('en-IN')}</strong> per month, you can save approximately <strong className="text-emerald-700">₹{interestSaved.toLocaleString('en-IN')}</strong> in total interest and close your loan <strong>{tenureSavedYears} years</strong> early!
              </div>
            </div>

          </div>

          {/* Results & Breakdown Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#060F26] text-white p-7 sm:p-8 border border-[#E5A93C]/30 shadow-xl space-y-6">
              <div className="text-center space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                  Calculated Monthly EMI
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient font-serif-display">
                  ₹{emi.toLocaleString('en-IN')}
                </div>
                <p className="text-[11px] text-slate-300">
                  Payable every month for {totalMonths} months
                </p>
              </div>

              {/* Visual Breakdown Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Principal: {principalPercent}%</span>
                  <span className="text-amber-300">Interest: {interestPercent}%</span>
                </div>
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden flex">
                  <div
                    className="bg-emerald-600 h-full"
                    style={{ width: `${principalPercent}%` }}
                  />
                  <div
                    className="bg-[#E5A93C] h-full"
                    style={{ width: `${interestPercent}%` }}
                  />
                </div>
              </div>

              {/* Numerical Breakdown Box */}
              <div className="space-y-3 pt-2 text-xs">
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Principal Loan Amount</span>
                  <span className="font-bold text-white">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Total Interest Payable</span>
                  <span className="font-bold text-amber-400">₹{totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/10">
                  <span className="text-slate-300">Total Amount Payable</span>
                  <span className="font-bold text-white text-sm">₹{totalRepayment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenApplyModal('Calculated Loan Application', `₹${loanAmount.toLocaleString('en-IN')}`)}
                className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for this Loan Structure</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Link to FOIR Checker */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-serif-display text-base font-bold text-[#0A1C44]">
                Unsure if you qualify for ₹{loanAmount.toLocaleString('en-IN')}?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Use our FOIR (Fixed Obligation to Income Ratio) Eligibility tool to see how much Banks will lend based on your salary and existing EMIs.
              </p>
              <Link
                to="/eligibility"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A1C44] hover:text-emerald-700 underline"
              >
                <span>Check Loan Eligibility Limit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Amortization Schedule Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Year-by-Year Schedule</span>
              <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                Annual Amortization Breakdown
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-mono">
              Figures rounded to nearest Rupee
            </div>
          </div>

          <div className="sm:hidden flex items-center gap-1.5 text-[11px] text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span>👉 Swipe horizontally to view full amortization schedule</span>
          </div>

          <div className="overflow-x-auto -mx-2 sm:mx-0 px-2 sm:px-0">
            <table className="min-w-[540px] w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#0A1C44] text-white">
                  <th className="py-3 px-4 font-semibold rounded-tl-lg">Year</th>
                  <th className="py-3 px-4 font-semibold">Principal Paid</th>
                  <th className="py-3 px-4 font-semibold">Interest Paid</th>
                  <th className="py-3 px-4 font-semibold">Total Yearly EMI</th>
                  <th className="py-3 px-4 font-semibold rounded-tr-lg">Ending Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {yearlySchedule.map((row) => (
                  <tr key={row.year} className="hover:bg-slate-50">
                    <td className="py-3 px-4 font-bold text-slate-800">Year {row.year}</td>
                    <td className="py-3 px-4 text-emerald-700 font-semibold">₹{row.principalPaid.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 text-[#C8102E] font-semibold">₹{row.interestPaid.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 text-slate-800">₹{row.totalYearPayment.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 font-mono font-bold text-[#0A1C44]">₹{row.endingBalance.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
