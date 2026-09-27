export interface LoanDetail {
  slug: string;
  id: string;
  title: string;
  tagline: string;
  badge: string;
  rateFrom: string;
  tenureMax: string;
  amountMax: string;
  processingFee: string;
  approvalSpeed: string;
  iconName: string;
  heroSummary: string;
  overview: string[];
  subTypes: { title: string; desc: string }[];
  keyBenefits: string[];
  eligibility: {
    age: string;
    cibil: string;
    income: string;
    employment: string;
    nationality: string;
  };
  documents: {
    category: string;
    items: string[];
  }[];
  processSteps: {
    step: number;
    title: string;
    desc: string;
  }[];
  partnerBanks: {
    name: string;
    rate: string;
    maxTenure: string;
    processingFee: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const LOANS_DATA: Record<string, LoanDetail> = {
  'home-loan': {
    slug: 'home-loan',
    id: 'home-loan',
    title: 'Home Loan',
    tagline: 'Your Dream Home, Our Priority',
    badge: 'Most Popular',
    rateFrom: '8.35%* p.a.',
    tenureMax: 'Up to 30 Years',
    amountMax: 'Up to ₹10 Crore',
    processingFee: '0.25% - 0.50% (Zero upfront)',
    approvalSpeed: '48 to 72 Hours',
    iconName: 'home',
    heroSummary:
      'Buy, construct, renovate, or transfer your existing housing loan with our network of 120+ leading Banks and Housing Finance Companies (HFCs) at industry-lowest interest rates.',
    overview: [
      'Shree Services Pvt Ltd simplifies your journey to home ownership across Greater Noida West, Noida, Delhi NCR, and nationwide. Whether you are buying an apartment from a reputed builder, building a custom home on a freehold plot, or expanding your current residence, our experienced mortgage advisors structure the optimal loan package for you.',
      'We also specialize in Home Loan Balance Transfers with Top-Up loans, allowing you to switch high-cost loans to lower rates while securing additional funds for interior decoration or personal investments.',
      'Our dedicated doorstep relationship officers handle complete technical and legal title scrutiny, ensuring full safety of your property transaction with zero stress.'
    ],
    subTypes: [
      {
        title: 'Home Purchase Loan',
        desc: 'For buying newly constructed apartments, ready-to-move builder floors, and resale residential flats with up to 90% LTV financing.'
      },
      {
        title: 'Plot + Construction Loan',
        desc: 'Composite financing for purchasing a residential residential plot and constructing your dream bungalow or villa stage by stage.'
      },
      {
        title: 'Home Renovation & Extension',
        desc: 'Low-interest funds for interior improvements, modular kitchens, structural additions, tiling, or terrace expansions.'
      },
      {
        title: 'Balance Transfer + Top-Up',
        desc: 'Transfer high-interest loans from your current lender to a lower rate, plus obtain surplus top-up capital up to 100% of existing loan.'
      }
    ],
    keyBenefits: [
      'Interest rates starting from 8.35%* linked to RBI Repo Rate',
      'Flexible extended repayment tenure up to 30 years for manageable EMIs',
      'Financing up to 75% to 90% of registered property value',
      'Assistance with PMAY interest subsidy for eligible first-time home buyers',
      'Doorstep document pickup and personal banking liaison across Greater Noida/NCR',
      'Zero prepayment or foreclosure charges on floating interest rate home loans'
    ],
    eligibility: {
      age: '21 to 65 years (at loan maturity)',
      cibil: '680+ (750+ qualifies for prime interest discount)',
      income: 'Minimum ₹25,000/month for salaried; ₹3 Lakhs/year net profit for self-employed',
      employment: 'Salaried: Min 2 years total experience (1 yr current). Self-employed: Min 2 years vintage',
      nationality: 'Indian Resident / NRI / PIO'
    },
    documents: [
      {
        category: 'KYC & Identity Documents',
        items: [
          'Aadhaar Card, PAN Card, Voter ID / Passport',
          '2 Passport-size color photographs',
          'Current utility bill or rental agreement for local address proof'
        ]
      },
      {
        category: 'Financial Documents (Salaried)',
        items: [
          'Latest 3 months salary slips with official company stamp',
          'Form 16 / ITR for past 2 assessment years',
          'Latest 6 months salary bank account statement'
        ]
      },
      {
        category: 'Financial Documents (Self-Employed / Business)',
        items: [
          'Last 2 to 3 years ITR with computation of income, P&L, and balance sheet (CA audited if applicable)',
          'Last 12 months primary operative business & personal bank statements',
          'GST registration certificate & last 12 months GST returns (GSTR-3B)'
        ]
      },
      {
        category: 'Property Documents',
        items: [
          'Allotment letter / Sale deed / Agreement to sell with builder/seller',
          'Payment receipts to builder or previous chain of title deeds (minimum 30 years chain)',
          'Approved layout plan and sanction map by local development authority (e.g., GNIDA, NOIDA, DDA)'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Loan Eligibility Scan',
        desc: 'Our senior loan advisor analyzes your income, existing obligations, and property type to match you with top 3 banks offering the lowest ROI.'
      },
      {
        step: 2,
        title: 'Doorstep Documentation & File Login',
        desc: 'Our executive collects your KYC, income proofs, and property dossier, submitting verified files to your chosen bank branch.'
      },
      {
        step: 3,
        title: 'Credit & Property Verification',
        desc: 'Bank conducts technical inspection and legal title evaluation of the flat or plot within 24 to 48 hours.'
      },
      {
        step: 4,
        title: 'Sanction Letter & Disbursement',
        desc: 'Formal sanction letter issued. Upon signing loan agreement, payment cheque/DD is disbursed directly to builder or seller.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India (SBI)', rate: '8.40% - 9.15%', maxTenure: '30 Years', processingFee: 'Min ₹2,000' },
      { name: 'HDFC Bank', rate: '8.50% - 9.25%', maxTenure: '30 Years', processingFee: 'Up to 0.50%' },
      { name: 'ICICI Bank', rate: '8.60% - 9.35%', maxTenure: '30 Years', processingFee: '0.50%' },
      { name: 'LIC Housing Finance', rate: '8.45% - 9.40%', maxTenure: '30 Years', processingFee: 'Competitive' },
      { name: 'Bank of Baroda', rate: '8.40% - 9.20%', maxTenure: '30 Years', processingFee: 'Special Offers' }
    ],
    faqs: [
      {
        q: 'What is the maximum loan amount I can get for a flat in Greater Noida West?',
        a: 'Banks usually fund between 75% and 90% of the total property valuation, depending on loan quantum. For loans up to ₹30 Lakhs, up to 90% can be funded; for loans above ₹75 Lakhs, typically 75% to 80% is sanctioned based on your net disposable income (FOIR).'
      },
      {
        q: 'Can a co-applicant be added to increase the sanctioned loan amount?',
        a: 'Yes! Adding an earning co-applicant—such as your spouse, parents, or son/daughter—significantly increases your cumulative borrowing power and can also unlock dual tax benefits under Section 80C and Section 24(b).'
      },
      {
        q: 'Does Shree Services charge any advance fees or consultation fee?',
        a: 'No. Shree Services Pvt Ltd operates with 100% transparency. We do not demand any cash or upfront fee from borrowers. Bank processing fees are paid directly to the lending institution via official account payee draft or online bank payment link.'
      },
      {
        q: 'How long does the entire home loan approval take?',
        a: 'In-principle credit sanctions usually take 48 to 72 hours. Complete legal, technical, and property disbursements take between 5 to 7 working days once all property chain papers are provided.'
      }
    ]
  },

  'personal-loan': {
    slug: 'personal-loan',
    id: 'personal-loan',
    title: 'Personal Loan',
    tagline: 'Instant Unsecured Cash When You Need It',
    badge: 'Fast 24H Sanction',
    rateFrom: '10.25%* p.a.',
    tenureMax: 'Up to 7 Years',
    amountMax: 'Up to ₹50 Lakh',
    processingFee: '1.0% - 2.5%',
    approvalSpeed: '24 to 48 Hours',
    iconName: 'user',
    heroSummary:
      'Zero-collateral personal cash loans tailored for salaried professionals and self-employed consultants. Fast digital approval, minimal paperwork, and flexible end-use.',
    overview: [
      'A Personal Loan through Shree Services is an all-purpose unsecured loan that requires zero mortgages, guarantors, or pledged assets. Whether you are funding a high-profile destination wedding, consolidating high-interest credit card dues, funding medical emergency treatments, or taking an overseas family vacation, we match you with prime bank offers.',
      'Our direct tie-ups with tier-1 banks (HDFC, ICICI, Axis, Kotak, Standard Chartered, Bajaj Finserv) allow us to access special relationship corporate rates and waiver on standard processing fees.',
      'Enjoy complete flexibility: pay in fixed monthly installments over 12 to 84 months with no questions asked about end-use.'
    ],
    subTypes: [
      {
        title: 'Wedding & Celebration Loan',
        desc: 'Fund grand banquet hall bookings, catering, jewelry, and celebration expenses without draining emergency savings.'
      },
      {
        title: 'Debt Consolidation Loan',
        desc: 'Combine multiple credit card balances and high-interest microloans into a single, low-interest structured monthly EMI.'
      },
      {
        title: 'Medical Emergency Loan',
        desc: 'Immediate emergency liquidity to cover critical hospital bills, treatments, or procedures not fully covered by mediclaim.'
      },
      {
        title: 'Home Renovation & Furnishing',
        desc: 'Quick cash for premium interiors, modern furniture, and smart appliances without putting a lien on your property.'
      }
    ],
    keyBenefits: [
      '100% unsecured credit — no collateral, house deeds, or gold jewelry pledge',
      'Fast sanction within 24 hours for applicants with strong CIBIL profiles',
      'High borrowing ceiling up to ₹50 Lakhs for prime corporate salaried employees',
      'Transparent repayment schedule from 1 year to 7 years',
      'Convenient digital verification via Aadhaar e-KYC and net banking statement fetching',
      'Part-prepayment and premature foreclosure facilities available'
    ],
    eligibility: {
      age: '21 to 58 years',
      cibil: '650+ (720+ preferred for best interest bracket)',
      income: 'Minimum ₹20,000/month net in bank account',
      employment: 'Minimum 1 year total corporate work experience, with at least 6 months at current company',
      nationality: 'Indian Resident'
    },
    documents: [
      {
        category: 'Identity & Address Proof',
        items: ['PAN Card', 'Aadhaar Card', 'Passport / Driving License', 'Rental Agreement / Electricity Bill']
      },
      {
        category: 'Income Documentation',
        items: [
          'Latest 3 months salary slips with employer logo & stamp',
          'Latest 6 months bank statement showing regular salary credit',
          'Company Employee ID Card',
          'Latest Form 16 / ITR'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Instant Online Profile Assessment',
        desc: 'Submit your basic salary details, employer name, and city. We assess instant eligibility across 15+ personal loan lenders.'
      },
      {
        step: 2,
        title: 'Offer Selection & Best Rate Lock',
        desc: 'Choose the lowest interest rate and tenure combination that matches your monthly cash flow.'
      },
      {
        step: 3,
        title: 'E-Verification & File Processing',
        desc: 'Digital verification of Aadhaar and bank statements through secure banking API integrations.'
      },
      {
        step: 4,
        title: 'Instant Direct Bank Credit',
        desc: 'E-sign agreement and the sanctioned loan amount is credited straight to your operative bank account.'
      }
    ],
    partnerBanks: [
      { name: 'HDFC Bank', rate: '10.50% - 15.00%', maxTenure: '5 - 6 Years', processingFee: 'Competitive' },
      { name: 'ICICI Bank', rate: '10.65% - 16.00%', maxTenure: '6 Years', processingFee: 'Flat offers' },
      { name: 'Kotak Mahindra Bank', rate: '10.75% - 15.50%', maxTenure: '5 Years', processingFee: '0.99% - 2%' },
      { name: 'Bajaj Finserv', rate: '11.00% - 17.00%', maxTenure: '7 Years', processingFee: 'Flexi Option' },
      { name: 'Axis Bank', rate: '10.75% - 15.75%', maxTenure: '5 Years', processingFee: 'Standard' }
    ],
    faqs: [
      {
        q: 'Can I apply for a personal loan if I have an existing home loan or car loan?',
        a: 'Yes, as long as your Fixed Obligation to Income Ratio (FOIR) is within comfortable limits (usually total monthly EMIs including the proposed personal loan should not exceed 50% to 60% of your net monthly earnings).'
      },
      {
        q: 'Is there any restriction on how I spend the sanctioned personal loan funds?',
        a: 'No. You are free to utilize the funds for any lawful personal or commercial purpose—such as education, weddings, house renovation, travel, or debt consolidation.'
      },
      {
        q: 'How quickly can the money be disbursed?',
        a: 'For pre-approved or clean salaried profiles, disbursements can take place within 24 to 48 hours of submitting complete salary slips and bank statements.'
      }
    ]
  },

  'business-loan': {
    slug: 'business-loan',
    id: 'business-loan',
    title: 'Business Loan',
    tagline: 'Fueling Commercial Growth & Cashflow',
    badge: 'High Quantum',
    rateFrom: '11.50%* p.a.',
    tenureMax: 'Up to 8 Years',
    amountMax: 'Up to ₹20 Crore',
    processingFee: '0.75% - 2.0%',
    approvalSpeed: '3 to 5 Days',
    iconName: 'briefcase',
    heroSummary:
      'Structured working capital, term loans, machinery funding, Overdraft (OD), and Cash Credit (CC) limits for manufacturers, traders, retailers, and service enterprises.',
    overview: [
      'Accelerating business growth in today’s competitive market requires timely capital infusion. Shree Services Pvt Ltd is the trusted financial bridge for MSMEs, manufacturing plants, wholesale traders, service providers, and startups across Delhi NCR and India.',
      'We offer both unsecured business loans up to ₹75 Lakhs and secured structured credit lines up to ₹20 Crores. Our team works hand-in-hand with your chartered accountant to evaluate your GST turnover, banking transactions, and order book, structuring an optimal debt instrument that does not strain your operating cash cycle.',
      'We also assist in leveraging sovereign guarantee covers like CGTMSE so eligible enterprises can access collateral-free credit up to ₹5 Crores.'
    ],
    subTypes: [
      {
        title: 'Working Capital Facility (CC / OD)',
        desc: 'Revolving Cash Credit or Overdraft facility against stock, debtors, or turnover to manage ongoing operational costs and raw material cycles.'
      },
      {
        title: 'Machinery & Equipment Financing',
        desc: 'Term loans specifically for purchasing industrial plant equipment, medical gear, CNC machines, or commercial printing units.'
      },
      {
        title: 'Unsecured Business Expansion Loan',
        desc: 'Collateral-free liquidity based purely on GST revenue and banking health for opening new retail outlets, hiring, or marketing.'
      },
      {
        title: 'Letter of Credit (LC) & Bank Guarantee (BG)',
        desc: 'Trade finance instruments to establish credibility with domestic and international vendors and participate in government tenders.'
      }
    ],
    keyBenefits: [
      'Flexible credit limits designed around your unique operating working capital cycle',
      'Unsecured borrowing up to ₹75 Lakhs without hypothecating personal property',
      'High-ticket project financing up to ₹20 Crores with competitive interest rates',
      'Sanctions evaluated on GST filing consistency, banking velocity, and profit trends',
      'Option for interest-only servicing on revolving overdraft accounts',
      'Complete liaisoning with leading public sector and private institutional lenders'
    ],
    eligibility: {
      age: '24 to 65 years',
      cibil: '680+ for promoters & clean commercial credit history (CMR 1 to 5)',
      income: 'Minimum annual turnover of ₹30 Lakhs (minimum 1 year GST returns)',
      employment: 'Minimum 2 years of active business operations in the same trade line',
      nationality: 'Proprietorship, Partnership, LLP, Private Limited, or Public Limited Indian entities'
    },
    documents: [
      {
        category: 'Business Legal Constitution',
        items: [
          'Certificate of Incorporation / Partnership Deed / Shop & Establishment Certificate',
          'Udyam / MSME Registration Certificate',
          'GST Registration Certificate & PAN Card of business entity',
          'KYC of all directors, partners, or proprietor'
        ]
      },
      {
        category: 'Financial Statements',
        items: [
          'Audited Balance Sheet & Profit & Loss statements for past 2 to 3 years with CA audit report & Tax Audit',
          'Computation of Income and latest 2-3 years ITR of business and promoters',
          'Latest 12 months GSTR-1 and GSTR-3B filed returns',
          'Latest 12 months primary operative current account bank statements'
        ]
      },
      {
        category: 'Collateral / Project Proof (if secured)',
        items: [
          'Proforma invoice or quotation for machinery to be financed',
          'Property title deeds for collateral mortgage (if applying for credit lines above ₹5 Crore)'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Financial Health & Ratio Analysis',
        desc: 'Our enterprise finance specialists analyze your balance sheet, DSCR, current ratio, and banking turnover to determine optimal debt capacity.'
      },
      {
        step: 2,
        title: 'Credit Memorandum Preparation',
        desc: 'We prepare a bank-compliant Credit Proposal Note highlighting your business strengths, market share, and repayment safety.'
      },
      {
        step: 3,
        title: 'Banking Presentation & Field Inspection',
        desc: 'Bank managers and credit risk teams conduct factory / office physical inspection and promoter interview.'
      },
      {
        step: 4,
        title: 'Sanction, Documentation & Limit Activation',
        desc: 'Formal sanction issued with competitive ROI and drawing power terms. Account limits activated within 48 hours of agreement execution.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India (SME Branch)', rate: '9.25% - 11.50%', maxTenure: '7 Years', processingFee: 'Competitive' },
      { name: 'Canara Bank / PNB', rate: '9.50% - 11.75%', maxTenure: '7 Years', processingFee: 'Standard' },
      { name: 'HDFC Bank Enterprise Banking', rate: '10.50% - 13.50%', maxTenure: '5 Years', processingFee: '1.0% - 1.5%' },
      { name: 'ICICI Bank SME', rate: '10.75% - 14.00%', maxTenure: '5 Years', processingFee: '1.0%' },
      { name: 'Tata Capital / Bajaj Finserv', rate: '12.00% - 16.00%', maxTenure: '4 - 5 Years', processingFee: 'Custom' }
    ],
    faqs: [
      {
        q: 'Can a newly registered business with less than 2 years vintage get a loan?',
        a: 'For new businesses, government schemes like PMEGP and MUDRA (Shishu/Kishor) or CGSS for DPIIT startups are ideal. For standard commercial bank business loans, at least 12 to 24 months of verified GST sales are generally required.'
      },
      {
        q: 'What is the key difference between a Term Loan and a Cash Credit (CC) limit?',
        a: 'A Term Loan is disbursed in a lump sum for capital investments (machinery, building) and repaid via fixed monthly EMIs. A Cash Credit limit is a running overdraft where interest is charged only on the exact daily amount drawn, making it ideal for managing inventory and supplier payments.'
      },
      {
        q: 'Can Shree Services assist in making our balance sheet bank-ready?',
        a: 'Yes. Our team reviews your financial statements and guides your accounts team on optimizing ratios (such as current ratio and debt-equity ratio) to ensure highest approval rates.'
      }
    ]
  },

  'car-loan': {
    slug: 'car-loan',
    id: 'car-loan',
    title: 'Car & Auto Loan',
    tagline: 'Drive Away in Your Preferred Vehicle',
    badge: 'Up to 100% On-Road',
    rateFrom: '8.75%* p.a.',
    tenureMax: 'Up to 8 Years',
    amountMax: 'Up to 100% On-Road',
    processingFee: '₹1,500 - ₹3,500 (Flat)',
    approvalSpeed: 'Same Day Sanction',
    iconName: 'car',
    heroSummary:
      'Finance your brand new dream sedan, SUV, electric vehicle (EV), luxury car, or certified pre-owned automobile with instant approvals and minimal down payment.',
    overview: [
      'Whether you are purchasing your family’s first hatchback, upgrading to a premium SUV, transitioning to an eco-friendly Electric Vehicle (EV), or acquiring a pre-owned luxury car, Shree Services Pvt Ltd delivers lightning-fast auto financing.',
      'We work directly with authorized automotive dealerships and all premier banks across Delhi NCR, securing exclusive manufacturer-tie-up interest concessions, zero foreclosure charges after 12 months, and on-road funding that covers registration, road tax, and comprehensive insurance.'
    ],
    subTypes: [
      {
        title: 'New Car Financing',
        desc: 'Up to 100% on-road funding on all major car brands with flexible repayment up to 7 or 8 years.'
      },
      {
        title: 'Electric Vehicle (EV) Special Loan',
        desc: 'Green auto loans with discounted interest rates and tax incentives under Section 80EEB for electric 4-wheelers.'
      },
      {
        title: 'Pre-Owned / Used Car Loan',
        desc: 'Financing for certified second-hand vehicles up to 80%-85% of market valuation with transparent transfer support.'
      },
      {
        title: 'Luxury Car Financing',
        desc: 'Tailored luxury car debt facilities with bullet repayments or customized step-up EMIs for high net worth individuals.'
      }
    ],
    keyBenefits: [
      'Up to 100% on-road financing covering ex-showroom, road tax, and insurance',
      'Competitive floating and fixed interest rates starting at 8.75%*',
      'Extended repayment period up to 8 years for ultra-low monthly EMIs',
      'Instant digital sanction letter ready before visiting the car showroom',
      'Special discounted interest rate slabs for women drivers and EV buyers',
      'Minimal paperwork with doorstep executive assistance'
    ],
    eligibility: {
      age: '21 to 65 years',
      cibil: '700+ for fast auto-sanction',
      income: 'Minimum ₹25,000/month net for salaried; ₹3 Lakhs/year gross total income for self-employed',
      employment: 'Salaried: Min 1 year continuous employment. Self-employed: Min 2 years business vintage',
      nationality: 'Indian Resident'
    },
    documents: [
      {
        category: 'Personal KYC',
        items: ['PAN Card', 'Aadhaar Card / Passport', 'Utility bill or Rent agreement for residence proof']
      },
      {
        category: 'Income Proof',
        items: [
          'Salaried: 3 months salary slips, 6 months bank statements, Form 16',
          'Self-Employed: 2 years ITR with computation, 6 months bank statement'
        ]
      },
      {
        category: 'Vehicle Quotation',
        items: [
          'Proforma invoice / Price quotation from authorized automobile dealer',
          'RC copy, seller NOC & insurance copy (for used car loans)'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Choose Vehicle & Request Quotation',
        desc: 'Pick your preferred car model and obtain the official price quotation from the authorized dealership.'
      },
      {
        step: 2,
        title: 'Instant Online Eligibility Check',
        desc: 'We match your salary profile with banks offering special seasonal or model-specific interest rate discounts.'
      },
      {
        step: 3,
        title: 'Paperless Approval',
        desc: 'Submit income documents digitally. Loan sanction letter is delivered on the same day.'
      },
      {
        step: 4,
        title: 'Showroom Delivery',
        desc: 'Bank issues delivery order / disbursement cheque directly to the dealership so you can drive home your car immediately.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India (Car Loan)', rate: '8.75% - 9.30%', maxTenure: '7 Years', processingFee: 'Nil on promo' },
      { name: 'HDFC Bank Auto Loan', rate: '8.85% - 9.45%', maxTenure: '7 - 8 Years', processingFee: 'Flat offer' },
      { name: 'ICICI Bank Auto Loan', rate: '8.90% - 9.50%', maxTenure: '7 Years', processingFee: 'Standard' },
      { name: 'Bank of Baroda', rate: '8.80% - 9.35%', maxTenure: '7 Years', processingFee: 'Low' },
      { name: 'Axis Bank', rate: '8.95% - 9.75%', maxTenure: '7 Years', processingFee: 'Nominal' }
    ],
    faqs: [
      {
        q: 'Does a car loan fund only the ex-showroom price or the on-road price?',
        a: 'Through Shree Services, our top partner banks offer up to 100% On-Road financing for eligible salaried and professional profiles, covering ex-showroom price, RTO road taxes, insurance premiums, and extended warranties.'
      },
      {
        q: 'Can I sell my car before completing the loan tenure?',
        a: 'Yes, you can sell your car at any time by requesting a foreclosure statement from the lender, clearing the outstanding principal, obtaining an official NOC, and removing hypothecation at the RTO.'
      }
    ]
  },

  'loan-against-property': {
    slug: 'loan-against-property',
    id: 'lap-loan',
    title: 'Loan Against Property (LAP)',
    tagline: 'Unlock True Value from Real Estate',
    badge: 'High Value / Low Rate',
    rateFrom: '9.00%* p.a.',
    tenureMax: 'Up to 20 Years',
    amountMax: 'Up to ₹25 Crore',
    processingFee: '0.50% - 1.0%',
    approvalSpeed: '4 to 7 Days',
    iconName: 'building',
    heroSummary:
      'Leverage the hidden equity in your residential house, commercial office, showroom, or industrial factory plot to secure low-interest, high-quantum capital while continuing to occupy your property.',
    overview: [
      'Loan Against Property (also known as a Mortgage Loan) is one of the most cost-effective and versatile financing mechanisms available in India. Because the loan is backed by physical real estate collateral, banks offer substantially lower interest rates and longer repayment tenures compared to unsecured business loans.',
      'Shree Services Pvt Ltd specializes in complex LAP structuring across Greater Noida West, Noida, Greater Noida, Ghaziabad, and Delhi NCR. We accept residential apartments, independent bungalows, commercial shops, corporate office floors, and approved industrial plots.',
      'You retain 100% legal ownership and physical possession of your property throughout the tenure.'
    ],
    subTypes: [
      {
        title: 'Residential Property Mortgage',
        desc: 'Mortgage your freehold or leasehold residential apartment, kothi, or villa to raise substantial low-cost liquidity.'
      },
      {
        title: 'Commercial Property LAP',
        desc: 'Unlock equity from your retail shop, high-street showroom, or commercial office floor up to 65%-70% of market value.'
      },
      {
        title: 'Industrial Property & Warehouse Loan',
        desc: 'Specialized mortgage funding on industrial plots, manufacturing sheds, and logistic godowns.'
      },
      {
        title: 'Lease Rental Discounting (LRD)',
        desc: 'Discount future long-term rental cash flows from corporate tenants, banks, or retail brands occupying your property.'
      }
    ],
    keyBenefits: [
      'Significantly lower interest rates (starting at 9.00%*) compared to unsecured business credit',
      'Substantial loan amounts up to ₹25 Crores based on property market valuation',
      'Comfortable extended tenures up to 15 to 20 years to keep EMIs easily manageable',
      'Zero usage restriction: utilize funds for business scaling, child foreign studies, or debt buyout',
      'Retain complete possession and normal commercial/residential use of the property',
      'Available for both self-occupied and leased properties'
    ],
    eligibility: {
      age: '23 to 65 years at loan maturity',
      cibil: '680+',
      income: 'Salaried: Min ₹40,000/month. Self-Employed: Annual net profit min ₹4 Lakhs with healthy banking',
      employment: 'Salaried min 3 years total experience; Self-employed min 3 years business operations',
      nationality: 'Indian Resident / NRI with property in India'
    },
    documents: [
      {
        category: 'Borrower KYC & Financials',
        items: [
          'Identity and address proofs of all property co-owners and applicants',
          'Salaried: 6 months salary slips, 6 months bank statement, Form 16',
          'Self-Employed: 3 years audited financials, ITR, 12 months bank statements, GST returns'
        ]
      },
      {
        category: 'Complete Property Dossier',
        items: [
          'Registered Sale Deed / Conveyance Deed / Lease Deed in favor of applicant',
          'Previous link deeds tracing complete chain of ownership for past 30 years',
          'Approved building map sanction plan and completion/occupancy certificate (if available)',
          'Latest paid property tax receipt and electricity bills'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Property & Income Screening',
        desc: 'Our mortgage experts assess your property location, circle rate, market rate, and borrower repayment capacity.'
      },
      {
        step: 2,
        title: 'Bank Technical & Legal Scrutiny',
        desc: 'Independent bank empanelled lawyers and civil engineers verify the title chain and conduct on-site physical valuation.'
      },
      {
        step: 3,
        title: 'Credit Approval & Loan Sanction',
        desc: 'Formal sanction issued detailing loan quantum (LTV), interest rate, and monthly installment.'
      },
      {
        step: 4,
        title: 'Mortgage Creation & Fund Release',
        desc: 'Equitable or registered mortgage executed with local sub-registrar. Funds credited to your designated bank account.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India LAP', rate: '9.15% - 10.25%', maxTenure: '15 Years', processingFee: 'Up to 1%' },
      { name: 'HDFC Bank Mortgage', rate: '9.25% - 10.50%', maxTenure: '15 Years', processingFee: '0.50% - 1%' },
      { name: 'ICICI Bank LAP', rate: '9.35% - 10.75%', maxTenure: '15 Years', processingFee: 'Competitive' },
      { name: 'LIC Housing Finance LAP', rate: '9.30% - 10.50%', maxTenure: '15 Years', processingFee: 'Attractive' },
      { name: 'Bajaj Finserv / Tata Capital', rate: '9.75% - 11.50%', maxTenure: '18 - 20 Years', processingFee: 'Flexible' }
    ],
    faqs: [
      {
        q: 'Can I apply for a loan against a property that already has an existing home loan on it?',
        a: 'Yes, this is known as a Balance Transfer + Top-Up LAP. If the property’s current market value has appreciated and your existing loan balance is lower, a new bank can take over the existing debt and disburse the difference as fresh liquid capital.'
      },
      {
        q: 'What percentage of property market value will the bank sanction?',
        a: 'For residential properties, banks sanction up to 65% to 75% of fair market value. For commercial properties, it is typically 50% to 65%, and for industrial plots, between 40% and 55%.'
      }
    ]
  },

  'project-loan': {
    slug: 'project-loan',
    id: 'project-loan',
    title: 'Project & Machinery Loan',
    tagline: 'Empowering Large-Scale Industrial Vision',
    badge: 'Industrial & Capex',
    rateFrom: '9.50%* p.a.',
    tenureMax: 'Up to 10 Years',
    amountMax: 'Up to ₹50 Crore',
    processingFee: '0.50% - 1.25%',
    approvalSpeed: '7 to 14 Days',
    iconName: 'landmark',
    heroSummary:
      'Long-term capital expenditure financing for industrial plant setups, commercial building construction, specialized machine procurement, and infrastructure initiatives.',
    overview: [
      'Establishing a modern manufacturing facility, modernizing legacy machinery, or executing large infrastructure mandates requires structured capex debt with customized moratorium periods. Shree Services Pvt Ltd provides end-to-end Project Finance advisory.',
      'Our team assists in drafting bankable Detailed Project Reports (DPRs), cash flow forecasting, debt-service coverage ratio (DSCR) modeling, and syndicating debt with state-owned industrial finance corporations and commercial banks.',
      'Benefit from structured disbursement schedules synchronized with construction milestones or machinery delivery milestones, along with interest-only moratorium periods during execution.'
    ],
    subTypes: [
      {
        title: 'New Industrial Unit Setup',
        desc: 'Turnkey capex financing covering factory land, civil construction, utility installations, and electrical substations.'
      },
      {
        title: 'Machinery Import & Procurement',
        desc: 'Buyer credit and domestic term loans for advanced CNC machinery, automation lines, and packaging systems.'
      },
      {
        title: 'Hospital & Healthcare Capex',
        desc: 'Specialized term debt for multi-specialty hospitals, diagnostic imaging centers (MRI/CT), and operation theaters.'
      },
      {
        title: 'Warehouse & Cold Storage Financing',
        desc: 'Agro-processing infrastructure and supply-chain logistics centers with potential central capital subsidies.'
      }
    ],
    keyBenefits: [
      'High-quantum syndicated funding from ₹2 Crore up to ₹50 Crore',
      'Repayment tenure up to 10 years structured around project commercial COD',
      'Flexible moratorium period (repayment holiday) during construction/commissioning phase',
      'Assistance in unlocking state industrial policy incentives and capital investment subsidies',
      'Support with TEV (Techno-Economic Viability) and DPR preparation',
      'Multi-bank consortium syndication for mega industrial footprints'
    ],
    eligibility: {
      age: 'Promoter age 25 to 65 years',
      cibil: 'Clean credit history for both key promoters and existing corporate entity',
      income: 'Viable projected cash flows with DSCR > 1.35x and Debt-Equity ratio within 2:1',
      employment: 'Demonstrated promoter experience in the relevant industry sector',
      nationality: 'Indian Registered Corporate Entities (LLP / Private Limited / Public Limited / Trusts)'
    },
    documents: [
      {
        category: 'Project Dossier',
        items: [
          'Detailed Project Report (DPR) prepared with techno-economic feasibility',
          'Architectural layout, civil cost estimates certified by chartered engineer',
          'Vendor proforma invoices and quotations for key machinery and equipment',
          'Pollution control NOC (State SPCB), industrial land allotment deed, building approvals'
        ]
      },
      {
        category: 'Corporate Financials',
        items: [
          'Last 3 years audited balance sheets, profit & loss, schedules, and auditors reports',
          'Net worth statements of all promoters certified by a Chartered Accountant',
          'Detailed financial model including 5 to 7 year projected P&L, balance sheet, and cash flows',
          'Sanction letters of all existing banking limits'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'DPR & TEV Review',
        desc: 'We examine your project concept, cost of project, means of finance, break-even point, and internal rate of return (IRR).'
      },
      {
        step: 2,
        title: 'Lender Matching & Information Memorandum',
        desc: 'We structure the loan proposal note and pitch to specialized project finance verticals of PSU & Private institutions.'
      },
      {
        step: 3,
        title: 'Joint Site Visit & Lender Committee Presentation',
        desc: 'Bank technical evaluators visit project location and present to the regional/national credit sanction committee.'
      },
      {
        step: 4,
        title: 'Sanction & Tranche-wise Disbursement',
        desc: 'Formal sanction issued with milestones. Funds released directly to contractors and machinery suppliers in agreed tranches.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India (Project Finance Vertical)', rate: '9.40% - 10.80%', maxTenure: '10 Years', processingFee: 'As per norms' },
      { name: 'Bank of Baroda / Canara Bank', rate: '9.50% - 11.00%', maxTenure: '10 Years', processingFee: 'Institutional' },
      { name: 'SIDBI Industrial Capex', rate: '8.80% - 10.25%', maxTenure: '8 - 10 Years', processingFee: 'Concessional' },
      { name: 'Tata Capital / L&T Finance', rate: '10.25% - 12.50%', maxTenure: '7 Years', processingFee: 'Standard' }
    ],
    faqs: [
      {
        q: 'What is a Moratorium period in project financing?',
        a: 'A moratorium (or holiday period) is a timeframe during the construction and commissioning phase where you are not required to repay the principal loan amount. You only service simple interest, allowing your factory to begin commercial production before full EMI servicing begins.'
      },
      {
        q: 'What is the standard promoter contribution required for project loans?',
        a: 'Banks usually expect promoters to bring in 20% to 35% of the total project cost as equity/promoter contribution, with the remaining 65% to 80% financed via long-term debt.'
      }
    ]
  },

  'education-loan': {
    slug: 'education-loan',
    id: 'education-loan',
    title: 'Education Loan',
    tagline: 'Investing in Tomorrow’s Leaders & Scholars',
    badge: 'Study in India & Abroad',
    rateFrom: '8.50%* p.a.',
    tenureMax: 'Up to 15 Years',
    amountMax: 'Up to ₹1.5 Crore',
    processingFee: 'Nil to 1% (Country specific)',
    approvalSpeed: '48 to 72 Hours',
    iconName: 'landmark',
    heroSummary:
      'Fulfill your ambitions for higher education at top-ranked universities in India, USA, UK, Canada, Australia, Germany, and Europe with comprehensive student loan programs.',
    overview: [
      'Quality higher education is the most valuable investment in your career. Shree Services Pvt Ltd provides dedicated overseas and domestic student loan solutions covering 100% of admission tuition fees, living expenses, travel tickets, and study equipment.',
      'We provide both collateral-free education loans up to ₹50 Lakhs for premier global universities and secured education loans up to ₹1.5 Crore for general overseas education.',
      'Enjoy extended repayment tenures up to 15 years, tax deductions on full interest paid under Section 80E with no upper limit, and a repayment holiday throughout the course duration plus 6 to 12 months grace period.'
    ],
    subTypes: [
      {
        title: 'Overseas Higher Education Loan',
        desc: 'Comprehensive funding for Master’s, STEM degrees, and MBA programs in USA, UK, Canada, Australia, and Schengen countries.'
      },
      {
        title: 'Premier Domestic Institutes Loan',
        desc: 'Pre-approved collateral-free loans for students admitted to IITs, IIMs, ISB, AIIMS, and top government engineering colleges.'
      },
      {
        title: 'Collateral-Free Unsecured Student Loan',
        desc: 'Up to ₹40-50 Lakhs based purely on GRE/GMAT scores, university global ranking, and co-applicant financial background.'
      },
      {
        title: 'Vocational & Pilot Training Financing',
        desc: 'Specialized loans for commercial pilot license (CPL) training, aviation academies, and specialized certifications.'
      }
    ],
    keyBenefits: [
      'Comprehensive coverage: tuition fees, hostel, laptop, books, and international flights',
      'No repayment during study period: moratorium of course duration + 6 to 12 months buffer',
      'Uncapped income tax deduction under Section 80E for up to 8 continuous assessment years',
      'No collateral needed up to ₹40-50 Lakhs for Tier-1 global institutions',
      'Pre-visa sanction letters accepted by embassies for fast student visa approvals',
      'Direct disbursement to international university accounts in foreign currency (USD, GBP, EUR)'
    ],
    eligibility: {
      age: 'Student: 18 to 35 years. Co-applicant: 21 to 65 years',
      cibil: 'Co-applicant CIBIL 680+ with steady income',
      income: 'Earning parent/guardian co-applicant with regular salaried or business income',
      employment: 'Confirmed admission offer letter from a recognized domestic or foreign university/college',
      nationality: 'Indian National'
    },
    documents: [
      {
        category: 'Student Documentation',
        items: [
          'Valid Passport, PAN Card, and Aadhaar Card',
          'Official admission offer letter with fee structure from university',
          'Academic records: 10th, 12th, Bachelor degree marksheets and entrance test scores (GRE/GMAT/IELTS/TOEFL)'
        ]
      },
      {
        category: 'Co-Applicant (Parent/Guardian) Documentation',
        items: [
          'KYC documents of parent or legal guardian',
          'Latest 3 months salary slips or 2 years ITR with computation',
          'Latest 6 months bank account statement',
          'Property collateral papers (if loan exceeds unsecured limits)'
        ]
      }
    ],
    processSteps: [
      {
        step: 1,
        title: 'Submit University Admit & Course Details',
        desc: 'Share your admission offer letter and fee schedule. We evaluate university ranking against partner bank tier lists.'
      },
      {
        step: 2,
        title: 'Select Unsecured or Secured Route',
        desc: 'Choose collateral-free option up to ₹50L or secured mortgage route for lowest interest rates.'
      },
      {
        step: 3,
        title: 'Sanction Letter for Visa Embassy',
        desc: 'Receive formal loan sanction letter to demonstrate funds for your student visa application.'
      },
      {
        step: 4,
        title: 'Disbursement Directly to College',
        desc: 'Funds are wired directly to the international university bursar before your semester payment deadline.'
      }
    ],
    partnerBanks: [
      { name: 'State Bank of India (Global Ed-Vantage)', rate: '8.50% - 9.75%', maxTenure: '15 Years', processingFee: '₹10,000' },
      { name: 'HDFC Credila', rate: '9.25% - 11.50%', maxTenure: '14 Years', processingFee: 'Country specific' },
      { name: 'Bank of Baroda (Baroda Scholar)', rate: '8.60% - 9.80%', maxTenure: '15 Years', processingFee: 'Concessional' },
      { name: 'Avanse Financial Services', rate: '10.00% - 12.50%', maxTenure: '12 Years', processingFee: 'Fast Track' },
      { name: 'Axis Bank Education Loan', rate: '9.00% - 11.25%', maxTenure: '15 Years', processingFee: 'Nominal' }
    ],
    faqs: [
      {
        q: 'Does the student need to pay EMIs while studying in college?',
        a: 'No. You are granted a moratorium period that lasts for the entire duration of your academic program plus an additional 6 to 12 months grace period after graduation. Repayment starts only after you start working.'
      },
      {
        q: 'What is the income tax benefit under Section 80E?',
        a: 'Under Section 80E of the Indian Income Tax Act, the entire amount of interest paid on an education loan is deductible from your taxable income with NO upper monetary ceiling for up to 8 years.'
      }
    ]
  }
};
