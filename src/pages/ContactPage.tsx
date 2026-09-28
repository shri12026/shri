import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building,
  Navigation,
  MessageSquare,
  ShieldCheck,
  Calendar,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ShreeLogo } from '../components/ShreeLogo';
import { sendLoanEnquiry } from '../services/emailService';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterest: 'Home Loan',
    loanAmount: '₹25,00,000 - ₹50,00,000',
    preferredTime: 'Morning (10 AM - 1 PM)',
    city: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submittedSnapshot, setSubmittedSnapshot] = useState<typeof formData | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMsg('Please enter your full name (minimum 2 characters).');
      return;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.city.trim()) {
      setErrorMsg('Please enter your City / Location.');
      return;
    }

    setIsSubmitting(true);
    try {
      await sendLoanEnquiry({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        loanType: formData.serviceInterest,
        amount: formData.loanAmount,
        city: formData.city,
        message: `Preferred Callback: ${formData.preferredTime}. Notes: ${formData.notes || 'None'}`,
      });

      setSubmittedSnapshot({ ...formData });
      setSubmitted(true);
      setIsSubmitting(false);

      // Clear the form fields
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceInterest: 'Home Loan',
        loanAmount: '₹25,00,000 - ₹50,00,000',
        preferredTime: 'Morning (10 AM - 1 PM)',
        city: '',
        notes: '',
      });

      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 }, colors: ['#0A1C44', '#E5A93C', '#10B981'] });
    } catch {
      setIsSubmitting(false);
      setErrorMsg('Something went wrong, please try again.');
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Contact & Branch Desk</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gaur City Mall · Greater Noida West</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch with Our Loan Specialists
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Visit our corporate office for an in-person file consultation or connect directly with our senior lending team via phone or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info & Form */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Address Card */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center shadow-md shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#0A1C44]">
                    Corporate Headquarters
                  </h3>
                  <span className="text-xs text-emerald-700 font-semibold">
                    Shree Services Pvt Ltd
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Registered Office:</span>
                    <span>7126, 7th Floor, Office Space, Gaur City Mall, Sector-IV, Greater Noida West, Uttar Pradesh - 201318</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Helplines:</span>
                    <div className="space-y-0.5">
                      <a href="tel:+919548634988" className="hover:text-[#0A1C44] block font-mono font-medium">
                        +91 95486 34988
                      </a>
                      <a href="tel:+917838289636" className="hover:text-[#0A1C44] block font-mono font-medium">
                        +91 78382 89636
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Email:</span>
                    <a href="mailto:shrifinanceservicess@gmail.com" className="hover:text-[#0A1C44] font-mono break-all">
                      shrifinanceservicess@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Advisory Desk Hours:</span>
                    <span>Monday – Saturday: 9:30 AM to 7:00 PM</span>
                    <span className="block text-slate-400 text-xs">Sunday: Prior Appointment Only</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-4">
                <a
                  href="https://wa.me/919548634988?text=Hello%20Shree%20Services%2C%20I%20would%20like%20to%20consult%20regarding%20a%20loan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 95486 34988)</span>
                </a>
              </div>
            </div>

            {/* Metro & Driving Directions Note */}
            <div className="p-6 rounded-3xl bg-[#0A1C44]/5 border border-[#0A1C44]/15 text-xs text-slate-700 space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#0A1C44]">
                <Navigation className="w-4 h-4 text-[#E5A93C]" />
                <span>How to Reach Gaur City Mall</span>
              </div>
              <p className="leading-relaxed">
                • <strong>From Noida Electronic City Metro (Blue Line):</strong> 10-12 minutes by auto or cab via Gaur Chowk (Kisan Chowk).<br />
                • <strong>From Sector 52 Noida Metro:</strong> Approx 15 minutes drive.<br />
                • <strong>Parking:</strong> Ample underground multi-level parking available inside Gaur City Mall. Take Tower / Office Lift to 7th Floor, Unit 7126.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Priority Desk</span>
              <h2 className="font-serif-display text-2xl font-bold text-[#0A1C44]">
                Book an In-Person or Phone Consultation
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Zero processing fees. A senior loan officer will review your documents and verify feasibility.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Verma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setErrorMsg('');
                        setFormData({ ...formData, fullName: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile"
                      value={formData.phone}
                      onChange={(e) => {
                        setErrorMsg('');
                        setFormData({ ...formData, phone: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => {
                        setErrorMsg('');
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Product / Service Needed</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] bg-white"
                    >
                      <optgroup label="Loan Services (17 Types)">
                        <option>Home Loan</option>
                        <option>Personal Loan</option>
                        <option>Business Loan</option>
                        <option>Loan Against Property (LAP)</option>
                        <option>Gold Loan</option>
                        <option>Vehicle Loan (Car, Bike, CV)</option>
                        <option>Education Loan</option>
                        <option>MSME Loan</option>
                        <option>MUDRA Loan (Shishu/Kishor/Tarun)</option>
                        <option>Working Capital Loan (OD/CC)</option>
                        <option>PMEGP Govt Subsidy Loan</option>
                        <option>Machinery Loan</option>
                        <option>Tractor Loan</option>
                        <option>Construction Equipment Loan</option>
                        <option>Startup Loan</option>
                        <option>Mortgage Loan</option>
                        <option>Project Finance</option>
                      </optgroup>

                      <optgroup label="Credit Card Services (7 Types)">
                        <option>Lifetime Free Credit Card</option>
                        <option>Premium Credit Card</option>
                        <option>Business Credit Card</option>
                        <option>Cashback Credit Card</option>
                        <option>Fuel Credit Card</option>
                        <option>Travel Credit Card</option>
                        <option>Shopping Credit Card</option>
                      </optgroup>

                      <optgroup label="Insurance Services (8 Plans)">
                        <option>Life Insurance</option>
                        <option>Health Insurance</option>
                        <option>Motor Insurance (Car, Bike, CV)</option>
                        <option>Term Insurance</option>
                        <option>Personal Accident Insurance</option>
                        <option>Travel Insurance</option>
                        <option>Home Insurance</option>
                        <option>Commercial Insurance</option>
                      </optgroup>

                      <optgroup label="Business Services (8 Registrations)">
                        <option>GST Registration</option>
                        <option>GST Filing</option>
                        <option>Udyam Registration</option>
                        <option>PAN / TAN Services</option>
                        <option>FSSAI Registration</option>
                        <option>Digital Signature (DSC)</option>
                        <option>Trade License</option>
                        <option>Shop & Establishment Registration</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Estimated Loan Amount</label>
                    <select
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] bg-white"
                    >
                      <option>Under ₹10 Lakhs</option>
                      <option>₹10 Lakhs - ₹25 Lakhs</option>
                      <option>₹25 Lakhs - ₹50 Lakhs</option>
                      <option>₹50 Lakhs - ₹1 Crore</option>
                      <option>₹1 Crore - ₹5 Crores</option>
                      <option>Above ₹5 Crores</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Preferred Time for Callback</label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C] bg-white"
                    >
                      <option>Morning (10:00 AM – 1:00 PM)</option>
                      <option>Afternoon (1:00 PM – 4:00 PM)</option>
                      <option>Evening (4:00 PM – 7:00 PM)</option>
                      <option>Urgent / Immediate Callback</option>
                    </select>
                  </div>
                </div>

                {/* Full-width City / Location input after Product and Amount */}
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi, Noida, Gurugram"
                    value={formData.city}
                    onChange={(e) => {
                      setErrorMsg('');
                      setFormData({ ...formData, city: e.target.value });
                    }}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">Any Specific Requirement / Property Details</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the property location, employment status, or any existing loans..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#E5A93C] focus:ring-1 focus:ring-[#E5A93C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry to Loan Officer'}</span>
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 text-emerald-950">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif-display text-xl font-bold text-emerald-900">
                  Appointment Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{submittedSnapshot?.fullName}</strong>. A dedicated relationship manager from our Gaur City Mall desk will contact you at <strong>{submittedSnapshot?.phone}</strong> ({submittedSnapshot?.city}) during {submittedSnapshot?.preferredTime}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMsg('');
                    }}
                    className="text-xs font-semibold text-emerald-700 underline cursor-pointer"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-2">
            <div>
              <h3 className="font-serif-display text-lg font-bold text-[#0A1C44]">
                Find Us on Google Maps
              </h3>
              <p className="text-xs text-slate-500">
                Gaur City Mall, Sector-IV, Greater Noida West, Uttar Pradesh 201318
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Gaur+City+Mall+Greater+Noida+West"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/20 transition-colors w-fit"
            >
              <span>Open in Google Maps App</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 h-96 w-full">
            <iframe
              title="Shree Services Pvt Ltd - Gaur City Mall Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7431201524317!2d77.42767017618992!3d28.57747808608823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefcba4a2ff43%3A0xc3f1dcba065fc622!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
