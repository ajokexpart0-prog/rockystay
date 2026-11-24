/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { getApartmentById, SITE_CONFIG } from './data/apartments';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AppRoute, Header } from './components/Header';
import { LanguageBar } from './components/LanguageBar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ApartmentsPage } from './pages/ApartmentsPage';
import { ApartmentDetailsPage } from './pages/ApartmentDetailsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function parseLocation(): { route: AppRoute; query: string } {
  const pathname = window.location.pathname.toLowerCase();
  const query = window.location.search;

  if (pathname === '/apartments' || pathname === '/apartments/') {
    return { route: '/apartments', query };
  }
  if (
    pathname === '/apartment' ||
    pathname === '/apartment/' ||
    pathname === '/apartment.html'
  ) {
    return { route: '/apartment', query };
  }
  if (pathname === '/about' || pathname === '/about/') {
    return { route: '/about', query };
  }
  if (pathname === '/contact' || pathname === '/contact/') {
    return { route: '/contact', query };
  }
  return { route: '/', query };
}

function AppShell() {
  const { t } = useLanguage();
  const [locationState, setLocationState] = useState(parseLocation);

  useEffect(() => {
    const onPopState = () => {
      setLocationState(parseLocation());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const { route, query } = locationState;
    if (route === '/') {
      document.title = 'RockyStay Suites | Short-Let Apartments in Tanke, Ilorin';
    } else if (route === '/apartments') {
      document.title = `Apartments | ${SITE_CONFIG.brandName}`;
    } else if (route === '/apartment') {
      const idParam = new URLSearchParams(query).get('id');
      const apt = getApartmentById(idParam);
      document.title = apt
        ? `${apt.name} | ${SITE_CONFIG.brandName}`
        : `Apartment Details | ${SITE_CONFIG.brandName}`;
    } else if (route === '/about') {
      document.title = `About Us | ${SITE_CONFIG.brandName}`;
    } else if (route === '/contact') {
      document.title = `Contact & FAQs | ${SITE_CONFIG.brandName}`;
    }
  }, [locationState]);

  const navigate = (path: string) => {
    const [, hash] = path.split('#');
    window.history.pushState({}, '', path);
    setLocationState(parseLocation());
    if (hash) {
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-white text-[#334155]">
      {/* Subtle bright property background layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/src/assets/images/suite_living_blue_gold_1795547023772.jpg')",
        }}
      />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#F5CC4C] focus:text-[#1E4D8C] focus:font-bold"
      >
        {t.nav.skipToContent}
      </a>

      <Header currentRoute={locationState.route} onNavigate={navigate} />
      <LanguageBar />

      <main id="main-content" className="relative z-10 flex-1">
        {locationState.route === '/' && <HomePage onNavigate={navigate} />}
        {locationState.route === '/apartments' && (
          <ApartmentsPage onNavigate={navigate} queryString={locationState.query} />
        )}
        {locationState.route === '/apartment' && (
          <ApartmentDetailsPage
            onNavigate={navigate}
            queryString={locationState.query}
          />
        )}
        {locationState.route === '/about' && <AboutPage onNavigate={navigate} />}
        {locationState.route === '/contact' && <ContactPage />}
      </main>

      <Footer onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}
