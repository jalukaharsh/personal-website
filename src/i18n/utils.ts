import { ui } from './ui';

export type Locale = keyof typeof ui;
export const defaultLocale: Locale = 'en';
export const locales = Object.keys(ui) as Locale[];

export function t(locale: Locale, key: keyof (typeof ui)['en']): string {
  return ui[locale]?.[key] ?? ui[defaultLocale][key];
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Locale;
  return defaultLocale;
}

/**
 * Returns the date locale string for Intl formatting.
 */
export function getDateLocale(locale: Locale): string {
  const dateLocales: Record<Locale, string> = {
    en: 'en-IN',
  };
  return dateLocales[locale] ?? 'en-IN';
}
