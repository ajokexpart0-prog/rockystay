import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Apartment } from '../data/apartments';
import { formatNaira } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';
import { SafeImage } from './SafeImage';

interface ApartmentCardProps {
  apartment: Apartment;
  onNavigate: (path: string) => void;
  searchParams?: {
    arrival?: string;
    departure?: string;
    guests?: string;
  };
}

export const ApartmentCard: React.FC<ApartmentCardProps> = ({
  apartment,
  onNavigate,
  searchParams,
}) => {
  const { t } = useLanguage();
  const mainPhoto = apartment.photos[0];
  const topAmenities = apartment.hasPool
    ? ['Swimming pool', 'Power backup', '24/7 security', 'Fast Wi-Fi']
    : ['Power backup', '24/7 security', 'Fast Wi-Fi', 'Equipped kitchen'];

  const query = new URLSearchParams();
  query.set('id', apartment.id);
  if (searchParams?.arrival) query.set('arrival', searchParams.arrival);
  if (searchParams?.departure) query.set('departure', searchParams.departure);
  if (searchParams?.guests) query.set('guests', searchParams.guests);

  const detailsHref = `/apartment?${query.toString()}`;

  const handleOpenDetails = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(detailsHref);
  };

  return (
    <article className="bg-white rounded-xl border border-[#DBEAFE] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <a
        href={detailsHref}
        onClick={handleOpenDetails}
        className="block aspect-[4/3] overflow-hidden bg-[#F5FAFF] group"
      >
        <SafeImage
          src={mainPhoto.src}
          alt={mainPhoto.alt}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
      </a>

      <div className="p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#3B82F6]">
            <MapPin className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span>{apartment.location}, Ilorin</span>
          </div>

          <h3 className="font-display text-2xl font-bold text-[#2563EB] leading-snug">
            <a
              href={detailsHref}
              onClick={handleOpenDetails}
              className="hover:text-[#1E56A0] transition-colors"
            >
              {apartment.name}
            </a>
          </h3>

          <p className="text-xs font-semibold text-[#475569] tabular-nums">
            {apartment.bedrooms}{' '}
            {apartment.bedrooms === 1 ? t.card.bedroom : t.card.bedrooms}
            <span aria-hidden="true"> · </span>
            {t.card.upTo} {apartment.maxGuests} {t.card.guests}
            {apartment.hasPool && (
              <>
                <span aria-hidden="true"> · </span>
                <span className="text-[#2563EB] font-bold">{t.card.includesPool}</span>
              </>
            )}
          </p>

          <p className="text-sm text-[#475569] leading-relaxed line-clamp-3">
            {apartment.description}
          </p>

          <p className="text-xs text-[#475569] pt-2 border-t border-[#F1F5F9]">
            {topAmenities.join(' · ')}
          </p>
        </div>

        <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold text-[#2563EB] tabular-nums">
              {formatNaira(apartment.pricePerNight)}
              <span className="text-xs font-normal text-[#475569]"> {t.card.perNight}</span>
            </div>
          </div>

          <a
            href={detailsHref}
            onClick={handleOpenDetails}
            className="inline-flex items-center justify-center gap-1.5 min-h-[42px] px-4 py-2 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-sm font-bold transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t.card.viewDetails}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
};
