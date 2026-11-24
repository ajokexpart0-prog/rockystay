import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/apartments';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';

export type AppRoute = '/' | '/apartments' | '/apartment' | '/about' | '/contact';

interface HeaderProps {
  currentRoute: AppRoute;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navItems: { label: string; route: AppRoute }[] = [
    { label: t.nav.home, route: '/' },
    { label: t.nav.apartments, route: '/apartments' },
    { label: t.nav.about, route: '/about' },
    { label: t.nav.contact, route: '/contact' },
  ];

  useEffect(() => {
    setMobileOpen(false);
  }, [currentRoute]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setMobileOpen(false);
    onNavigate(path);
  };

  const whatsappUrl = `${SITE_CONFIG.whatsappBaseUrl}?text=${encodeURIComponent(
    "Hello RockyStay Suites, I'd like to enquire about booking an apartment in Tanke, Ilorin."
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#EAF3FF] text-[#1E56A0] border-b border-[#BFDBFE] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <BrandLogo href="/" onClick={(e) => handleLinkClick(e, '/')} />

        {/* Zone 2: Primary navigation links (desktop) */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive =
              currentRoute === item.route ||
              (item.route === '/apartments' && currentRoute === '/apartment');
            return (
              <a
                key={item.route}
                href={item.route}
                onClick={(e) => handleLinkClick(e, item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm font-bold whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
                  isActive
                    ? 'text-[#2563EB] border-[#F5CC4C]'
                    : 'text-[#1E56A0] border-transparent hover:text-[#2563EB] hover:border-[#F5CC4C]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[42px] px-4 py-2 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-sm font-bold transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span>{t.nav.bookWhatsapp}</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1E56A0] hover:bg-white/70 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#F5FAFF] border-t border-[#BFDBFE] px-4 py-4 space-y-2"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                currentRoute === item.route ||
                (item.route === '/apartments' && currentRoute === '/apartment');
              return (
                <a
                  key={item.route}
                  href={item.route}
                  onClick={(e) => handleLinkClick(e, item.route)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] px-3 py-2.5 rounded-lg text-base font-bold flex items-center transition-colors ${
                    isActive
                      ? 'bg-[#DBEAFE] text-[#2563EB]'
                      : 'text-[#1E56A0] hover:bg-white hover:text-[#2563EB]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-[#DBEAFE]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F5CC4C] hover:bg-[#EAC03B] text-[#1E4D8C] text-base font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>{t.nav.bookWhatsapp}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
