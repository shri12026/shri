import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { LeadFormData } from '../types';
import { ShreeLogo } from './ShreeLogo';
import { validateLoanEnquiry, sendLoanEnquiry, TARGET_EMAIL } from '../services/emailService';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultAmount?: string;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Home Loan & Property Finance',
  defaultAmount = '',
}) => {
  const initialFormState: LeadFormData = {
    fullName: '',
    phone: '',
    email: '',
    loanType: defaultService || 'Home Loan & Property Finance',
    amount: defaultAmount,
    employmentType: 'salaried',
    city: '',
    message: '',
  };

  const [formData, setFormData] = useState<LeadFormData>(initialFormState);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<LeadFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({
        ...prev,
        loanType: defaultService,
        amount: defaultAmount || prev.amount,
      }));
    }
  }, [defaultService, defaultAmount, isOpen]);

  // Clear toast after 6 seconds
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // 1. Validate all required fields
    const validation = validateLoanEnquiry({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      loanType: formData.loanType,
      amount: formData.amount,
      city: formData.city,
    });

    if (!validation.isValid) {
      setErrorMsg(validation.error || 'Please fill in all required fields accurately.');
      return;
    }

    setIsSubmitting(true);

    try {
      // 2. Dispatch email to akashbhardwaj@shreeservicespvtltd.in
      const result = await sendLoanEnquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        loanType: formData.loanType,
        amount: formData.amount,
        city: formData.city,
        message: formData.message,
      });

      if (!result.success) {
        setIsSubmitting(false);
        setErrorMsg('Something went wrong, please try again.');
        return;
      }

      // 3. Save snapshot for confirmation screen
      setSubmittedSnapshot({ ...formData });

      // 4. Show success message/toast
      const successMsg = 'Thank you! Our team will contact you shortly.';
      setToastMessage(successMsg);

      // 5. Clear the form fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        loanType: defaultService || 'Home Loan & Property Finance',
        amount: '',
        employmentType: 'salaried',
        city: '',
        message: '',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Confetti celebration
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.6 },
        colors: ['#0A1C44', '#E5A93C', '#10B981'],
      });
    } catch (err) {
      console.error('Error during form submission:', err);
      setIsSubmitting(false);
      setErrorMsg('Something went wrong, please try again.');
    }
  };

  const handleResetForNewEnquiry = () => {
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Success Toast */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2.5 px-5 py-3 rounded-full bg-emerald-600 text-white font-medium text-xs sm:text-sm shadow-xl shadow-emerald-900/30 animate-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="ml-2 hover:opacity-75 transition-opacity text-emerald-100"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div
        className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto overscroll-contain rounded-2xl sm:rounded-3xl bg-white text-slate-900 p-5 sm:p-8 shadow-2xl border border-[#E5A93C]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gold-gradient" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                Application Received
              </span>
              <h3 className="text-2xl font-serif-display font-bold text-[#0A1C44]">
                Thank you! Our team will contact you shortly.
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Your sanction file details for{' '}
              <span className="font-semibold text-slate-900">
                {submittedSnapshot?.loanType || 'Home Loan'}
              </span>{' '}
              have been transmitted directly to Senior Financial Officer{' '}
              <span className="font-semibold text-[#0A1C44]">Akash Bhardwaj</span> (
              <span className="text-slate-700 underline">{TARGET_EMAIL}</span>).
            </p>

            {submittedSnapshot && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1">
                  Submitted Enquiry Summary
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1 text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Full Name:</span>
                    <span className="font-semibold text-slate-900">{submittedSnapshot.fullName}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Mobile:</span>
                    <span className="font-semibold text-slate-900">{submittedSnapshot.phone}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Email:</span>
                    <span className="font-semibold text-slate-900 break-all">{submittedSnapshot.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Requested Amount:</span>
                    <span className="font-semibold text-emerald-700">{submittedSnapshot.amount}</span>
                  </div>
                  <div className="col-span-2 pt-1 border-t border-slate-100">
                    <span className="text-slate-400 block text-[10px]">City / Location:</span>
                    <span className="font-semibold text-slate-900">{submittedSnapshot.city}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="p-3 rounded-xl bg-[#0A1C44]/5 text-xs text-[#0A1C44] font-medium border border-[#0A1C44]/15">
              Direct Helpline: +91 95486 34988 · Office: Gaur City Mall, Greater Noida West
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleResetForNewEnquiry}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
              >
                Submit Another Enquiry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0A1C44] hover:bg-[#060F26] transition-all cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-start justify-between gap-4 pb-2 border-b border-slate-100">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                  Free Instant Evaluation
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-[#0A1C44]">
                  Apply for {formData.loanType || 'Home Loan & Property Finance'}
                </h3>
                <p className="text-xs text-slate-500">
                  120+ Banks & NBFCs · Guaranteed Lowest ROI · Zero Advance Fees
                </p>
              </div>
              <div className="shrink-0 hidden sm:block">
                <ShreeLogo size="sm" variant="dark" showText={false} />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{errorMsg}</span>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => {
                    setErrorMsg('');
                    setFormData({ ...formData, fullName: e.target.value });
                  }}
                  placeholder="e.g. Amit Saxena"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => {
                        setErrorMsg('');
                        setFormData({ ...formData, phone: e.target.value });
                      }}
                      placeholder="95486 34988"
                      className="w-full pl-11 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setErrorMsg('');
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    placeholder="name@email.com"
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Product / Service Requested *
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => {
                      setErrorMsg('');
                      setFormData({ ...formData, loanType: e.target.value });
                    }}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  >
                    <optgroup label="Loan Services (17 Offerings)">
                      <option value="Home Loan & Property Finance">Home Loan & Property Finance</option>
                      <option value="Home Loan">Home Loan</option>
                      <option value="Personal Loan">Personal Loan</option>
                      <option value="Business Loan">Business Loan</option>
                      <option value="Loan Against Property (LAP)">Loan Against Property (LAP)</option>
                      <option value="Gold Loan">Gold Loan</option>
                      <option value="Vehicle Loan (Car, Bike, CV)">Vehicle Loan (Car, Bike, CV)</option>
                      <option value="Education Loan">Education Loan</option>
                      <option value="MSME Loan">MSME Loan</option>
                      <option value="MUDRA Loan (Shishu, Kishore & Tarun)">MUDRA Loan (Shishu, Kishore & Tarun)</option>
                      <option value="Working Capital Loan (OD/CC)">Working Capital Loan (OD/CC)</option>
                      <option value="PMEGP Loan">PMEGP Loan (Govt Subsidy)</option>
                      <option value="Machinery Loan">Machinery Loan</option>
                      <option value="Tractor Loan">Tractor Loan</option>
                      <option value="Construction Equipment Loan">Construction Equipment Loan</option>
                      <option value="Startup Loan">Startup Loan</option>
                      <option value="Mortgage Loan">Mortgage Loan</option>
                      <option value="Project Finance">Project Finance</option>
                    </optgroup>

                    <optgroup label="Credit Card Services (7 Types)">
                      <option value="Lifetime Free Credit Card">Lifetime Free Credit Card</option>
                      <option value="Premium Credit Card">Premium Credit Card</option>
                      <option value="Business Credit Card">Business Credit Card</option>
                      <option value="Cashback Credit Card">Cashback Credit Card</option>
                      <option value="Fuel Credit Card">Fuel Credit Card</option>
                      <option value="Travel Credit Card">Travel Credit Card</option>
                      <option value="Shopping Credit Card">Shopping Credit Card</option>
                    </optgroup>

                    <optgroup label="Insurance Services (8 Plans)">
                      <option value="Life Insurance">Life Insurance</option>
                      <option value="Health Insurance">Health Insurance</option>
                      <option value="Motor Insurance (Car, Bike, CV)">Motor Insurance (Car, Bike, CV)</option>
                      <option value="Term Insurance">Term Insurance</option>
                      <option value="Personal Accident Insurance">Personal Accident Insurance</option>
                      <option value="Travel Insurance">Travel Insurance</option>
                      <option value="Home Insurance">Home Insurance</option>
                      <option value="Commercial Insurance">Commercial Insurance</option>
                    </optgroup>

                    <optgroup label="Business Services (8 Registrations)">
                      <option value="GST Registration">GST Registration</option>
                      <option value="GST Filing">GST Filing</option>
                      <option value="Udyam Registration">Udyam Registration</option>
                      <option value="PAN / TAN Services">PAN / TAN Services</option>
                      <option value="FSSAI Registration">FSSAI Registration</option>
                      <option value="Digital Signature (DSC)">Digital Signature (DSC)</option>
                      <option value="Trade License">Trade License</option>
                      <option value="Shop & Establishment Registration">Shop & Establishment Registration</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Required Amount (₹) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.amount}
                    onChange={(e) => {
                      setErrorMsg('');
                      setFormData({ ...formData, amount: e.target.value });
                    }}
                    placeholder="e.g. 50,00,000"
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  City / Location *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => {
                    setErrorMsg('');
                    setFormData({ ...formData, city: e.target.value });
                  }}
                  placeholder="e.g. Delhi, Noida, Gurugram"
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#E5A93C]/25 cursor-pointer mt-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Submitting Your File...</span>
              ) : (
                <>
                  <span>Request Instant Bank Sanction</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>We never share your personal data with unsolicited third parties.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
