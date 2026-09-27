import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  Landmark,
  ShieldCheck,
  Award,
  Search,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

interface PartnersPageProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const PartnersPage: React.FC<PartnersPageProps> = ({ onOpenApplyModal }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'psu' | 'private' | 'nbfc' | 'hfc'>('all');

  const partners = [
    // PSU
    { name: 'State Bank of India (SBI)', category: 'psu', type: 'Public Sector Bank', highlight: 'Lowest Home Loan Rates from 8.50%', tag: 'PSU Titan' },
    { name: 'Punjab National Bank (PNB)', category: 'psu', type: 'Public Sector Bank', highlight: 'High Turnaround for MSME Schemes', tag: 'PSU' },
    { name: 'Bank of Baroda (BOB)', category: 'psu', type: 'Public Sector Bank', highlight: 'Zero Prepayment Penalty on Floating', tag: 'PSU' },
    { name: 'Canara Bank', category: 'psu', type: 'Public Sector Bank', highlight: 'Fast Disbursals for PMEGP & CGTMSE', tag: 'PSU' },
    { name: 'Union Bank of India', category: 'psu', type: 'Public Sector Bank', highlight: 'Competitive LAP & Mortgage Rates', tag: 'PSU' },
    { name: 'Central Bank of India', category: 'psu', type: 'Public Sector Bank', highlight: 'Aggressive Agriculture & SME Credit', tag: 'PSU' },
    { name: 'Indian Bank', category: 'psu', type: 'Public Sector Bank', highlight: 'Subsidized Priority Sector Lending', tag: 'PSU' },
    { name: 'Bank of Maharashtra', category: 'psu', type: 'Public Sector Bank', highlight: 'Express Housing Finance Approval', tag: 'PSU' },

    // Private
    { name: 'HDFC Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Largest Private Mortgage Book in India', tag: 'Private Leader' },
    { name: 'ICICI Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Instant Digital Approvals in 24 Hrs', tag: 'Private' },
    { name: 'Axis Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Attractive Balance Transfer Offers', tag: 'Private' },
    { name: 'Kotak Mahindra Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Low Interest Rates for 750+ CIBIL', tag: 'Private' },
    { name: 'IndusInd Bank', category: 'private', type: 'Private Sector Bank', highlight: 'High Unsecured Business Loan Limits', tag: 'Private' },
    { name: 'IDFC FIRST Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Minimal Documentation & Fast Disbursal', tag: 'Private' },
    { name: 'Federal Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Convenient NRI & Resident Mortgages', tag: 'Private' },
    { name: 'YES Bank', category: 'private', type: 'Private Sector Bank', highlight: 'Commercial Term & Equipment Finance', tag: 'Private' },

    // HFC
    { name: 'LIC Housing Finance (LIC HFL)', category: 'hfc', type: 'Housing Finance Co.', highlight: 'Sovereign Trust with 30-Year Tenures', tag: 'HFC Leader' },
    { name: 'Tata Capital Housing Finance', category: 'hfc', type: 'Housing Finance Co.', highlight: 'Flexible Self-Employed Eligibility', tag: 'HFC' },
    { name: 'PNB Housing Finance', category: 'hfc', type: 'Housing Finance Co.', highlight: 'High LTV on Residential Properties', tag: 'HFC' },
    { name: 'Aditya Birla Housing Finance', category: 'hfc', type: 'Housing Finance Co.', highlight: 'Custom Structures for Non-Standard Income', tag: 'HFC' },
    { name: 'Piramal Capital & Housing', category: 'hfc', type: 'Housing Finance Co.', highlight: 'Affordable Housing & Tier 2/3 Focus', tag: 'HFC' },
    { name: 'GIC Housing Finance', category: 'hfc', type: 'Housing Finance Co.', highlight: 'Low Processing Charges & Simple Terms', tag: 'HFC' },

    // NBFC
    { name: 'Bajaj Finserv', category: 'nbfc', type: 'Premier NBFC', highlight: 'Fastest 24-Hour Cash Disbursal', tag: 'NBFC Giant' },
    { name: 'Tata Capital Financial Services', category: 'nbfc', type: 'Premier NBFC', highlight: 'Comprehensive SME & Term Lending', tag: 'NBFC' },
    { name: 'L&T Finance', category: 'nbfc', type: 'Premier NBFC', highlight: 'Machinery & Equipment Capital Loans', tag: 'NBFC' },
    { name: 'Poonawalla Fincorp', category: 'nbfc', type: 'Premier NBFC', highlight: 'Zero Hidden Charges & Transparent Fees', tag: 'NBFC' },
    { name: 'Hero FinCorp', category: 'nbfc', type: 'Premier NBFC', highlight: 'Rapid Auto & Vehicle Financing', tag: 'NBFC' },
    { name: 'Godrej Capital', category: 'nbfc', type: 'Premier NBFC', highlight: 'Innovative Mortgage & Business Credit', tag: 'NBFC' },
    { name: 'Cholamandalam Investment & Finance', category: 'nbfc', type: 'Premier NBFC', highlight: 'Commercial Vehicle & LAP Specialists', tag: 'NBFC' },
    { name: 'Shriram Finance', category: 'nbfc', type: 'Premier NBFC', highlight: 'Micro & Small Enterprise Champion', tag: 'NBFC' },
  ];

  const filtered = partners.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.highlight.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === 'all' || p.category === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Banking Partners</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <Landmark className="w-3.5 h-3.5" />
              <span>Empanelled Institutional Network</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              120+ Partner Banks & NBFCs
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We maintain direct official DSA tie-ups with India’s leading public sector banks, private institutions, and housing finance corporations to guarantee our clients the lowest interest rates and quickest sanction turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Lenders (120+)' },
              { id: 'psu', label: 'Public Sector' },
              { id: 'private', label: 'Private Banks' },
              { id: 'hfc', label: 'Housing Finance' },
              { id: 'nbfc', label: 'NBFCs & Fintech' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[40px] ${
                  activeTab === tab.id
                    ? 'bg-[#0A1C44] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 bg-slate-50 md:bg-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search bank name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
            />
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((bank, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E5A93C] transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1C44]/5 text-[#0A1C44] flex items-center justify-center font-bold text-xs group-hover:bg-[#0A1C44] group-hover:text-[#E5A93C] transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {bank.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif-display text-base font-bold text-[#0A1C44] group-hover:text-[#112C6E] transition-colors">
                    {bank.name}
                  </h3>
                  <span className="text-xs text-slate-500 font-medium block mt-0.5">
                    {bank.type}
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-700 font-medium">
                  ✦ {bank.highlight}
                </div>
              </div>

              <button
                onClick={() => onOpenApplyModal(`Loan Application with ${bank.name}`)}
                className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44] hover:text-white border border-[#0A1C44]/20 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Check Rates with {bank.name.split(' ')[0]}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Channel Partner Advantage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Channel Partner Advantage</span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0A1C44]">
              Why Apply via Shree Services Instead of a Single Bank Branch?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">
                1
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Unbiased Multi-Bank Comparison</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single branch manager will only sell their bank's scheme. We evaluate 120+ options to find the lowest ROI, lowest processing fee, and highest valuation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">
                2
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Higher Sanction Probability</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If Bank A declines a property or income profile, we immediately route the application to Bank B or C without multiple hard credit inquiries hurting your score.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center font-bold">
                3
              </div>
              <h4 className="font-serif-display text-base font-bold text-[#0A1C44]">Zero Borrower Service Fees</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                As an authorized Institutional DSA, we are compensated directly by the lending bank upon successful disbursal. We charge ₹0 to the applicant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
