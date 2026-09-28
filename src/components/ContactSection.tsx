import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  AlertCircle,
  FileText,
  Building2,
  Navigation,
  ExternalLink,
  Check,
  Car,
  Laptop
} from 'lucide-react';
import { LeadFormData } from '../types';
import { validateLoanEnquiry, sendLoanEnquiry, TARGET_EMAIL } from '../services/emailService';

interface ContactSectionProps {
  initialLoanType?: string;
  initialAmount?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialLoanType = 'Home Loan',
  initialAmount = '',
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'location'>('details');
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    loanType: initialLoanType,
    amount: initialAmount,
    employmentType: 'salaried',
    city: '',
    pincode: '201318',
    state: 'Uttar Pradesh (Delhi NCR)',
    addressLine: '',
    serviceMode: 'branch',
    branchPreference: 'Gaur City Mall HQ (7th Floor, Sector-4)',
    message: '',
  });

  const [submittedSnapshot, setSubmittedSnapshot] = useState<LeadFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const ncrCities = [
    'Greater Noida West',
    'Noida (Sector 1-150)',
    'Greater Noida (Pari Chowk)',
    'Ghaziabad / Indirapuram',
    'Delhi NCR',
    'Gurugram (Gurgaon)',
    'Faridabad',
    'Other / Pan-India',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setErrorMsg('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    const validation = validateLoanEnquiry({
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      loanType: formData.loanType,
      amount: formData.amount,
      city: formData.city,
    });

    if (!validation.isValid) {
      setErrorMsg(validation.error || 'Please fill in all required fields.');
      // Switch back to details tab if basic info is missing
      setActiveTab('details');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendLoanEnquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        loanType: formData.loanType,
        amount: formData.amount,
        city: formData.city,
        pincode: formData.pincode,
        state: formData.state,
        addressLine: formData.addressLine,
        serviceMode: formData.serviceMode,
        branchPreference: formData.branchPreference,
        message: formData.message,
      });

      if (!result.success) {
        setIsSubmitting(false);
        setErrorMsg('Something went wrong, please try again.');
        return;
      }

      setToastMessage('Thank you! Our team will contact you shortly.');
      setSubmittedSnapshot({ ...formData });

      // Clear the form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        loanType: initialLoanType,
        amount: '',
        employmentType: 'salaried',
        city: '',
        pincode: '201318',
        state: 'Uttar Pradesh (Delhi NCR)',
        addressLine: '',
        serviceMode: 'branch',
        branchPreference: 'Gaur City Mall HQ (7th Floor, Sector-4)',
        message: '',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#0A1C44', '#E5A93C', '#10B981', '#F59E0B'],
      });
    } catch (err) {
      console.error('Error submitting loan inquiry:', err);
      setIsSubmitting(false);
      setErrorMsg('Something went wrong, please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#060F26] text-white relative overflow-hidden">
      {/* Background radial decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A1C44]/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(229,169,60,0.15)_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#E5A93C] bg-[#E5A93C]/10 px-4 py-1.5 rounded-full border border-[#E5A93C]/30">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Apply Now & Get Fast-Track Loan Sanction
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Our Senior Financial Advisor will analyze your requirement and contact you within 2 working hours.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Loan Application Form */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#E5A93C]/30 relative">
            
            {isSubmitted ? (
              <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#0A1C44]">
                  Application Received Successfully!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{submittedSnapshot?.fullName || 'Valued Applicant'}</span>. A Dedicated Relationship Manager from our Gaur City Mall desk has been assigned to your file and will contact you at{' '}
                  <span className="font-semibold text-[#0A1C44]">{submittedSnapshot?.phone}</span>.
                </p>

                {submittedSnapshot && (
                  <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-1">
                      Submitted Enquiry & Location Summary
                    </div>
                    <div className="grid grid-cols-2 gap-2.5 pt-1 text-slate-700">
                      <div>
                        <span className="text-slate-400 block text-[10px]">Full Name:</span>
                        <span className="font-semibold text-slate-900">{submittedSnapshot.fullName}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Mobile:</span>
                        <span className="font-semibold text-slate-900">{submittedSnapshot.phone}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Product:</span>
                        <span className="font-semibold text-slate-900">{submittedSnapshot.loanType}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px]">Amount:</span>
                        <span className="font-semibold text-emerald-700">{submittedSnapshot.amount}</span>
                      </div>
                      <div className="col-span-2 pt-1 border-t border-slate-100">
                        <span className="text-slate-400 block text-[10px]">Consultation Mode & Location:</span>
                        <span className="font-semibold text-[#0A1C44] block">
                          {submittedSnapshot.serviceMode === 'branch'
                            ? '🏢 In-Person Visit at Gaur City Mall Office (7th Floor)'
                            : submittedSnapshot.serviceMode === 'doorstep'
                            ? '🚗 Doorstep Document Pickup (Delhi NCR)'
                            : '💻 100% Digital / Online Sanction'}
                        </span>
                        <span className="text-slate-600 text-[11px]">
                          {submittedSnapshot.city}
                          {submittedSnapshot.pincode ? ` · PIN: ${submittedSnapshot.pincode}` : ''}
                          {submittedSnapshot.addressLine ? ` · ${submittedSnapshot.addressLine}` : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-3.5 rounded-xl bg-[#0A1C44]/5 border border-[#0A1C44]/15 text-xs text-[#0A1C44] max-w-md mx-auto font-medium">
                  Reference: SSL-NCR-{Math.floor(100000 + Math.random() * 900000)} · Direct Senior Advisor Line: +91 95486 34988
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setActiveTab('details');
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        loanType: 'Home Loan',
                        amount: '',
                        employmentType: 'salaried',
                        city: '',
                        pincode: '201318',
                        state: 'Uttar Pradesh (Delhi NCR)',
                        addressLine: '',
                        serviceMode: 'branch',
                        branchPreference: 'Gaur City Mall HQ (7th Floor, Sector-4)',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#0A1C44] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-[#0A1C44]">
                      Loan Consultation Request
                    </h3>
                    <p className="text-xs text-slate-500">
                      Zero upfront consultant fees · Direct Senior Lending Manager Review
                    </p>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Desk Open Today</span>
                  </div>
                </div>

                {/* Form Tabs: Loan Details vs Location Tab */}
                <div className="flex items-center p-1 bg-slate-100/90 rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('details')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeTab === 'details'
                        ? 'bg-white text-[#0A1C44] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <FileText className="w-4 h-4 text-[#E5A93C]" />
                    <span>1. Loan Details</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('location')}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      activeTab === 'location'
                        ? 'bg-white text-[#0A1C44] shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-emerald-600" />
                    <span>2. Location & Branch</span>
                    <span className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-extrabold uppercase rounded bg-emerald-100 text-emerald-800">
                      Gaur City HQ
                    </span>
                  </button>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* TAB 1: Loan & Personal Details */}
                {activeTab === 'details' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Full Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="95486 34988"
                            required
                            className="w-full pl-11 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@gmail.com"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                        />
                      </div>

                      {/* Product / Service */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Product / Service Requested *
                        </label>
                        <select
                          name="loanType"
                          value={formData.loanType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44] bg-white font-medium"
                        >
                          <optgroup label="Loan Services (17 Types)">
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Approx Loan Amount */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Approx. Loan Amount (₹) *
                        </label>
                        <input
                          type="text"
                          name="amount"
                          value={formData.amount}
                          onChange={handleChange}
                          placeholder="e.g. 45,00,000"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                        />
                      </div>

                      {/* Employment Type */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Employment Type *
                        </label>
                        <select
                          name="employmentType"
                          value={formData.employmentType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44] bg-white font-medium"
                        >
                          <option value="salaried">Salaried (Corporate / Govt / MNC)</option>
                          <option value="self-employed">Self-Employed Professional (Doctor, CA, etc.)</option>
                          <option value="business">Business Owner / Trader / Manufacturer</option>
                        </select>
                      </div>
                    </div>

                    {/* City / Location */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Delhi, Noida, Gurugram"
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                      />
                    </div>

                    {/* Quick Location Preview Chip */}
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-900">Meeting / Branch Preference: </span>
                          <span className="text-slate-600">
                            {formData.serviceMode === 'branch'
                              ? '🏢 In-Person at Gaur City Mall (7th Floor)'
                              : formData.serviceMode === 'doorstep'
                              ? '🚗 Doorstep Visit'
                              : '💻 100% Digital'} · {formData.city}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('location')}
                        className="text-xs font-bold text-[#0A1C44] hover:text-[#E5A93C] inline-flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                      >
                        <span>Change Location / Tab</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Additional notes */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Remarks / Property Details (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={2}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide developer name, loan tenure preference, or existing loan balance..."
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                      />
                    </div>

                    {/* Buttons row */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveTab('location')}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl border border-[#0A1C44]/20 hover:border-[#0A1C44] text-xs font-bold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MapPin className="w-4 h-4 text-emerald-600" />
                        <span>Go to Location Tab &rarr;</span>
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/25 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application for Instant Review</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* TAB 2: Location & Branch Details */}
                {activeTab === 'location' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    
                    {/* Consultation & Meeting Mode */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Choose How You Would Like to Connect *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {/* Option 1: Branch Office */}
                        <div
                          onClick={() => setFormData({ ...formData, serviceMode: 'branch' })}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            formData.serviceMode === 'branch'
                              ? 'border-[#0A1C44] bg-[#0A1C44]/5 ring-2 ring-[#0A1C44]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-xl bg-[#0A1C44] text-[#E5A93C] flex items-center justify-center">
                              <Building2 className="w-4 h-4" />
                            </div>
                            {formData.serviceMode === 'branch' && (
                              <span className="w-5 h-5 rounded-full bg-[#0A1C44] text-white flex items-center justify-center text-xs">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#0A1C44]">
                              Visit Gaur City Office
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              Unit 7126, 7th Floor, Gaur City Mall
                            </div>
                          </div>
                        </div>

                        {/* Option 2: Doorstep Visit */}
                        <div
                          onClick={() => setFormData({ ...formData, serviceMode: 'doorstep' })}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            formData.serviceMode === 'doorstep'
                              ? 'border-[#0A1C44] bg-[#0A1C44]/5 ring-2 ring-[#0A1C44]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center">
                              <Car className="w-4 h-4" />
                            </div>
                            {formData.serviceMode === 'doorstep' && (
                              <span className="w-5 h-5 rounded-full bg-[#0A1C44] text-white flex items-center justify-center text-xs">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#0A1C44]">
                              Doorstep Executive
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              Home or office visit across Delhi NCR
                            </div>
                          </div>
                        </div>

                        {/* Option 3: Online */}
                        <div
                          onClick={() => setFormData({ ...formData, serviceMode: 'online' })}
                          className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            formData.serviceMode === 'online'
                              ? 'border-[#0A1C44] bg-[#0A1C44]/5 ring-2 ring-[#0A1C44]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                              <Laptop className="w-4 h-4" />
                            </div>
                            {formData.serviceMode === 'online' && (
                              <span className="w-5 h-5 rounded-full bg-[#0A1C44] text-white flex items-center justify-center text-xs">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-xs sm:text-sm text-[#0A1C44]">
                              100% Digital / Remote
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                              Instant sanction via WhatsApp / Phone
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick City Chips */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Select City / NCR Region *
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {ncrCities.map((cityName) => (
                          <button
                            key={cityName}
                            type="button"
                            onClick={() => {
                              setErrorMsg('');
                              setFormData({
                                ...formData,
                                city: cityName === 'Other / Pan-India' ? '' : cityName,
                              });
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                              formData.city === cityName || (cityName === 'Other / Pan-India' && !ncrCities.slice(0, 7).includes(formData.city))
                                ? 'bg-[#0A1C44] text-[#E5A93C] border-[#0A1C44] shadow-sm'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                            }`}
                          >
                            {cityName}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* City Input */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          City / District Name *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Greater Noida West"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                        />
                      </div>

                      {/* PIN Code */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Area PIN Code
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          maxLength={6}
                          value={formData.pincode || ''}
                          onChange={handleChange}
                          placeholder="e.g. 201318"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                        />
                      </div>
                    </div>

                    {/* Address Line / Landmark */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Locality / Society / Nearest Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        name="addressLine"
                        value={formData.addressLine || ''}
                        onChange={handleChange}
                        placeholder="e.g. Gaur City 2, Cherry County, Sector 4, TechZone 4..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
                      />
                    </div>

                    {/* Branch Office Details Card */}
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2.5 text-xs text-amber-950">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 font-bold text-[#0A1C44]">
                          <Building2 className="w-4 h-4 text-[#E5A93C]" />
                          <span>Shree Services Corporate Headquarters</span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#E5A93C]/20 text-[#0A1C44]">
                          Greater Noida West
                        </span>
                      </div>
                      <div className="text-slate-700 space-y-1">
                        <p>
                          <strong>Address:</strong> Unit 7126, 7th Floor, Office Space, Gaur City Mall, Sector-IV, Greater Noida West, UP 201318
                        </p>
                        <p>
                          <strong>Timing:</strong> Monday to Saturday: 9:30 AM – 7:30 PM (Sunday by Prior Appointment)
                        </p>
                        <p className="text-slate-500 text-[11px]">
                          <strong>Metro Route:</strong> 10 mins from Noida Electronic City Metro Station (Blue Line) via Gaur Chowk.
                        </p>
                      </div>
                      <div className="pt-1 flex flex-wrap items-center gap-2">
                        <a
                          href="https://maps.google.com/?q=Gaur+City+Mall+Greater+Noida+West"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 font-bold text-[#0A1C44] hover:bg-amber-100 transition-colors shadow-2xs"
                        >
                          <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Get Directions in Google Maps</span>
                          <ExternalLink className="w-3 h-3 opacity-60" />
                        </a>
                        <a
                          href="tel:+919548634988"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A1C44] text-white font-bold hover:bg-[#060F26] transition-colors"
                        >
                          <Phone className="w-3 h-3 text-[#E5A93C]" />
                          <span>Call Branch: +91 95486 34988</span>
                        </a>
                      </div>
                    </div>

                    {/* Action buttons on Location tab */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setActiveTab('details')}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                      >
                        &larr; Back to Loan Details
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 w-full py-3.5 px-6 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/25 cursor-pointer disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span>Submitting Application...</span>
                        ) : (
                          <>
                            <span>Submit Application with Location Details</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                )}

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>256-Bit SSL Encrypted. Direct submission to Senior Officer Akash Bhardwaj.</span>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Office Location, Phone Links, Map Embed */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.05] border border-white/10 backdrop-blur-md space-y-6">
              <div>
                <h3 className="text-xl font-bold font-serif-display text-white">
                  Shree Services Pvt Ltd
                </h3>
                <p className="text-xs text-[#E5A93C] mt-0.5">
                  Your Financial Partner for a Better Tomorrow
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <MapPin className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Corporate Office:</span>
                  7126, 7th Floor, Office Space, Gaur City Mall, Sector-IV, Greater Noida West, Uttar Pradesh 201318
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Phone className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Call Our Advisors:</span>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                    <a
                      href="tel:+919548634988"
                      className="font-bold text-[#E5A93C] hover:text-white hover:underline transition-colors"
                    >
                      +91 95486 34988
                    </a>
                    <span className="text-white/30">|</span>
                    <a
                      href="tel:+917838289636"
                      className="font-bold text-[#E5A93C] hover:text-white hover:underline transition-colors"
                    >
                      +91 78382 89636
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Mail className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Official Email:</span>
                  <a
                    href="mailto:shrifinanceservicess@gmail.com"
                    className="font-medium text-amber-200 hover:underline transition-colors break-all"
                  >
                    shrifinanceservicess@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Timings */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <Clock className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Office Working Hours:</span>
                  <span>Monday to Saturday: 9:30 AM – 7:30 PM</span>
                  <span className="block text-[11px] text-slate-400 mt-0.5">Sunday: Prior Appointment Only</span>
                </div>
              </div>

              {/* WhatsApp direct chat link */}
              <div className="pt-2">
                <a
                  href="https://wa.me/919548634988?text=Hello%20Shree%20Services,%20I%20would%20like%20to%20enquire%20about%20a%20loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 95486 34988)</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl h-64 sm:h-72 w-full relative">
              <iframe
                title="Shree Services Pvt Ltd Gaur City Mall Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7388147171444!2d77.42861217596048!3d28.607593285223307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefa8980b1b9d%3A0x6a0a03002f2324f!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
