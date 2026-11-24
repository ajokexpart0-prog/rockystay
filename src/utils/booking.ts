import { Apartment, SITE_CONFIG } from '../data/apartments';

export function formatNaira(amount: number): string {
  return `₦${Math.round(amount).toLocaleString('en-NG')}`;
}

export function getTodayISO(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDaysISO(baseISO: string, days: number): string {
  const [y, m, d] = baseISO.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + days));
  return dt.toISOString().slice(0, 10);
}

export function calculateNights(arrival: string, departure: string): number {
  if (!arrival || !departure) return 0;
  const [ay, am, ad] = arrival.split('-').map(Number);
  const [dy, dm, dd] = departure.split('-').map(Number);
  if (!ay || !am || !ad || !dy || !dm || !dd) return 0;
  const arrivalUtc = Date.UTC(ay, am - 1, ad);
  const departureUtc = Date.UTC(dy, dm - 1, dd);
  return Math.round((departureUtc - arrivalUtc) / (1000 * 60 * 60 * 24));
}

export interface StayValidationErrors {
  dates?: string;
  arrival?: string;
  departure?: string;
  guests?: string;
}

export interface StayCalculation {
  isValid: boolean;
  nights: number;
  roomCost: number;
  cleaningFee: number;
  serviceCharge: number;
  estimatedTotal: number;
  cautionDeposit: number;
  errors: StayValidationErrors;
  summaryMessage: string;
}

export function calculateStayCost(
  apartment: Apartment,
  arrival: string,
  departure: string,
  guestsRaw: number | string
): StayCalculation {
  const today = getTodayISO();
  const errors: StayValidationErrors = {};
  const guests = typeof guestsRaw === 'string' ? parseInt(guestsRaw, 10) : guestsRaw;

  if (!arrival || !departure) {
    errors.dates = 'Please choose your arrival and departure dates.';
  } else {
    if (arrival < today) {
      errors.arrival = 'Arrival date cannot be in the past.';
    }
    const nightsCheck = calculateNights(arrival, departure);
    if (nightsCheck <= 0) {
      errors.departure = 'Departure must be after your arrival date.';
    } else if (nightsCheck < SITE_CONFIG.minStayNights) {
      errors.departure = `The minimum stay is ${SITE_CONFIG.minStayNights} nights.`;
    }
  }

  if (Number.isNaN(guests) || guests < 1) {
    errors.guests = 'Please enter at least 1 guest.';
  } else if (guests > apartment.maxGuests) {
    errors.guests = `This apartment sleeps up to ${apartment.maxGuests} guests. Please choose a larger apartment or reduce your guests.`;
  }

  const nights = calculateNights(arrival, departure);
  const hasErrors = Object.keys(errors).length > 0;
  const effectiveNights = !hasErrors && nights >= SITE_CONFIG.minStayNights ? nights : 0;

  const roomCost = effectiveNights * apartment.pricePerNight;
  const cleaningFee = effectiveNights > 0 ? apartment.cleaningFee : 0;
  const serviceCharge =
    effectiveNights > 0 ? Math.round(roomCost * SITE_CONFIG.serviceChargeRate) : 0;
  const estimatedTotal = roomCost + cleaningFee + serviceCharge;

  const firstError =
    errors.dates || errors.arrival || errors.departure || errors.guests || '';

  return {
    isValid: !hasErrors && effectiveNights >= SITE_CONFIG.minStayNights,
    nights: effectiveNights,
    roomCost,
    cleaningFee,
    serviceCharge,
    estimatedTotal,
    cautionDeposit: apartment.cautionDeposit,
    errors,
    summaryMessage: firstError,
  };
}

export function buildWhatsAppEnquiryUrl(
  apartment: Apartment,
  arrival: string,
  departure: string,
  nights: number,
  guests: number,
  estimatedTotal: number
): string {
  const message = [
    "Hello RockyStay Suites, I'd like to enquire about a booking.",
    `Apartment: ${apartment.name}, ${apartment.location}`,
    `Arrival: ${arrival}`,
    `Departure: ${departure}`,
    `Nights: ${nights}`,
    `Guests: ${guests}`,
    `Estimated total: ${formatNaira(estimatedTotal)}, excluding refundable caution deposit of ${formatNaira(apartment.cautionDeposit)}`,
    'Please confirm availability and payment details.',
  ].join('\n');

  return `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}
