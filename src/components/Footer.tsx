import React from 'react';
import { Link } from 'react-router-dom';
import { ShreeLogo } from './ShreeLogo';
import { Phone, Mail, MapPin, ShieldCheck, Heart, ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';

interface FooterProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenApplyModal }) => {
  return (
    <footer className="bg-[#060F26] text-slate-400 text-xs border-t border-[#E5A93C]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Wordmark & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <ShreeLogo size="lg" variant="light" />
            </Link>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2">
              Shree Services Pvt Ltd — <strong>500+ Financial &amp; Business Services Under One Roof</strong>. One-stop solution for 17+ Loans, 7+ Credit Cards, 8+ Insurance Plans, and 8+ Business Registrations.
            </p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-amber-200/90 text-xs space-y-1.5">
              <div className="font-serif italic text-amber-300 font-bold text-sm">
                &ldquo;Sapno ko Sahi Financial Direction!&rdquo;
              </div>
              <div className="text-white text-xs font-semibold">
                Trusted Service, Brighter Future · Gaur City Mall, Greater Noida
              </div>
              <div className="text-[11px] text-[#E5A93C] pt-1 font-mono">
                Partner Network: 120+ Scheduled Banks &amp; NBFCs
              </div>
            </div>
          </div>

          {/* Col 2: Quick Navigation & Dedicated Action Buttons */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-display">
              Quick Portfolios
            </h4>

            {/* Quick Priority Action Buttons: Eligibility & Partners */}
            <div className="space-y-2">
              <Link
                to="/eligibility"
                className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-gradient-to-r from-[#E5A93C]/20 to-[#E5A93C]/10 hover:from-[#E5A93C]/30 hover:to-[#E5A93C]/20 border border-[#E5A93C]/40 text-amber-200 hover:text-white text-xs font-bold transition-all shadow-sm group"
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  Check Eligibility
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E5A93C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-[#0A1C44] hover:bg-[#112C6E] border border-[#E5A93C]/30 text-slate-200 hover:text-white text-xs font-bold transition-all shadow-sm group"
              >
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                  All 500+ Services
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#E5A93C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            <ul className="space-y-2 pt-1">
              <li>
                <Link to="/about" className="hover:text-[#E5A93C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors font-medium text-slate-300">
                  17+ Loan Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors font-medium text-slate-300">
                  7+ Credit Cards
                </Link>
              </li>
              <li>
                <Link to="/government-schemes" className="hover:text-[#E5A93C] transition-colors font-medium text-slate-300">
                  Govt Schemes &amp; Subsidies
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="hover:text-[#E5A93C] transition-colors">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E5A93C] transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Loan Services & Credit Cards */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-display">
              Loans &amp; Credit Cards
            </h4>
            <ul className="space-y-1.5 text-[11px]">
              <li>
                <Link to="/services/home-loan" className="hover:text-[#E5A93C] transition-colors block">
                  • Home Loan (Starting 8.35%*)
                </Link>
              </li>
              <li>
                <Link to="/services/personal-loan" className="hover:text-[#E5A93C] transition-colors block">
                  • Personal &amp; Instant Cash Loan
                </Link>
              </li>
              <li>
                <Link to="/services/business-loan" className="hover:text-[#E5A93C] transition-colors block">
                  • Business &amp; Working Capital (OD/CC)
                </Link>
              </li>
              <li>
                <Link to="/services/loan-against-property" className="hover:text-[#E5A93C] transition-colors block">
                  • Loan Against Property (LAP)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Gold Loan &amp; Vehicle Loans
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Machinery &amp; Tractor Loans
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Lifetime Free Credit Card
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Premium &amp; Airport Lounge Cards
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Cashback &amp; Fuel Surcharge Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Insurance, Business Services & Office */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-serif-display">
              Insurance &amp; Business
            </h4>
            <ul className="space-y-1.5 text-[11px] mb-3">
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Life &amp; Term Insurance (up to ₹5 Cr)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Health &amp; Motor Insurance (Car/Bike/CV)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • GST Registration &amp; GST Filing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • Udyam MSME, PAN &amp; TAN Services
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#E5A93C] transition-colors block">
                  • FSSAI License, DSC &amp; Trade License
                </Link>
              </li>
            </ul>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-2 border-t border-white/10">
              Our Office &amp; Support
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>
                  7126, 7th Floor, Office Space, Gaur City Mall, Sector-IV, Greater Noida West, 201318
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+919548634988" className="hover:text-white block font-mono font-semibold">
                    +91 95486 34988
                  </a>
                  <span className="text-[10px] text-amber-300">Call / WhatsApp Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & DSA Transparency Disclaimer */}
        <div className="py-6 border-b border-white/10 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 text-amber-300 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Channel Partner & DSA Transparency Disclosure</span>
          </div>
          <p>
            Shree Services Pvt Ltd operates as an authorized Direct Selling Associate (DSA) and channel consultant for scheduled commercial banks, public sector banks, and RBI-registered NBFCs. We do NOT lend our own capital or charge any advance cash processing fees. Final sanction, credit appraisal, interest rate determination, and disbursal are at the sole discretion of the respective lending institution under RBI norms.
          </p>
        </div>

        {/* Copyright & Meta Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Shree Services Pvt Ltd. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[11px]">
            <Link to="/eligibility" className="text-amber-300 hover:text-white font-semibold">Eligibility</Link>
            <span>•</span>
            <Link to="/partners" className="text-amber-300 hover:text-white font-semibold">Partners</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-[#E5A93C]">About Us</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-[#E5A93C]">Services</Link>
            <span>•</span>
            <Link to="/government-schemes" className="hover:text-[#E5A93C]">Govt Schemes</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#E5A93C]">Contact Office</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
