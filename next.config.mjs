// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();  // or './i18n.ts'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // other options
  turbopack: {
    // في بيئة ES Module لا يوجد __dirname، نستخدم process.cwd()
    root: process.cwd()
  }
};

export default withNextIntl(nextConfig);