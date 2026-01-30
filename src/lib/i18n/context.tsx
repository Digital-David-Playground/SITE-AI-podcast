'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale, TranslationKeys } from './translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'preferred-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('de');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && (stored === 'de' || stored === 'en')) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  const t = translations[locale];

  // Prevent hydration mismatch by rendering with default locale until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ locale: 'de', setLocale, t: translations.de }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper hook for getting localized content from data
export function useLocalized() {
  const { locale } = useLanguage();

  return function localize<T extends { de: string; en: string }>(localizedString: T): string {
    return localizedString[locale];
  };
}
