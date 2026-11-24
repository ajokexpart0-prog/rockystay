import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { APARTMENT_LIST, Apartment } from '../data/apartments';
import { calculateStayCost, formatNaira, getTodayISO } from '../utils/booking';
import { useLanguage } from '../context/LanguageContext';

interface NetlifyEnquiryFormProps {
  lockedApartment?: Apartment;
  arrival?: string;
  departure?: string;
  guests?: number;
  estimatedTotal?: number;
  isStayValid?: boolean;
}

export const NetlifyEnquiryForm: React.FC<NetlifyEnquiryFormProps> = ({
  lockedApartment,
  arrival: propArrival = '',
  departure: propDeparture = '',
  guests: propGuests = 2,
  estimatedTotal: propTotal = 0,
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedAptId, setSelectedAptId] = useState(
    lockedApartment?.id ?? APARTMENT_LIST[0].id
  );
  const [arrival, setArrival] = useState(propArrival);
  const [departure, setDeparture] = useState(propDeparture);
  const [guests, setGuests] = useState(String(propGuests || 1));
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (lockedApartment) {
      setSelectedAptId(lockedApartment.id);
    }
  }, [lockedApartment]);

  useEffect(() => {
    if (lockedApartment) {
      setArrival(propArrival);
      setDeparture(propDeparture);
      setGuests(String(propGuests));
    }
  }, [lockedApartment, propArrival, propDeparture, propGuests]);

  const activeApartment =
    lockedApartment ??
    APARTMENT_LIST.find((a) => a.id === selectedAptId) ??
    APARTMENT_LIST[0];

  const liveCalc = calculateStayCost(activeApartment, arrival, departure, guests);
  const displayTotal =
    lockedApartment && propTotal > 0
      ? formatNaira(propTotal)
      : liveCalc.isValid
      ? formatNaira(liveCalc.estimatedTotal)
      : t.detailsPage.enterValidDates;

  const today = getTodayISO();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim() || !email.trim() || !phone.trim()) {
      setFormError(t.form.missingContact);
      return;
    }

    if (!liveCalc.isValid) {
      setFormError(
        liveCalc.summaryMessage ||
          'Please enter valid arrival and departure dates (minimum 2 nights) and guest count.'
      );
      return;
    }

    setIsSubmitting(true);
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const encodedBody = new URLSearchParams();
    formData.forEach((value, key) => {
      encodedBody.append(key, String(value));
    });

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedBody.toString(),
      });
    } catch {
      // Static preview servers may not accept POST to '/'
    } finally {
      window.location.href = '/thanks.html';
    }
  };

  return (
    <form
      name="booking-enquiry"
      method="POST"
      action="/thanks.html"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <input type="hidden" name="form-name" value="booking-enquiry" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out if you are human: <input name="bot-field" />
        </label>
      </p>

      {formError && (
        <div
          role="alert"
          aria-live="polite"
          className="p-3.5 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-sm font-semibold text-[#991B1B]"
        >
          {formError}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="enquiry-name"
            className="block text-sm font-semibold text-[#1E293B] mb-1.5"
          >
            {t.form.fullName}
          </label>
          <input
            id="enquiry-name"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Adebayo Okafor"
            className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-phone"
            className="block text-sm font-semibold text-[#1E293B] mb-1.5"
          >
            {t.form.phone}
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 09161959398"
            className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm tabular-nums"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="enquiry-email"
          className="block text-sm font-semibold text-[#1E293B] mb-1.5"
        >
          {t.form.email}
        </label>
        <input
          id="enquiry-email"
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry-apartment"
          className="block text-sm font-semibold text-[#1E293B] mb-1.5"
        >
          {t.form.apartment}
        </label>
        {lockedApartment ? (
          <input
            id="enquiry-apartment"
            type="text"
            name="apartment"
            readOnly
            value={`${lockedApartment.name} (${lockedApartment.location})`}
            className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-[#F5FAFF] text-[#2563EB] text-sm font-semibold"
          />
        ) : (
          <>
            <select
              id="enquiry-apartment"
              value={selectedAptId}
              onChange={(e) => setSelectedAptId(e.target.value)}
              className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm"
            >
              {APARTMENT_LIST.map((apt) => (
                <option key={apt.id} value={apt.id}>
                  {apt.name} ({apt.location}) — {formatNaira(apt.pricePerNight)}/night · Max{' '}
                  {apt.maxGuests} guests
                </option>
              ))}
            </select>
            <input
              type="hidden"
              name="apartment"
              value={`${activeApartment.name} (${activeApartment.location})`}
            />
          </>
        )}
      </div>

      {!lockedApartment && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              htmlFor="enquiry-arrival"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              {t.form.arrival}
            </label>
            <input
              id="enquiry-arrival"
              type="date"
              name="arrival"
              min={today}
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm tabular-nums"
            />
          </div>
          <div>
            <label
              htmlFor="enquiry-departure"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              {t.form.departure}
            </label>
            <input
              id="enquiry-departure"
              type="date"
              name="departure"
              min={arrival || today}
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm tabular-nums"
            />
          </div>
          <div>
            <label
              htmlFor="enquiry-guests"
              className="block text-sm font-semibold text-[#1E293B] mb-1.5"
            >
              {t.form.guests}
            </label>
            <input
              id="enquiry-guests"
              type="number"
              name="guests"
              min={1}
              max={activeApartment.maxGuests}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full min-h-[44px] px-3 py-2 rounded-lg border border-[#CBD5E1] bg-white text-[#1E293B] text-sm tabular-nums"
            />
          </div>
        </div>
      )}

      {lockedApartment && (
        <>
          <input type="hidden" name="arrival" value={arrival} />
          <input type="hidden" name="departure" value={departure} />
          <input type="hidden" name="guests" value={guests} />
        </>
      )}

      <div>
        <label
          htmlFor="enquiry-total"
          className="block text-sm font-semibold text-[#1E293B] mb-1.5"
        >
          {t.form.estimatedTotal}
        </label>
        <input
          id="enquiry-total"
          type="text"
          name="estimatedTotal"
          readOnly
          value={displayTotal}
          className="w-full min-h-[44px] px-3.5 py-2 rounded-lg border border-[#CBD5E1] bg-[#F5FAFF] text-[#2563EB] text-sm font-bold tabular-nums"
        />
      </div>

      <div>
        <label
          htmlFor="enquiry-message"
          className="block text-sm font-semibold text-[#334155] mb-1.5"
        >
          {t.form.messageLabel}
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.form.messagePlaceholder}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-white text-[#334155] text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[46px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#3B82F6] disabled:opacity-60 text-white text-sm font-bold transition-colors cursor-pointer"
      >
        <Send className="w-4 h-4" aria-hidden="true" />
        <span>{isSubmitting ? t.form.submittingBtn : t.form.submitBtn}</span>
      </button>
    </form>
  );
};
