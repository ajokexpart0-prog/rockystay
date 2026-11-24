import React from 'react';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { PHOTO_ASSETS, SITE_CONFIG } from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';
import { FaqAccordion } from '../components/FaqAccordion';
import { NetlifyEnquiryForm } from '../components/NetlifyEnquiryForm';
import { ReviewsSection } from '../components/ReviewsSection';
import { SafeImage } from '../components/SafeImage';

export const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  const whatsappUrl = `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello RockyStay Suites, I have a question about booking an apartment in Tanke, Ilorin."
  )}`;

  return (
    <div>
      {/* Page Banner with Property Image Background */}
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
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-[#F5FAFF]/72"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-sm font-bold text-[#3B82F6]">{t.contactPage.kicker}</p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-[#2563EB]">
            {t.contactPage.heading}
          </h1>
          <p className="mt-3 text-base text-[#334155] max-w-2xl">
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Cards + Property Visuals + Form */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Contacts & Compound Photo Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-xl border border-[#DBEAFE] p-6 space-y-4 shadow-xs">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2563EB]">
                {t.contactPage.speakTitle}
              </h2>
              <p className="text-sm text-[#475569] leading-relaxed">
                {t.contactPage.speakDesc}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-base font-bold transition-colors"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>{t.contactPage.chatWhatsapp}</span>
              </a>

              <div className="pt-4 border-t border-[#F1F5F9] space-y-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5FAFF] transition-colors group"
                >
                  <Phone
                    className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#475569]">
                      {t.contactPage.tapToCall}
                    </div>
                    <div className="text-base font-bold text-[#2563EB] group-hover:text-[#1E56A0] tabular-nums">
                      {SITE_CONFIG.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5FAFF] transition-colors group"
                >
                  <Mail
                    className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#475569]">
                      {t.contactPage.emailLabel}
                    </div>
                    <div className="text-base font-bold text-[#2563EB] group-hover:text-[#1E56A0] break-all">
                      {SITE_CONFIG.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3">
                  <MapPin
                    className="w-5 h-5 text-[#3B82F6] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#475569]">
                      {t.contactPage.locationLabel}
                    </div>
                    <div className="text-base font-bold text-[#2563EB]">
                      Tanke, Ilorin, Nigeria
                    </div>
                    <p className="text-xs text-[#475569] mt-0.5">
                      Tanke Main Road · Tanke Garden Close · Tanke Pool Court
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual fill under contact card */}
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#DBEAFE] bg-white shadow-xs">
                <SafeImage
                  src={PHOTO_ASSETS.exteriorYellowDuplex.src}
                  alt={PHOTO_ASSETS.exteriorYellowDuplex.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#DBEAFE] bg-white shadow-xs">
                <SafeImage
                  src={PHOTO_ASSETS.interiorDiningKitchen.src}
                  alt={PHOTO_ASSETS.interiorDiningKitchen.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2563EB]">
                {t.contactPage.formTitle}
              </h2>
              <p className="mt-1 text-sm text-[#475569]">{t.contactPage.formSubtitle}</p>
            </div>
            <NetlifyEnquiryForm />
          </div>
        </div>
      </section>

      {/* Full FAQs Section */}
      <section id="faqs" className="py-16 bg-white border-t border-[#DBEAFE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
        </div>
      </section>

      {/* Guest Reviews */}
      <ReviewsSection />
    </div>
  );
};
