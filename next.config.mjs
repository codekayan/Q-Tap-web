// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // إزالة swcMinify لأنه تلقائي في Next.js 15
  // إزالة turbopack من المستوى الأعلى
  
  images: {
    domains: ['localhost'],
    unoptimized: true, // REQUIRED: Server CPU doesn't support sharp
  },
  
  reactStrictMode: true,
  
  // compiler options بدلاً من swcMinify
  compiler: {
    // removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // إعدادات تجريبية (اختياري)
  experimental: {
    // turbo: {} // فقط إذا كنت تستخدم turbopack
  },
  
  // لتحسين الأداء
  compress: true,
};

export default withNextIntl(nextConfig);