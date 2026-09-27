import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'What is the minimum CIBIL score required for loan approval?',
      answer:
        'A CIBIL credit score of 700 and above is considered healthy and qualifies you for prime interest rates starting at 8.35% with leading public and private banks. However, for scores between 650 and 700, or cases with past minor settlements, we partner with specialized NBFCs to structure customized approvals.',
      category: 'General',
    },
    {
      id: 'faq-2',
      question: 'How does Shree Services facilitate loans without extra charges?',
      answer:
        'Shree Services Pvt Ltd operates as an authorized Direct Selling Associate (DSA) and channel partner with 120+ leading Banks & NBFCs. We receive channel partner compensation directly from the financial institutions upon disbursement. We maintain 100% transparency with zero hidden consulting commissions.',
      category: 'General',
    },
    {
      id: 'faq-3',
      question: 'Can my business secure a loan without pledging property under CGTMSE?',
      answer:
        'Yes! Under the government’s CGTMSE scheme, eligible Micro and Small Enterprises can secure up to ₹5 Crore in collateral-free term loans or working capital limits. The Credit Guarantee Fund Trust provides sovereign guarantee cover up to 85% to the lending bank, removing the requirement for residential or commercial property mortgages.',
      category: 'Govt Schemes',
    },
    {
      id: 'faq-4',
      question: 'What is the subsidy disbursement timeline for PMEGP loans?',
      answer:
        'Under PMEGP, once your bank sanctions and disburses the loan, the subsidy (15% to 35% depending on rural/urban location and category) is deposited into a Term Deposit Receipt (TDR) account by KVIC. After successful operation of the enterprise for 3 years without default, the subsidy is credited against your loan balance.',
      category: 'Govt Schemes',
    },
    {
      id: 'faq-5',
      question: 'What is the turnaround time for Home Loan approval in Greater Noida West?',
      answer:
        'For approved residential developer projects in Greater Noida West (Gaur City, Noida Extension, Sector 1-16), in-principle approval takes 24 to 48 hours once KYC and income docs are submitted. Final legal and technical clearance and disbursement take approximately 5 to 7 working days.',
      category: 'Home Loan',
    },
    {
      id: 'faq-6',
      question: 'What documents are required to initiate the loan evaluation?',
      answer:
        'For Salaried borrowers: PAN Card, Aadhaar Card, last 3 months salary slips, 6 months bank statement, and Form 16. For Self-Employed & Business owners: PAN, Aadhaar, 2 years ITR with computation & audited balance sheets, 12 months bank statements, and GST returns. Property papers are collected for Home Loan or LAP.',
      category: 'Business',
    },
  ];

  const [openId, setOpenId] = useState<string | null>(faqs[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Home Loan', 'Govt Schemes', 'Business'];

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Clear answers to common questions about eligibility, documentation, bank tie-ups, and subsidy processing.
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0A1C44] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0A1C44]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-white border border-slate-200 transition-all duration-300 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A1C44]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#0A1C44] font-serif-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#0A1C44]/10 flex items-center justify-center text-[#0A1C44] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#0A1C44] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0A1C44]/5 border border-[#0A1C44]/15 text-center space-y-2">
          <p className="text-sm font-bold text-[#0A1C44]">Still have a specific query regarding your loan profile?</p>
          <p className="text-xs text-slate-600">
            Speak directly with our Chief Credit Advisor in Gaur City Mall: <a href="tel:+919548634988" className="font-bold text-[#0A1C44] hover:underline">+91 95486 34988</a>
          </p>
        </div>

      </div>
    </section>
  );
};
