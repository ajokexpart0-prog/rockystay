import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';

interface ReviewsSectionProps {
  heading?: string;
  subheading?: string;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  heading,
  subheading,
}) => {
  const { t } = useLanguage();
  const displayHeading = heading ?? t.homeSections.reviewsHeading;
  const displaySubheading = subheading ?? t.homeSections.reviewsSubheading;

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-16 lg:py-20 bg-[#F5FAFF]/95 border-y border-[#DBEAFE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2
            id="reviews-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
          >
            {displayHeading}
          </h2>
          <p className="mt-2.5 text-base text-[#475569]">{displaySubheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              className="bg-white rounded-xl border border-[#DBEAFE] p-6 shadow-sm flex flex-col justify-between gap-5"
            >
              <div className="space-y-4">
                <div
                  className="flex items-center gap-1"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#F5CC4C] text-[#F5CC4C]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9]">
                <div className="font-bold text-[#2563EB] text-base">{review.author}</div>
                <div className="text-xs text-[#475569]">{review.context}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
