'use client';

import { useLanguage, Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string }[] = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center bg-zinc-800/50 rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={cn(
            'px-2.5 py-1 text-xs font-medium rounded-md transition-all',
            locale === lang.code
              ? 'bg-zinc-700 text-white'
              : 'text-zinc-400 hover:text-white'
          )}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
