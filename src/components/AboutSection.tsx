import React from 'react';
import { Award, Compass, HeartHandshake, ShieldCheck, MapPin, Building, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onOpenApplyModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenApplyModal }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3 py-1 rounded-full border border-[#E5A93C]/30">
            <span>About Shree Services</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            Built On Trust. Driven by Growth. Committed to Your Prosperity.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Headquartered in Gaur City Mall, Greater Noida West, Shree Services Pvt Ltd is Northern India's trusted financial advisory and institutional loan facilitation powerhouse.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photographic Storytelling & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/src/assets/images/happy_family_home_1790233418678.jpg"
                alt="Happy Indian family celebrating their new home loan sanction with Shree Services"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060F26]/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-semibold text-[#E5A93C] tracking-wider">Dream Home Realized</span>
                <p className="font-serif-display text-lg font-bold text-white mt-1">
                  Over 3,200 Families Empowered with Hassle-Free Home Loans
                </p>
              </div>
            </div>

            {/* Overlapping secondary image card */}
            <div className="hidden sm:block absolute -bottom-10 -right-6 w-60 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/src/assets/images/business_owner_growth_1790233431865.jpg"
                alt="MSME business entrepreneur financed through CGTMSE and business loan"
                className="w-full h-40 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3 bg-[#0A1C44] text-white text-xs">
                <span className="font-bold text-[#E5A93C]">₹180Cr+</span> MSME Funding Disbursed
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-6 -left-4 bg-white p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#0A1C44] text-[#E5A93C] flex items-center justify-center font-bold text-xl">
                12+
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Years of Cumulative</div>
                <div className="text-sm font-bold text-[#0A1C44]">Financial Expertise</div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Corporate Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif-display font-bold text-[#0A1C44]">
                Bridging You to India's Premier Banking & NBFC Network
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you are purchasing your first apartment in Greater Noida, acquiring commercial property, raising working capital for your MSME factory, or seeking sovereign-backed schemes like PMEGP and CGTMSE — navigating bank eligibility matrices and paperwork can be overwhelming.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                At <strong>Shree Services Pvt Ltd</strong>, our seasoned chartered loan specialists negotiate directly with 120+ leading institutions (including SBI, HDFC, ICICI, Canara Bank, and Central Bank of India) to secure you the lowest interest rates, highest FOIR eligibility, and speediest disbursement.
              </p>
            </div>

            {/* Three Value Pillars: Trust | Growth | Prosperity */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#E5A93C]/60 transition-colors">
                <ShieldCheck className="w-6 h-6 text-[#0A1C44] mb-2" />
                <h4 className="font-bold text-sm text-[#0A1C44]">Trust</h4>
                <p className="text-xs text-slate-500 mt-1">100% transparent fee structure and data privacy.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-emerald-500/60 transition-colors">
                <Compass className="w-6 h-6 text-emerald-600 mb-2" />
                <h4 className="font-bold text-sm text-[#0A1C44]">Growth</h4>
                <p className="text-xs text-slate-500 mt-1">Strategic capital infusion for personal & business ambitions.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#E5A93C]/60 transition-colors">
                <Award className="w-6 h-6 text-[#E5A93C] mb-2" />
                <h4 className="font-bold text-sm text-[#0A1C44]">Prosperity</h4>
                <p className="text-xs text-slate-500 mt-1">Tailored financial health and low monthly EMIs.</p>
              </div>
            </div>

            {/* Address callout */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <MapPin className="w-5 h-5 text-[#0A1C44] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#0A1C44]">Corporate Office: </span>
                7126, 7th Floor, Office Space, Gaur City Mall, Sector-IV, Greater Noida West, 201318
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                onClick={onOpenApplyModal}
                className="px-6 py-3.5 rounded-xl text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-95 transition-all shadow-md cursor-pointer"
              >
                Schedule an Office Consultation
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
