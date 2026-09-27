import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LOANS_DATA } from '../data/loansData';
import { CATALOG_CATEGORIES, SIX_PILLARS, CatalogServiceItem } from '../data/servicesCatalogData';
import {
  Home,
  User,
  Briefcase,
  Car,
  Building,
  Landmark,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  ChevronRight,
  CreditCard,
  Umbrella,
  Star,
  Phone,
  MessageCircle,
  FileCheck,
  Clock,
  LayoutDashboard,
  Headphones,
  Rocket,
  DollarSign
} from 'lucide-react';

interface ServicesHubPageProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const ServicesHubPage: React.FC<ServicesHubPageProps> = ({ onOpenApplyModal }) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [activeTab, setActiveTab] = useState<'loans' | 'cards' | 'insurance' | 'business'>('loans');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (categoryParam && ['loans', 'cards', 'insurance', 'business'].includes(categoryParam)) {
      setActiveTab(categoryParam as any);
      setTimeout(() => {
        const el = document.getElementById('portfolio-tabs');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [categoryParam]);

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

  const currentCategory = CATALOG_CATEGORIES.find((c) => c.id === activeTab) || CATALOG_CATEGORIES[0];

  const filteredItems = currentCategory.items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#060F26] via-[#0A1C44] to-[#060F26] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#E5A93C] mb-4">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">500+ Services Portfolio</span>
          </div>

          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E5A93C]/40 text-xs font-semibold text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
              <span>Sapno ko Sahi Financial Direction! · Gaur City Mall Greater Noida</span>
            </div>

            <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              500+ Financial &amp; Business Services{' '}
              <span className="text-gold-gradient underline decoration-[#E5A93C]/40 decoration-wavy underline-offset-8">
                Under One Roof
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              One-stop institutional solution for all your personal, business, insurance, and licensing requirements across 120+ top banks and NBFCs with complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Key Pillars Bar from Poster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {SIX_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#0A1C44] border border-[#E5A93C]/35 rounded-2xl p-3.5 text-center text-white shadow-xl flex flex-col items-center justify-between group hover:border-[#E5A93C] transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                {getPillarIcon(pillar.iconName)}
              </div>
              <div className="text-[11px] font-extrabold text-white tracking-wide uppercase leading-tight">
                {pillar.title}
              </div>
              <div className="text-[9px] text-amber-300 font-semibold mt-1">
                {pillar.badge}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Filter & Navigation Tabs for the 4 Verticals */}
      <section id="portfolio-tabs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 scroll-mt-24">
        <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Vertical Switcher Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('loans')}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'loans'
                  ? 'bg-[#0A1C44] text-white shadow-md border border-[#E5A93C]'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Landmark className="w-4 h-4 text-[#E5A93C]" />
              <span>17+ Loans</span>
            </button>

            <button
              onClick={() => setActiveTab('cards')}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'cards'
                  ? 'bg-emerald-800 text-white shadow-md border border-emerald-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>7+ Cards</span>
            </button>

            <button
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'insurance'
                  ? 'bg-sky-800 text-white shadow-md border border-sky-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Umbrella className="w-4 h-4 text-sky-300" />
              <span>8+ Insurance</span>
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-amber-800 text-white shadow-md border border-amber-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <Briefcase className="w-4 h-4 text-amber-300" />
              <span>8+ Business</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentCategory.title}...`}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0A1C44]"
            />
          </div>

        </div>
      </section>

      {/* Category Banner Title */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="p-6 rounded-3xl bg-gradient-to-r from-[#060F26] via-[#0A1C44] to-[#0D2459] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-[#E5A93C]/30 shadow-md">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E5A93C] uppercase tracking-wider">
              {currentCategory.countText} · Full Catalog
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold">
              {currentCategory.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              {currentCategory.tagline}
            </p>
          </div>

          <button
            onClick={() => onOpenApplyModal(`Category: ${currentCategory.title}`)}
            className="px-5 py-2.5 rounded-xl bg-gold-gradient text-[#060F26] font-extrabold text-xs sm:text-sm shadow-md hover:brightness-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            Apply for {currentCategory.title}
          </button>
        </div>
      </section>

      {/* Grid of Catalog Items */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E5A93C] transition-all duration-300 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1C44] text-[#E5A93C] flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                    {activeTab === 'loans' ? (
                      <Landmark className="w-5 h-5 text-[#E5A93C]" />
                    ) : activeTab === 'cards' ? (
                      <CreditCard className="w-5 h-5 text-emerald-400" />
                    ) : activeTab === 'insurance' ? (
                      <Umbrella className="w-5 h-5 text-sky-400" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-amber-400" />
                    )}
                  </div>
                  {item.highlight && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                      {item.highlight}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#0A1C44] group-hover:text-[#112C6E] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Timely Sanction &amp; Backend Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenApplyModal(`${currentCategory.title} - ${item.name}`)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Card & Office Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#065F46] text-white p-8 sm:p-10 border border-emerald-400/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
              EARN MORE. GROW FASTER. LIVE BETTER.
            </span>
            <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
              Start Your Success Journey With Shree Services Today!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
              Visit our office at 7126, 7th Floor, Gaur City Mall, Greater Noida West or connect directly via Call / WhatsApp.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:+919548634988"
              className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 transition-all whitespace-nowrap shadow-lg flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#060F26]" />
              <span>Call: 9548634988</span>
            </a>
            <a
              href="https://wa.me/919548634988?text=Hello%20Shree%20Services,%20I%20would%20like%20to%20enquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-600 transition-all whitespace-nowrap shadow-lg flex items-center gap-2 border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
