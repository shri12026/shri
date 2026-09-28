import React from 'react';
import { Star } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  timeAgo: string;
}

export const TestimonialsSection: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: '1',
      name: 'Holiness Ikpere',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80',
      rating: 5,
      text: "I'd been rejected by two banks before I found Shree Services. They actually listened, understood my situation, and got me approved within days. Couldn't be more grateful.",
      timeAgo: 'a month ago',
    },
    {
      id: '2',
      name: 'Rajesh Sharma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80',
      rating: 5,
      text: 'Needed ₹1.75 Cr collateral-free business loan under CGTMSE. The team prepared our project report and completed bank liaisoning without asking for additional mortgage.',
      timeAgo: '2 weeks ago',
    },
    {
      id: '3',
      name: 'Vikram Malhotra',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80',
      rating: 5,
      text: 'Transferred our high-interest home loan via their Balance Transfer desk. Reduced our EMI drastically and received an instant top-up within 4 days.',
      timeAgo: '3 weeks ago',
    },
    {
      id: '4',
      name: 'Sneha Patel',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80',
      rating: 5,
      text: 'Got our Lifetime Free Credit Card and MSME Udyam registration processed smoothly. The relationship managers at Gaur City Mall are exceptionally helpful!',
      timeAgo: 'a month ago',
    },
    {
      id: '5',
      name: 'Amitabh Verma',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&h=160&q=80',
      rating: 5,
      text: 'Secured an Overdraft (OD) facility for our retail trading business with transparent terms. Complete peace of mind and excellent backend documentation.',
      timeAgo: 'a month ago',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Centered Heading Matching Screenshot */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
          People Loved Us!
        </h2>

        {/* Google Review 4.9 Stars Line */}
        <div className="inline-flex items-center justify-center gap-2 mt-3 mb-10 text-sm font-semibold text-neutral-700">
          <div className="flex items-center gap-0.5 font-bold text-base">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>
          <span>Review</span>
          <span className="font-extrabold text-neutral-900 ml-1">4.9</span>
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Horizontal Testimonials Row */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-2 px-2 -mx-4 sm:mx-0 scroll-smooth snap-x snap-mandatory">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl p-6 text-left shadow-soft-pill border border-neutral-100 flex flex-col justify-between snap-start hover:shadow-pastel-card transition-all"
            >
              <div>
                {/* Header: Avatar, Name, Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={rev.avatar}
                    alt={`${rev.name} - Verified Client Review`}
                    className="w-11 h-11 rounded-full object-cover border border-neutral-200"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] leading-tight">
                      {rev.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="flex items-center text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        (5 star)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-[13px] text-neutral-700 leading-relaxed font-normal">
                  {rev.text}
                </p>
              </div>

              {/* Bottom: Google logo + timestamp */}
              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <div className="flex items-center gap-1 font-bold text-xs">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <span>{rev.timeAgo}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
