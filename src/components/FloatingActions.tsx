import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Send } from 'lucide-react';

interface FloatingActionsProps {
  onOpenApplyModal?: (serviceName?: string) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenApplyModal }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop / Tablet Floating Stack (sm and up) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 select-none">
        {/* Scroll to top button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white/95 text-[#0A1C44] border border-slate-300 shadow-lg hover:bg-white hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px]"
            aria-label="Scroll back to top"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </button>
        )}

        {/* Floating Call Now Button */}
        <a
          href="tel:+919548634988"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0A1C44] text-white shadow-xl hover:bg-[#060F26] hover:scale-105 active:scale-95 transition-all border border-[#E5A93C]/40 group min-h-[44px]"
          aria-label="Call Shree Services on phone"
          title="Call +91 95486 34988"
        >
          <div className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#060F26] flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-left pr-1 leading-tight">
            <span className="text-[10px] text-amber-200 uppercase font-semibold">Instant Call</span>
            <span className="text-xs font-bold text-white">+91 95486 34988</span>
          </div>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919548634988?text=Hello%20Shree%20Services,%20I%20would%20like%20to%20consult%20regarding%20a%20loan%20facility."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all group min-h-[44px]"
          aria-label="Chat with Shree Services on WhatsApp"
          title="WhatsApp +91 95486 34988"
        >
          <div className="w-8 h-8 rounded-full bg-white text-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
            <MessageCircle className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col text-left pr-1 leading-tight">
            <span className="text-[10px] text-emerald-100 uppercase font-semibold">WhatsApp Chat</span>
            <span className="text-xs font-bold text-white">Online Now</span>
          </div>
        </a>
      </div>

      {/* Mobile Floating Scroll-to-Top (above bottom bar) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-40 sm:hidden w-10 h-10 rounded-full bg-white/95 text-[#0A1C44] border border-slate-300 shadow-lg active:scale-95 transition-all flex items-center justify-center cursor-pointer min-h-[44px] min-w-[44px]"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Mobile Sticky Quick Action Dock (Visible only on mobile < sm) */}
      <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#060F26]/95 backdrop-blur-md border-t border-[#E5A93C]/30 shadow-2xl px-3 py-2 flex items-center justify-between gap-2 safe-bottom">
        <a
          href="tel:+919548634988"
          className="flex-1 min-h-[44px] px-2 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white flex items-center justify-center gap-1.5 text-xs font-semibold border border-white/10"
        >
          <Phone className="w-4 h-4 text-[#E5A93C]" />
          <span>Call Desk</span>
        </a>

        <a
          href="https://wa.me/919548634988?text=Hello%20Shree%20Services,%20I%20would%20like%20to%20consult%20regarding%20a%20loan%20facility."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[44px] px-2 py-2 rounded-xl bg-[#25D366] text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>WhatsApp</span>
        </a>

        {onOpenApplyModal && (
          <button
            onClick={() => onOpenApplyModal('Mobile Quick Apply')}
            className="flex-1 min-h-[44px] px-2 py-2 rounded-xl bg-gold-gradient text-[#060F26] flex items-center justify-center gap-1.5 text-xs font-extrabold shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Apply Now</span>
          </button>
        )}
      </div>
    </>
  );
};
