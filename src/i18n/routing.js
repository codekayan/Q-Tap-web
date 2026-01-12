import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localeDetection: false,
  localePrefix: 'always' // <-- Important to enable redirect to /en
});