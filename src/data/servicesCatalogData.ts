export interface CatalogServiceItem {
  id: string;
  name: string;
  category: 'loans' | 'cards' | 'insurance' | 'business';
  shortDesc: string;
  badge?: string;
  highlight?: string;
  popular?: boolean;
}

export interface ServiceCategoryGroup {
  id: 'loans' | 'cards' | 'insurance' | 'business';
  title: string;
  tagline: string;
  countText: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    accent: string;
  };
  items: CatalogServiceItem[];
}

export const SIX_PILLARS = [
  {
    id: 'high-payout',
    title: 'HIGH & ATTRACTIVE PAYOUT',
    desc: 'Best-in-class commission slabs and top incentives in the institutional finance market.',
    iconName: 'BadgeDollarSign',
    badge: 'Max Earnings',
  },
  {
    id: 'timely-payout',
    title: '100% TIMELY PAYOUT',
    desc: 'Guaranteed punctual disbursement schedules with completely transparent account settlements.',
    iconName: 'Clock',
    badge: 'On-Time Always',
  },
  {
    id: 'crm-support',
    title: 'DEDICATED CRM SUPPORT',
    desc: 'Advanced digital CRM dashboard for live application tracking, alerts & lead management.',
    iconName: 'MonitorCheck',
    badge: '24/7 Portal',
  },
  {
    id: 'minimal-doc',
    title: 'MINIMAL DOCUMENTATION',
    desc: 'Simplified digital KYC, e-sign protocols, and doorstep document collection assistance.',
    iconName: 'FileCheck',
    badge: 'Zero Hassle',
  },
  {
    id: 'sales-backend',
    title: 'FULL SALES & BACKEND SUPPORT',
    desc: 'Experienced banking underwriters and relationship managers assisting every single case.',
    iconName: 'Headphones',
    badge: 'Expert Team',
  },
  {
    id: 'fast-processing',
    title: 'FAST LOAN PROCESSING',
    desc: 'Priority credit queues across 120+ Banks & NBFCs with express in-principle sanctions.',
    iconName: 'Rocket',
    badge: 'Express TAT',
  },
];

export const CATALOG_CATEGORIES: ServiceCategoryGroup[] = [
  {
    id: 'loans',
    title: 'LOAN SERVICES',
    tagline: '17 Tailored Credit & Debt Solutions',
    countText: '17 Products',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-blue-900/10',
      border: 'border-blue-700/30',
      text: 'text-blue-950',
      badgeBg: 'bg-blue-600 text-white',
      accent: '#0A1C44',
    },
    items: [
      { id: 'personal-loan', name: 'Personal Loan', category: 'loans', shortDesc: 'Instant collateral-free funds up to ₹50L with 24-hr sanction.', popular: true, highlight: 'From 10.25%*' },
      { id: 'business-loan', name: 'Business Loan', category: 'loans', shortDesc: 'Working capital, machinery & term debt up to ₹20 Crore.', popular: true, highlight: 'Up to ₹20 Cr' },
      { id: 'home-loan', name: 'Home Loan', category: 'loans', shortDesc: 'Buy, construct or renovate your dream house with up to 30 yrs tenure.', popular: true, highlight: 'From 8.35%*' },
      { id: 'lap', name: 'Loan Against Property (LAP)', category: 'loans', shortDesc: 'High-value low-rate mortgage funding up to ₹25 Cr against property.', popular: true, highlight: 'Lowest ROI' },
      { id: 'gold-loan', name: 'Gold Loan', category: 'loans', shortDesc: 'Instant liquidity against gold ornaments within 30 mins with safe bank lockers.', highlight: 'Instant Cash' },
      { id: 'vehicle-loan', name: 'Vehicle Loan (Car, Bike, CV)', category: 'loans', shortDesc: 'Up to 100% on-road financing for new/used cars, two-wheelers & commercial fleets.', highlight: '100% On-Road' },
      { id: 'education-loan', name: 'Education Loan', category: 'loans', shortDesc: '100% funding for domestic & international degree courses with moratorium period.', highlight: 'India & Abroad' },
      { id: 'msme-loan', name: 'MSME Loan', category: 'loans', shortDesc: 'Priority sector commercial lending for micro and small manufacturing units.', highlight: 'Priority Sector' },
      { id: 'mudra-loan', name: 'MUDRA Loan (Shishu, Kishore & Tarun)', category: 'loans', shortDesc: 'Government PMMY collateral-free credit up to ₹20 Lakhs for micro-enterprises.', popular: true, highlight: 'Govt PMMY' },
      { id: 'balance-transfer', name: 'Balance Transfer Services', category: 'loans', shortDesc: 'Transfer high-interest Home/LAP/Business loans to partner banks at lower ROI with maximum top-up cash.', popular: true, highlight: 'Save on EMI' },
      { id: 'overdraft-service', name: 'Overdraft (OD) Service', category: 'loans', shortDesc: 'Drop-line & revolving Overdraft (OD) and Cash Credit (CC) limits with interest charged only on daily usage.', popular: true, highlight: 'Revolving OD Limit' },
      { id: 'working-capital', name: 'Working Capital Loan (OD/CC)', category: 'loans', shortDesc: 'Revolving Cash Credit and Overdraft facilities mapped to GST turnover.', highlight: 'OD / CC Limits' },
      { id: 'pmegp-loan', name: 'PMEGP Loan', category: 'loans', shortDesc: 'Prime Minister Employment Generation Programme with 15% to 35% Govt capital subsidy.', popular: true, highlight: 'Up to 35% Subsidy' },
      { id: 'machinery-loan', name: 'Machinery Loan', category: 'loans', shortDesc: 'Capex asset financing for manufacturing plant setup, CNC & heavy industrial tools.', highlight: 'Capex Funding' },
      { id: 'tractor-loan', name: 'Tractor Loan', category: 'loans', shortDesc: 'Specialized farm machinery and tractor loans with flexible agricultural harvest cycles.', highlight: 'Agri Support' },
      { id: 'construction-equipment', name: 'Construction Equipment Loan', category: 'loans', shortDesc: 'Finance for JCBs, excavators, cranes, road rollers, and heavy commercial equipment.', highlight: 'Heavy Fleet' },
      { id: 'startup-loan', name: 'Startup Loan', category: 'loans', shortDesc: 'Early stage DPIIT registered venture debt with credit guarantee under CGSS.', highlight: 'Venture Debt' },
      { id: 'mortgage-loan', name: 'Mortgage Loan', category: 'loans', shortDesc: 'Secured long-tenure credit against residential or commercial real estate equity.', highlight: 'Structured Terms' },
      { id: 'project-finance', name: 'Project Finance', category: 'loans', shortDesc: 'Large greenfield & brownfield infrastructure debt syndication up to ₹50+ Crore.', highlight: 'Up to ₹50Cr+' },
    ],
  },
  {
    id: 'cards',
    title: 'CREDIT CARD SERVICES',
    tagline: '7 Card Portfolios for Rewards, Travel & Business',
    countText: '7 Categories',
    iconName: 'CreditCard',
    colorScheme: {
      bg: 'bg-emerald-900/10',
      border: 'border-emerald-600/30',
      text: 'text-emerald-950',
      badgeBg: 'bg-emerald-600 text-white',
      accent: '#059669',
    },
    items: [
      { id: 'ltf-card', name: 'Lifetime Free Credit Card', category: 'cards', shortDesc: 'Zero annual fee, zero joining fee for lifetime with attractive baseline rewards.', popular: true, highlight: 'Zero Annual Fee' },
      { id: 'premium-card', name: 'Premium Credit Card', category: 'cards', shortDesc: 'Complimentary domestic & international airport lounge access, golf rounds & 24/7 concierge.', popular: true, highlight: 'Airport Lounges' },
      { id: 'business-card', name: 'Business Credit Card', category: 'cards', shortDesc: 'Higher credit limits, extended interest-free cycles and consolidated GST business expense reports.', highlight: 'GST Invoicing' },
      { id: 'cashback-card', name: 'Cashback Credit Card', category: 'cards', shortDesc: 'Direct statement credits with up to 5% flat cashback on utilities, dining & grocery spend.', popular: true, highlight: 'Up to 5% Cashback' },
      { id: 'fuel-card', name: 'Fuel Credit Card', category: 'cards', shortDesc: '1% fuel surcharge waiver plus high multiplier loyalty points at top national fuel stations.', highlight: 'Surcharge Waiver' },
      { id: 'travel-card', name: 'Travel Credit Card', category: 'cards', shortDesc: 'Zero foreign currency markup fees, airline frequent flyer air-miles and hotel privileges.', highlight: 'Zero Forex Fee' },
      { id: 'shopping-card', name: 'Shopping Credit Card', category: 'cards', shortDesc: 'Exclusive co-branded tie-ups with leading e-commerce platforms, fashion portals & hypermarkets.', highlight: 'Online Discounts' },
    ],
  },
  {
    id: 'insurance',
    title: 'INSURANCE SERVICES',
    tagline: '8 Comprehensive Life & Asset Protection Covers',
    countText: '8 Categories',
    iconName: 'Umbrella',
    colorScheme: {
      bg: 'bg-sky-900/10',
      border: 'border-sky-600/30',
      text: 'text-sky-950',
      badgeBg: 'bg-sky-700 text-white',
      accent: '#0284C7',
    },
    items: [
      { id: 'life-insurance', name: 'Life Insurance', category: 'insurance', shortDesc: 'Guaranteed financial safety net with wealth accumulation, endowment & savings plans.', popular: true, highlight: 'Corpus Creation' },
      { id: 'health-insurance', name: 'Health Insurance', category: 'insurance', shortDesc: 'Cashless hospitalisation across 10,000+ top hospitals, daycare treatments & OPD riders.', popular: true, highlight: '10K+ Hospitals' },
      { id: 'motor-insurance', name: 'Motor Insurance (Car, Bike, CV)', category: 'insurance', shortDesc: 'Comprehensive & Third Party covers with zero depreciation and 24x7 roadside towing.', popular: true, highlight: 'Zero-Dep Cover' },
      { id: 'term-insurance', name: 'Term Insurance', category: 'insurance', shortDesc: 'Pure risk coverage up to ₹5 Crore with minimal monthly premium and critical illness add-ons.', popular: true, highlight: 'Up to ₹5 Cr Cover' },
      { id: 'accident-insurance', name: 'Personal Accident Insurance', category: 'insurance', shortDesc: 'Round-the-clock worldwide shield against sudden accidental disability, loss of limbs or death.', highlight: '24x7 Worldwide' },
      { id: 'travel-insurance', name: 'Travel Insurance', category: 'insurance', shortDesc: 'Protection against overseas medical emergencies, lost baggage, passport loss and flight cancellations.', highlight: 'Global Coverage' },
      { id: 'home-insurance', name: 'Home Insurance', category: 'insurance', shortDesc: 'Shield your flat, villa, and home contents against fire, flooding, earthquakes and burglary.', highlight: 'Structure + Contents' },
      { id: 'commercial-insurance', name: 'Commercial Insurance', category: 'insurance', shortDesc: 'Industrial fire, marine transit, factory machinery breakdown, and workmen compensation policy.', highlight: 'Industrial Risks' },
    ],
  },
  {
    id: 'business',
    title: 'BUSINESS SERVICES',
    tagline: '8 Complete Corporate, Tax & Licensing Clearances',
    countText: '8 Services',
    iconName: 'Briefcase',
    colorScheme: {
      bg: 'bg-amber-900/10',
      border: 'border-amber-600/30',
      text: 'text-amber-950',
      badgeBg: 'bg-amber-600 text-white',
      accent: '#D97706',
    },
    items: [
      { id: 'gst-registration', name: 'GST Registration', category: 'business', shortDesc: 'Fast online GSTIN registration, documentation filing, and official certificate issuance.', popular: true, highlight: 'Quick Allotment' },
      { id: 'gst-filing', name: 'GST Filing', category: 'business', shortDesc: 'Error-free monthly (GSTR-1, GSTR-3B) and annual (GSTR-9) return filing with ITC reconciliation.', popular: true, highlight: 'Max ITC Claims' },
      { id: 'udyam-registration', name: 'Udyam Registration', category: 'business', shortDesc: 'Official Govt MSME certificate to unlock bank collateral-free loans, subsidies & tender rights.', popular: true, highlight: 'MSME Benefits' },
      { id: 'pan-tan-services', name: 'PAN / TAN Services', category: 'business', shortDesc: 'Instant corporate e-PAN generation, TAN registration for TDS compliance, and data corrections.', highlight: 'Same-Day Track' },
      { id: 'fssai-registration', name: 'FSSAI Registration', category: 'business', shortDesc: 'Mandatory food safety license for cloud kitchens, restaurants, food processing & grocery stores.', popular: true, highlight: 'Food License' },
      { id: 'dsc-services', name: 'Digital Signature (DSC)', category: 'business', shortDesc: 'Class 3 USB encryption tokens for MCA company incorporation, e-tendering & income tax.', highlight: 'Class 3 Token' },
      { id: 'trade-license', name: 'Trade License', category: 'business', shortDesc: 'Municipal authority legal license to operate commercial retail premises and service establishments.', highlight: 'Local Authority' },
      { id: 'shop-establishment', name: 'Shop & Establishment Registration', category: 'business', shortDesc: 'Labor department mandatory registration certificate for retail stores, commercial offices & units.', highlight: 'Labor Dept Compliance' },
    ],
  },
];
