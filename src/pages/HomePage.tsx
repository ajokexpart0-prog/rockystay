import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import {
  APARTMENTS,
  FAQS,
  PHOTO_ASSETS,
  POOL_GALLERY,
  RESIDENCE_SHOWCASE,
  SITE_CONFIG,
} from '../data/apartments';
import { addDaysISO, getTodayISO } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import { ApartmentCard } from '../components/ApartmentCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { ReviewsSection } from '../components/ReviewsSection';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const WHY_ICONS = [MapPin, CheckCircle2, Sparkles, ShieldCheck, Zap];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const today = getTodayISO();
  const [arrival, setArrival] = useState(addDaysISO(today, 1));
  const [departure, setDeparture] = useState(addDaysISO(today, 4));
  const [guests, setGuests] = useState('2');
  const [searchError, setSearchError] = useState('');

  const featuredApartments = [
    APARTMENTS['cozy-one-bedroom-retreat'],
    APARTMENTS['executive-three-bedroom-apartment'],
    APARTMENTS['premier-five-bedroom-villa'],
    APARTMENTS['royal-six-bedroom-villa'],
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');

    if (arrival && departure && departure <= arrival) {
      setSearchError(t.hero.departureError);
      return;
    }

    const params = new URLSearchParams();
    if (arrival) params.set('arrival', arrival);
    if (departure) params.set('departure', departure);
    if (guests) params.set('guests', guests);
    onNavigate(`/apartments?${params.toString()}`);
  };

  const whatsappGeneralUrl = `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello RockyStay Suites, I'd like to enquire about availability for an apartment in Tanke, Ilorin."
  )}`;

  return (
    <div>
      {/* Hero Section with Full-Bleed Sunlit Property Background */}
      <section className="relative overflow-hidden border-b border-[#DBEAFE]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${PHOTO_ASSETS.interiorTerraceLounge.src}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-[#F5FAFF]/70"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Hero Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-sm font-bold text-[#3B82F6] tracking-wide">
                {t.hero.kicker}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#2563EB] leading-[1.1]">
                {t.hero.headline}
              </h1>

              <p className="text-base sm:text-lg text-[#334155] leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="/apartments"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/apartments');
                  }}
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] font-bold text-base transition-colors whitespace-nowrap shadow-sm"
                >
                  <span>{t.hero.exploreCta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-3 rounded-lg bg-white border border-[#93C5FD] hover:border-[#3B82F6] text-[#2563EB] font-semibold text-base transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>{t.hero.whatsappCta}</span>
                </a>
              </div>
            </div>

            {/* Hero Primary Property Showcase */}
            <div className="lg:col-span-6">
              <div className="h-72 sm:h-96 lg:h-full min-h-[340px] rounded-2xl overflow-hidden border-2 border-white shadow-xl relative bg-white">
                <SafeImage
                  src={PHOTO_ASSETS.exteriorYellowDuplex.src}
                  alt={PHOTO_ASSETS.exteriorYellowDuplex.alt}
                  eager
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-3 bottom-3 rounded-xl px-4 py-3 bg-white/95 backdrop-blur-sm border border-[#DBEAFE] shadow-sm">
                  <p className="text-sm font-bold text-[#2563EB]">{t.hero.priceFrom}</p>
                  <p className="text-xs sm:text-sm text-[#475569]">
                    {t.hero.locationsSummary}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="mt-10 bg-white text-[#334155] rounded-xl p-5 sm:p-6 shadow-lg border border-[#DBEAFE]">
            <form
              onSubmit={handleSearchSubmit}
              aria-label="Quick apartment availability search"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end"
            >
              <div>
                <label
                  htmlFor="home-arrival"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] mb-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                  <span>{t.hero.arrival}</span>
                </label>
                <input
                  id="home-arrival"
                  type="date"
                  min={today}
                  value={arrival}
                  onChange={(e) => {
                    setArrival(e.target.value);
                    setSearchError('');
                  }}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="home-departure"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] mb-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                  <span>{t.hero.departure}</span>
                </label>
                <input
                  id="home-departure"
                  type="date"
                  min={arrival || today}
                  value={departure}
                  onChange={(e) => {
                    setDeparture(e.target.value);
                    setSearchError('');
                  }}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
                />
              </div>

              <div>
                <label
                  htmlFor="home-guests"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] mb-1.5"
                >
                  <Users className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                  <span>{t.hero.guests}</span>
                </label>
                <select
                  id="home-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10, 12].map((count) => (
                    <option key={count} value={count}>
                      {count} {count === 1 ? t.hero.guestSingular : t.hero.guestPlural}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] font-bold text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>{t.hero.checkApartments}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </form>
            {searchError && (
              <p role="alert" className="mt-3 text-sm font-semibold text-[#991B1B]">
                {searchError}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Why RockyStay Strip */}
      <section aria-labelledby="why-heading" className="bg-[#F5FAFF]/95 border-b border-[#DBEAFE] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2
                id="why-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
              >
                {t.why.heading}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-[#475569]">
                {t.why.subheading}
              </p>
            </div>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/about');
              }}
              className="text-sm font-bold text-[#2563EB] hover:text-[#1E56A0] underline underline-offset-4 whitespace-nowrap"
            >
              {t.why.readPromise}
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {t.why.items.map((item, idx) => {
              const Icon = WHY_ICONS[idx] ?? CheckCircle2;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-[#DBEAFE] p-5 space-y-2.5 shadow-xs"
                >
                  <Icon className="w-5 h-5 text-[#F5CC4C]" aria-hidden="true" />
                  <h3 className="font-display text-xl font-bold text-[#2563EB]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}

            {/* Balances the 2-column tablet/mobile grid beside card 5 */}
            <a
              href="/apartments"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/apartments');
              }}
              className="lg:hidden relative rounded-xl overflow-hidden border border-[#DBEAFE] bg-white shadow-xs min-h-[160px] group"
            >
              <SafeImage
                src={PHOTO_ASSETS.exteriorYellowDuplex.src}
                alt={PHOTO_ASSETS.exteriorYellowDuplex.alt}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E4D8C]/75 via-transparent to-transparent flex items-end p-4">
                <span className="text-white font-bold text-sm inline-flex items-center gap-1.5">
                  <span>{t.homeSections.viewAll}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Apartments */}
      <section aria-labelledby="featured-heading" className="py-16 lg:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <h2
                id="featured-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
              >
                {t.homeSections.featuredHeading}
              </h2>
              <p className="mt-2 text-base text-[#475569]">
                {t.homeSections.featuredSubheading}
              </p>
            </div>
            <a
              href="/apartments"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/apartments');
              }}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#2563EB] hover:text-[#1E56A0] whitespace-nowrap"
            >
              <span>{t.homeSections.viewAll}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
            {featuredApartments.map((apt) => (
              <ApartmentCard
                key={apt.id}
                apartment={apt}
                onNavigate={onNavigate}
                searchParams={{ arrival, departure, guests }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Inside Our Tanke Residences Visual Showcase */}
      <section
        aria-labelledby="showcase-heading"
        className="py-16 lg:py-20 bg-white border-y border-[#DBEAFE]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2
              id="showcase-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
            >
              {t.homeSections.showcaseHeading}
            </h2>
            <p className="mt-2 text-base text-[#475569]">
              {t.homeSections.showcaseSubheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            {RESIDENCE_SHOWCASE.map((photo, idx) => {
              const spanClass =
                idx === 0 || idx === 3
                  ? 'lg:col-span-6 aspect-[16/10]'
                  : 'lg:col-span-3 aspect-[4/3] sm:aspect-auto sm:h-64 lg:h-auto';
              return (
                <div
                  key={photo.src}
                  className={`rounded-xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF] shadow-xs ${spanClass}`}
                >
                  <SafeImage
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tanke Pool Court Gallery */}
      <section aria-labelledby="pool-gallery-heading" className="py-16 lg:py-20 bg-white border-b border-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <h2
                id="pool-gallery-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
              >
                {t.homeSections.poolHeading}
              </h2>
              <p className="mt-2 text-base text-[#475569]">
                {t.homeSections.poolSubheadingPrefix}{' '}
                <a
                  href="/apartment?id=premier-five-bedroom-villa"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/apartment?id=premier-five-bedroom-villa');
                  }}
                  className="font-semibold text-[#2563EB] hover:text-[#1E56A0] underline underline-offset-2"
                >
                  Premier Five-Bedroom Villa
                </a>{' '}
                {t.homeSections.andText}{' '}
                <a
                  href="/apartment?id=royal-six-bedroom-villa"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/apartment?id=royal-six-bedroom-villa');
                  }}
                  className="font-semibold text-[#2563EB] hover:text-[#1E56A0] underline underline-offset-2"
                >
                  Royal Six-Bedroom Villa
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {POOL_GALLERY.map((photo, index) => {
              const gridSpanClass =
                index === 0
                  ? 'sm:col-span-2 lg:col-span-3 aspect-[16/10]'
                  : index === 1
                  ? 'lg:col-span-3 aspect-[4/3] lg:aspect-[16/10]'
                  : 'lg:col-span-2 aspect-[4/3]';
              return (
                <div
                  key={photo.src}
                  className={`rounded-xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF] ${gridSpanClass}`}
                >
                  <SafeImage
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Short FAQ Preview + Property Imagery */}
      <section aria-labelledby="home-faq-heading" className="py-16 lg:py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="rounded-2xl overflow-hidden border border-[#DBEAFE] bg-white shadow-sm aspect-[4/3]">
                <SafeImage
                  src={PHOTO_ASSETS.exteriorYellowDuplex.src}
                  alt={PHOTO_ASSETS.exteriorYellowDuplex.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#DBEAFE] bg-white shadow-sm aspect-[4/3] lg:aspect-[16/10]">
                <SafeImage
                  src={PHOTO_ASSETS.interiorBlueGoldLiving.src}
                  alt={PHOTO_ASSETS.interiorBlueGoldLiving.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <h2
                    id="home-faq-heading"
                    className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]"
                  >
                    {t.homeSections.faqHeading}
                  </h2>
                  <p className="mt-1.5 text-base text-[#475569]">
                    {t.homeSections.faqSubheading}
                  </p>
                </div>
                <a
                  href="/contact#faqs"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contact#faqs');
                  }}
                  className="text-sm font-bold text-[#2563EB] hover:text-[#1E56A0] underline underline-offset-4 whitespace-nowrap"
                >
                  {t.homeSections.seeAllFaqs}
                </a>
              </div>

              <FaqAccordion items={FAQS.slice(0, 4)} heading="" subheading="" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action with Light Blue-White-Gold Photo Background */}
      <section className="relative overflow-hidden py-16 border-t border-[#DBEAFE]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${PHOTO_ASSETS.interiorBlueGoldLiving.src}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-white/90 backdrop-blur-[2px]"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2563EB]">
            {t.homeSections.ctaHeading}
          </h2>
          <p className="text-base sm:text-lg text-[#334155] max-w-2xl mx-auto">
            {t.homeSections.ctaSubheading}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="/apartments"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/apartments');
              }}
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] font-bold text-base transition-colors shadow-sm"
            >
              <span>{t.homeSections.browseAll}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 rounded-lg bg-white border border-[#93C5FD] hover:border-[#3B82F6] text-[#2563EB] font-semibold text-base transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>{t.homeSections.messageWhatsapp}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
