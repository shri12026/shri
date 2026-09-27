import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { PastelBentoSection } from '../components/PastelBentoSection';
import { ConsultationBannerSection } from '../components/ConsultationBannerSection';
import { ThreeStepProcessSection } from '../components/ThreeStepProcessSection';
import { FlyerShowcaseSection } from '../components/FlyerShowcaseSection';
import { AboutSection } from '../components/AboutSection';
import { GovtSchemesSection } from '../components/GovtSchemesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { EmiCalculatorSection } from '../components/EmiCalculatorSection';
import { EligibilityCheckerSection } from '../components/EligibilityCheckerSection';
import { BankingPartnersSection } from '../components/BankingPartnersSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight } from 'lucide-react';

interface HomePageProps {
  onOpenApplyModal: (serviceName?: string, amount?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenApplyModal }) => {
  return (
    <div className="bg-[#FAF7F2] min-h-screen text-[#111827]">
      {/* 1. Hero Section matching uploaded screenshot (Powder sky blue card with Google badge & line-art) */}
      <HeroSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* 2. 4 Pastel Product Bento Cards matching uploaded screenshot (Yellow, Sky, Periwinkle, Mint) */}
      <PastelBentoSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* 3. Get In Touch For Your Free Consultation matching screenshot (Mint green card with photo & coin line-art) */}
      <ConsultationBannerSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* 4. A Simple 3-Step Process To Secure The Right Finance matching screenshot */}
      <ThreeStepProcessSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* 5. Complete Official Showcase of 500+ Services, 17 Loans, 7 Credit Cards, 8 Insurance & 8 Business Clearances */}
      <FlyerShowcaseSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* Multi-page banner linking to full catalogue */}
      <div className="bg-[#FAF7F2] py-8 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-neutral-900 hover:bg-black shadow-soft-pill transition-all group"
        >
          <span>Explore All 500+ Service Catalogues</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#E5A93C]" />
        </Link>
      </div>

      {/* 6. Corporate About & Trust Pillars */}
      <AboutSection onOpenApplyModal={() => onOpenApplyModal('General Financial Advisory')} />

      {/* 7. Government Funding & Schemes */}
      <GovtSchemesSection onOpenApplyModal={(srv) => onOpenApplyModal(srv)} />

      {/* 8. Why Choose Us */}
      <WhyChooseUsSection />

      {/* 9. Interactive EMI Calculator */}
      <EmiCalculatorSection onOpenApplyModal={(srv, amt) => onOpenApplyModal(srv, amt)} />

      {/* 10. Loan Eligibility Checker */}
      <EligibilityCheckerSection onOpenApplyModal={(srv, amt) => onOpenApplyModal(srv, amt)} />

      {/* 11. Banking Partners (120+ Partnered Banks & NBFCs) */}
      <BankingPartnersSection />

      {/* 12. Verified Testimonials */}
      <TestimonialsSection />

      {/* 13. FAQ Section */}
      <FaqSection />

      {/* 14. Contact / Apply Now */}
      <ContactSection />
    </div>
  );
};

