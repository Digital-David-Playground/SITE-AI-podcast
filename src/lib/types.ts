// Localized string type for content that needs translation
export interface LocalizedString {
  de: string;
  en: string;
}

export interface Chapter {
  title: LocalizedString;
  timestamp: number; // seconds
}

export interface Episode {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  wistiaId: string;
  thumbnail: string;
  duration: number; // seconds
  publishedAt: string; // ISO date
  hosts: string[]; // host IDs
  topics: string[]; // topic slugs
  chapters?: Chapter[];
  featured?: boolean;
}

export interface Company {
  name: string;
  role: LocalizedString;
  logo: string;
  url: string;
  description: LocalizedString;
}

export interface Host {
  id: string;
  slug: string;
  name: string;
  title: LocalizedString;
  bio: LocalizedString;
  shortBio: LocalizedString;
  image: string;
  companies: Company[];
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface Topic {
  id: string;
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
}

export interface LiveEvent {
  id: string;
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  date: string; // ISO date
  time: string;
  timezone: string;
  registrationUrl?: string;
  recordingWistiaId?: string;
  status: 'upcoming' | 'live' | 'past';
}

// Helper type to get localized value
export type Locale = 'de' | 'en';

// Utility function to get localized string
export function getLocalized(str: LocalizedString, locale: Locale): string {
  return str[locale];
}
