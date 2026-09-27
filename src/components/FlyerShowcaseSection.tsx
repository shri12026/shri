import React, { useState } from 'react';
import {
  CATALOG_CATEGORIES,
  SIX_PILLARS,
  CatalogServiceItem,
} from '../data/servicesCatalogData';
import {
  TrendingUp,
  CheckCircle2,
  DollarSign,
  Clock,
  LayoutDashboard,
  FileCheck,
  Headphones,
  Rocket,
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  ArrowRight,
  Landmark,
  CreditCard,
  Umbrella,
  Briefcase,
  Star,
  ExternalLink,
  ChevronRight,
  Building,
} from 'lucide-react';

interface FlyerShowcaseSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const FlyerShowcaseSection: React.FC<FlyerShowcaseSectionProps> = ({
  onOpenApplyModal,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'BadgeDollarSign':
        return <DollarSign className="w-5 h-5 text-[#E5A93C]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#E5A93C]" />;
      case 'MonitorCheck':
        return <LayoutDashboard className="w-5 h-5 text-[#E5A93C]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#E5A93C]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#E5A93C]" />;
      case 'Rocket':
        return <Rocket className="w-5 h-5 text-[#E5A93C]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E5A93C]" />;
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'loans':
        return <Landmark className="w-6 h-6 text-white" />;
      case 'cards':
        return <CreditCard className="w-6 h-6 text-white" />;
      case 'insurance':
        return <Umbrella className="w-6 h-6 text-white" />;
      case 'business':
        return <Briefcase className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section
      id="complete-portfolio"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#07132F] text-white relative overflow-hidden"
    >
      {/* Background Ambience & Golden Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Badge & Taglines from Flyer */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E5A93C]/40 shadow-lg">
            <span className="flex items-center gap-1 text-xs font-semibold text-[#E5A93C]">
              <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
              Gaur City Mall, Greater Noida West
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="font-serif italic text-xs sm:text-sm text-amber-200">
              &ldquo;Sapno ko Sahi Financial Direction!&rdquo;
            </span>
          </div>

          {/* Golden Giant 500+ Headline */}
          <div className="space-y-2 pt-2">
            <div className="inline-block relative">
              <span className="font-serif italic text-lg sm:text-2xl text-amber-300 block mb-1">
                Trusted Service, Brighter Future
              </span>
              <h2 className="font-serif-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5D1] via-[#E5A93C] to-[#F5C768] drop-shadow-md">
                500+ FINANCIAL &amp; BUSINESS SERVICES
              </h2>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest text-white mt-1">
                UNDER ONE ROOF
              </div>
            </div>

            {/* Star Banner Ribbon */}
            <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#E5A93C]/20 border border-[#E5A93C]/50 text-amber-300 font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-inner mt-2">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
              <span>ONE STOP SOLUTION FOR ALL YOUR NEEDS</span>
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
          </div>
        </div>

        {/* Growth Pitch & 6 Pillars Section */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Green Growth Banner (from Flyer) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-[#064E3B] via-[#047857] to-[#022C22] p-6 sm:p-8 border border-emerald-400/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background arrow illustration */}
            <div className="absolute top-2 right-2 text-emerald-400/20 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-32 h-32 stroke-[1.5]" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Partner &amp; Client Growth</span>
              </div>

              <h3 className="font-serif-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                EARN MORE.<br />
                GROW FASTER.<br />
                LIVE BETTER.
              </h3>

              <p className="text-emerald-100 text-sm font-medium leading-relaxed">
                START YOUR SUCCESS JOURNEY WITH US TODAY! Whether you are a business owner seeking debt, a channel partner earning top commissions, or an individual realizing life milestones.
              </p>
            </div>

            <div className="pt-6 relative z-10 space-y-3">
              <button
                onClick={() => onOpenApplyModal('Growth Partner & Loan Consultation')}
                className="w-full py-3.5 px-5 rounded-2xl bg-gold-gradient hover:brightness-105 active:scale-98 text-[#060F26] font-extrabold text-sm shadow-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Consult Our Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between text-[11px] text-emerald-200/90 pt-1 border-t border-emerald-500/30">
                <span>Gaur City Mall HQ</span>
                <span className="font-bold text-amber-300">★ 100% Authorized DSA</span>
              </div>
            </div>
          </div>

          {/* 6 Key Feature Badges Grid (from Flyer) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {SIX_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#E5A93C]/50 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/15 border border-[#E5A93C]/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <span className="text-[10px] font-bold text-[#E5A93C] bg-[#E5A93C]/10 px-2 py-0.5 rounded-full border border-[#E5A93C]/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide leading-snug group-hover:text-[#E5A93C] transition-colors">
                    {pillar.title}
                  </h4>
                </div>

                <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Section Headline: "WIDE RANGE OF PRODUCTS & SERVICES YOU CAN OFFER" */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#E5A93C] bg-white/5 px-4 py-1.5 rounded-full border border-[#E5A93C]/30">
            <span>Official Four Core Verticals</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            WIDE RANGE OF PRODUCTS &amp; SERVICES
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Everything your personal finance or commercial enterprise needs under a single institutional roof.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveCategoryTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategoryTab === 'all'
                  ? 'bg-gold-gradient text-[#060F26] shadow-md'
                  : 'bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10'
              }`}
            >
              All 4 Portfolios (40+ Services)
            </button>
            {CATALOG_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategoryTab === cat.id
                    ? 'bg-gold-gradient text-[#060F26] shadow-md'
                    : 'bg-white/10 hover:bg-white/15 text-slate-200 border border-white/10'
                }`}
              >
                {cat.title} ({cat.items.length})
              </button>
            ))}
          </div>
        </div>

        {/* The 4 Main Vertical Cards matching the flyer columns */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {CATALOG_CATEGORIES.map((cat) => {
            const isVisible =
              activeCategoryTab === 'all' || activeCategoryTab === cat.id;
            if (!isVisible) return null;

            return (
              <div
                key={cat.id}
                className="rounded-3xl bg-white/[0.05] border border-white/15 hover:border-[#E5A93C]/60 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  {/* Vertical Header */}
                  <div
                    className={`p-5 border-b border-white/10 ${
                      cat.id === 'loans'
                        ? 'bg-gradient-to-r from-blue-950 via-blue-900 to-[#0A1C44]'
                        : cat.id === 'cards'
                        ? 'bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#0A1C44]'
                        : cat.id === 'insurance'
                        ? 'bg-gradient-to-r from-sky-950 via-sky-900 to-[#0A1C44]'
                        : 'bg-gradient-to-r from-amber-950 via-amber-900 to-[#0A1C44]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                        {getCategoryIcon(cat.id)}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/15 border border-white/20 text-white">
                        {cat.countText}
                      </span>
                    </div>

                    <h4 className="font-serif-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      {cat.title}
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      {cat.tagline}
                    </p>
                  </div>

                  {/* Vertical Items List */}
                  <div className="p-4 sm:p-5 space-y-2.5 max-h-[460px] overflow-y-auto overscroll-contain pr-2">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all flex items-start gap-2.5 group/item cursor-pointer"
                        onClick={() => onOpenApplyModal(`${cat.title} - ${item.name}`)}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover/item:text-[#E5A93C] transition-colors" />
                        <div className="flex-grow">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-bold text-white group-hover/item:text-[#E5A93C] transition-colors leading-tight">
                              {item.name}
                            </span>
                            {item.highlight && (
                              <span className="text-[9px] font-semibold px-1.5 py-0.2 rounded bg-[#E5A93C]/20 text-[#E5A93C] shrink-0 border border-[#E5A93C]/30">
                                {item.highlight}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-300 mt-0.5 leading-snug line-clamp-1">
                            {item.shortDesc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vertical Footer CTA */}
                <div className="p-4 bg-white/[0.03] border-t border-white/10">
                  {cat.id === 'business' && (
                    <div className="text-[11px] font-serif italic text-amber-300 text-center mb-2.5">
                      &ldquo;Your Business Our Support&rdquo;
                    </div>
                  )}

                  <button
                    onClick={() => onOpenApplyModal(cat.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white/10 hover:bg-[#E5A93C] hover:text-[#060F26] text-white text-xs font-bold border border-white/15 hover:border-[#E5A93C] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Apply / Enquire for {cat.title}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Banner (Exact match to bottom of the flyer) */}
        <div className="mt-14 sm:mt-16 rounded-3xl bg-gradient-to-r from-[#060F26] via-[#0A1C44] to-[#060F26] border-2 border-[#E5A93C]/40 p-5 sm:p-7 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left: Apply Today Star Badge */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white font-extrabold text-center shadow-lg border border-emerald-400/40">
              <div className="text-xs uppercase tracking-wider">APPLY</div>
              <div className="text-sm tracking-tight">TODAY!</div>
              <div className="flex items-center justify-center gap-0.5 text-amber-300 text-[10px] mt-0.5">
                ★★★★★
              </div>
            </div>

            <div className="space-y-0.5">
              <div className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
                Direct Desk Assistance
              </div>
              <div className="text-sm font-bold text-white">
                Same-Day Application Sanction
              </div>
            </div>
          </div>

          {/* Center: Call / WhatsApp Phone Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <div className="text-center sm:text-right">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#E5A93C] block">
                CALL / WHATSAPP NOW
              </span>
              <a
                href="tel:+919548634988"
                className="font-mono text-2xl sm:text-3xl font-extrabold text-white hover:text-[#E5A93C] transition-colors tracking-tight flex items-center justify-center sm:justify-end gap-2"
              >
                <Phone className="w-6 h-6 text-[#E5A93C]" />
                <span>9548634988</span>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/919548634988?text=Hello%20Shree%20Services,%20I%20would%20like%20to%20apply%20for%20financial%20or%20business%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right: Office location & "Let's Grow Together!" */}
          <div className="flex items-center gap-4 text-center sm:text-left shrink-0">
            <div className="flex items-start gap-2 max-w-xs text-xs text-slate-300 text-left">
              <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Our Office:</span>
                <span>Gaur City Mall, Greater Noida West</span>
              </div>
            </div>

            <div className="hidden xl:block border-l border-white/20 pl-4 font-serif italic text-xl text-amber-300 font-bold">
              Let&rsquo;s Grow Together!
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
