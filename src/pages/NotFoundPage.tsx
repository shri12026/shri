import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, Phone } from 'lucide-react';
import { ShreeLogo } from '../components/ShreeLogo';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="flex justify-center">
          <ShreeLogo size="md" variant="dark" />
        </div>

        <div className="space-y-2">
          <div className="text-6xl font-extrabold text-[#0A1C44] font-serif-display">
            404
          </div>
          <h1 className="font-serif-display text-2xl font-bold text-slate-800">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            The page you are looking for might have been moved or does not exist. Browse our loan services or return to the homepage.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            to="/"
            className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-[#060F26] bg-gold-gradient hover:brightness-105 transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/services"
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-[#0A1C44] bg-[#0A1C44]/5 hover:bg-[#0A1C44]/10 border border-[#0A1C44]/15 transition-colors text-center"
          >
            Explore All 7 Loan Products
          </Link>
        </div>
      </div>
    </div>
  );
};
