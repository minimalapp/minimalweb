// i18n utility functions for Astro
// Type-safe translation system

export type Locale = 'en' | 'es';

export interface Translation {
  [key: string]: string | Translation | string[];
}

export interface Translations {
  en: Translation;
  es: Translation;
}

/**
 * Get nested translation value by dot notation key
 * @param locale - The locale to use
 * @param key - Dot notation key (e.g., 'hero.title')
 * @param translations - Translation object
 * @returns Translation string or undefined
 */
export function t(locale: Locale, key: string, translations: Translations): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}

/**
 * Get locale from URL pathname
 * @param pathname - URL pathname
 * @returns Locale ('en' or 'es')
 */
export function getLocaleFromUrl(pathname: string): Locale {
  const localeMatch = pathname.match(/^\/(en|es)\//);
  return localeMatch ? (localeMatch[1] as Locale) : 'en';
}

/**
 * Get translated path for switching languages
 * @param currentPath - Current pathname
 * @param newLocale - Target locale
 * @returns New pathname with locale
 */
export function getTranslatedPath(currentPath: string, newLocale: Locale): string {
  // Remove current locale from path
  const pathWithoutLocale = currentPath.replace(/^\/(en|es)\//, '/');

  // Add new locale (don't prefix default 'en')
  if (newLocale === 'en') {
    return pathWithoutLocale;
  } else {
    return `/${newLocale}${pathWithoutLocale}`;
  }
}

/**
 * Detect browser language
 * @returns Detected locale
 */
export function detectBrowserLanguage(): Locale {
  if (typeof navigator === 'undefined') return 'en';

  const browserLang = navigator.language || (navigator as any).userLanguage;

  if (browserLang && browserLang.toLowerCase().startsWith('es')) {
    return 'es';
  }

  return 'en';
}
