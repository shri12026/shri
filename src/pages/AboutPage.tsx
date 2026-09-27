import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Building,
  CheckCircle2,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  HeartHandshake,
  Check
} from 'lucide-react';
import { ShreeLogo } from '../components/ShreeLogo';

interface AboutPageProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenApplyModal }) => {
  const milestones = [
    { year: 'Founded', title: 'Established with Vision', desc: 'Started with a singular objective: democratizing transparent loan advice for retail and SME borrowers in Delhi NCR.' },
    { year: '120+ Banks', title: 'Empanelled DSA Network', desc: 'Formed direct official channel partnerships with leading Public Sector, Private Banks, and premier NBFCs.' },
    { year: '5,000+', title: 'Successful Disbursements', desc: 'Crossed ₹1,200+ Crores in lifetime sanctioned retail and commercial credit with zero upfront borrower fees.' },
    { year: 'Gaur City Mall', title: 'Flagship Corporate Hub', desc: 'Established our customer service and advisory desk in Greater Noida West to serve the thriving residential and commercial community.' }
  ];

  const values = [
    {
      title: 'Trust (विश्वास)',
      tagline: 'Integrity Above Everything',
      desc: 'We uphold absolute fiduciary responsibility. No hidden charges, no unapproved file logging, and zero advance cash fees. Everything is in writing.',
      icon: ShieldCheck,
      color: 'from-amber-500/20 to-amber-500/5'
    },
    {
      title: 'Growth (प्रगति)',
      tagline: 'Catalyzing Aspirations',
      desc: 'From personal dream homes to industrial factories and tech startups, we design optimal financial structures that fuel uninterrupted expansion.',
      icon: TrendingUp,
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      title: 'Prosperity (समृद्धि)',
      tagline: 'Sustainable Wealth Creation',
      desc: 'We protect borrower cash flows by securing the lowest possible interest rates, eliminating unnecessary foreclosure penalties, and optimizing subsidies.',
      icon: HeartHandshake,
      color: 'from-blue-500/20 to-blue-500/5'
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E5A93C_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#E5A93C]/30 text-xs font-semibold text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Official Institutional Channel Partner · Gaur City Mall</span>
            </div>
            <h1 className="font-serif-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              About Shree Services Pvt Ltd
            </h1>
            <p className="text-lg sm:text-2xl text-[#E5A93C] font-serif italic">
              &ldquo;Sapno ko Sahi Financial Direction!&rdquo;
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              <strong>500+ Financial &amp; Business Services Under One Roof</strong>. Headquartered in Gaur City Mall, Greater Noida West, Shree Services Pvt Ltd is a premier multi-bank institutional advisory firm empowering retail borrowers and enterprises across 17+ Loans, 7+ Credit Cards, 8+ Insurance Plans, and 8+ Business Registrations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Brand Crest Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Our Heritage & Commitment</span>
              <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#0A1C44]">
                Bridging Borrowers with the Right Financial Institution
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Navigating loan applications through multiple bank branches can be a frustrating labyrinth of opaque rates, rigid documentation, and unpredictable delays. At <strong className="text-slate-900">Shree Services Pvt Ltd</strong>, we turn that complexity into a streamlined, high-speed advantage.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Rather than walking into a single bank that only offers its proprietary product, our clients receive access to an unbiased comparative appraisal across 120+ Public Sector Banks (SBI, PNB, BOB, Canara), leading Private Banks (HDFC, ICICI, Axis, Kotak), and premier Housing Finance Companies (LIC HFL, Tata Capital).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Zero advance fees or hidden brokerages',
                'Doorstep document pickup in Delhi NCR',
                'Single login, multiple bank comparisons',
                'High-approval ratio for self-employed & MSMEs',
                'Dedicated sanction tracking manager',
                'Specialized team for Government Subsidies'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenApplyModal('General Financial Advisory')}
                className="px-6 py-3 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 shadow-md transition-all cursor-pointer"
              >
                Schedule Free Consultation
              </button>
              <Link
                to="/services"
                className="px-6 py-3 rounded-xl text-sm font-bold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/20 transition-all"
              >
                Explore Loan Offerings
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#060F26] via-[#0A1C44] to-[#071330] text-white border-2 border-[#E5A93C]/40 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E5A93C]/10 rounded-full blur-2xl" />
              
              <div className="flex flex-col items-center text-center space-y-5 relative z-10">
                <div className="w-28 h-28 rounded-2xl bg-white p-2 border-2 border-[#E5A93C] shadow-xl flex items-center justify-center">
                  <img
                    src="https://ik.imagekit.io/nb6cfzd7m/WhatsApp%20Image%202026-09-24%20at%2012.23.19%20PM%20-%20Edited.jpg"
                    alt="Shree Services Pvt Ltd Emblem"
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-display text-2xl font-bold text-white tracking-wide">
                    Shree Services Pvt Ltd
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold">
                    Loan & Finance Partner
                  </p>
                </div>

                <div className="w-full py-3 px-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200 italic">
                  &ldquo;Trust | Growth | Prosperity – Your Dreams, Our Commitment&rdquo;
                </div>

                <div className="w-full pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-black/20">
                    <div className="text-2xl font-extrabold text-[#E5A93C]">120+</div>
                    <div className="text-[10px] uppercase text-slate-300">Partner Banks</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20">
                    <div className="text-2xl font-extrabold text-[#E5A93C]">5,000+</div>
                    <div className="text-[10px] uppercase text-slate-300">Happy Borrowers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A1C44]">The Pillars of Our Success</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0A1C44]">
              Our Guiding Principles
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental tenets that inspire every recommendation and loan file we represent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-7 bg-slate-50 border border-slate-200 hover:border-[#E5A93C] hover:shadow-lg transition-all group space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] text-[#E5A93C] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-display text-xl font-bold text-[#0A1C44]">
                      {val.title}
                    </h3>
                    <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                      {val.tagline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones / Track Record */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">Growth & Milestones</span>
          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#0A1C44]">
            Built on Consistent Results
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-[#0A1C44]/5 text-[#0A1C44] font-extrabold text-sm font-mono border border-[#0A1C44]/15">
                {m.year}
              </div>
              <h4 className="font-serif-display text-lg font-bold text-[#0A1C44]">{m.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Physical Office Hub Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-3xl bg-gradient-to-r from-[#060F26] via-[#0A1C44] to-[#071330] text-white p-8 sm:p-12 border border-[#E5A93C]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5A93C] bg-white/10 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              <span>Gaur City Mall, Greater Noida West</span>
            </div>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-white">
              Visit Our Branch Office for Face-to-Face Guidance
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Located on the 7th Floor of Gaur City Mall (Sector-IV, Greater Noida West). Our senior loan officers are available Monday through Saturday to review your documents and provide immediate sanction feasibility reports.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-amber-300">
              <span>📞 +91 95486 34988</span>
              <span>•</span>
              <span>✉️ shrifinanceservicess@gmail.com</span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 text-center shadow-lg transition-all"
            >
              Get Directions & Book Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
