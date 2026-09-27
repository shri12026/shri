export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  rateFrom: string;
  tenureMax: string;
  amountMax: string;
  description: string;
  iconName: string;
  benefits: string[];
  idealFor: string;
}

export interface GovtScheme {
  id: string;
  name: string;
  fullName: string;
  highlight: string;
  maxAmount: string;
  subsidyRate: string;
  whatItIs: string;
  whoIsEligible: string[];
  keyBenefits: string[];
  nodalAgency: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  loanType: string;
  amountSanctioned: string;
  rating: number;
  quote: string;
  bankPartner: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Home Loan' | 'Business' | 'Govt Schemes';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  loanType: string;
  amount: string;
  employmentType: 'salaried' | 'self-employed' | 'business';
  city: string;
  message?: string;
}
