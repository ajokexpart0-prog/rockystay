import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { APARTMENT_LIST, SITE_CONFIG } from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="relative z-10 bg-[#EAF3FF] text-[#1E56A0] border-t border-[#BFDBFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <BrandLogo href="/" onClick={(e) => handleNav(e, '/')} />
            <p className="text-sm text-[#334155] leading-relaxed max-w-xs">
              {SITE_CONFIG.tagline} {t.hero.locationsSummary}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-[#2563EB] mb-4">
              {t.footer.quickLinks}
            </h2>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleNav(e, '/')}
                  className="text-[#1E56A0] hover:text-[#2563EB] transition-colors"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="/apartments"
                  onClick={(e) => handleNav(e, '/apartments')}
                  className="text-[#1E56A0] hover:text-[#2563EB] transition-colors"
                >
                  {t.nav.apartments}
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleNav(e, '/about')}
                  className="text-[#1E56A0] hover:text-[#2563EB] transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav(e, '/contact')}
                  className="text-[#1E56A0] hover:text-[#2563EB] transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-[#2563EB] mb-4">
              {t.footer.ourSuites}
            </h2>
            <ul className="space-y-2.5 text-sm font-semibold">
              {APARTMENT_LIST.map((apt) => (
                <li key={apt.id}>
                  <a
                    href={`/apartment?id=${apt.id}`}
                    onClick={(e) => handleNav(e, `/apartment?id=${apt.id}`)}
                    className="text-[#1E56A0] hover:text-[#2563EB] transition-colors"
                  >
                    {apt.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg font-bold text-[#2563EB] mb-4">
              {t.footer.contactDesk}
            </h2>
            <ul className="space-y-3 text-sm font-semibold text-[#1E56A0]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D9A721] mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="hover:text-[#2563EB] transition-colors tabular-nums"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A721] mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#2563EB] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A721] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#BFDBFE] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          <p>
            &copy; {new Date().getFullYear()} {SITE_CONFIG.brandName}. {t.footer.rights}
          </p>
          <p>{t.footer.policies}</p>
        </div>
      </div>
    </footer>
  );
};
