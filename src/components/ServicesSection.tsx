import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, Car, Building, Landmark, CheckCircle2, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenApplyModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenApplyModal }) => {
  const services: ServiceItem[] = [
    {
      id: 'home-loan',
      title: 'Home Loan',
      tagline: 'Your Dream Home, Our Priority',
      rateFrom: '8.35%* p.a.',
      tenureMax: 'Up to 30 Years',
      amountMax: 'Up to ₹10 Crore',
      description: 'Comprehensive funding for ready-to-move apartments, under-construction towers, plot purchase, self-construction, and balance transfers with top-up.',
      iconName: 'home',
      benefits: [
        'Minimal processing fee with top public & private banks',
        'Quick legal & technical verification in Greater Noida/NCR',
        'PMAY interest subsidy assistance for eligible borrowers',
        'Doorstep document collection and liaisoning',
      ],
      idealFor: 'First-time home buyers, apartment upgrades, refinancing',
    },
    {
      id: 'personal-loan',
      title: 'Personal Loan',
      tagline: 'Instant Unsecured Cash When You Need It',
      rateFrom: '10.25%* p.a.',
      tenureMax: 'Up to 7 Years',
      amountMax: 'Up to ₹50 Lakh',
      description: 'Collateral-free personal financing for family weddings, medical emergencies, higher education, home renovation, or international travel.',
      iconName: 'user',
      benefits: [
        '100% paperless instant online e-sanction available',
        'No collateral or security guarantor needed',
        'Funds disbursed in as fast as 24 to 48 hours',
        'Flexible part-prepayment terms',
      ],
      idealFor: 'Salaried executives and self-employed professionals',
    },
    {
      id: 'business-loan',
      title: 'Business Loan',
      tagline: 'Fueling Commercial Growth & Cashflow',
      rateFrom: '11.50%* p.a.',
      tenureMax: 'Up to 8 Years',
      amountMax: 'Up to ₹20 Crore',
      description: 'Working capital financing, machinery purchase loans, export credit, invoice discounting, and structured debt for ambitious Indian enterprises.',
      iconName: 'briefcase',
      benefits: [
        'Collateral-free options up to ₹5 Crore under CGTMSE',
        'Customized repayment structured to business cash flows',
        'Overdraft (OD) and Cash Credit (CC) limits',
        'Sanction based on GST returns & banking turnover',
      ],
      idealFor: 'MSMEs, manufacturers, retail chains & service firms',
    },
    {
      id: 'car-loan',
      title: 'Car Loan',
      tagline: 'Drive Away in Your Preferred Vehicle',
      rateFrom: '8.75%* p.a.',
      tenureMax: 'Up to 8 Years',
      amountMax: 'Up to 100% On-Road',
      description: 'Competitive financing for new passenger cars, luxury sedans, electric vehicles (EVs), and certified pre-owned vehicles with minimal down payments.',
      iconName: 'car',
      benefits: [
        'Up to 100% on-road financing with select bank partners',
        'Special discounted rates for electric vehicle (EV) purchases',
        'Instant pre-approved offers for prime credit scores',
        'Zero foreclosure penalty after 12 months with select banks',
      ],
      idealFor: 'New & used car buyers, corporate fleet acquisition',
    },
    {
      id: 'lap-loan',
      title: 'Loan Against Property (LAP)',
      tagline: 'Unlock True Value from Real Estate',
      rateFrom: '9.00%* p.a.',
      tenureMax: 'Up to 20 Years',
      amountMax: 'Up to ₹25 Crore',
      description: 'Leverage the market equity of your residential, commercial, or industrial property to raise substantial long-term capital at lower interest rates.',
      iconName: 'building',
      benefits: [
        'Significantly lower interest rate than unsecured loans',
        'Higher loan-to-value (LTV) ratio up to 75%',
        'Retain complete ownership and usage of the property',
        'Flexible usage of funds for business or personal goals',
      ],
      idealFor: 'Property owners seeking substantial low-cost capital',
    },
    {
      id: 'govt-funding',
      title: 'Govt Funding & Subsidies',
      tagline: 'Sovereign-Backed Growth Catalysts',
      rateFrom: 'As per Govt Norms',
      tenureMax: 'Up to 10 Years',
      amountMax: 'Up to ₹50 Lakh Subsidy',
      description: 'End-to-end liaisoning for flagship Indian government credit guarantee and capital subsidy schemes including PMEGP, CGTMSE, MUDRA, and CGSS.',
      iconName: 'landmark',
      benefits: [
        'Up to 35% government capital subsidy on project cost',
        'Collateral-free credit backed by government guarantee trust',
        'Complete project report (DPR) preparation support',
        'Direct tracking through official government portals',
      ],
      idealFor: 'New entrepreneurs, rural/urban micro-enterprises, startups',
    },
  ];

  const [activeCategory, setActiveCategory] = useState<'all' | 'property' | 'business' | 'retail'>('all');

  const getIcon = (name: string) => {
    switch (name) {
      case 'home':
        return <Home className="w-6 h-6 text-[#E5A93C]" />;
      case 'user':
        return <User className="w-6 h-6 text-[#E5A93C]" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-[#E5A93C]" />;
      case 'car':
        return <Car className="w-6 h-6 text-[#E5A93C]" />;
      case 'building':
        return <Building className="w-6 h-6 text-[#E5A93C]" />;
      case 'landmark':
        return <Landmark className="w-6 h-6 text-[#E5A93C]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E5A93C]" />;
    }
  };

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'property') return s.id === 'home-loan' || s.id === 'lap-loan';
    if (activeCategory === 'business') return s.id === 'business-loan' || s.id === 'project-loan' || s.id === 'govt-funding';
    if (activeCategory === 'retail') return s.id === 'personal-loan' || s.id === 'car-loan';
    return true;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0A1C44] bg-[#E5A93C]/15 px-3.5 py-1 rounded-full border border-[#E5A93C]/30">
            <span>Our Financial Offerings</span>
          </div>
          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1C44] tracking-tight">
            Tailored Loan Solutions for Every Milestone
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From your family's first residence to high-scale business expansion, we match you with the optimal lender across our 120+ banking network.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Products (7)' },
              { id: 'property', label: 'Home & Real Estate' },
              { id: 'business', label: 'Business & MSME' },
              { id: 'retail', label: 'Personal & Vehicle' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0A1C44] text-white shadow-md shadow-[#0A1C44]/20 border border-[#E5A93C]/40'
                    : 'bg-white text-slate-600 hover:text-[#0A1C44] hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredServices.map((service) => (
            <TiltServiceCard
              key={service.id}
              service={service}
              icon={getIcon(service.iconName)}
              onGetQuote={() => onOpenApplyModal(service.title)}
            />
          ))}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#060F26] via-[#0A1C44] to-[#0D2459] text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#E5A93C]/35 shadow-xl">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="font-serif-display text-xl sm:text-2xl font-bold text-white">Need a Custom Financial Arrangement?</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Our chartered finance team reviews complex profiles, balance sheets, and unlisted collateral for project debt up to ₹50 Crore.
            </p>
          </div>
          <button
            onClick={() => onOpenApplyModal('Custom Financial Arrangement')}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-95 shadow-md shadow-[#E5A93C]/20 transition-all shrink-0 cursor-pointer"
          >
            Request Custom Evaluation
          </button>
        </div>

      </div>
    </section>
  );
};

// 3D Tilt Card Subcomponent
interface TiltCardProps {
  service: ServiceItem;
  icon: React.ReactNode;
  onGetQuote: () => void;
}

const TiltServiceCard: React.FC<TiltCardProps> = ({ service, icon, onGetQuote }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="perspective-1000 h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="h-full rounded-2xl bg-white p-7 flex flex-col justify-between border transition-all duration-300 ease-out group"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'translateY(-6px)' : ''}`,
          boxShadow: isHovered
            ? '0 20px 35px -10px rgba(10, 28, 68, 0.16), 0 0 20px 2px rgba(229, 169, 60, 0.2)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
          borderColor: isHovered ? '#E5A93C' : '#E2E8F0',
        }}
      >
        <div>
          {/* Card Top: Icon & Rate Badge */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1C44] to-[#112C6E] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              {icon}
            </div>
            <div className="text-right">
              <span className="text-[10px] font-semibold uppercase text-slate-500 block">Starting At</span>
              <span className="text-sm font-bold text-[#B87B19] bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30">
                {service.rateFrom}
              </span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-xl font-bold font-serif-display text-[#0A1C44] group-hover:text-[#112C6E] transition-colors">
            {service.title}
          </h3>
          <p className="text-xs font-semibold text-emerald-700 mt-0.5">
            {service.tagline}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            {service.description}
          </p>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-medium">Max Tenure</span>
              <span className="font-bold text-slate-800">{service.tenureMax}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase font-medium">Loan Amount</span>
              <span className="font-bold text-slate-800">{service.amountMax}</span>
            </div>
          </div>

          {/* Key Benefits List */}
          <div className="space-y-2 mb-6">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Key Advantages:</span>
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card Actions: Separate Page Link & Fast Quote */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
          {(() => {
            const serviceSlug =
              service.id === 'lap-loan'
                ? 'loan-against-property'
                : service.id === 'govt-funding'
                ? ''
                : service.id;
            const targetUrl =
              service.id === 'govt-funding'
                ? '/government-schemes'
                : `/services/${serviceSlug}`;

            return (
              <Link
                to={targetUrl}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#0A1C44] bg-slate-100 hover:bg-[#0A1C44] hover:text-white rounded-xl transition-all duration-200 border border-slate-200 text-center"
              >
                <span>Full Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            );
          })()}

          <button
            onClick={onGetQuote}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold text-[#060F26] bg-gold-gradient hover:brightness-105 active:scale-95 rounded-xl transition-all duration-300 shadow-sm cursor-pointer group/btn"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
