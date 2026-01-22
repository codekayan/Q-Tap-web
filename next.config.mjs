// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  images: {
    domains: ['localhost', 'cdnjs.cloudflare.com'],
    unoptimized: true,
  },
  
  reactStrictMode: true,
  compress: true,
};

export default withNextIntl(nextConfig);
