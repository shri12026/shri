import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShreeLogo } from './ShreeLogo';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Home,
  User,
  Briefcase,
  Car,
  Building,
  Landmark,
  GraduationCap,
  Calculator,
  ShieldCheck,
  Award,
  CreditCard,
  Umbrella,
  Sparkles,
  ArrowLeftRight,
  Wallet,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface NavbarProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [schemesDropdownOpen, setSchemesDropdownOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSchemesDropdownOpen(false);
  }, [location.pathname]);

  // Featured Priority Debt Solutions (Balance Transfer & Overdraft)
  const priorityDebtServices = [
    {
      title: 'Balance Transfer Services',
      desc: 'Switch existing Home/LAP/Business loan to lowest ROI + max top-up cash',
      badge: 'Save on EMI',
      serviceName: 'Balance Transfer Services',
      path: '/services?category=loans',
      icon: ArrowLeftRight,
      color: 'border-amber-400/40 bg-amber-500/10 text-amber-300',
    },
    {
      title: 'Overdraft (OD) Service',
      desc: 'Revolving OD & Cash Credit (CC) limit. Pay interest only on daily usage',
      badge: 'Revolving Limit',
      serviceName: 'Overdraft (OD) Service',
      path: '/services?category=loans',
      icon: Wallet,
      color: 'border-emerald-400/40 bg-emerald-500/10 text-emerald-300',
    },
  ];

  // Core Loans
  const serviceLinks = [
    { title: 'Home Loan', path: '/services/home-loan', desc: 'Starting 8.35%* p.a. with 30 yrs tenure', icon: Home, badge: '8.35%*' },
    { title: 'Personal Loan', path: '/services/personal-loan', desc: 'Instant 24-hr unsecured cash up to ₹50L', icon: User, badge: 'Instant' },
    { title: 'Business Loan', path: '/services/business-loan', desc: 'Working capital & CC/OD up to ₹20Cr', icon: Briefcase, badge: 'Up to ₹20Cr' },
    { title: 'Loan Against Property (LAP)', path: '/services/loan-against-property', desc: 'Low-cost mortgage credit up to ₹25Cr', icon: Building, badge: 'Lowest ROI' },
    { title: 'Car & Auto Loan', path: '/services/car-loan', desc: 'Up to 100% on-road funding from 8.75%*', icon: Car, badge: '100% Fund' },
    { title: 'Education Loan', path: '/services/education-loan', desc: 'Study in India & abroad with 100% funding', icon: GraduationCap, badge: 'Global' },
  ];

  // Credit Card Services
  const creditCardLinks = [
    { title: 'Lifetime Free Credit Card', desc: 'Zero joining & zero annual fees forever', badge: 'Zero Annual Fee', serviceName: 'Lifetime Free Credit Card' },
    { title: 'Premium Credit Card', desc: 'Airport lounge access, golf & concierge', badge: 'Lounges', serviceName: 'Premium Credit Card' },
    { title: 'Cashback Credit Card', desc: 'Up to 5% flat return on utility & dining', badge: '5% Return', serviceName: 'Cashback Credit Card' },
    { title: 'Fuel Credit Card', desc: '1% surcharge waiver + fuel rewards', badge: 'Fuel Waiver', serviceName: 'Fuel Credit Card' },
    { title: 'Business Credit Card', desc: 'High limits with separate GST billing', badge: 'GST Invoice', serviceName: 'Business Credit Card' },
  ];

  // Insurance Services
  const insuranceLinks = [
    { title: 'Health Insurance', desc: '10,000+ cashless hospitals & OPD covers', badge: '10K+ Hospitals', serviceName: 'Health Insurance' },
    { title: 'Life Insurance', desc: 'Guaranteed family safety net & wealth plan', badge: 'Wealth Cover', serviceName: 'Life Insurance' },
    { title: 'Motor Insurance (Car, Bike, CV)', desc: 'Zero depreciation & 24x7 roadside assist', badge: 'Zero-Dep', serviceName: 'Motor Insurance (Car, Bike, CV)' },
    { title: 'Term Insurance', desc: 'Up to ₹5 Cr pure risk cover at minimal rate', badge: 'Up to ₹5 Cr', serviceName: 'Term Insurance' },
    { title: 'Commercial Insurance', desc: 'Factory, fire, marine transit & liability', badge: 'Commercial', serviceName: 'Commercial Insurance' },
  ];

  // Business Services
  const businessLinks = [
    { title: 'GST Registration', desc: 'Instant online GSTIN filing & certificate', badge: 'Quick GSTIN', serviceName: 'GST Registration' },
    { title: 'GST Filing', desc: 'Error-free monthly & annual return filing', badge: 'Max ITC', serviceName: 'GST Filing' },
    { title: 'Udyam Registration', desc: 'Govt MSME certificate for bank subsidies', badge: 'MSME Benefits', serviceName: 'Udyam Registration' },
    { title: 'PAN / TAN Services', desc: 'Corporate e-PAN & TAN tax registration', badge: 'Same-Day', serviceName: 'PAN / TAN Services' },
    { title: 'FSSAI Registration', desc: 'Mandatory food safety license for setups', badge: 'Food License', serviceName: 'FSSAI Registration' },
    { title: 'Digital Signature (DSC)', desc: 'Class 3 USB tokens for MCA & e-tendering', badge: 'Class 3 Token', serviceName: 'Digital Signature (DSC)' },
  ];

  const schemeLinks = [
    { title: 'CGTMSE Scheme', path: '/government-schemes/cgtmse', desc: 'Collateral-free credit up to ₹5 Crore', badge: 'MSME' },
    { title: 'PMEGP Subsidy Loan', path: '/government-schemes/pmegp', desc: 'Up to 35% Govt capital subsidy', badge: 'Up to 35%' },
    { title: 'MUDRA Loan (PMMY)', path: '/government-schemes/mudra', desc: 'Shishu, Kishor & Tarun up to ₹20 Lakh', badge: 'PMMY' },
    { title: 'CGSS Scheme for Startups', path: '/government-schemes/cgss', desc: 'DPIIT recognized venture debt cover', badge: 'Startup' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-soft-pill py-2.5 border-b border-stone-200/80'
            : 'bg-[#FAF7F2]/85 backdrop-blur-sm py-3.5 border-b border-stone-200/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Official Brand Logo & Wordmark */}
            <Link
              to="/"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-full group"
              aria-label="Shree Services Pvt Ltd Home"
            >
              <ShreeLogo size="md" variant="dark" />
            </Link>

            {/* Zone 2: Navigation Links (Desktop Multi-Page Menu) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-medium text-neutral-700">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                      : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                      : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`
                }
              >
                About Us
              </NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                      isActive || location.pathname.startsWith('/services')
                        ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                        : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                    }`
                  }
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                </NavLink>

                {/* Dropdown Menu Panel (Mega Menu) */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-28 xl:-left-44 w-[860px] xl:w-[940px] max-w-[calc(100vw-2rem)] bg-white/98 border border-neutral-200/90 rounded-[28px] shadow-2xl p-4 sm:p-5 mt-1 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 z-50 text-left">
                    {/* Top Banner with Brand Tagline & Quick View All Link */}
                    <div className="px-2 py-1.5 border-b border-neutral-100 mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-extrabold text-neutral-900 uppercase tracking-wider bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200">
                          500+ Services Under One Roof
                        </span>
                        <span className="font-serif italic text-xs text-neutral-600 hidden sm:inline">
                          &ldquo;Sapno ko Sahi Financial Direction!&rdquo;
                        </span>
                      </div>
                      <Link
                        to="/services"
                        className="text-xs font-bold text-neutral-900 hover:text-amber-700 underline underline-offset-2 flex items-center gap-1"
                      >
                        <span>Full Catalogue Hub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* High-Priority Highlight Cards: Balance Transfer Services & Overdraft (OD) Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      {priorityDebtServices.map((feat) => {
                        const FeatIcon = feat.icon;
                        const isBT = feat.serviceName.includes('Balance Transfer');
                        return (
                          <div
                            key={feat.title}
                            className={`p-3.5 rounded-2xl border ${
                              isBT
                                ? 'bg-[#FEF3C7] border-amber-300 text-neutral-900'
                                : 'bg-[#CEEED9] border-emerald-300 text-neutral-900'
                            } flex items-start justify-between gap-3 shadow-soft-pill group/card transition-all`}
                          >
                            <div className="flex items-start gap-2.5">
                              <div className="w-8 h-8 rounded-xl bg-white/80 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                <FeatIcon className="w-4 h-4 text-neutral-900" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <h4 className="text-xs font-bold text-neutral-900">
                                    {feat.title}
                                  </h4>
                                  <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-white/80 text-neutral-900 border border-neutral-200/60 shadow-xs">
                                    {feat.badge}
                                  </span>
                                </div>
                                <p className="text-[10px] text-neutral-700 line-clamp-1 mt-0.5">
                                  {feat.desc}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                onClick={() => onOpenApplyModal(feat.serviceName)}
                                className="px-3 py-1.5 rounded-full text-[10px] font-semibold bg-neutral-900 hover:bg-black text-white transition-all cursor-pointer shadow-xs whitespace-nowrap"
                              >
                                Apply Now
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* 4 Portfolios Grid: Loans, Credit Cards, Insurance, Business Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                      
                      {/* Column 1: Loan Services */}
                      <div className="p-3 rounded-2xl bg-[#C8E5F7]/30 border border-sky-200/70 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-200/50">
                            <span className="font-bold text-neutral-900 flex items-center gap-1.5 text-xs">
                              <Landmark className="w-3.5 h-3.5 text-sky-800" />
                              <span>Loan Services</span>
                            </span>
                            <span className="text-[9px] bg-sky-200/80 text-sky-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
                              17 Types
                            </span>
                          </div>
                          <div className="space-y-1">
                            {serviceLinks.slice(0, 5).map((l) => (
                              <Link
                                key={l.title}
                                to={l.path}
                                className="p-1.5 rounded-lg hover:bg-white/80 transition-colors flex items-center justify-between group/link"
                              >
                                <span className="text-[11px] text-neutral-800 group-hover/link:text-black font-medium truncate">
                                  {l.title}
                                </span>
                                <span className="text-[9px] text-sky-900 opacity-80 shrink-0 font-medium">
                                  {l.badge}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <Link
                          to="/services?category=loans"
                          className="mt-2 pt-2 border-t border-sky-200/50 text-[10px] font-bold text-sky-950 hover:underline flex items-center justify-between"
                        >
                          <span>All 17 Loans →</span>
                          <span className="text-sky-700">View All</span>
                        </Link>
                      </div>

                      {/* Column 2: Credit Card Services */}
                      <div className="p-3 rounded-2xl bg-[#DDE5F9]/40 border border-indigo-200/70 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-indigo-200/50">
                            <span className="font-bold text-neutral-900 flex items-center gap-1.5 text-xs">
                              <CreditCard className="w-3.5 h-3.5 text-indigo-700" />
                              <span>Credit Cards</span>
                            </span>
                            <span className="text-[9px] bg-indigo-200/80 text-indigo-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
                              7 Types
                            </span>
                          </div>
                          <div className="space-y-1">
                            {creditCardLinks.map((c) => (
                              <div
                                key={c.title}
                                onClick={() => onOpenApplyModal(c.serviceName)}
                                className="p-1.5 rounded-lg hover:bg-white/80 transition-colors flex items-center justify-between cursor-pointer group/link"
                              >
                                <span className="text-[11px] text-neutral-800 group-hover/link:text-black font-medium truncate">
                                  {c.title}
                                </span>
                                <span className="text-[9px] text-indigo-900 opacity-80 shrink-0 font-medium">
                                  {c.badge}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link
                          to="/services?category=cards"
                          className="mt-2 pt-2 border-t border-indigo-200/50 text-[10px] font-bold text-indigo-950 hover:underline flex items-center justify-between"
                        >
                          <span>All 7 Cards →</span>
                          <span className="text-indigo-700">View All</span>
                        </Link>
                      </div>

                      {/* Column 3: Insurance Services */}
                      <div className="p-3 rounded-2xl bg-[#C8E5F7]/30 border border-sky-200/70 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-200/50">
                            <span className="font-bold text-neutral-900 flex items-center gap-1.5 text-xs">
                              <Umbrella className="w-3.5 h-3.5 text-sky-800" />
                              <span>Insurance Services</span>
                            </span>
                            <span className="text-[9px] bg-sky-200/80 text-sky-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
                              8 Plans
                            </span>
                          </div>
                          <div className="space-y-1">
                            {insuranceLinks.map((ins) => (
                              <div
                                key={ins.title}
                                onClick={() => onOpenApplyModal(ins.serviceName)}
                                className="p-1.5 rounded-lg hover:bg-white/80 transition-colors flex items-center justify-between cursor-pointer group/link"
                              >
                                <span className="text-[11px] text-neutral-800 group-hover/link:text-black font-medium truncate">
                                  {ins.title}
                                </span>
                                <span className="text-[9px] text-sky-900 opacity-80 shrink-0 font-medium">
                                  {ins.badge}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link
                          to="/services?category=insurance"
                          className="mt-2 pt-2 border-t border-sky-200/50 text-[10px] font-bold text-sky-950 hover:underline flex items-center justify-between"
                        >
                          <span>All 8 Insurance Plans →</span>
                          <span className="text-sky-700">View All</span>
                        </Link>
                      </div>

                      {/* Column 4: Business Services */}
                      <div className="p-3 rounded-2xl bg-[#CEEED9]/40 border border-emerald-200/70 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between pb-2 mb-2 border-b border-emerald-200/50">
                            <span className="font-bold text-neutral-900 flex items-center gap-1.5 text-xs">
                              <Briefcase className="w-3.5 h-3.5 text-emerald-800" />
                              <span>Business Services</span>
                            </span>
                            <span className="text-[9px] bg-emerald-200/80 text-emerald-950 px-1.5 py-0.5 rounded-full font-mono font-bold">
                              8 Services
                            </span>
                          </div>
                          <div className="space-y-1">
                            {businessLinks.map((biz) => (
                              <div
                                key={biz.title}
                                onClick={() => onOpenApplyModal(biz.serviceName)}
                                className="p-1.5 rounded-lg hover:bg-white/80 transition-colors flex items-center justify-between cursor-pointer group/link"
                              >
                                <span className="text-[11px] text-neutral-800 group-hover/link:text-black font-medium truncate">
                                  {biz.title}
                                </span>
                                <span className="text-[9px] text-emerald-900 opacity-80 shrink-0 font-medium">
                                  {biz.badge}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <Link
                          to="/services?category=business"
                          className="mt-2 pt-2 border-t border-emerald-200/50 text-[10px] font-bold text-emerald-950 hover:underline flex items-center justify-between"
                        >
                          <span>All 8 Business Services →</span>
                          <span className="text-emerald-700">View All</span>
                        </Link>
                      </div>

                    </div>

                    {/* Mega Dropdown Bottom Bar */}
                    <div className="mt-3.5 pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2 text-neutral-600">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Doorstep Documentation · 120+ Banks · Gaur City Mall Desk</span>
                      </div>
                      <button
                        onClick={() => onOpenApplyModal('General Financial Consultation')}
                        className="px-4 py-1.5 rounded-full bg-neutral-900 hover:bg-black text-white font-semibold text-xs shadow-soft-pill active:scale-95 transition-all cursor-pointer"
                      >
                        Apply for Any Service
                      </button>
                    </div>

                  </div>
                )}
              </div>

              {/* Govt Schemes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSchemesDropdownOpen(true)}
                onMouseLeave={() => setSchemesDropdownOpen(false)}
              >
                <NavLink
                  to="/government-schemes"
                  className={({ isActive }) =>
                    `inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-all ${
                      isActive || location.pathname.startsWith('/government-schemes')
                        ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                        : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                    }`
                  }
                >
                  <span>Govt Schemes</span>
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                </NavLink>

                {schemesDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 bg-white/98 border border-neutral-200/90 rounded-2xl shadow-xl p-3 mt-1 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50">
                    <div className="px-3 py-2 border-b border-neutral-100 mb-1 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-neutral-900 uppercase tracking-wider">
                        Sovereign Schemes &amp; Subsidies
                      </span>
                      <Link
                        to="/government-schemes"
                        className="text-[11px] text-neutral-600 hover:text-black underline underline-offset-2"
                      >
                        All Schemes
                      </Link>
                    </div>
                    <div className="space-y-0.5">
                      {schemeLinks.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start justify-between gap-2 p-2 rounded-xl hover:bg-neutral-100 transition-colors group"
                        >
                          <div>
                            <div className="text-xs font-semibold text-neutral-900 group-hover:text-amber-800 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-neutral-600 line-clamp-1">
                              {item.desc}
                            </div>
                          </div>
                          <span className="shrink-0 text-[10px] font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200 px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink
                to="/calculators"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                      : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`
                }
              >
                Calculators
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-all ${
                    isActive
                      ? 'text-neutral-950 font-bold bg-neutral-200/80 shadow-xs'
                      : 'hover:text-neutral-950 hover:bg-neutral-200/50'
                  }`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* Zone 3: Direct Actions (Apply CTA matching screenshot black pill button) */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <button
                onClick={() => onOpenApplyModal()}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-neutral-900 hover:bg-black active:scale-95 rounded-full shadow-soft-pill transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-800 hover:bg-neutral-200/60 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-neutral-900/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-16 right-0 left-0 max-h-[calc(100vh-64px)] overflow-y-auto overscroll-contain bg-[#FAF7F2] border-b border-neutral-200 shadow-2xl p-5 flex flex-col gap-4 animate-in slide-in-from-top duration-300 text-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-1">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors"
              >
                About Us
              </Link>
              <div className="pt-1 pb-1">
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span className="font-bold">500+ Services Under One Roof</span>
                  <span className="text-[10px] bg-neutral-200 text-neutral-800 px-2 py-0.5 rounded-full font-mono font-bold">
                    4 Portfolios
                  </span>
                </Link>

                {/* Priority Highlight Buttons on Mobile: Balance Transfer & Overdraft */}
                <div className="grid grid-cols-2 gap-2 mt-2 px-1">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenApplyModal('Balance Transfer Services');
                    }}
                    className="p-3 rounded-2xl bg-[#FEF3C7] border border-amber-300 text-left transition-all text-neutral-900 flex flex-col justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 text-neutral-900 text-xs font-bold">
                      <ArrowLeftRight className="w-3.5 h-3.5 text-amber-800" />
                      <span>Balance Transfer</span>
                    </div>
                    <span className="text-[10px] text-neutral-700 mt-1">Lower ROI + Top-Up</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenApplyModal('Overdraft (OD) Service');
                    }}
                    className="p-3 rounded-2xl bg-[#CEEED9] border border-emerald-300 text-left transition-all text-neutral-900 flex flex-col justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-1.5 text-neutral-900 text-xs font-bold">
                      <Wallet className="w-3.5 h-3.5 text-emerald-800" />
                      <span>Overdraft (OD)</span>
                    </div>
                    <span className="text-[10px] text-neutral-700 mt-1">Revolving CC / OD</span>
                  </button>
                </div>

                {/* Sub-menu of the 4 core verticals on mobile with direct apply/explore */}
                <div className="mt-2 space-y-1.5 pl-1 pr-1">
                  <Link
                    to="/services?category=loans"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 flex items-center justify-between shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-sky-700" />
                      <span className="font-semibold">Loan Services (17 Types)</span>
                    </span>
                    <span className="text-[10px] text-sky-800 font-mono font-bold">From 8.35%*</span>
                  </Link>

                  <Link
                    to="/services?category=cards"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 flex items-center justify-between shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-indigo-700" />
                      <span className="font-semibold">Credit Card Services (7 Types)</span>
                    </span>
                    <span className="text-[10px] text-indigo-800 font-mono font-bold">Zero Fee</span>
                  </Link>

                  <Link
                    to="/services?category=insurance"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 flex items-center justify-between shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Umbrella className="w-4 h-4 text-sky-700" />
                      <span className="font-semibold">Insurance Services (8 Plans)</span>
                    </span>
                    <span className="text-[10px] text-sky-800 font-mono font-bold">10K+ Hospitals</span>
                  </Link>

                  <Link
                    to="/services?category=business"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-900 flex items-center justify-between shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-700" />
                      <span className="font-semibold">Business Services (8 Registrations)</span>
                    </span>
                    <span className="text-[10px] text-emerald-800 font-mono font-bold">GST &amp; MSME</span>
                  </Link>
                </div>
              </div>

              <Link
                to="/government-schemes"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>Govt Schemes &amp; Subsidies</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded-full font-mono font-bold">
                  4 Schemes
                </span>
              </Link>

              <div className="pl-4 py-1 space-y-1 border-l-2 border-neutral-300 ml-3">
                {schemeLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-2 py-1 text-xs text-neutral-600 hover:text-black"
                  >
                    • {item.title} ({item.badge})
                  </Link>
                ))}
              </div>

              <Link
                to="/calculators"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors"
              >
                EMI Calculator
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-200/60 rounded-xl transition-colors"
              >
                Contact &amp; Branch Office
              </Link>
            </div>

            <div className="pt-3 border-t border-neutral-200 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full py-3 text-center text-xs font-semibold text-white bg-neutral-900 hover:bg-black rounded-full shadow-soft-pill active:scale-98 transition-all"
              >
                Apply for Loan Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
