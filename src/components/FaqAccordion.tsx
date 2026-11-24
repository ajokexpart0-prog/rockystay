import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem, FAQS } from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';

interface FaqAccordionProps {
  items?: FaqItem[];
  heading?: string;
  subheading?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  items = FAQS,
  heading,
  subheading,
}) => {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const displayHeading =
    heading === undefined ? t.homeSections.faqHeading : heading;
  const displaySubheading =
    subheading === undefined ? t.homeSections.faqSubheading : subheading;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      {displayHeading && (
        <div className="mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#2563EB]">
            {displayHeading}
          </h2>
          {displaySubheading && (
            <p className="mt-2 text-base text-[#475569]">{displaySubheading}</p>
          )}
        </div>
      )}

      <div className="divide-y divide-[#DBEAFE] border border-[#DBEAFE] rounded-xl bg-white overflow-hidden shadow-xs">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const panelId = `faq-panel-${item.id}`;
          const buttonId = `faq-btn-${item.id}`;

          return (
            <div key={item.id}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(item.id)}
                  className="w-full min-h-[52px] px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F5FAFF] transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-base text-[#2563EB]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B82F6] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-5 pb-4 text-sm sm:text-base text-[#475569] leading-relaxed"
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
