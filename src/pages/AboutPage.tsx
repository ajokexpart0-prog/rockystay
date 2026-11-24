import React from 'react';
import {
  ArrowRight,
  Car,
  Check,
  Plane,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import {
  COMMON_AMENITIES,
  PHOTO_ASSETS,
  POOL_GALLERY,
} from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';
import { SafeImage } from '../components/SafeImage';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <div>
      {/* Page Banner with Property Image Background */}
      <section className="relative overflow-hidden border-b border-[#DBEAFE]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${PHOTO_ASSETS.interiorBlueGoldLiving.src}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-[#F5FAFF]/72"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm font-bold text-[#3B82F6]">{t.aboutPage.kicker}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-[#2563EB] max-w-3xl">
            {t.aboutPage.heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed">
            {t.aboutPage.intro}
          </p>
        </div>
      </section>

      {/* Our Promise & Photo Mosaic */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]">
              {t.aboutPage.promiseTitle}
            </h2>
            <p className="text-base text-[#334155] leading-relaxed">
              {t.aboutPage.promiseP1}
            </p>
            <p className="text-base text-[#475569] leading-relaxed">
              {t.aboutPage.promiseP2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#DBEAFE] space-y-1.5 shadow-xs">
                <Zap className="w-5 h-5 text-[#F5CC4C]" aria-hidden="true" />
                <div className="font-bold text-[#2563EB] text-sm">
                  {t.aboutPage.powerTitle}
                </div>
                <p className="text-xs text-[#475569]">{t.aboutPage.powerDetail}</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#DBEAFE] space-y-1.5 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-[#F5CC4C]" aria-hidden="true" />
                <div className="font-bold text-[#2563EB] text-sm">
                  {t.aboutPage.securityTitle}
                </div>
                <p className="text-xs text-[#475569]">{t.aboutPage.securityDetail}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF]">
              <SafeImage
                src={PHOTO_ASSETS.exteriorYellowDuplex.src}
                alt={PHOTO_ASSETS.exteriorYellowDuplex.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF]">
                <SafeImage
                  src={PHOTO_ASSETS.interiorBlueGoldLiving.src}
                  alt={PHOTO_ASSETS.interiorBlueGoldLiving.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF]">
                <SafeImage
                  src={PHOTO_ASSETS.interiorDiningKitchen.src}
                  alt={PHOTO_ASSETS.interiorDiningKitchen.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Amenities & Airport/Bus Pickup */}
      <section className="py-16 bg-[#F5FAFF]/95 border-y border-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-8 space-y-5 shadow-xs">
            <h2 className="font-display text-3xl font-bold text-[#2563EB]">
              {t.aboutPage.amenitiesTitle}
            </h2>
            <p className="text-sm sm:text-base text-[#475569]">
              {t.aboutPage.amenitiesSubtitle}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[...COMMON_AMENITIES, 'Swimming pool (5 & 6 Bedroom Villas)'].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm sm:text-base text-[#334155]"
                  >
                    <Check
                      className="w-4 h-4 text-[#F5CC4C] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xs">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 text-[#3B82F6]">
                <Plane className="w-5 h-5" aria-hidden="true" />
                <Car className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="font-display text-3xl font-bold text-[#2563EB]">
                {t.aboutPage.pickupTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                {t.aboutPage.pickupP1}
              </p>
              <p className="text-sm text-[#3B82F6] font-bold">
                {t.aboutPage.pickupP2}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/apartments"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/apartments');
                }}
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-sm font-bold transition-colors"
              >
                <span>{t.aboutPage.viewAllBtn}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/contact');
                }}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 rounded-lg border border-[#93C5FD] hover:border-[#3B82F6] text-[#2563EB] text-sm font-semibold transition-colors"
              >
                {t.aboutPage.contactBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pool Court Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]">
              {t.aboutPage.poolCourtTitle}
            </h2>
            <p className="mt-2 text-base text-[#475569]">{t.aboutPage.poolCourtDesc}</p>
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
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
