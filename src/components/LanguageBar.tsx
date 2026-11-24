import React from 'react';
import { Globe } from 'lucide-react';
import { LANGUAGES } from '../i18n/translations';
import { useLanguage } from '../context/LanguageContext';

export const LanguageBar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative z-20 bg-[#F5FAFF] border-b border-[#DBEAFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#1E56A0]">
          <Globe className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" aria-hidden="true" />
          <span>{t.languageLabel}:</span>
        </div>

        <div
          role="group"
          aria-label="Choose website language"
          className="flex flex-wrap items-center gap-1.5"
        >
          {LANGUAGES.map((lang) => {
            const isActive = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                aria-pressed={isActive}
                className={`px-2.5 py-1 rounded-md text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-white text-[#1E56A0] border border-[#BFDBFE] hover:border-[#3B82F6]'
                }`}
              >
                {lang.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
