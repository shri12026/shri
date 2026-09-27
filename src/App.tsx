import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ApplyModal } from './components/ApplyModal';
import { FloatingActions } from './components/FloatingActions';
import { PageLoader } from './components/PageLoader';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { GovtSchemesHubPage } from './pages/GovtSchemesHubPage';
import { GovtSchemeDetailPage } from './pages/GovtSchemeDetailPage';
import { CalculatorsPage } from './pages/CalculatorsPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Home Loan');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [loadingComplete, setLoadingComplete] = useState(false);

  const handleOpenApplyModal = (serviceName?: string, amount?: string) => {
    if (serviceName) setSelectedService(serviceName);
    if (amount) setSelectedAmount(amount);
    setModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      {/* Scroll restoration on page change */}
      <ScrollToTop />

      <div className="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#F2A900]/30 selection:text-[#0B2A6F] flex flex-col justify-between">
        {/* Initial Page Loading Animation */}
        {!loadingComplete && (
          <PageLoader onComplete={() => setLoadingComplete(true)} />
        )}

        {/* Top Scroll Progress Indicator */}
        <ScrollProgressBar />

        {/* Desktop Custom Cursor */}
        <CustomCursor />

        {/* Sticky Glassmorphism Multi-Page Navigation */}
        <Navbar onOpenApplyModal={handleOpenApplyModal} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/services"
              element={<ServicesHubPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/services/:slug"
              element={<ServiceDetailPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/government-schemes"
              element={<GovtSchemesHubPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/government-schemes/:slug"
              element={<GovtSchemeDetailPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/calculators"
              element={<CalculatorsPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/eligibility"
              element={<EligibilityPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/partners"
              element={<PartnersPage onOpenApplyModal={handleOpenApplyModal} />}
            />
            <Route
              path="/contact"
              element={<ContactPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
        </main>

        {/* Multi-Page Footer with Regulatory Disclaimers */}
        <div className="pb-16 sm:pb-0">
          <Footer onOpenApplyModal={handleOpenApplyModal} />
        </div>

        {/* Floating WhatsApp and Call Now Buttons */}
        <FloatingActions onOpenApplyModal={handleOpenApplyModal} />

        {/* Modal Popup Enquiry Form */}
        <ApplyModal
          isOpen={modalOpen}
          onClose={handleCloseApplyModal}
          defaultService={selectedService}
          defaultAmount={selectedAmount}
        />
      </div>
    </BrowserRouter>
  );
}
