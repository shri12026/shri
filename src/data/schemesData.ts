export interface SchemeDetail {
  slug: string;
  id: string;
  name: string;
  shortTitle: string;
  fullName: string;
  ministry: string;
  highlight: string;
  maxAmount: string;
  subsidyRate: string;
  interestRate: string;
  nodalAgency: string;
  overview: string[];
  keyPillars: { title: string; desc: string }[];
  subsidyMatrix?: {
    category: string;
    urbanRate: string;
    ruralRate: string;
    ownContribution: string;
  }[];
  eligibility: string[];
  ineligibleProjects?: string[];
  documentsRequired: {
    category: string;
    items: string[];
  }[];
  stepByStepProcess: {
    step: number;
    title: string;
    desc: string;
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const SCHEMES_DATA: Record<string, SchemeDetail> = {
  cgtmse: {
    slug: 'cgtmse',
    id: 'cgtmse',
    name: 'CGTMSE Scheme',
    shortTitle: 'CGTMSE',
    fullName: 'Credit Guarantee Fund Trust for Micro and Small Enterprises',
    ministry: 'Ministry of MSME & SIDBI, Government of India',
    highlight: 'Up to ₹5 Crore Collateral-Free & Third-Party Guarantee-Free Credit',
    maxAmount: '₹5,00,00,000 (₹5 Crore)',
    subsidyRate: 'Guarantee Cover up to 85%',
    interestRate: 'Competitive Base Rate / MCLR + 1% to 2.5%',
    nodalAgency: 'SIDBI (Small Industries Development Bank of India)',
    overview: [
      'The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) was set up by the Ministry of MSME, Government of India and SIDBI to make collateral-free credit a living reality for Indian entrepreneurs. Under this visionary framework, the Trust provides a sovereign guarantee to Member Lending Institutions (MLIs) against credit default.',
      'This eliminates the traditional requirement for mortgaging personal residential property, commercial shops, or agricultural land when seeking business term loans or working capital limits.',
      'Shree Services Pvt Ltd works closely with certified PSU and private sector bank branches in Greater Noida, Noida, Delhi NCR, and across India to structure CGTMSE files, ensuring high approval ratios by preparing comprehensive credit rating appraisals and detailed project viability models.'
    ],
    keyPillars: [
      {
        title: 'Zero Collateral Required',
        desc: 'Borrow up to ₹5 Crore purely on the commercial viability of your manufacturing or service business model.'
      },
      {
        title: 'Up to 85% Guarantee Coverage',
        desc: 'The Trust covers up to 85% of default risk for micro-enterprises up to ₹5 Lakh, women entrepreneurs, and SC/ST promoters.'
      },
      {
        title: 'Composite Term Loan & CC/OD',
        desc: 'Supports both long-term capital expenditure (machinery/civil work) and revolving working capital limits.'
      },
      {
        title: 'Hybrid Security Relaxation',
        desc: 'Borrowers can even combine collateral security for partial exposure and CGTMSE guarantee for the uncovered portion.'
      }
    ],
    eligibility: [
      'New and existing Micro and Small Enterprises (MSEs) as defined under the MSMED Act.',
      'Manufacturing enterprises, service sector companies, software & IT consultancies, hospitals, and educational institutions.',
      'Retail and wholesale trade businesses (now officially eligible up to ₹5 Crore ceiling under revised norms).',
      'Valid Udyam Registration Certificate with PAN-linked GST registration.',
      'Good track record with no prior willful defaults or NPA classifications with any financial institution.'
    ],
    ineligibleProjects: [
      'Medium and Large enterprises (investment in plant/machinery > ₹10 Crore or turnover > ₹50 Crore).',
      'Educational institutions or trusts operating solely under charitable non-commercial frameworks without Udyam.',
      'Agricultural primary farming operations (eligible under separate NABARD/Kisan schemes).'
    ],
    documentsRequired: [
      {
        category: 'Business & KYC Proofs',
        items: [
          'Udyam Registration Certificate (MSME)',
          'PAN Card of entity and all Directors / Partners / Proprietor',
          'Aadhaar Card and address proof of all key promoters',
          'Certificate of Incorporation / Partnership Deed / MoA & AoA'
        ]
      },
      {
        category: 'Financial Statements & Banking',
        items: [
          'Audited Balance Sheet & P&L for past 2-3 years (with all schedules and CA Audit report)',
          'Last 12 months GSTR-1 and GSTR-3B filed returns',
          'Last 12 months primary operative current account bank statements',
          'Latest ITR acknowledgements of entity and promoters'
        ]
      },
      {
        category: 'Project & Viability Reports',
        items: [
          'Detailed Project Report (DPR) highlighting capacity utilization, break-even analysis, and DSCR',
          'Quotations / Proforma Invoices for machinery or equipment to be acquired',
          'Copies of valid factory licenses, pollution NOCs, and trade licenses where applicable'
        ]
      }
    ],
    stepByStepProcess: [
      {
        step: 1,
        title: 'Business Viability Audit & DPR Structuring',
        desc: 'Shree Services audits your balance sheet, projects future cash flows, and drafts a bankable Detailed Project Report.'
      },
      {
        step: 2,
        title: 'Bank MLI Selection & File Submission',
        desc: 'We present your proposal to member lending banks (SBI, Canara, PNB, BOB, Union Bank) with direct CGTMSE desk alignment.'
      },
      {
        step: 3,
        title: 'Credit Evaluation & CGTMSE Portal Inscription',
        desc: 'Upon credit committee clearance, the lender logs your sanctioned proposal on the official CGTMSE digital portal for guarantee approval.'
      },
      {
        step: 4,
        title: 'Guarantee Fee Payment & Fund Disbursement',
        desc: 'Standard nominal annual guarantee fee (0.37% to 1.35%) is debited, and funds are disbursed directly to your operative account.'
      }
    ],
    faqs: [
      {
        q: 'Can an existing business upgrade its existing bank loan to CGTMSE?',
        a: 'Yes, if you are expanding into a new production line or require enhanced working capital without offering additional real estate collateral, you can apply for an incremental limit covered under CGTMSE.'
      },
      {
        q: 'What is the annual guarantee fee for CGTMSE?',
        a: 'The annual guarantee fee ranges between 0.37% and 1.35% depending on the loan quantum, gender of promoter, and geographic location (special concessions apply to North East and women entrepreneurs).'
      },
      {
        q: 'Does the borrower have to personally visit SIDBI?',
        a: 'No. The guarantee is issued directly between SIDBI/CGTMSE and the bank (MLI). You only deal with the lending bank, facilitated seamlessly by Shree Services Pvt Ltd.'
      }
    ]
  },

  pmegp: {
    slug: 'pmegp',
    id: 'pmegp',
    name: 'PMEGP Subsidy Loan',
    shortTitle: 'PMEGP',
    fullName: "Prime Minister's Employment Generation Programme",
    ministry: 'Ministry of MSME & KVIC (Khadi and Village Industries Commission)',
    highlight: 'Up to 35% Capital Margin Money Subsidy for New Micro-Enterprises',
    maxAmount: '₹50 Lakhs (Manufacturing) / ₹20 Lakhs (Service)',
    subsidyRate: '15% to 35% Direct Government Subsidy',
    interestRate: 'Standard Bank MCLR (8.50% - 10.50%)',
    nodalAgency: 'Khadi & Village Industries Commission (KVIC) & State KVIB / DIC',
    overview: [
      'The Prime Minister’s Employment Generation Programme (PMEGP) is a landmark credit-linked subsidy initiative launched by the Government of India to foster self-employment and empower first-generation industrial and service entrepreneurs.',
      'Under PMEGP, beneficiaries receive a substantial non-refundable government margin money subsidy ranging from 15% up to 35% of the total project cost. The entrepreneur only needs to contribute a modest 5% to 10% of the project capital as their own equity, while commercial banks provide the remaining 90% to 95% as a composite loan.',
      'Shree Services Pvt Ltd is recognized across Delhi NCR and Uttar Pradesh as a premier PMEGP facilitator. We handhold you through online portal application, official Detailed Project Report (DPR) preparation, District Level Task Force Committee (DLTFC) clearance, and bank sanction follow-ups.'
    ],
    keyPillars: [
      {
        title: 'Up to 35% Non-Refundable Subsidy',
        desc: 'Special categories (SC/ST/OBC/Women/Minorities/Ex-servicemen) in rural areas enjoy a massive 35% capital subsidy.'
      },
      {
        title: 'Only 5% to 10% Own Contribution',
        desc: 'Launch a viable ₹20L to ₹50L manufacturing or service setup with minimal initial personal savings.'
      },
      {
        title: 'Project Ceilings Raised',
        desc: 'Maximum project cost of ₹50 Lakhs for manufacturing units and ₹20 Lakhs for modern service enterprises.'
      },
      {
        title: '2nd Loan for Upgradation',
        desc: 'Successful PMEGP units can apply for a 2nd upgradation loan up to ₹1 Crore with 15%-20% additional subsidy.'
      }
    ],
    subsidyMatrix: [
      {
        category: 'General Category',
        urbanRate: '15% Subsidy',
        ruralRate: '25% Subsidy',
        ownContribution: '10% of Project Cost'
      },
      {
        category: 'Special (SC/ST/OBC/Women/Minority/PH)',
        urbanRate: '25% Subsidy',
        ruralRate: '35% Subsidy',
        ownContribution: '5% of Project Cost'
      }
    ],
    eligibility: [
      'Any individual above 18 years of age with a desire to establish a new micro-enterprise.',
      'Minimum educational qualification of 8th standard pass for manufacturing projects above ₹10 Lakhs and service projects above ₹5 Lakhs.',
      'Self Help Groups (SHGs), Charitable Institutions, and Co-operative Societies.',
      'The unit must be a brand new establishment; existing units that have already availed other government subsidies are not eligible for the 1st loan tranche.',
      'Must have a viable business concept in manufacturing or approved service trades.'
    ],
    ineligibleProjects: [
      'Businesses involved in meat, slaughterhouse, or tobacco processing.',
      'Rural transport vehicles (except three-wheelers, auto-rickshaws, and tourist cabs in select regions).',
      'Pashu-palan (poultry, dairy) covered under separate Animal Husbandry Infrastructure Development Fund (AHIDF).'
    ],
    documentsRequired: [
      {
        category: 'Identity & Educational Proofs',
        items: [
          'Aadhaar Card, PAN Card, and Voter ID of applicant',
          '8th Pass or higher educational marksheet / degree certificate',
          'Special category caste certificate (for SC/ST/OBC/Minority/PH applicants)',
          'Rural Area Certificate from Gram Panchayat / BDO (for rural subsidy rate)'
        ]
      },
      {
        category: 'Project Dossier & Premises Proof',
        items: [
          'Comprehensive Detailed Project Report (DPR) with 3-year cash flow projections (Prepared by Shree Services)',
          'Registered rent agreement or ownership proof of the industrial/commercial unit premises',
          'Valid quotation / proforma invoices for proposed plant, machinery, and electrical fixtures',
          'EDP (Entrepreneurship Development Programme) training completion certificate (can be done online after sanction)'
        ]
      }
    ],
    stepByStepProcess: [
      {
        step: 1,
        title: 'Project Formulation & DPR Preparation',
        desc: 'Our financial analysts prepare your Detailed Project Report including machine specs, raw materials, labor, and projected revenue.'
      },
      {
        step: 2,
        title: 'KVIC PMEGP Portal Submission',
        desc: 'We upload your application along with all mandatory documents to the official national KVIC e-portal with proper agency mapping (KVIC/KVIB/DIC).'
      },
      {
        step: 3,
        title: 'DLTFC Verification & Bank Forwarding',
        desc: 'The District Level Task Force Committee examines the proposal and electronically routes it to your selected local financing bank branch.'
      },
      {
        step: 4,
        title: 'Bank Sanction & Margin Money Subsidy Lock-In',
        desc: 'The bank sanctions the composite loan. KVIC releases the margin money subsidy into a 3-year lock-in TDR, which adjusts against your principal after 36 months.'
      }
    ],
    faqs: [
      {
        q: 'How does the PMEGP subsidy get credited?',
        a: 'The government subsidy is kept in a separate Term Deposit Receipt (TDR) account under the borrower’s name with the lending bank for 3 years without interest. After 3 years of successful commercial operation verified by a joint physical inspection, the entire subsidy amount is adjusted against the loan balance.'
      },
      {
        q: 'Is Entrepreneurship Development Programme (EDP) training mandatory?',
        a: 'Yes, EDP training is mandatory before disbursement. It can now be conveniently completed online via the official KVIC e-learning portal or offline at designated RSETI / MSME training centers.'
      }
    ]
  },

  mudra: {
    slug: 'mudra',
    id: 'mudra',
    name: 'MUDRA Loan (PMMY)',
    shortTitle: 'MUDRA Loan',
    fullName: 'Pradhan Mantri Micro Units Development & Refinance Agency Yojana',
    ministry: 'Department of Financial Services, Ministry of Finance, Govt of India',
    highlight: 'Collateral-Free Credit in 3 Tiers: Shishu, Kishor & Tarun up to ₹20 Lakh',
    maxAmount: '₹20,00,000 (₹20 Lakhs under upgraded Tarun Plus norms)',
    subsidyRate: 'Concessional Interest & Refinance Facility',
    interestRate: '8.65% to 11.50% p.a.',
    nodalAgency: 'MUDRA Ltd & Nationalized Commercial Banks',
    overview: [
      'Pradhan Mantri Mudra Yojana (PMMY) was introduced by the Hon’ble Prime Minister to “Fund the Unfunded”—providing accessible formal institutional credit to micro-enterprises, small shopkeepers, artisans, repair workshops, transport operators, and small-scale manufacturing units.',
      'Loans under MUDRA require NO collateral security or third-party guarantee. The loans are divided into three distinct lifecycle stages: Shishu (loans up to ₹50,000), Kishor (loans from ₹50,000 to ₹5 Lakh), and Tarun (loans from ₹5 Lakh up to ₹10 Lakh, now extended up to ₹20 Lakh for seasoned entrepreneurs who have previously paid back on time).',
      'Shree Services Pvt Ltd simplifies MUDRA applications, helping small shop owners and growing service firms secure approvals swiftly from leading PSU banks with zero hassles.'
    ],
    keyPillars: [
      {
        title: 'Shishu Tier (Up to ₹50,000)',
        desc: 'Micro-credit for vegetable vendors, small neighborhood kiosks, tailors, and home-based artisan businesses.'
      },
      {
        title: 'Kishor Tier (₹50,000 to ₹5 Lakh)',
        desc: 'For acquiring tools, inventory, office computers, or equipment for establishing a sustainable commercial presence.'
      },
      {
        title: 'Tarun Tier (₹5 Lakh to ₹20 Lakh)',
        desc: 'Substantial working capital and plant equipment financing for established retail shops, bakeries, or fabrication units.'
      },
      {
        title: 'Mudra Debit Card',
        desc: 'A customized RuPay debit card allowing digital ATM withdrawals and POS payments against the sanctioned Cash Credit limit.'
      }
    ],
    eligibility: [
      'Any Indian citizen who has a business plan for a non-farm sector income generating activity.',
      'Small manufacturing enterprises, repair workshops, service enterprises, retailers, and food processing units.',
      'Transport vehicle operators (purchase of auto-rickshaws, small commercial trucks, e-rickshaws).',
      'Individual proprietors, partnerships, or small business firms with clear banking credentials.',
      'Applicants should not have defaulted on any loan with any commercial bank or NBFC.'
    ],
    ineligibleProjects: [
      'Large industrial corporates or public sector undertakings.',
      'Speculative financial trading or stock market activities.',
      'Purely seasonal agricultural crop cultivation (covered under Kisan Credit Card).'
    ],
    documentsRequired: [
      {
        category: 'Personal Identification',
        items: [
          'Proof of Identity: Voter ID / Aadhaar Card / PAN Card / Driving License',
          'Proof of Residence: Recent electricity bill, telephone bill, or property tax receipt',
          'Two passport-sized photographs of applicant'
        ]
      },
      {
        category: 'Business Proofs & Financials',
        items: [
          'Udyam Registration Certificate / Shop & Establishment License / Trade License',
          'Last 6 to 12 months bank statements from operative savings or current account',
          'Quotations for machinery, commercial equipment, or inventory to be purchased',
          'Last 1 to 2 years income tax returns (for Kishor and Tarun applications above ₹2 Lakh)'
        ]
      }
    ],
    stepByStepProcess: [
      {
        step: 1,
        title: 'Identify Correct Tier & Estimate Funding',
        desc: 'Determine whether your requirement falls into Shishu, Kishor, or Tarun tier based on asset purchase quotations.'
      },
      {
        step: 2,
        title: 'Application Dossier Compilation',
        desc: 'Shree Services compiles your standard PMMY application form, business projection sheet, and bank statements.'
      },
      {
        step: 3,
        title: 'Submission via Udyamimitra / Partner Bank',
        desc: 'Your file is processed through digital banking portals with prioritized review under priority sector lending (PSL).'
      },
      {
        step: 4,
        title: 'Sanction & Mudra Card Issuance',
        desc: 'Receive official sanction letter, execute loan hypothecation papers, and receive your Mudra RuPay card for easy limit operations.'
      }
    ],
    faqs: [
      {
        q: 'Does MUDRA require any collateral security or third-party guarantee?',
        a: 'No. As per RBI guidelines for loans under Pradhan Mantri Mudra Yojana, banks are strictly prohibited from demanding any third-party collateral for loans up to ₹10 Lakhs (and up to ₹20 Lakhs under Tarun Plus).'
      },
      {
        q: 'What is the processing fee for a MUDRA loan?',
        a: 'For Shishu and Kishor loans (up to ₹5 Lakhs), there is ZERO processing fee across all public sector banks. For Tarun loans, a nominal fee of around 0.50% may apply.'
      }
    ]
  },

  cgss: {
    slug: 'cgss',
    id: 'cgss',
    name: 'CGSS Scheme',
    shortTitle: 'CGSS',
    fullName: 'Credit Guarantee Scheme for Startups',
    ministry: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry',
    highlight: 'Credit Guarantee Cover up to ₹10 Crore for DPIIT-Recognized Startups',
    maxAmount: '₹10,00,00,000 (₹10 Crore)',
    subsidyRate: 'Guarantee Cover up to 80%',
    interestRate: 'Competitive Institutional Base Rate',
    nodalAgency: 'National Credit Guarantee Trustee Company (NCGTC)',
    overview: [
      'The Credit Guarantee Scheme for Startups (CGSS) was established by the Government of India through DPIIT and is administered by the National Credit Guarantee Trustee Company (NCGTC). Its purpose is to catalyze collateral-free debt funding for high-potential, innovative startups without demanding dilution of founder equity.',
      'Traditional bank underwriting often rejects early-stage startups because they lack physical real estate collateral or 3 years of historical profitability. CGSS bridges this barrier by providing lenders with an umbrella or transaction-based credit guarantee covering up to 80% of sanctioned debt.',
      'Shree Services Pvt Ltd works with emerging tech startups, direct-to-consumer (D2C) brands, logistics tech, SaaS, and advanced manufacturing ventures to structure bankable venture debt files eligible under CGSS.'
    ],
    keyPillars: [
      {
        title: 'Up to ₹10 Crore Guarantee Cover',
        desc: 'Substantial non-dilutive credit line to scale marketing, build inventory, or fund working capital.'
      },
      {
        title: 'Transaction & Umbrella Based Facilities',
        desc: 'Lenders and AIFs (Alternate Investment Funds) can extend collateral-free term loans and venture debt.'
      },
      {
        title: 'Preserves Founder Equity',
        desc: 'Avoid costly equity dilution at early valuation stages by raising structured debt backed by sovereign guarantee.'
      },
      {
        title: 'Up to 80% Sovereign Cover',
        desc: 'NCGTC covers up to 80% of outstanding loan default risk, giving banks confidence to sanction larger limits.'
      }
    ],
    eligibility: [
      'Must be an entity recognized as a “Startup” by DPIIT possessing a valid DPIIT Certificate of Recognition.',
      'The startup should have crossed the idea stage and reached proof-of-concept or commercial traction with steady monthly revenue.',
      'The startup must not be in default to any lending institution or categorized as an SMA-2 or NPA.',
      'Eligibility includes both debt issued by commercial banks and venture debt extended by SEBI-registered Category I & II AIFs.'
    ],
    ineligibleProjects: [
      'Enterprises not registered on Startup India / without valid DPIIT certification.',
      'Entities whose age has exceeded 10 years from the date of original incorporation.',
      'Businesses operating as standard trading entities without any technological, intellectual, or process innovation.'
    ],
    documentsRequired: [
      {
        category: 'Corporate & DPIIT Recognition',
        items: [
          'DPIIT Certificate of Recognition as a Startup',
          'Certificate of Incorporation, MoA, and AoA',
          'Cap Table and details of all angel or institutional equity rounds closed till date',
          'PAN Card, GST registration, and Udyam certificate of the startup'
        ]
      },
      {
        category: 'Business Traction & Financials',
        items: [
          'Audited financial statements since incorporation',
          'Monthly Management Information System (MIS) reports for past 12 months showcasing GMV, revenue, and unit economics',
          'Detailed 3-year projected cash flow model with break-even runway',
          'Primary operative bank account statements for the last 12 months'
        ]
      }
    ],
    stepByStepProcess: [
      {
        step: 1,
        title: 'DPIIT & Financial Runway Due Diligence',
        desc: 'We review your DPIIT certification, cap table, monthly recurring revenue (MRR), and gross margins.'
      },
      {
        step: 2,
        title: 'Debt Structuring & Financial Information Memorandum (FIM)',
        desc: 'We prepare an institutional credit memorandum tailored to meet NCGTC risk parameters.'
      },
      {
        step: 3,
        title: 'Submission to Empanelled CGSS Lenders',
        desc: 'File pitched to startup debt desks of nationalized and progressive private banking partners.'
      },
      {
        step: 4,
        title: 'NCGTC Inscription & Limit Activation',
        desc: 'Guarantee registered on the NCGTC platform; funds disbursed for rapid scaling and market expansion.'
      }
    ],
    faqs: [
      {
        q: 'Can a startup with zero physical assets qualify under CGSS?',
        a: 'Yes! That is the core purpose of CGSS. The guarantee is extended on the strength of the startup’s revenue, customer contracts, technology moat, and DPIIT recognition, without requiring real estate or personal asset mortgages.'
      },
      {
        q: 'What is the maximum loan tenure under CGSS?',
        a: 'Loans under CGSS are generally sanctioned for tenures ranging from 3 to 7 years, including a reasonable moratorium period aligned with cash flow generation.'
      }
    ]
  }
};
