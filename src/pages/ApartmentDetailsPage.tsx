import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Calculator,
  Check,
  ChevronLeft,
  ChevronRight,
  Expand,
  MapPin,
  MessageCircle,
  Users,
  X,
} from 'lucide-react';
import { APARTMENT_LIST, getApartmentById, SITE_CONFIG } from '../data/apartments';
import {
  addDaysISO,
  buildWhatsAppEnquiryUrl,
  calculateStayCost,
  formatNaira,
  getTodayISO,
} from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import { NetlifyEnquiryForm } from '../components/NetlifyEnquiryForm';
import { SafeImage } from '../components/SafeImage';

interface ApartmentDetailsPageProps {
  onNavigate: (path: string) => void;
  queryString: string;
}

export const ApartmentDetailsPage: React.FC<ApartmentDetailsPageProps> = ({
  onNavigate,
  queryString,
}) => {
  const { t } = useLanguage();
  const params = new URLSearchParams(queryString);
  const idParam = params.get('id');
  const apartment = getApartmentById(idParam) ?? APARTMENT_LIST[0];

  const today = getTodayISO();
  const paramArrival = params.get('arrival') ?? '';
  const paramDeparture = params.get('departure') ?? '';
  const paramGuests = params.get('guests') ?? '';

  const [selectedPhotoIdx, setSelectedPhotoIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [arrival, setArrival] = useState(paramArrival || addDaysISO(today, 1));
  const [departure, setDeparture] = useState(paramDeparture || addDaysISO(today, 4));
  const [guestsInput, setGuestsInput] = useState<string>(
    paramGuests ? String(Math.max(1, parseInt(paramGuests, 10) || 1)) : '2'
  );

  useEffect(() => {
    setSelectedPhotoIdx(0);
    setLightboxOpen(false);
  }, [apartment.id]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhotoIdx((prev) => (prev + 1) % apartment.photos.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhotoIdx(
          (prev) => (prev - 1 + apartment.photos.length) % apartment.photos.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, apartment.photos.length]);

  const numericGuests = parseInt(guestsInput, 10);
  const calc = calculateStayCost(apartment, arrival, departure, guestsInput);

  const whatsappUrl = calc.isValid
    ? buildWhatsAppEnquiryUrl(
        apartment,
        arrival,
        departure,
        calc.nights,
        numericGuests,
        calc.estimatedTotal
      )
    : '#';

  const currentPhoto = apartment.photos[selectedPhotoIdx] ?? apartment.photos[0];

  const handleGuestsChange = (nextVal: string) => {
    if (nextVal === '') {
      setGuestsInput('');
      return;
    }
    const parsed = parseInt(nextVal, 10);
    if (!Number.isNaN(parsed) && parsed < 1) {
      setGuestsInput('1');
      return;
    }
    setGuestsInput(nextVal);
  };

  return (
    <div className="pb-16">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-[#DBEAFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <a
            href="/apartments"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/apartments');
            }}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-[#1E56A0]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>{t.detailsPage.backToAll}</span>
          </a>

          <p className="text-xs font-semibold text-[#475569]">
            {apartment.location}, Tanke, Ilorin
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title & Key Specs */}
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold text-[#3B82F6]">
            <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{apartment.location}, Ilorin</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-[#2563EB]">
              {apartment.name}
            </h1>
            <div className="text-2xl font-bold text-[#2563EB] tabular-nums">
              {formatNaira(apartment.pricePerNight)}
              <span className="text-sm font-normal text-[#475569]"> {t.card.perNight}</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-[#475569] tabular-nums">
            {apartment.bedrooms}{' '}
            {apartment.bedrooms === 1 ? t.card.bedroom : t.card.bedrooms}
            <span aria-hidden="true"> · </span>
            {t.detailsPage.maxLabel} {apartment.maxGuests} {t.card.guests}
            <span aria-hidden="true"> · </span>
            {t.detailsPage.minStayLabel} {SITE_CONFIG.minStayNights} {t.detailsPage.nights}
            {apartment.hasPool && (
              <>
                <span aria-hidden="true"> · </span>
                <span className="text-[#2563EB] font-bold">{t.card.includesPool}</span>
              </>
            )}
          </p>
        </div>

        {/* Main Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery, Description, Amenities */}
          <div className="lg:col-span-7 space-y-8">
            {/* Photo Gallery */}
            <section aria-label="Apartment photo gallery" className="space-y-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#DBEAFE] bg-[#F5FAFF]">
                <SafeImage
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  eager
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="Open photo in full screen lightbox"
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-lg bg-[#2563EB]/90 hover:bg-[#3B82F6] text-white text-xs font-bold shadow cursor-pointer"
                >
                  <Expand className="w-4 h-4" aria-hidden="true" />
                  <span>{t.detailsPage.expandPhoto}</span>
                </button>
              </div>

              <div
                className="grid grid-cols-3 sm:grid-cols-6 gap-2.5"
                role="list"
                aria-label="Apartment thumbnails"
              >
                {apartment.photos.map((photo, idx) => {
                  const isActive = idx === selectedPhotoIdx;
                  return (
                    <button
                      key={`${photo.src}-${idx}`}
                      type="button"
                      onClick={() => setSelectedPhotoIdx(idx)}
                      aria-label={`View photo ${idx + 1}: ${photo.alt}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#F5CC4C] ring-2 ring-[#F5CC4C]/40'
                          : 'border-[#DBEAFE] opacity-85 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </section>

            {/* About This Residence */}
            <section className="bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2563EB]">
                {t.detailsPage.aboutSuite}
              </h2>
              <p className="text-base text-[#334155] leading-relaxed">
                {apartment.description}
              </p>
              <div className="pt-4 border-t border-[#F1F5F9] grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-xs text-[#475569]">{t.detailsPage.checkinLabel}</div>
                  <div className="font-bold text-[#2563EB]">{t.detailsPage.checkinValue}</div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">{t.detailsPage.checkoutLabel}</div>
                  <div className="font-bold text-[#2563EB]">{t.detailsPage.checkoutValue}</div>
                </div>
                <div>
                  <div className="text-xs text-[#475569]">{t.detailsPage.rulesLabel}</div>
                  <div className="font-bold text-[#2563EB]">{t.detailsPage.rulesValue}</div>
                </div>
              </div>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-7 space-y-4">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#2563EB]">
                {t.detailsPage.amenitiesTitle}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {apartment.amenities.map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-center gap-2.5 text-sm sm:text-base text-[#334155]"
                  >
                    <Check
                      className="w-4 h-4 text-[#F5CC4C] shrink-0"
                      aria-hidden="true"
                    />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Netlify Booking Enquiry Form */}
            <section
              aria-labelledby="details-form-heading"
              className="bg-white rounded-xl border border-[#DBEAFE] p-6 sm:p-7 space-y-4"
            >
              <div>
                <h2
                  id="details-form-heading"
                  className="font-display text-2xl sm:text-3xl font-bold text-[#2563EB]"
                >
                  {t.detailsPage.formTitle}
                </h2>
                <p className="mt-1 text-sm text-[#475569]">
                  {t.detailsPage.formSubtitle}
                </p>
              </div>

              <NetlifyEnquiryForm
                lockedApartment={apartment}
                arrival={arrival}
                departure={departure}
                guests={Number.isNaN(numericGuests) ? 1 : numericGuests}
                estimatedTotal={calc.estimatedTotal}
                isStayValid={calc.isValid}
              />
            </section>
          </div>

          {/* Right Column: Cost Calculator & WhatsApp Enquiry */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white rounded-2xl border border-[#DBEAFE] p-6 sm:p-7 shadow-sm space-y-6">
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#F1F5F9]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#3B82F6]" aria-hidden="true" />
                  <h2 className="font-display text-2xl font-bold text-[#2563EB]">
                    {t.detailsPage.calcTitle}
                  </h2>
                </div>
                <span className="text-sm font-bold text-[#2563EB] tabular-nums">
                  {formatNaira(apartment.pricePerNight)}/night
                </span>
              </div>

              <div className="sr-only" aria-live="polite" role="status">
                {calc.summaryMessage
                  ? calc.summaryMessage
                  : calc.isValid
                  ? `${calc.nights} nights calculated. Estimated total ${formatNaira(
                      calc.estimatedTotal
                    )}, excluding refundable caution deposit of ${formatNaira(
                      calc.cautionDeposit
                    )}.`
                  : ''}
              </div>

              <div className="space-y-4">
                {calc.errors.dates && (
                  <p
                    role="alert"
                    className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-xs font-bold text-[#991B1B]"
                  >
                    {calc.errors.dates}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="calc-arrival"
                      className="block text-sm font-semibold text-[#334155] mb-1.5"
                    >
                      {t.detailsPage.arrivalLabel}
                    </label>
                    <input
                      id="calc-arrival"
                      type="date"
                      min={today}
                      value={arrival}
                      onChange={(e) => setArrival(e.target.value)}
                      aria-invalid={Boolean(calc.errors.arrival || calc.errors.dates)}
                      aria-describedby={calc.errors.arrival ? 'calc-arrival-err' : undefined}
                      className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
                    />
                    {calc.errors.arrival && (
                      <p
                        id="calc-arrival-err"
                        role="alert"
                        className="mt-1.5 text-xs font-bold text-[#991B1B]"
                      >
                        {calc.errors.arrival}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="calc-departure"
                      className="block text-sm font-semibold text-[#334155] mb-1.5"
                    >
                      {t.detailsPage.departureLabel}
                    </label>
                    <input
                      id="calc-departure"
                      type="date"
                      min={arrival || today}
                      value={departure}
                      onChange={(e) => setDeparture(e.target.value)}
                      aria-invalid={Boolean(calc.errors.departure || calc.errors.dates)}
                      aria-describedby={
                        calc.errors.departure ? 'calc-departure-err' : undefined
                      }
                      className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
                    />
                    {calc.errors.departure && (
                      <p
                        id="calc-departure-err"
                        role="alert"
                        className="mt-1.5 text-xs font-bold text-[#991B1B]"
                      >
                        {calc.errors.departure}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="calc-guests"
                    className="flex items-center justify-between text-sm font-semibold text-[#334155] mb-1.5"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#3B82F6]" aria-hidden="true" />
                      <span>{t.detailsPage.guestsLabel}</span>
                    </span>
                    <span className="text-xs font-normal text-[#475569] tabular-nums">
                      {t.detailsPage.maxLabel} {apartment.maxGuests} {t.card.guests}
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Decrease guests"
                      onClick={() => {
                        const curr = Number.isNaN(numericGuests) ? 1 : numericGuests;
                        setGuestsInput(String(Math.max(1, curr - 1)));
                      }}
                      className="w-11 h-11 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] hover:bg-[#DBEAFE] text-[#2563EB] font-bold text-lg cursor-pointer shrink-0"
                    >
                      &minus;
                    </button>
                    <input
                      id="calc-guests"
                      type="number"
                      min={1}
                      value={guestsInput}
                      onChange={(e) => handleGuestsChange(e.target.value)}
                      aria-invalid={Boolean(calc.errors.guests)}
                      aria-describedby={calc.errors.guests ? 'calc-guests-err' : undefined}
                      className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm text-center font-bold tabular-nums"
                    />
                    <button
                      type="button"
                      aria-label="Increase guests"
                      onClick={() => {
                        const curr = Number.isNaN(numericGuests) ? 1 : numericGuests;
                        setGuestsInput(String(curr + 1));
                      }}
                      className="w-11 h-11 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] hover:bg-[#DBEAFE] text-[#2563EB] font-bold text-lg cursor-pointer shrink-0"
                    >
                      +
                    </button>
                  </div>
                  {calc.errors.guests && (
                    <p
                      id="calc-guests-err"
                      role="alert"
                      className="mt-1.5 text-xs font-bold text-[#991B1B]"
                    >
                      {calc.errors.guests}
                    </p>
                  )}
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="pt-4 border-t border-[#E2E8F0] space-y-2.5 text-sm">
                <div className="flex items-center justify-between text-[#475569]">
                  <span>{t.detailsPage.nightsCount}</span>
                  <span className="font-semibold text-[#334155] tabular-nums">
                    {calc.isValid ? `${calc.nights} ${t.detailsPage.nights}` : '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#475569]">
                  <span>
                    {t.detailsPage.roomCost} (
                    {calc.isValid
                      ? `${calc.nights} × ${formatNaira(apartment.pricePerNight)}`
                      : formatNaira(apartment.pricePerNight)}
                    )
                  </span>
                  <span className="font-semibold text-[#334155] tabular-nums">
                    {calc.isValid ? formatNaira(calc.roomCost) : '—'}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#475569]">
                  <span>{t.detailsPage.cleaningFee}</span>
                  <span className="font-semibold text-[#334155] tabular-nums">
                    {calc.isValid
                      ? formatNaira(calc.cleaningFee)
                      : formatNaira(apartment.cleaningFee)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[#475569]">
                  <span>{t.detailsPage.serviceCharge}</span>
                  <span className="font-semibold text-[#334155] tabular-nums">
                    {calc.isValid ? formatNaira(calc.serviceCharge) : '—'}
                  </span>
                </div>

                <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between text-base font-bold text-[#2563EB]">
                  <span>{t.detailsPage.estimatedTotal}</span>
                  <span className="text-xl tabular-nums">
                    {calc.isValid ? formatNaira(calc.estimatedTotal) : '—'}
                  </span>
                </div>
              </div>

              {/* Separate Caution Deposit Notice */}
              <div className="p-3.5 rounded-lg bg-[#F5FAFF] border border-[#DBEAFE] text-xs text-[#334155] space-y-1">
                <div className="flex items-center justify-between font-bold text-[#2563EB] text-sm">
                  <span>{t.detailsPage.cautionTitle}</span>
                  <span className="tabular-nums">{formatNaira(calc.cautionDeposit)}</span>
                </div>
                <p className="text-[#475569]">{t.detailsPage.cautionNote}</p>
              </div>

              {/* WhatsApp Enquiry CTA */}
              <div className="space-y-3">
                {calc.isValid ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-base font-bold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>{t.detailsPage.enquireWhatsapp}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#E2E8F0] text-[#64748B] text-sm font-bold cursor-not-allowed"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                    <span>{t.detailsPage.enterValidDates}</span>
                  </button>
                )}

                <p className="text-xs text-[#475569] leading-relaxed text-center">
                  {t.detailsPage.whatsappDisclaimer}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${apartment.name} photo viewer`}
          className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
        >
          <div className="w-full max-w-5xl flex items-center justify-between text-white mb-3">
            <span className="text-sm font-semibold tabular-nums">
              Photo {selectedPhotoIdx + 1} of {apartment.photos.length}
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close photo lightbox"
              className="inline-flex items-center gap-1.5 min-h-[44px] px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-semibold cursor-pointer"
            >
              <X className="w-5 h-5" aria-hidden="true" />
              <span>Close</span>
            </button>
          </div>

          <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[75vh] flex items-center justify-center">
            <SafeImage
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <button
              type="button"
              aria-label="Previous photo"
              onClick={() =>
                setSelectedPhotoIdx(
                  (prev) => (prev - 1 + apartment.photos.length) % apartment.photos.length
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            <button
              type="button"
              aria-label="Next photo"
              onClick={() =>
                setSelectedPhotoIdx((prev) => (prev + 1) % apartment.photos.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          <p className="mt-3 text-sm text-white/85 text-center max-w-2xl">
            {currentPhoto.alt}
          </p>
        </div>
      )}
    </div>
  );
};
