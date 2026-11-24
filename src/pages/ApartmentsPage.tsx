import React, { useEffect, useState } from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';
import { APARTMENT_LIST, LOCATIONS, PHOTO_ASSETS } from '../data/apartments';
import { formatNaira } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import { ApartmentCard } from '../components/ApartmentCard';

interface ApartmentsPageProps {
  onNavigate: (path: string) => void;
  queryString: string;
}

const MAX_PRICE_CEILING = 400000;

export const ApartmentsPage: React.FC<ApartmentsPageProps> = ({
  onNavigate,
  queryString,
}) => {
  const { t } = useLanguage();
  const initialParams = new URLSearchParams(queryString);
  const initialArrival = initialParams.get('arrival') ?? '';
  const initialDeparture = initialParams.get('departure') ?? '';
  const initialGuestsNum = parseInt(initialParams.get('guests') ?? '1', 10);

  const [locationFilter, setLocationFilter] = useState('All Locations');
  const [maxPrice, setMaxPrice] = useState<number>(MAX_PRICE_CEILING);
  const [guestsFilter, setGuestsFilter] = useState<number>(
    Number.isFinite(initialGuestsNum) && initialGuestsNum >= 1 ? initialGuestsNum : 1
  );

  useEffect(() => {
    const params = new URLSearchParams(queryString);
    const g = parseInt(params.get('guests') ?? '', 10);
    if (Number.isFinite(g) && g >= 1) {
      setGuestsFilter(g);
    }
  }, [queryString]);

  const filteredApartments = APARTMENT_LIST.filter((apt) => {
    const matchesLocation =
      locationFilter === 'All Locations' || apt.location === locationFilter;
    const matchesPrice = apt.pricePerNight <= maxPrice;
    const matchesGuests = apt.maxGuests >= guestsFilter;
    return matchesLocation && matchesPrice && matchesGuests;
  });

  const handleClearFilters = () => {
    setLocationFilter('All Locations');
    setMaxPrice(MAX_PRICE_CEILING);
    setGuestsFilter(1);
  };

  const hasActiveFilters =
    locationFilter !== 'All Locations' ||
    maxPrice < MAX_PRICE_CEILING ||
    guestsFilter > 1;

  return (
    <div className="min-h-[75vh]">
      {/* Page Banner with Property Image Background */}
      <section className="relative overflow-hidden border-b border-[#DBEAFE]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${PHOTO_ASSETS.exteriorYellowDuplex.src}')`,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-[#F5FAFF]/72"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm font-bold text-[#3B82F6]">
            {t.apartmentsPage.kicker}
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-[#2563EB]">
            {t.apartmentsPage.heading}
          </h1>
          <p className="mt-3 text-base text-[#334155] max-w-2xl">
            {t.apartmentsPage.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Instant Filter Controls */}
        <section
          aria-label="Filter apartments"
          className="bg-white rounded-xl border border-[#DBEAFE] p-5 sm:p-6 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-5 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2 text-[#2563EB] font-bold text-base">
              <SlidersHorizontal className="w-4 h-4 text-[#3B82F6]" aria-hidden="true" />
              <span>{t.apartmentsPage.filterTitle}</span>
            </div>

            <div className="flex items-center gap-4">
              <span
                aria-live="polite"
                className="text-sm font-semibold text-[#475569] tabular-nums"
              >
                {t.apartmentsPage.showing} {filteredApartments.length}{' '}
                {t.apartmentsPage.of} {APARTMENT_LIST.length}{' '}
                {t.apartmentsPage.apartmentsLabel}
              </span>
              <button
                type="button"
                onClick={handleClearFilters}
                disabled={!hasActiveFilters}
                className={`inline-flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 rounded-lg border text-xs font-bold transition-colors ${
                  hasActiveFilters
                    ? 'border-[#3B82F6] text-[#2563EB] hover:bg-[#F5FAFF] cursor-pointer'
                    : 'border-[#E2E8F0] text-[#94A3B8] cursor-default'
                }`}
              >
                <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.apartmentsPage.clearFilters}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Dropdown */}
            <div>
              <label
                htmlFor="filter-location"
                className="block text-sm font-semibold text-[#334155] mb-1.5"
              >
                {t.apartmentsPage.locationLabel}
              </label>
              <select
                id="filter-location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm"
              >
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc === 'All Locations' ? t.apartmentsPage.allLocations : loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Maximum Price Slider + Numeric Readout */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="filter-price"
                  className="text-sm font-semibold text-[#334155]"
                >
                  {t.apartmentsPage.maxPriceLabel}
                </label>
                <span className="text-sm font-bold text-[#2563EB] tabular-nums">
                  {formatNaira(maxPrice)}
                </span>
              </div>
              <input
                id="filter-price"
                type="range"
                min={50000}
                max={MAX_PRICE_CEILING}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-[#E2E8F0] rounded-lg accent-[#3B82F6] cursor-pointer mt-2.5"
              />
              <div className="flex justify-between text-xs text-[#475569] mt-1 tabular-nums">
                <span>₦50,000</span>
                <span>₦400,000</span>
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor="filter-guests"
                className="block text-sm font-semibold text-[#334155] mb-1.5"
              >
                {t.apartmentsPage.minGuestsLabel}
              </label>
              <input
                id="filter-guests"
                type="number"
                min={1}
                max={20}
                value={guestsFilter}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setGuestsFilter(Number.isNaN(val) ? 1 : Math.max(1, val));
                }}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#BFDBFE] bg-[#F5FAFF] text-[#334155] text-sm tabular-nums"
              />
            </div>
          </div>

          {(initialArrival || initialDeparture) && (
            <div className="mt-4 pt-3 border-t border-[#F1F5F9] text-xs text-[#3B82F6] font-semibold">
              {t.apartmentsPage.datesCarried}: {initialArrival || t.apartmentsPage.flexible}{' '}
              {t.apartmentsPage.toText} {initialDeparture || t.apartmentsPage.flexible}
            </div>
          )}
        </section>

        {/* Results Grid or Empty State */}
        {filteredApartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredApartments.map((apt) => (
              <ApartmentCard
                key={apt.id}
                apartment={apt}
                onNavigate={onNavigate}
                searchParams={{
                  arrival: initialArrival,
                  departure: initialDeparture,
                  guests: String(guestsFilter),
                }}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-[#DBEAFE] p-10 text-center max-w-xl mx-auto space-y-4">
            <h2 className="font-display text-2xl font-bold text-[#2563EB]">
              {t.apartmentsPage.noMatchTitle}
            </h2>
            <p className="text-base text-[#475569]">{t.apartmentsPage.noMatchBody}</p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-sm font-bold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" aria-hidden="true" />
              <span>{t.apartmentsPage.clearFilters}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
